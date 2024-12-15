# VioletRollergirl.com

A website for Vi, based on [Photography](https://github.com/rampatra/photography).

## Batch resizing images to thumbnails

1. Ensure you have [GraphicsMagick](http://www.graphicsmagick.org/) installed. On macOS, with Homebrew:
    ```shell
    brew install graphicsmagick
    ```
1. Drop your full size images into [the `images/fulls` directory](images/fulls).
1. Run the following shell snippet:
    ```shell
    for file in $(ls images/fulls); do
        gm convert -resize 512 images/fulls/$file images/thumbs/$file
    done
    ```
