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

To mirror this site to an Onion domain, use the following short script that makes use of GNU `wget` and basic shell utilities:

```shell
#!/bin/sh
# Define domain equivalents.
clearnet_domain="violetrollergirl.com"
toronion_domain="7leifmsll6syh3fdnx2wlyfg6e7hfvi4xt2l5hafovtm4gqtqosudbyd.onion"

# Use GNU wget to download a static mirror.
wget --quiet --mirror --page-requisites\
  --convert-links \
  --domains=${clearnet_domain},${toronion_domain} \
  https://${clearnet_domain}

# Most rewrites are handled by the `--convert-links` long option,
# but some JavaScript redirects are not. We handle them ourselves.
files_to_rewrite="$(grep -r "<script>location=\"https://${clearnet_domain}" ${clearnet_domain}/* \
    | cut -d ':' -f 1 | sort | uniq)"
sed -i \
    -e "s/<script>location=\"https:\/\/${clearnet_domain}/<script>location=\"/" \
    ${files_to_rewrite}
```

The `--domains` option  makes `wget` treat both domains as equivalent, allowing `--convert-links` to treat both domains as the same relative path correctly. This will unfortunately not handle `<script>location=` redirections, which are created by the `redirect_to` directive implemented by Jekyll's `jekyll-redirect-from` plugin.

This script is suitable for running periodically, such as by placing it inside an executable file in any of the `/etc/periodic/*` directories configured for a `cron` daemon to run.
