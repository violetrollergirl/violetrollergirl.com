---
title: Colophon
description: >
  VioletRollergirl.com makes use of some novel technology. This page describes it in detail.
---

# Colophon for VioletRollergirl.com

I'm pretty proud of my Web site. There are some novel things about it that I would like to highlight, like my unique mad-lib style [booking form]({% link index.html %}#booking-inquiry-form) and deep-linkable anchors. Sometimes, other providers ask me how I made it. Clients do, too.

Here's a technical description of how it all works.

## Static site generation

My site is powered by [Jekyll](https://jekyllrb.com/), a *static site generator* written in the [Ruby](https://ruby-lang.org/) programming language. Jekyll uses a free templating language called [Liquid](https://shopify.github.io/liquid/) originally developed by Shopify to provide basic build-time logic and construct static HTML, CSS, and JavaScript page assets from individual snippets.

Since my site is entirely static, I require no server-side compute to publish it. This makes it easily migratable and very inexpensive to host. It also forms the basis of some of the more novel and security-aware features.

## Client-side booking form

My [contact page includes a booking form](#contact) that has some especially unique properties. Most obviously, it is a "mad-lib style" form, designed to help clients structure a first message to me in natural language speech.

It uses [HTML5 form input types such as `tel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/tel), [`datetime-local`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local), and [`number`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number). It also includes [HTML5 client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) attributes to ensure the form is complete.

The client-side focus of my booking form extends beyond HTML5's built-in features, though. Most uniquely, it does not use a third-party service to send me emails when a client "submits" the form. Instead, my form uses default URL protocol handlers to trigger a client application, such as [Signal Private Messenger](https://signal.org/), [WhatsApp](https://www.whatsapp.com/), an email client, or an SMS/text messaging application installed in the visitor's device to send the completed booking form message to me via the chosen communication method.

This works by having a bit of JavaScript swap out the form's `submit` action with a `click` action on another link in the page whose URL `href` attribute is modified as the form is being filled out. Links whose destination is an SMS use [the `tel:` scheme](https://www.ietf.org/rfc/rfc3966.txt). Emails use [the `mailto:` scheme](https://en.wikipedia.org/wiki/Mailto). Signal and WhatsApp messages are registered to fully-qualified URLs at `signal.me` and `wa.me`, respectively, assuming that the visitor has the Signal or WhatsApp app installed to their device.

By directly invoking a client application instead of submitting data to a third-party service, I offer clients massively improved privacy because fewer entities are receipients of their information, which can contain sensitive details such as screening or verification photos.

Please feel free to try it out and see for yourself. If you do, I just ask that you please also let me know it's just a test, and not a real inquiry when you actually send me a message so I know you're just enjoying trying out this tech. Unless&hellip;. ;)

## Targetable deep-links for every anchor

My web site contains a lot of information about me and my offerings. In order to make every part as easy to find as possible, I've ensured each element can be referenced with a fragment identifier by including an `id` attribute to the appropriate HTML element. This means each individually ID'ed element also functions like a permalink and, when accessed, CSS rules create a halo effect around that element highlighting it visually.

Try it out: see my [incall availability]({% link index.html %}#incall-availability) and note how the heading glows in response.
