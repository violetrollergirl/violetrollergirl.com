---
layout: none
---
/**
 * Violet Rollergirl's client-side booking form implementation.
 *
 * About:
 *     https://violetrollergirl.com/colophon/#privacy-guarantees-of-first-contact
 *
 * Documentation:
 *     https://violetrollergirl.com/colophon/booking-form-code/
 */
(function () { // Start IIFE.

    /**
     * The working name of the provider who will receive the inquiry.
     */
    const providerName = '{{ site.author.name | split: " " | first }}';

    /**
     * Set a custom email addres, e.g., to add "plus-addressing" if you
     * want emails to go to a separate label.
     *
     * If you want to use the email address that is embedded in the link
     * you use for contacting you, set this to a `false` or empty value.
     *
     * See:
     *     https://proton.me/support/addresses-and-aliases#plus
     */
    const bookingEmail = '{{ site.booking.email }}';

    /**
     * This is the HTML ID of the booking form's `<form>` element.
     */
    const formId = 'booking-inquiry-form';

    /**
     * Prefix of element IDs that are booking form contact links.
     */
    const contactLinkIdPrefix = 'contact-link-';

    /**
     * The `sessionStorage` key to store form data in.
     */
    const sessionStorageKey = 'rollergirl-booking-formdata';

    /**
     * The templated inquiry to write as the booking form submission.
     *
     * We `return` this text so as to defer evaluation for later.
     */
    const inquiryText = function (inquiryData) {
        return `Hi ${providerName}. Please allow me to introduce myself.

My name is ${inquiryData.get('booking_inquiry_prospect_name')}. I read your screening options and am comfortable being screened by ${inquiryData.get('booking_inquiry_prospect_preferred_screening_method')}.

My carrier phone number (for your screening purposes only) is ${inquiryData.get('booking_inquiry_prospect_carrier_phone')}.

I've been drawn to you since I found your Web site via ${inquiryData.get('booking_inquiry_prospect_source_referral')}. More about me: ${inquiryData.get('booking_inquiry_prospect_attraction')}

My deposit is ready to send via ${inquiryData.get('booking_inquiry_prospect_deposit_method')}.

I'm ready to plan a date! May I reserve your time for ${inquiryData.get('booking_inquiry_prospect_booking_type')} for your ${inquiryData.get('booking_inquiry_prospect_service_type')} for a duration of ${inquiryData.get('booking_inquiry_prospect_duration')} hours when I will be in ${inquiryData.get('booking_inquiry_prospect_location')} on ${new Date(inquiryData.get('booking_inquiry_prospect_preferred_datetime'))}, or alternatively, on ${new Date(inquiryData.get('booking_inquiry_prospect_alternate_datetime'))}. Would either of these options allow us to meet?

I'm excited to hear from you!

Sincerely,
-${inquiryData.get('booking_inquiry_prospect_name')}`;
    };

    // Form-wide `change` event.
    document.getElementById(formId)?.addEventListener('change', function (e) {
        var formData = new FormData(this);
        sessionStorage.setItem(
            sessionStorageKey,
            JSON.stringify(
                formData.entries().toArray()
            )
        );
    });

    // When loading the window, make sure any info in the booking
    // form saved in sessionStorage is restored.
    window.addEventListener('DOMContentLoaded', function (e) {
        var fieldData = sessionStorage.getItem(sessionStorageKey);
        var fields = (fieldData) ? JSON.parse(fieldData) : [];
        fields.forEach(function (x) {
            var el = document.querySelector(`#${formId} [name=${x[0]}]`);
            if (el) {
                el.value = (x[1]) ? x[1] : "";
            }
        });
    });

    // Form-wide `submit` and `reset` event.
    ['submit', 'reset'].forEach(function (eventType) {
        document.getElementById(formId)?.addEventListener(eventType, function (e) {
            e.preventDefault();
            var inquiryData = new FormData(this);
            var templateText = inquiryText(inquiryData);

            // If the user just wants to copy to clipboard...
            if ( 'reset' === e.type ) {
                try {
                    navigator.clipboard.writeText(templateText);
                } catch (err) {
                    console.error(err);
                }
                // ...end processing, don't rewrite links.
                return false;
            }

            var method = inquiryData.get('booking_inquiry_prospect_preferred_contact_method');
            var el     = document.getElementById(`${contactLinkIdPrefix}${method}`);
            var oldUrl = el.getAttribute('href');
            var url    = new URL(oldUrl);

            switch ( method ) {
                case 'whatsapp':
                    url.searchParams.set('text', templateText);
                    break;
                case 'sms':
                    url.searchParams.set('body', templateText);
                    break;
                case 'email':
                    // Get address from the appropriate anchor element.
                    var email = new URL(el.getAttribute('href')).pathname;

                    // Avoid dealing with URLSearchParams interface
                    // because of encoding complexness.
                    // Also give the booking form an option to have its own
                    // special email delivery address override, for
                    // "plus addressing" or similar special email features.
                    var to = (bookingEmail)
                        ? encodeURIComponent(bookingEmail)
                        : email;
                    // DEV NOTE: For some reason, the `pathname` instance property
                    //           for a URL object is not writable (even though it
                    //           is documented as being so.) Instead, we change the
                    //           underlying element's HTML value here, as a kludge.
                    var bookingHref = el.getAttribute('href').replace(
                        /^(mailto:).*\??(.*)$/,
                        `$1${to}$2`
                    );
                    url = new URL(bookingHref);
                    url.search = `?subject=Booking%20inquiry%20from%20${inquiryData.get('booking_inquiry_prospect_name')}&body=${encodeURIComponent(templateText)}`;
                    break;
                case 'xmpp':
                    // According to XEP-0147, XMPP URI Scheme Query Components
                    // require different parameter handling than normal URIs.
                    var xmppAction = 'message';
                    url.search = `?${xmppAction};subject=Booking%20inquiry%20from%20${inquiryData.get('booking_inquiry_prospect_name')};body=${encodeURIComponent(templateText)}`;
                    break;
                case 'simplex':
                    var oldhref = new URL(el.getAttribute('href'));
                    var newhref = `simplex:${oldhref.pathname}${oldhref.hash}?h=${oldhref.hostname}`;
                    url = new URL(newhref);
                    break;
                default:
                    break;
            }

            el.setAttribute('href', url.toString()); // Rewrite URL.
            el.click();                              // Click it.
            el.setAttribute('href', oldUrl);         // Restore it.

            // We're done for now, so forget stored form data.
            sessionStorage.removeItem(sessionStorageKey);
        });
    });

})(); // End IIFE.
