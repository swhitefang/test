#!/bin/bash

# Script to create placeholder icon files for the Chrome extension
# You can replace these with actual designed icons later

echo "Creating placeholder icon files..."

# Create a simple SVG that we can convert to PNG
cat > icons/icon.svg << 'EOF'
<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
  <rect width="128" height="128" fill="#1a73e8" rx="20"/>
  <text x="64" y="45" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Akamai</text>
  <text x="64" y="65" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14">Debug</text>
  <text x="64" y="85" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14">Headers</text>
  <rect x="20" y="95" width="88" height="8" fill="#4CAF50" rx="4"/>
</svg>
EOF

# Create disabled version
cat > icons/icon-disabled.svg << 'EOF'
<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
  <rect width="128" height="128" fill="#666666" rx="20"/>
  <text x="64" y="45" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="16" font-weight="bold">Akamai</text>
  <text x="64" y="65" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14">Debug</text>
  <text x="64" y="85" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="14">Headers</text>
  <rect x="20" y="95" width="88" height="8" fill="#F44336" rx="4"/>
</svg>
EOF

echo "SVG files created. To convert to PNG, you can:"
echo "1. Use an online SVG to PNG converter"
echo "2. Use ImageMagick: convert icon.svg -resize 16x16 icon16.png"
echo "3. Use any image editor that supports SVG"
echo ""
echo "Required PNG files:"
echo "- icons/icon16.png (16x16)"
echo "- icons/icon32.png (32x32)"  
echo "- icons/icon48.png (48x48)"
echo "- icons/icon128.png (128x128)"
echo "- icons/icon32-disabled.png (32x32, for disabled state)"

# If ImageMagick is available, try to convert automatically
if command -v convert >/dev/null 2>&1; then
    echo ""
    echo "ImageMagick found! Converting SVG to PNG files..."
    
    convert icons/icon.svg -resize 16x16 icons/icon16.png
    convert icons/icon.svg -resize 32x32 icons/icon32.png
    convert icons/icon.svg -resize 48x48 icons/icon48.png
    convert icons/icon.svg -resize 128x128 icons/icon128.png
    convert icons/icon-disabled.svg -resize 32x32 icons/icon32-disabled.png
    
    echo "PNG files created successfully!"
else
    echo ""
    echo "ImageMagick not found. Please manually convert the SVG files to PNG."
    echo "You can install ImageMagick with: brew install imagemagick"
fi
