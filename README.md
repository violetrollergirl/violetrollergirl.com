# VioletRollergirl.com

A website for Vi, based on [Photography](https://github.com/rampatra/photography).

## Batch resizing images to thumbnails

1. Ensure you have [GraphicsMagick](http://www.graphicsmagick.org/) installed. On macOS, with Homebrew:
    ```shell
    brew install graphicsmagick
    ```
1. Drop your full size images into [the `images/gallery/fulls` directory](images/gallery/fulls).
1. Run the following shell snippet:
    ```shell
    for file in $(ls images/gallery/fulls); do
        gm convert -resize 512 images/gallery/fulls/$file images/gallery/thumbs/$file
    done
    ```

## Mirroring to an Onion site

To mirror this site to an Onion domain, use GNU `wget`:

```shell
wget --mirror --page-requisites\
  --convert-links \
  --domains=violetrollergirl.com,SOMEONION.onion \
  https://violetrollergirl.com
```

The `--domain` spanning in combination with `--convert-links` makes `wget` treat both domains as equivalent, allowing links to be converted into relative paths correctly.

This will unfortunately not handle `<script>location=` redirections. Working on it....
