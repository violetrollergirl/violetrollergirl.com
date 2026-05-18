---
title: Steal My Booking Form Code
description: >
  Documentation for my privacy-preserving booking form code.
featured_image:
  alt:
  url: images/gallery-originals/hacker-terminal-Violet-Rollergirl-9095_124315~2.jpg
last_modified: Mon May 18 10:40:23 EDT 2026
prev: /colophon/
---

# Steal {{ site.title }}'s Booking Form Code

As [described on my colophon]({% link colophon/index.md %}#client-side-booking-form), my booking form technique offers a number of advantages over form providers such as Google Forms, JotForm, TypeForm, and any other server-side form solution. This page offers some help for how to make your booking form work like mine.

My form code works through "[convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration){:target="_blank"}." That just means you have to use some sensible names for your booking form fields and then the code will pick up on the rest.

# Before you begin

You will need:

- Rudimentary knowledge of HTML and JavaScript. (Sorry.)
- Access to the raw source code of your website.
- A copy of [this JavaScript file]({% link assets/js/rollergirl-booking-form.js %}) containing the code.

# Quick start

My script expects your booking form code to follow certain conventions but beyond what's documented here you're free to make your form look and feel however you want.

1. Save a copy of [the booking form script]({% link assets/js/rollergirl-booking-form.js %}).
1. At a minimum, replace my name with your name in the line that sets the `providerName` `const`ant in your copy of the script.
1. Copy the source code of the [minimal working example]({% link colophon/booking-form-code/example.html %}) to somewhere on your own website.

That's it.

If it doesn't work immediately, make sure:

- you're loading your own copy of the script, not the one from my site.
- you haven't introduced syntax errors when setting your own name.

# Choosing the form to observe

By default, my script will look for a `form` element whose `id` value is exactly `booking-inquiry-form`:

```html
<form id="booking-inquiry-form">
    ...
</form>
```

If your booking form has a different `id` value, you can inform my script about this by changing its `formId` value.

# Modifying the message that gets written

To change the message that's written when a client submits the form, edit the `inquiryText` variable.

This variable is a [JavaScript template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals){:target="_blank"}. Edit it to change the message.

# Recognized form field `name`s

Form fields MUST include a `name` attribute that matches this (alphabetized) set:

- `booking_inquiry_prospect_alternate_datetime`
- `booking_inquiry_prospect_booking_type`
- `booking_inquiry_prospect_carrier_phone`
- `booking_inquiry_prospect_deposit_method`
- `booking_inquiry_prospect_location`
- `booking_inquiry_prospect_name`
- `booking_inquiry_prospect_preferred_contact_method`
    - This is the variable that determines [which contact link will be clicked](#choosing-contact-links-to-use).
- `booking_inquiry_prospect_preferred_datetime`
- `booking_inquiry_prospect_screening_method`
- `booking_inquiry_prospect_service_type`
- `booking_inquiry_prospect_source_referral`

# Choosing contact links to use

By default, my script will look for any `a` (anchor, link) elements whose `id` values *begin with* `contact-link-`:

```html
<a id="contact-link-email"
    href="mailto:{{ site.contact.email }}">email</a>
```

This is called the `contactLinkIdPrefix`. Anything following this prefix must match the value of the `booking_inquiry_prospect_preferred_contact_method` form field.

```html
Your preferred contact method:
<select name="booking_inquiry_prospect_preferred_contact_method">
    <option>email</option>
    <option value="sms">SMS/text message</option>
</select>
```

For example, if this `selected` form field's value is `email`, then the link with an `id` value of `contact-link-email` will be clicked, assuming the `contactLinkIdPrefix` is set to `contact-link-`.
