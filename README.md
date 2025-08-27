# Akamai Debug Headers Chrome Extension

A Chrome Browser extension that adds Akamai debug headers to all outgoing HTTP requests.

## Features

- **Toggle Control**: Easy on/off toggle via extension popup
- **Visual Feedback**: Icon and badge show current status
- **Persistent State**: Remembers enabled/disabled state across browser sessions
- **All Request Types**: Adds headers to all HTTP requests (main frames, XHR, images, scripts, etc.)

## Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select this extension directory
4. The Akamai Debug Headers extension should now appear in your extensions

## Usage

1. Click the extension icon in the Chrome toolbar
2. Toggle the "Enable Debug Headers" switch
3. When enabled, all outgoing requests will include the Akamai Pragma header
4. The extension icon will show whether it's currently active

## Headers Added

When enabled, the extension adds the following header to all outgoing requests:

**Header Name:** `Pragma`

**Header Value:** 
```
akamai-x-cache-on,akamai-x-cache-remote-on,akamai-x-check-cacheable,akamai-x-get-cache-key,akamai-x-get-true-cache-key,akamai-x-get-extracted-values,akamai-x-get-request-id,akamai-x-get-client-ip,akamai-x-feo-trace,akamai-x-feo-state,akamai-x-extension-on
```

## Technical Details

- Uses Chrome Extension Manifest V3
- Leverages `declarativeNetRequest` API for efficient header modification
- Service worker handles background operations
- Popup provides user interface for toggling functionality

## Files

- `manifest.json` - Extension configuration
- `background.js` - Service worker handling header injection
- `popup.html` - Extension popup interface
- `popup.js` - Popup functionality
- `icons/` - Extension icons (you'll need to add actual icon files)

## Development

This extension is built using Chrome Extension Manifest V3 standards and modern web technologies.

## Note on Icons

The extension references icon files that you'll need to create:
- `icons/icon16.png` (16x16 pixels)
- `icons/icon32.png` (32x32 pixels) 
- `icons/icon48.png` (48x48 pixels)
- `icons/icon128.png` (128x128 pixels)
- `icons/icon32-disabled.png` (32x32 pixels, for disabled state)

You can create these using any image editor, or use online tools to generate Chrome extension icons.
