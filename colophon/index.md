---
title: Colophon
id: colophon
description: >
  VioletRollergirl.com makes use of some novel technology.
  This page describes it in detail.
featured_image:
  alt:
  url: images/gallery-originals/violet-in-beige-and-marble-booth.jpg
last_modified: Thu May 14 15:52:42 EDT 2026
---

# {{ site.title }}'s Website Colophon

> col·​o·​phon
>
> 1: an inscription at the end of a book or manuscript usually with facts about its production
>
> 2: an identifying mark used by a printer or a publisher

I'm pretty proud of my Web site. Sometimes, other providers ask me how I made this site. Some clients have, too.

There are some novel things about it that I'd like to highlight, like my unique mad-lib style [booking form](#contact), [cryptocurrency payment integrations]({% link index.html %}#links-group-tip-me), and deep-linkable anchors.

So here's a bit of technical information regarding how it all works. But, first&hellip;shall we play a game?

## On this page

1. [Easter eggs](#easter-eggs)
1. [Technology stack](#technology-stack)
    1. [No server required](#no-server-required)
    1. [Onion location hint](#onion-location-hint)
1. [Permalinks for intra-page UI elements](#permalinks-for-intra-page-ui-elements)
1. [Client-side booking form](#client-side-booking-form)
    1. [Mad-lib style form prose](#mad-lib-style-form-prose)
    1. [Integrated booking guide](#integrated-booking-guide)
    1. [Fill while browsing](#fill-while-browsing)
    1. [Fill from links](#fill-from-links)
    1. [Data type-specific inputs](#data-type-specific-inputs)
    1. [Data entry validation](#data-entry-validation)
    1. [Privacy guarantees of first contact](#privacy-guarantees-of-first-contact)
        1. [Why my booking form doesn't use a third-party service](#why-my-booking-form-doesnt-use-a-third-party-service)
        1. [How my booking form avoids needing a third-party service](#how-my-booking-form-avoids-needing-a-third-party-service)
    1. [Steal my booking form code](#steal-my-booking-form-code)
1. [Cryptocurrency tips and donation links](#cryptocurrency-tips-and-donation-links)

{:.easter-egg}
## Easter eggs

One thing I love about technology, especially information technology, is that it turns words into *spellcraft*. Think of me as a modern day witch: by inscribing my desires into electricity and stone, I am invoking my desires into the world and literally *crafting spells* to bring you to me.

In that spirit, I've sprinkled numerous easter eggs for you to find around my site.

Some of them are just for fun and amusement. Others will actually earn you [discounts when booking]({% link _faq/booking/redeeming-easter-eggs.md %}), if you're clever enough to discover them, so it behooves you to read closely and explore boldly.

Sometimes, they'll be marked with this sequence: <span class="easter-egg"></span>, encouraging you to look more closely. Other times they'll simply be described as such textually. And sometimes, they'll be hidden somewhere in the site itself, where you'll need to 🤭 go deeper to decode them.

Happy hunting. ;)

## Technology stack

My site is built on a very heavily customized rendition of a [Jekyll](https://jekyllrb.com/) template intended for a photography portfolio that I modified myself. The original template provided the gallery view, the panel switching behavior, and the color scheme. I added all other elements and features.

### No server required

Jekyll is a popular *static site generator* written in the [Ruby](https://ruby-lang.org/) programming language. There are many such [static site generators](https://jamstack.org/generators/), but I am most familiar with Jekyll. It uses a free templating language called [Liquid](https://shopify.github.io/liquid/) (originally developed by Shopify) to provide basic build-time logic and coalesce static HTML, CSS, and JavaScript page assets from individual reusable snippets.

Since my site is entirely static (c.f., dynamic, such as with a WordPress, Squarespace, Wix, or other site technology whose templates are not pre-rendered), I require no server-side compute cycles to publish it. All I require is an Internet address and a Web (HTTP) server. This makes my site easy for me to migrate from one server to another when I need to or if, like most sex workers, I am eventually banned from one platform or another. This also makes it relatively inexpensive to host.

This characteristic also forms the basis of some of the more novel and security-aware features I'm most proud of.

### Onion location hint

Thanks to the ultimate simplicity of its implementation, my site exists simultaneously as a regular "clearnet" Web site and as [a darknet "Onion site"](http://{{ site.onion }}.onion{{ page.url | relative_url }}) accessible only to users of the [Tor network](https://torproject.org/){:target="_blank"}. I encourage everyone, but especially clients seeking maximum discretion, to [use that version of my website]({% link resources/for-clients/discretion-maxxing/index.md %}#choose-onion-domains-over-clearnet-domains).

I proactively inform visitors who are using the special Tor Browser of the availability of my Onion site via an [Onion location hint](https://community.torproject.org/onion-services/advanced/onion-location/){:target="_blank"} in the `<head>` element on every page of my site. It looks something like this:

```html
<meta http-equiv="onion-location"
      content="http://{{ site.onion }}.onion{{ page.url | relative_url }}"
/>
```

In supporting browsers, such as some versions of Tor Browser, this creates a non-intrusive popup that visitors will see the first time they load a page on my clearnet site. The hint looks like this:

{:.align-center}
![Screenshot of Tor Browser's onion location hint.]({% link resources/for-clients/discretion-maxxing/screenshot.violetrollergirl-com.try-onion-sites.tor-browser.webp %}){:loading="lazy"}

<!-- YOU'VE FOUND AN EASTER EGG!
## Typography

I have a deep and profound love for language. The words we use literally define our reality. That's why flowery language, and especially its textual representation, resonate deeply with me. For that reason, all of the content pages on my site end in a triple octothorpe: `###`.

For $100 USD off your next 3 hours or longer booking, can you tell me the significance of this symbol in triplicate?

And for an additional $50 USD off booking me when I'm traveling on tour, what is the singular glyph's pictographical meaning?
-->

## Permalinks for intra-page UI elements

As my site clearly showcases, I'm very detail-oriented. That means this site contains a lot of information about me and my offerings.

Some pages are long. In order to make everything as easy to find as possible, I've ensured each element can be referenced with a [fragment](https://developer.mozilla.org/en-US/docs/Web/URI/Reference/Fragment){:target="_blank"} identifier by including an `id` attribute to the appropriate HTML element.

Each individually ID'ed element therefore also functions like a permalink and, when accessed, [CSS rules `:target`ing that element](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:target){:target="_blank"} create a halo effect around it, highlighting it visually. Try it out:

- read my [incall availability]({% link index.html %}#incall-availability)
- book a [curiosity call]({% link index.html %}#rate-add-ons-and-online-curiosity-call-30-minutes)
- view my [Signal contact link]({% link index.html %}#contact-link-signal)

Note how the heading or page area glows in response.


## Client-side booking form

My site's [Contact page](#contact) includes a [booking form]({% link index.html %}#booking-inquiry-form) that has some especially unique properties.

### Mad-lib style form prose

My booking form is written from the perspective of a client's message to me in a "mad-lib style" block quotation with input fields embedded in the prose, rather than being presented as a traditional data entry task. The prose mimics an ideal client inquiry.

My intention in presenting my booking form this way was to help clients learn what a model inquiry reads like by literally writing such an inquiry and simply requiring them to fill in the blanks.

Hey, a girl can dream.

### Integrated booking guide

I've also written a thorough [booking guide]({% link resources/for-clients/booking-guide/index.md %}), which details the entire process for booking me. The form itself is integrated deeply with its guide.

Atop each field in the form are small information icons (<code>&#9432;</code>) that link directly to a thorough reference for that specific form field's purpose. When someone clicks on a field's information icon, they're taken directly to the part of the booking guide that provides guidance for what to enter in that specific field.

Following each field's description in the guide is a "Continue in Form" button, which takes them back to the form field in question.

### Fill while browsing

You can partially fill in my [booking form]({% link index.html%}#booking-inquiry-form), then browse to another page on my site, then come back to the form again, all without being forced to start filling the form in from scratch every time.

When you enter data into one of the fields in my booking form, my website will remember this entry and automatically fill it back in for you when you return to the form.

For privacy's sake, this memory persists in [`sessionStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage){:target="_blank"}. This means it is remembered only for as long as the browser tab or window in which my site is opened stays open.

When you explicitly close that tab or window, the information in the form is deleted.

### Fill from links

My [Rates page](#rates) and my booking form work together.

Clicking on any of the "Reserve now" links from my fee schedule will automatically fill in the appropriate data in the correct field in my booking form.

For example, clicking the [2-hour GFE session menu item]({% link index.html %}#rate-gfe-fs-2-hours)'s booking link automatically fills in the value of `2` in the date duration field on my form, along with the `GFE services` selection for the service type.

Go ahead. Try it. :)

### Data type-specific inputs

Where relevant, my form uses specific form `input` element attribute `type`s to more precisely shape the suggestions for what to enter into the specific field. These include the HTML5 input types of:

- [`tel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/tel), when I solicit a telephone number for screening
- [`datetime-local`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local), when I ask on what specific date and time a client wants to book
- [`number`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number), when I ask how long a session should be

This makes it easier to enter requested information using built-in Web browser user interface elements.

### Data entry validation

[HTML5 client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) attributes ensure the form data is at least somewhat sensible before it is sent to me.

For example, the form will not allow itself to be `submit`ed unless a client enters data in `required` fields, ensuring no necessary information is omitted.

These checks are handled natively, by the Web browser, and visitors get visual and textual feedback about the validity state for each field and the form as a whole.

Individual fields change color when they move from an invalid to a valid state. The submission button changes text from "Check fields" to "Send inquiry" when the form is fully validated. In supporting browsers, pressing the "Check fields" button highlights the first invalid field and presents an informational tooltip describing how to fix the problem.

### Privacy guarantees of first contact

Most uniquely, my booking form does not use a third-party service to send me emails when a client "submits" the form.

Yes, that brings up a few questions. One biggie is, "why?" The second is probably, "how?"

#### Why my booking form doesn't use a third-party service

To answer the first question, it's because I designed my booking form with the privacy of my clients and the protection of our correspondence as its top priority.

Since a client's first inquiry can contain sensitive details such as [screening or verification]({% link _faq/screening/screening-process.md %}) information, every additional entity (person, service provider, third-party, whatever) who's privy to our correspondence represents an added risk. Minimizing this number is an effective way to reduce that risk. For obvious reasons, this business requires a commitment to discretion, so it's critical that my correspondence with potential clients remain absolutely confidential and secure.

Moreover, the one purpose of a booking form is to shape an introductory message and put it in a high-priority inbox so that clients are more likely to get a reply from me. That's something your phone or computer can already do on its own.

#### How my booking form avoids needing a third-party service

Most booking forms transmit the information typed into them to a remote server, which then relays that same data onwards to the form's addressee. Mine doesn't. Instead, it simply composes a message for you, and opens your chosen messaging app so you can send the pre-written message yourself.

This way, there's no additional relay service. It's just you and me, the way discreet messaging is supposed to be.

My booking form accomplishes this using technology older than Web forms: standardized [URI schemes](https://en.wikipedia.org/wiki/List_of_URI_schemes){:target="_blank"}.

I did it this way because I can safely assume your phone or computer already has the messaging app you want to use, such as [Signal Private Messenger, WhatsApp]({% link resources/for-clients/messaging-discreetly/index.md %} "Learn to use Violet's two favorite discreet messaging apps."), an email client (like GMail or ProtonMail), or an SMS/text messaging application. Every phone has at least one of these already installed in it (that's what phones are for) so every phone is already all but guaranteed to be technically capable of sending me a message. All the booking form has to do is format the text.

For example, say a client prefers communicating via email so they choose the "email" option at [that point in the form]({% link resources/for-clients/booking-guide/index.md %}#booking-form-field-preferred-contact-method). When they do this, the form's `submit` button now becomes a button that launches their phone or computer's built-in email app or (web)mail client. The email app or mail client already knows how to handle being told to write a new message, and so a new email with templated, pre-drafted body text is automatically composed. All that's needed now is to attach screening documents to the email and press the "Send" button.

Likewise, should a client express that they prefer communicating via WhatsApp, my form's `submit` button changes to make use of WhatsApp's automated message composition feature. Just as with email, a precomposed message appears on their phone. That message is already addressed to my WhatsApp number. They now merely need to attach their screening documents, and then press the "Send" button.

Most communication apps have this templating capability. An exception is Signal, which is why my form also has a "Copy Inquiry to Clipboard" button. That button does what it says on the tin: it puts the templated message into the user's clipboard, ready to be pasted into whatever text field they like, such as a Signal Private Messenger message.

More technically, all of this works by having a bit of JavaScript swap out the form's `submit` [event](https://developer.mozilla.org/en-US/docs/Web/API/Event){:target="_blank"} with a `click` action on another link in the page whose URL `href` attribute value is modified as the form is being filled out. Links whose destination is an SMS (text message) use [the `sms:` scheme](https://www.ietf.org/rfc/rfc5724.html){:target="_blank"}. Emails use [the `mailto:` scheme](https://en.wikipedia.org/wiki/Mailto){:target="_blank"}. Jabber/XMPP instant messages use [the `xmpp:` scheme](https://xmpp.org/extensions/xep-0147.html){:target="_blank"}. Signal and WhatsApp messages are registered to fully-qualified URLs at `signal.me` and `wa.me`, respectively, and will ordinarily be handled by the URL protocol handlers registered with the browser or Operating System upon installation of that app.

This process circumvents every other middle man. My web host *never* receives the data entered in the form (the form merely composes some text), nor does any other service like Google Forms, TypeForm, Jot Form, and so on. Such third and even fourth parties are often used by booking forms across the industry. To be clear, none of those form submission services actually provide the level of privacy that some of them claim to.

Hell, I'd be happy to prove this claim to you in person, perhaps while in my panties, if that thought appeals. ;)

I believe the boon to privacy I gain by using this technique outweighs the disadvantage of possible user confusion: by directly invoking a locally installed app instead of submitting data to a remote third-party service, I'm able to actually provide prospective clientele exactly as much privacy as their chosen communication method implements because *only* their chosen communication method is party to their messages.

Of course, it takes two to tango. If someone chooses to send an insecure SMS/text message instead of a Signal Private Messenger message, the privacy of our correspondence will be subpar. But at least *my* actions are not the ones forcing us to downgrade our security, and I can still take inquiries via the method that specific prospect prefers.

### Steal my booking form code

I don't mean to denigrate other providers in comparing my booking form to theirs. Rather, my intent is to share my methods here in the hope that other providers implement these techniques for themselves. If more do so, we can collectively raise the standard of privacy protections offered to the clientele in our industry more broadly.

Sex, pleasure, and companionship is a team sport. It's clear that when we protect the communication with our clients, we protect ourselves. When our clients protect us, they are also protecting themselves, too.

Please feel free to try my form out and experience how it works for yourself. If you do, I just ask that you please also let me know it's just a test, and not a real inquiry when you actually send me a message so I know you're simply enjoying trying out this tech. Unless&hellip;. &lt;3

## Cryptocurrency tips and donation links

In keeping with my commitment to privacy, on my [links page is a section listing options for tipping me]({% link index.html %}#links-group-tip-me) using privacy-preserving digital money known as [Zcash](https://z.cash/) and [Monero](https://getmonero.org/). For both of our safety and discretion, I strongly prefer cryptocurrency over fiat payments and have devoted significant time to helping you [learn to use crypto]({% link resources/for-clients/using-cryptocurrency/index.md %}) if doing so is something you haven't done before.

The "z" in Zcash stands for "zero knowledge," which is a branch of cryptography that makes it possible to assert mathematical proofs without having full visibility into the arguments of the proof itself. Practically, this makes it possible to devise electronic payment systems that share some of the beneficial properties of cryptocurrency systems like Bitcoin but without being subjected to its most undesirable requirement of one's financial transactions being fully publicly published on its transparent ledger for all the world to see.

Put another way: Zcash (and other effective "privacy coins" like Monero) are to money what Signal Private Messenger is to speech.

I also accept deposits and full payment in these privacy-preserving cryptocurrencies, which means it is possible to engage my services in a way that provably leaves absolutely no public (unencrypted) data trail that my services were ever engaged by you. By making myself available for contact through Signal Private Messenger via my booking form and for payment via Zcash, there is no point in any of my remote interactions with a client that any digital third party or eavesdropper might be able to snoop on or learn about our interactions.

I reuse the same technique of registering URL protocol handlers that my booking form uses for these cryptocurrency donation options. Both Zcash and Monero have standardized URL schemes for invoking various intended actions through links, and I have implemented those on my site. These are specifically [the `zcash:` scheme described by the Zcash Improvement Proposal (ZIP) 321](https://zips.z.cash/zip-0321), and [the `monero:` scheme described by the Monero Project's TX Scheme paper](https://github.com/monero-project/monero/wiki/URI-Formatting).

I further provide QR codes that encode the same URI data into an image for easy access by wallet apps like [Zodl](https://zodl.com/) or [Cake Wallet](https://cakewallet.com/) that provide QR code scan functionality. You can click or scan the QR codes of my donation links on my site to send me Zcash or Monero denominated cryptocurrency conveniently as a tip, gift, donation, deposit, or full payment at any time. While I also accept Bitcoin and Ethereum, I do not prefer them as transactions on those ledgers are published publicly and with full payment details to the world, making them subpar options for private payments outside of personal correspondence.

{:.button-container}
[<span class="fa-icon fa-solid fa-user-tie"></span> For Clients]({% link resources/for-clients/index.md %}){:.button}
[<span class="fa-icon fa-solid fa-house-chimney"></span> Home]({% link index.html %}){:.button}
[<span class="fa-icon fa-solid fa-umbrella"></span> For Providers]({% link resources/for-providers/index.md %}){:.button}
