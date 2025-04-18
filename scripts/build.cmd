@echo off

IF EXIST "remoteOptimizedImages.js" (
    del /f "remoteOptimizedImages.js"
)

next build && next-image-export-optimizer