# Quick Installation Guide

## Step 1: Load the Extension in Chrome

1. Open Google Chrome
2. Navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top right corner)
4. Click "Load unpacked"
5. Select the `/Users/sstef19/projects/chrome-plugin-akamai` folder
6. The extension should now appear in your extensions list

## Step 2: Pin the Extension (Optional)

1. Click the puzzle piece icon in Chrome's toolbar
2. Find "Akamai Debug Headers" in the list
3. Click the pin icon to pin it to your toolbar for easy access

## Step 3: Using the Extension

1. Click the Akamai Debug Headers icon in your toolbar
2. Toggle the "Enable Debug Headers" switch to ON
3. The icon badge will show "ON" when active
4. All outgoing HTTP requests will now include the Akamai Pragma header

## Step 4: Verify It's Working

1. Open Chrome DevTools (F12)
2. Go to the Network tab
3. Visit any website or open the included `test.html` file
4. Look for requests in the Network tab
5. Click on any request and check the "Request Headers" section
6. You should see: `Pragma: akamai-x-cache-on,akamai-x-cache-remote-on,akamai-x-check-cacheable,akamai-x-get-cache-key,akamai-x-get-true-cache-key,akamai-x-get-extracted-values,akamai-x-get-request-id,akamai-x-get-client-ip,akamai-x-feo-trace,akamai-x-feo-state,akamai-x-extension-on`

## Testing

You can use the included `test.html` file to verify the extension is working:

1. Open `test.html` in Chrome
2. Enable the extension
3. Click the test buttons on the page
4. Check the Network tab in DevTools to see the headers

## Troubleshooting

- **Extension not appearing**: Make sure you selected the correct folder and Developer mode is enabled
- **Headers not showing**: Make sure the extension is enabled (toggle should be ON and badge should show "ON")
- **Icon not showing properly**: The PNG files should have been generated automatically. If not, you may need to create them manually from the SVG files in the icons folder
