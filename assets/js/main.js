---
layout: none
---
/*
 Multiverse by HTML5 UP
 html5up.net | @ajlkn
 Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

 Enhanced for Jekyll by Ram Patra
 */

(function ($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    // This is equivalent to 'DOMContentLoaded' event.
    $(function () {

        // Randomize the order of gallery images.
        var gallery_container = $('#gallery');
        var gallery_thumbs = gallery_container.children().get();
        gallery_thumbs.sort(function () {
            return Math.random() - 0.5;
        });
        $(gallery_thumbs).detach().appendTo(gallery_container);

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

            // Ensure panels are also "permalinks" navigable through
            // matching against the URI's fragment identifier.
            $window.on('load', function () {
                var fragment = window.location.hash;
                var el       = document.getElementById(fragment.slice(1));
                // If the page is loaded with the Gallery,
                // just close all the panels.
                if ( '#gallery' == fragment ) {
                    $('.closer').click(); // Close all Panels.
                } else {
                    if ( 1 === $(`${fragment}.panel`).length ) {
                        // First, check if the loaded fragment
                        // matches an ID of a Panel. We'll just
                        // open it in that case.
                        $(fragment).triggerHandler('---toggle');
                    } else if ( el ) {
                        // Otherwise, if the fragment matches an
                        // element's ID at all find the Panel it is in.
                        var p = el.closest('.panel');
                        // Then, open that panel first.
                        $(p).triggerHandler('---toggle');
                        // Then return to the original fragment.
                        window.location.hash = fragment;
                    } else {
                        // If none of the above matches, then just
                        // show my Gallery, which closes all panels.
                        // This also ensures text fragments still work.
                        $('#gallery').triggerHandler('---toggle');
                    }
                }

            });

            // Handle hash changes like permalinks.
            $window.on('hashchange', function (event) {

                // Special case for the Gallery "page."
                if ( '#gallery' === window.location.hash ) {
                    $('.closer').click(); // Close all Panels.
                    return;
                }

                var fragment = window.location.hash.slice(1);
                var targetEl = document.getElementById(fragment);

                // If the targeted element doesn't exist...
                if ( ! targetEl ) {
                    // ...we can just stop now.
                    return;
                }

                // Figure out if we need to change Panels.
                var oldPanel, newPanel;
                var oldHash = new URL(event.originalEvent.oldURL).hash;
                var newHash = new URL(event.originalEvent.newURL).hash;

                // If the new hash is a Panel, we need to `show` it.
                if ( $(newHash).hasClass('panel') ) {
                    $(newHash).triggerHandler('---show');
                    $(newHash).scrollTop(0);
                    return;
                }

                // If the old hash is a Panel, we just note it.
                if ( $(oldHash).hasClass('panel') ) {
                    oldPanel = $(oldHash)[0];
                } else {
                    oldPanel = $(oldHash).parents('.panel')[0];
                }

                // In which Panel is the new hash?
                newPanel = $(newHash).parents('.panel')[0];

                // Change visible Panels, if needed.
                if ( oldPanel && newPanel && oldPanel !== newPanel ) {
                    $(newPanel).triggerHandler('---toggle');
                }

                $(newHash).scrollTop(0); // Display target.

            });

            $window.on('load hashchange', function (event) {
                // Open menu details when permalinked to them.
                if (window.location.hash.startsWith('#rate-')) {
                    var el = document.getElementById(window.location.hash.substring(1));
                    if (el) {
                        el.querySelector('details').open = true;
                    }
                }

                // Open testimonial when permalinked to it.
                if (document.querySelector('details[name=testimonial-details]')) {
                    var el = document.getElementById(`testimonial-${window.location.hash.substring(1)}`);
                    if (el) {
                        el.open = true;
                    }
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
        $('a.booking-link').on('click', function (e) {
            $('#booking-inquiry-prospect-preferred-screening-method').val(
                $(this).data('booking-inquiry-prospect-preferred-screening-method')
            );
            $('#booking-inquiry-prospect-booking-type').val(
                $(this).data('booking-inquiry-prospect-booking-type')
            );
            $('#booking-inquiry-prospect-service-type').val(
                $(this).data('booking-inquiry-prospect-service-type')
            );
            $('#booking-inquiry-prospect-duration').val(
                $(this).data('booking-inquiry-prospect-duration')
            );
            $('#booking-inquiry-prospect-location').val(
                $(this).data('booking-inquiry-prospect-location')
            );
        });

        // Booking form.
        $('#booking-inquiry-form').on('change', function (e) {
            switch ( e.target.id ) {

                // When the screening method is changed...
                case 'booking-inquiry-prospect-preferred-screening-method':

                    switch ( e.target.value ) {
                        case 'a video vibe check':
                            $('#booking-inquiry-prospect-booking-type')
                                .val('a video vibe check');
                            // TODO: I should disable any other
                            // booking type when this is selected.

                            break;
                        case 'a deposit for a social date at a public venue':
                            $('#booking-inquiry-prospect-booking-type')
                                .val('a social-only date');
                            break;
                        default:
                            break;
                    }

                    break;
                default:
                    break

            }
        });

        // Show and hide the various contact method helper texts.
        $('#booking-inquiry-prospect-preferred-contact-method').on('change', function (e) {

            // Hide them all. 
            $('#contact-method-reliability-warning').hide();
            $('#contact-method-xmpp-primer').hide();
            $('#contact-method-email-public-key').hide();
            $('#contact-method-signal-discount').hide() && $('#contact-method-step-3').hide();

            // Show the one that was selected.
            switch (this.value) {
                case 'sms':
                    $('#contact-method-reliability-warning').show();
                    break;
                case 'email':
                    $('#contact-method-email-public-key').show();
                    break;
                case 'signal':
                    $('#contact-method-signal-discount').show() && $('#contact-method-step-3').show();
                    break;
                case 'xmpp':
                    $('#contact-method-xmpp-primer').show();
                    break;
            }
        });

        // Form help text and any `.panel-closer-link`
        // should also close the Contact panel.
        document.querySelectorAll('#booking-inquiry-form small.form-text a.closer, .panel-closer-link').forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.target.closest('section.panel').querySelector('div.closer').click();
            });
        });

        document.querySelector('#booking-inquiry-form')?.addEventListener('input', function (e) {
            var submitButton = document.getElementById('booking-inquiry-send-button');
            submitButton.textContent = ( e.currentTarget.checkValidity() )
                ? "2. Send inquiry"
                : "2. Check fields";
        });

        document.querySelector('#booking-inquiry-copy-button')?.addEventListener('click', function (e) {
            this.innerText = 'Copied!';
        });

        // Panels.
        var $panels = $('.panel');

        $panels.each(function () {

            var $this = $(this),
                $toggles = $('[href="#' + $this.attr('id') + '"]'),
                $closer = $('<div class="closer" />').appendTo($this);

            // Closer.
            $closer
                .on('click', function ( event ) {
                    $this.trigger('---hide');
                    window.history.pushState({}, '', window.location.href.toString().replace(/#.*/, ''));
                });

            // Events.
            $this
                .on('click', function (event) {
                    event.stopPropagation();
                })
                .on('---toggle', function () {

                    if ($this.hasClass('active')) {
                        $this.triggerHandler('---hide');
                    } else {
                        $this.triggerHandler('---show');
                    }

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

                    // Change location fragment.
                    window.location.hash = '#' + $this.attr('id');

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

        // Main navigation button.
        const menuButtonObserver = new MutationObserver(function ( mutations ) {
            mutations.forEach(function ( mutation ) {
                $t = $(mutation.target);
                if ($t.hasClass('active')) {
                    $t.removeClass('fa-bars')
                        .addClass('fa-x')
                        .find('span').text('Close');
                    if ( skel.breakpoint('small').active ) {
                        var ticker = $('#tour-ticker').detach();
                        ticker.insertBefore($('#navpanel > nav'));
                    }
                } else {
                    $t.removeClass('fa-x')
                        .addClass('fa-bars')
                        .find('span').text('Menu');
                    var ticker = $('#tour-ticker').detach();
                    ticker.insertBefore($('#header > nav'));
                }
            });
        });
        menuButtonObserver.observe(document.querySelector('#main-menu-button'), {
            subtree: false,
            childList: false,
            attributes: true,
            attributeFilter: [ 'class' ],
            attributeOldValue: true
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

        // Gallery.
        var $gallery = $('#gallery');

        // Thumbs.
        $gallery.children('.thumb').each(function () {

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

        });

        // Gallery initialization, using jQuery Poptrox.
        $gallery.poptrox({
            baseZIndex: 20000,
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
            usePopupCaption: false,
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
                $gallery[0]._poptrox.windowMargin = 50;
            })
            .on('+xsmall', function () {
                $gallery[0]._poptrox.windowMargin = 0;
            });

        // Tour events features.
        customElements.define(
            "tour-event",
            class extends HTMLElement {
                constructor () {
                    super();
                    let template = document.getElementById('template-tour-event');
                    let templateContent = template.content;

                    const shadowRoot = this.attachShadow({ mode: "open" });
                    shadowRoot.appendChild(document.importNode(templateContent, true));
                }
            },
        );
        $window.on('load', function (e) {
            const events = toursUpcomingEvents; // From global scope.
            var ticker = document.getElementById('tour-ticker');
            events.forEach( function ( event ) {
                var el = document.createElement('tour-event');

                var location = document.createElement('span');
                location.setAttribute('slot', 'tour-event-location');
                location.innerText = event.location || '(Undisclosed)';
                el.appendChild(location);

                var startDate = document.createElement('time');
                startDate.setAttribute('slot', 'tour-event-startdate');
                startDate.setAttribute('datetime', new Date(event.startDate).toISOString());
                startDate.innerText = new Date(event.startDate).toLocaleDateString();
                el.appendChild(startDate);

                var endDate = document.createElement('time');
                endDate.setAttribute('slot', 'tour-event-enddate');
                endDate.setAttribute('datetime', new Date(event.endDate).toISOString());
                endDate.innerText = new Date(event.endDate).toLocaleDateString();
                el.appendChild(endDate);

                var description = document.createElement('span');
                description.setAttribute('slot', 'tour-event-description');
                description.innerText = event.description?.split("\n", 1).join('') || '';
                el.appendChild(description);

                ticker.appendChild(el);
            });
        });

    });

    // Console ASCII art.
    document.addEventListener('DOMContentLoaded', function (e) {
        const msg = `
Although fictional, if this underground club existed in NYC,
Violet would surely be found there! For $100 USD off any skate
date (street skating, roller rink, or even ice skating), name
the club in this nostalgia-filled Hollywood movie.

                 .'*.*'.==.            .==.'*.*'.
                 '*/X@*'  (            )  '*@X\*'
                  //X@    '.          .'    @X\\
                  "X@      \          /      @X"
             ____xX@        '        '        @Xx____
            (            ____)      (____            )
            '....------._____|      |_____.------....'
           ( . )( . )( . )( . )    ( . )( . )( . )( . )
            \`-'  \`-'  \`-'  \`-'      \`-'  \`-'  \`-'  \`-'
        `;

        console.groupCollapsed(`Hack the planet... \u{1F95A}\u{1F575}`);
        console.info(msg);
        console.groupEnd();
    });

})(jQuery);
