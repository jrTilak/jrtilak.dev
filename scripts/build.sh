#!/bin/bash
# Remove remoteOptimizedImages.js if it exists
if [ -f "remoteOptimizedImages.js" ]; then    rm remoteOptimizedImages.js
fi
# Run build commands
next build && next-image-export-optimizer





