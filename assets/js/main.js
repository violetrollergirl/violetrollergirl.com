/*
 Multiverse by HTML5 UP
 html5up.net | @ajlkn
 Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

 Added EXIF data and enhanced for Jekyll by Ram Patra
 */

(function ($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#wrapper');

        // Hack: Enable IE workarounds.
        if (skel.vars.IEVersion < 12)
            $body.addClass('ie');

        // Touch?
        if (skel.vars.mobile)
            $body.addClass('touch');

        // Transitions supported?
        if (skel.canUse('transition')) {

            // Add (and later, on load, remove) "loading" class.
            $body.addClass('loading');

            $window.on('load', function () {
                window.setTimeout(function () {
                    $body.removeClass('loading');
                }, 100);
            });

            // Ensure panels are also "permalinks" in a way.
            $window.on('load', function () {
                var fragment = window.location.hash;
                switch (fragment) {
                    case '#gallery':
                        $('.closer').click(); // Close all Panels.
                        break;
                    case '#about':
                    case '#contact':
                    case '#links':
                    case '#rates':
                    case '#tours':
                        $(fragment).triggerHandler('---toggle');
                        break;
                    default:
                        // Show my "About" page by default.
                        $('#about').triggerHandler('---toggle');
                        break;
                }
            });

            $window.on('hashchange', function () {
                switch ( window.location.hash ) {
                    case '#gallery':
                        $('.closer').click(); // Close all Panels.
                        break;
                    default:
                        $(window.location.hash).triggerHandler('---show');
                        break;
                }
            });

            // Prevent transitions/animations on resize.
            var resizeTimeout;

            $window.on('resize', function () {

                window.clearTimeout(resizeTimeout);

                $body.addClass('resizing');

                resizeTimeout = window.setTimeout(function () {
                    $body.removeClass('resizing');
                }, 100);

            });

        }

        // Scroll back to top.
        $window.scrollTop(0);

        // Fix: Placeholder polyfill.
        $('form').placeholder();

        // Links from Rates page auto-populate some fields in the booking form.
        $('a[data-booking-inquiry-prospect-duration]').on('click', function (e) {
            $('#booking-inquiry-prospect-duration').val(
                $(this).data('booking-inquiry-prospect-duration')
            );
        });

        // Booking form.
        $('#booking-inquiry-form').on('submit reset', function (e) {
            e.preventDefault();
            formData = $(this).serializeArray();
            var inquiryData = formData.reduce(function (accumulator, currentValue) {
                accumulator[currentValue.name] = currentValue.value;
                return accumulator;
            }, {} );
            var templateText = `Hi Violet,

Please allow me to introduce myself. My name is ${inquiryData.booking_inquiry_prospect_name}. I have read your screening requirements and am comfortable being screened by sending you ${inquiryData.booking_inquiry_prospect_preferred_screening_method}.

I've been drawn to you since I found your website via ${inquiryData.booking_inquiry_prospect_source_referral}. I really like your ${inquiryData.booking_inquiry_prospect_attraction}

I'm ready to plan a date! May I reserve an ${inquiryData.booking_inquiry_prospect_call_type} for a duration of ${inquiryData.booking_inquiry_prospect_duration} hours when I will be in ${inquiryData.booking_inquiry_prospect_location} on ${new Date(inquiryData.booking_inquiry_prospect_preferred_datetime)}, or alternatively, on ${new Date(inquiryData.booking_inquiry_prospect_alternate_datetime)}. Would either of these options allow us to meet?

I'm excited to hear from you!

Sincerely,
-${inquiryData.booking_inquiry_prospect_name}`;

            // If the user just wants to copy to clipboard...
            if ( 'reset' === e.type ) {
                try {
                    navigator.clipboard.writeText(templateText);
                    $(this)
                        .find('button[type="reset"]')
                        .text('Copied! (Click to copy again.)');
                } catch (err) {
                    console.error(err);
                }
                // ...end processing, don't rewrite links.
                return false;
            }

            var method = inquiryData.booking_inquiry_prospect_preferred_contact_method;
            var el     = $('#' + method + '-contact-link');
            var oldUrl = el.attr('href'); // Read hyperlink.
            var url    = new URL(oldUrl);
            switch ( method ) {
                case 'whatsapp':
                    url.searchParams.set('text', templateText);
                    break;
                case 'sms':
                    url.searchParams.set('body', templateText);
        break;
                case 'email':
                    // Avoid dealing with URLSearchParams interface
                    // because of encoding complexness.
                    url.search = `?subject=Booking%20inquiry%20from%20${inquiryData.booking_inquiry_prospect_name}&body=${encodeURIComponent(templateText)}`;
                    break;
                default:
                    break;
            }
            console.log(url.toString());
            el.attr('href', url.toString()); // Rewrite hyperlink.
            el[0].click(); // Click DOM element, not jQuery object.
            el.attr('href', oldUrl); // Restore original.
        });

        // Panels.
        var $panels = $('.panel');

        $panels.each(function () {

            var $this = $(this),
                $toggles = $('[href="#' + $this.attr('id') + '"]'),
                $closer = $('<div class="closer" />').appendTo($this);

            // Closer.
            $closer
                .on('click', function (event) {
                    $this.trigger('---hide');
                });

            // Events.
            $this
                .on('click', function (event) {
                    event.stopPropagation();
                })
                .on('---toggle', function () {

                    if ($this.hasClass('active'))
                        $this.triggerHandler('---hide');
                    else
                        $this.triggerHandler('---show');

                })
                .on('---show', function () {

                    // Hide other content.
                    if ($body.hasClass('content-active'))
                        $panels.trigger('---hide');

                    // Activate content, toggles.
                    $this.addClass('active');
                    $toggles.addClass('active');

                    // Activate body.
                    $body.addClass('content-active');

                    // Change location fragment.
                    window.location.hash = '#' + $this.attr('id');

                })
                .on('---hide', function () {

                    // Deactivate content, toggles.
                    $this.removeClass('active');
                    $toggles.removeClass('active');

                    // Deactivate body.
                    $body.removeClass('content-active');

                });

            // Toggles.
            $toggles
                .removeAttr('href')
                .css('cursor', 'pointer')
                .on('click', function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    $this.trigger('---toggle');

                });

        });

        // Global events.
        $body
            .on('click', function (event) {

                if ($body.hasClass('content-active')) {

                    event.preventDefault();
                    event.stopPropagation();

                    $panels.trigger('---hide');

                }

            });

        $window
            .on('keyup', function (event) {

                if (event.keyCode == 27
                    && $body.hasClass('content-active')) {

                    event.preventDefault();
                    event.stopPropagation();

                    $panels.trigger('---hide');

                }

            });

        // Header.
        var $header = $('#header');

        // Links.
        $header.find('a').each(function () {

            var $this = $(this),
                href = $this.attr('href');

            // Internal link? Skip.
            if (!href
                || href.charAt(0) == '#')
                return;

            // Redirect on click.
            $this
                .removeAttr('href')
                .css('cursor', 'pointer')
                .on('click', function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    window.location.href = href;

                });

        });

        // Footer.
        var $footer = $('#footer');

        // Copyright.
        // This basically just moves the copyright line to the end of the *last* sibling of its current parent
        // when the "medium" breakpoint activates, and moves it back when it deactivates.
        $footer.find('.copyright').each(function () {

            var $this = $(this),
                $parent = $this.parent(),
                $lastParent = $parent.parent().children().last();

            skel
                .on('+medium', function () {
                    $this.appendTo($lastParent);
                })
                .on('-medium', function () {
                    $this.appendTo($parent);
                });

        });

        // Main.
        var $main = $('#main'),
            exifDatas = {};

        // Thumbs.
        $main.children('.thumb').each(function () {

            var $this = $(this),
                $image = $this.find('.image'), $image_img = $image.children('img'),
                x;

            // No image? Bail.
            if ($image.length == 0)
                return;

            // Image.
            // This sets the background of the "image" <span> to the image pointed to by its child
            // <img> (which is then hidden). Gives us way more flexibility.

            // Set background.
            $image.css('background-image', 'url(' + $image_img.attr('src') + ')');

            // Set background position.
            if (x = $image_img.data('position'))
                $image.css('background-position', x);

            // Hide original img.
            $image_img.hide();

            // Hack: IE<11 doesn't support pointer-events, which means clicks to our image never
            // land as they're blocked by the thumbnail's caption overlay gradient. This just forces
            // the click through to the image.
            if (skel.vars.IEVersion < 11)
                $this
                    .css('cursor', 'pointer')
                    .on('click', function () {
                        $image.trigger('click');
                    });

            // EXIF data
            $image_img[0].addEventListener("load", function() {
                EXIF.getData($image_img[0], function () {
                    exifDatas[$image_img.data('name')] = getExifDataMarkup(this);
                });
            });

        });

        // Poptrox.
        $main.poptrox({
            baseZIndex: 20000,
            caption: function ($a) {
                var $image_img = $a.children('img');
                var data = exifDatas[$image_img.data('name')];
                if (data === undefined) {
                    // EXIF data					
                    EXIF.getData($image_img[0], function () {
                        data = exifDatas[$image_img.data('name')] = getExifDataMarkup(this);
                    });
                }
                return data !== undefined ? '<p>' + data + '</p>' : ' ';
            },
            fadeSpeed: 300,
            onPopupClose: function () {
                $body.removeClass('modal-active');
            },
            onPopupOpen: function () {
                $body.addClass('modal-active');
            },
            overlayOpacity: 0,
            popupCloserText: '',
            popupHeight: 150,
            popupLoaderText: '',
            popupSpeed: 300,
            popupWidth: 150,
            selector: '.thumb > a.image',
            usePopupCaption: true,
            usePopupCloser: true,
            usePopupDefaultStyling: false,
            usePopupForceClose: true,
            usePopupLoader: true,
            usePopupNav: true,
            windowMargin: 50
        });

        // Hack: Set margins to 0 when 'xsmall' activates.
        skel
            .on('-xsmall', function () {
                $main[0]._poptrox.windowMargin = 50;
            })
            .on('+xsmall', function () {
                $main[0]._poptrox.windowMargin = 0;
            });

        function getExifDataMarkup(img) {
            var exif = $('#main').data('exif');
            var template = '';
            for (var current in exif) {
                var current_data = exif[current];
                var exif_data = EXIF.getTag(img, current_data['tag']);
                if (typeof exif_data !== "undefined") {
                    template += '<i class="fa fa-' + current_data['icon'] + '" aria-hidden="true"></i> ' + exif_data + '&nbsp;&nbsp;';
                }
            }
            return template;
        }

    });

})(jQuery);
