---
title: Colophon
id: colophon
description: >
  VioletRollergirl.com makes use of some novel technology.
  This page describes it in detail.
featured_image:
  alt:
  url: images/gallery-originals/violet-in-beige-and-marble-booth.jpg
last_modified: Sun Dec 28 15:35:13 EST 2025
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

{:.easter-egg}
## Easter eggs

One thing I love about technology, especially information technology, is that it turns words into *spellcraft*. Think of me as a modern day witch: by inscribing my desires into electricity and stone, I am invoking my desires into the world and literally *crafting spells* to bring you to me.

In that spirit, I've sprinkled numerous easter eggs for you to find around my site.

Some of them are just for fun and amusement. Others will actually earn you discounts when booking, if you're clever enough to discover them, so it behooves you to read closely and explore boldly.

Sometimes, they'll be marked with this sequence: <span class="easter-egg"></span>, encouraging you to look more closely. Other times they'll simply be described as such textually. And sometimes, they'll be hidden somewhere in the site itself, where you'll need to 🤭 go deeper to decode them.

Happy hunting. ;)

## Technology stack

My site is built on a very heavily customized rendition of a [Jekyll](https://jekyllrb.com/) template intended for a photography portfolio that I modified myself. The original template provided the gallery view, the panel switching behavior, and the color scheme. I added all other elements and features.

### No server required

Jekyll is a popular *static site generator* written in the [Ruby](https://ruby-lang.org/) programming language. There are many such [static site generators](https://jamstack.org/generators/), but I am personally most familiar with Jekyll. It uses a free templating language called [Liquid](https://shopify.github.io/liquid/) (originally developed by Shopify) to provide basic build-time logic and coalesce static HTML, CSS, and JavaScript page assets from individual reusable snippets.

Since my site is entirely static (c.f., dynamic, such as with a WordPress, Squarespace, Wix, or other site technology whose templates are not pre-rendered), I require no server-side compute cycles to publish it. All I require is a Domain Name System (DNS) registration and a Web (HTTP) server. This makes my site easy for me to migrate from one server to another when I need to (or if, like most sex workers, I am eventually banned from one platform or another), and also makes it relatively inexpensive to host.

This characteristic also forms the basis of some of the more novel and security-aware features I'm most proud of.

<!-- YOU'VE FOUND AN EASTER EGG!
## Typography

I have a deep and profound love for language. The words we use literally define our reality. That's why flowery language, and especially its textual representation, resonate deeply with me. For that reason, all of the content pages on my site end in a triple octothorpe: `###`.

For $100 USD off your next 3 hours or longer booking, can you tell me the significance of this symbol in triplicate?

And for an additional $50 USD off booking me when I'm traveling on tour, what is the singular glyph's pictographical meaning?
-->

## Client-side booking form

My [contact page includes a booking form](#contact) that has some especially unique properties.

### Mad-lib style form prose

Most obviously, my booking form is written from the perspective of a client's message to me in a "mad-lib style" block quotation with input fields embedded in the prose, rather than being presented as a traditional data entry task. The prose mimics an ideal client inquiry, and my intention in presenting my booking form this way was to help clients learn what a model inquiry reads like by literally writing such an inquiry and simply requiring them to fill in the blanks. The booking form itself is accompanied by a thorough [booking guide]({% link resources/for-clients/booking-guide/index.md %}), which details each field's purpose and walks through the complete booking process for anyone who desires such handholding.

The form itself is special in several other ways, too.

### HTML5 form features

Beyond being designed to help clients structure a first message to me in natural language speech, it uses [HTML5 form input types such as `tel`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/tel), [`datetime-local`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/datetime-local), and [`number`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number) to more precisely shape what can be entered while making the most use of the visitor's Web browser's built-in user interface elements. [HTML5 client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) attributes such as `required` are also included to ensure the form data a visitor enters passes basic data entry validation checks performed by the browser itself before being "submitted."

### Privacy guarantees of first contact

Most uniquely, my booking form does not use a third-party service to send me emails when a client "submits" the form.

I designed my booking form with the privacy of my clients and the protection of our correspondence as a top priority. Since a client's first inquiry can contain sensitive details such as screening or verification photos, and since this business requires a commitment to discretion, it is critical that my correspondence with potential clients remain confidential and secure.

Instead of using email relays or forwarding services, my booking form uses default URL protocol handlers to trigger one of a number of pre-installed applications that the visitor already has on their phone or computer, such as [Signal Private Messenger](https://signal.org/), [WhatsApp](https://www.whatsapp.com/), an email client (like GMail or ProtonMail), or an SMS/text messaging application. Every phone has at least one of these already installed in it (that's what phones are for) and is therefore already guaranteed to be able to send the message composed by filling in the booking form to me via the chosen communication method.

For example, when a client expresses that they wish to communicate with me via email (by selecting the "email" option at that point in the form), the behavior activated by the form's submit button changes to cause the visitor's device to automatically compose an email already  addressed to me and whose body already contains a polite, informative email based on their answers when filling in the form. Likewise, should a client express that they prefer communicating via WhatsApp, the submit button's behavior changes to make use of WhatsApp's automated message composition feature and displays a similar message precomposed and addressed to my WhatsApp number. The same is true for the other communication methods (except Signal which requires one further action of pasting the pre-composed message from the
clipboard).

This works by having a bit of JavaScript swap out the form's `submit` action with a `click` action on another link in the page whose URL `href` attribute value is modified as the form is being filled out. Links whose destination is an SMS (text message) use [the `tel:` scheme](https://www.ietf.org/rfc/rfc3966.txt). Emails use [the `mailto:` scheme](https://en.wikipedia.org/wiki/Mailto). Jabber/XMPP instant messages use [the `xmpp:` scheme](https://xmpp.org/extensions/xep-0147.html). Signal and WhatsApp messages are registered to fully-qualified URLs at `signal.me` and `wa.me`, respectively, and will ordinarily be handled by the URL protocol handlers registered with the browser or Operating System upon installation of that app.

I believe that the benefits of this technique outweigh the cost of possible confusion or lack of familiarity: 
by directly invoking a client application instead of submitting data to a third-party service, I am able to actually provide my clients exactly as much privacy as their chosen communication method implements because *only* their chosen communication method is party to their messages.

This process circumvents every other middle man. My web hosting platform *never* receives the data entered in the form (the form merely composes some text), nor does any other service like Google Forms, TypeForm, Jot Form, and so on, which are so often used by booking forms across the industry. To be clear, none of those form submission services actually provide the level of privacy that some of them claim to. Hell, I'd be happy to prove this claim to you in person, perhaps while in my panties, if that thought appeals.

I don't mean to denigrate other providers in comparing my booking form to theirs. Rather, my intent is to share my method here in the hopes that other providers implement this technique themselves so we can collectively raise the standard of privacy protections offered to the clientele in our industry more broadly. It's clear that when we protect the communication with our clients, we protect ourselves. When our clients protect us, they are also protecting themselves, too.

Please feel free to try my form out and experience how it works for yourself. If you do, I just ask that you please also let me know it's just a test, and not a real inquiry when you actually send me a message so I know you're simply enjoying trying out this tech. Unless&hellip;y'know. ;)

## Targetable deep-links for every anchor

My web site contains a lot of information about me and my offerings. In order to make every part as easy to find as possible, I've ensured each element can be referenced with a fragment identifier by including an `id` attribute to the appropriate HTML element. This means each individually ID'ed element also functions like a permalink and, when accessed, CSS rules create a halo effect around that element highlighting it visually.

Try it out: see my [incall availability]({% link index.html %}#incall-availability) and note how the heading glows in response.

## Cryptocurrency tips and donation links

In keeping with my commitment to privacy, on my [links page is a section listing options for tipping me]({% link index.html %}#links-group-tip-me) using privacy-preserving digital money known as [Zcash](https://z.cash/) and [Monero](https://getmonero.org/). The "z" in Zcash stands for "zero knowledge," which is a branch of cryptography that makes it possible to assert mathematical proofs without having full visibility into the arguments of the proof itself. Practically, this makes it possible to devise electronic payment systems that share some of the beneficial properties of cryptocurrency systems like Bitcoin but without being subjected to its most undesirable requirement of one's financial transactions being fully publicly published on its transparent ledger for all the world to see.

Put another way: Zcash (and other effective "privacy coins" like Monero) are to money what Signal Private Messenger is to speech.

I also accept deposits and full payment in these privacy-preserving cryptocurrencies, which means it is possible to engage my services in a way that provably leaves absolutely no public (unencrypted) data trail that my services were ever engaged by you. By making myself available for contact through Signal Private Messenger via my booking form and for payment via Zcash, there is no point in any of my remote interactions with a client that any digital third party or eavesdropper might be able to snoop on or learn about our interactions.

I reuse the same technique of registering URL protocol handlers that my booking form uses for these cryptocurrency donation options. Both Zcash and Monero have standardized URL schemes for invoking various intended actions through links, and I have implemented those on my site. These are specifically [the `zcash:` scheme described by the Zcash Improvement Proposal (ZIP) 321](https://zips.z.cash/zip-0321), and [the `monero:` scheme described by the Monero Project's TX Scheme paper](https://github.com/monero-project/monero/wiki/URI-Formatting).

I further provide QR codes that encode the same URI data into an image for easy access by wallet apps like [Zashi](https://electriccoin.co/zashi/) or [Cake Wallet](https://cakewallet.com/) that provide QR code scan functionality. You can click or scan the QR codes of my donation links on my site to send me Zcash or Monero denominated cryptocurrency conveniently as a tip, gift, donation, deposit, or full payment at any time. While I also accept Bitcoin and Ethereum, I do not prefer them as transactions on those ledgers are published publicly and with full payment details to the world, making them subpar options for private payments outside of personal correspondence.
