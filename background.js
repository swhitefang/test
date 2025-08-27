// Background service worker for Akamai Debug Headers extension
let isEnabled = false;
const RULE_ID = 1;

// Header value for Akamai debug
const AKAMAI_PRAGMA_VALUE = 'akamai-x-cache-on,akamai-x-cache-remote-on,akamai-x-check-cacheable,akamai-x-get-cache-key,akamai-x-get-true-cache-key,akamai-x-get-extracted-values,akamai-x-get-request-id,akamai-x-get-client-ip,akamai-x-feo-trace,akamai-x-feo-state,akamai-x-extension-on';

// Initialize extension state
chrome.runtime.onInstalled.addListener(async () => {
  // Load saved state
  const result = await chrome.storage.sync.get(['akamaiDebugEnabled']);
  isEnabled = result.akamaiDebugEnabled || false;
  
  // Update icon and rules based on saved state
  updateExtensionState();
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggle') {
    isEnabled = !isEnabled;
    updateExtensionState();
    sendResponse({ enabled: isEnabled });
  } else if (request.action === 'getState') {
    sendResponse({ enabled: isEnabled });
  }
});

async function updateExtensionState() {
  // Save state
  await chrome.storage.sync.set({ akamaiDebugEnabled: isEnabled });
  
  // Update icon
  const iconPath = isEnabled ? 'icons/icon32.png' : 'icons/icon32-disabled.png';
  chrome.action.setIcon({ path: iconPath });
  
  // Update badge
  chrome.action.setBadgeText({ 
    text: isEnabled ? 'ON' : 'OFF' 
  });
  chrome.action.setBadgeBackgroundColor({ 
    color: isEnabled ? '#4CAF50' : '#F44336' 
  });
  
  // Update declarative net request rules
  if (isEnabled) {
    await enableHeaderRule();
  } else {
    await disableHeaderRule();
  }
}

async function enableHeaderRule() {
  const rule = {
    id: RULE_ID,
    priority: 1,
    action: {
      type: 'modifyHeaders',
      requestHeaders: [
        {
          header: 'Pragma',
          operation: 'set',
          value: AKAMAI_PRAGMA_VALUE
        }
      ]
    },
    condition: {
      resourceTypes: [
        'main_frame',
        'sub_frame', 
        'xmlhttprequest',
        'image',
        'media',
        'font',
        'script',
        'stylesheet',
        'object',
        'other'
      ]
    }
  };

  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [rule],
      removeRuleIds: [RULE_ID]
    });
    console.log('Akamai debug headers enabled');
  } catch (error) {
    console.error('Failed to enable header rule:', error);
  }
}

async function disableHeaderRule() {
  try {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [RULE_ID]
    });
    console.log('Akamai debug headers disabled');
  } catch (error) {
    console.error('Failed to disable header rule:', error);
  }
}
