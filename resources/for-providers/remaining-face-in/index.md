---
title: Defeating Photo Unblur and Remaining Face-In
description: >
  Face-in providers are those that don't show their face online. Here's why
  covering your face, not just blurring it, is important to stay face-in.
featured_image:
  alt:
  url: images/gallery-originals/floral-skater-mesh-top-dress-and-leather-jacket.jpeg
prev: /resources/for-providers/signal-for-sex-work/
next: /colophon/
last_modified: Sat Apr 18 00:31:44 EDT 2026
---

# {{ site.title }}'s Guide to Defeating Photo Unblur and Remaining Face-In

A *face-in provider* is any sex worker who does not show their face on social media, in advertising photos, or in content they create.

There are many reasons why a provider may want to remain face-in. Most of them come down to feelings of safety or exclusivity of access.  Remaining face-in also helps some go unnoticed when on dates in public.

Other providers either don't have this luxury, or choose not to hide this part of their identity. For example, for better or worse, I'm undeniably recognizable and memorable. Moreover, as a trans provider, obscuring my face could make too many potential clients shy away from [booking me]({% link resources/for-clients/booking-guide/index.md %}) for fear that my face isn't "womanly" enough.

Regardless of why we might show our faces, the fact that we do makes us *face-out* providers.

Despite being a face-out provider myself, many colleagues consider me one of the most cyber-secure sex workers in the world today. As a result, I routinely get asked numerous digital safety and online privacy questions from face-in providers about how to stay safe and pseudonymous online in this age of increasing state surveillance and advancements in facial recognition technology powered by AI.

## In this article

1. [What digital pictures are](#what-digital-pictures-are)
    1. [A note on photo file metadata](#a-note-on-photo-file-metadata)
1. [How blur and unblur tools work](#how-blur-and-unblur-tools-work)
1. [Why covering your face is better than blurring it](#why-covering-your-face-is-better-than-blurring-it)
1. [Find and cover other identifying information in photos](#find-and-cover-other-identifying-information-in-photos)
1. [Understanding data linkability, or, how easy it is to find where a photo or video was taken?](#understanding-data-linkability-or-how-easy-it-is-to-find-where-a-photo-or-video-was-taken)
1. [Have questions? Need advice?](#have-questions-need-advice)

## What digital pictures are

Most face-in providers who fail to protect their identity in photos (i.e., the ones who get doxxed in this manner) fail simply because they don't remove enough information from the original pic. And they don't remove enough info simply because they underestimate the amount of information in the photo in the first place.

It's worth pointing out that the photos our cameras take today are incredibly high-resolution recordings. In other words, you can zoom in on the pictures you take to what was once an astonishing degree of detail simply because there is so much information packed into the file that makes up the pic.

When you snap a picture with your iPhone 17 and its 48 megapixel camera, for example, you're recording a huge amount of information! Point that camera at your face, and that information can often uniquely identify you even if lighting conditions change or you wear different makeup the next day. That's basically how Apple's Face ID (and all other facial recognition technology) works, after all.

If there were less detail recorded in the image, wearing more or less makeup or moving to a room with darker lighting might confuse something like Face ID, but that's not true anymore. Facial recognition technology is as good as it is largely because there is just *so much* detail in the original photo. It comes as no surprise, then, that remaining face-in is all about removing identifying information from the photo before you share or post it.

The more information you remove, the harder it is to use the info left in the photo to identify you.

### A note on photo file metadata

It's important to recognize that there is more information in a digital photo than just the pixels you can see on your screen.

Depending on the camera you use to take the photo, *metadata* about the photo is often written into the file's invisible areas (sometimes called file *headers* or *exchangeable image file format*, or [Exif](https://en.wikipedia.org/wiki/Exif "Wikipedia article about Exif"){:target="_blank"}, information). This can include details about the make and model of the camera that took the photo, the date and time the photo was taken, or the GPS coordinates of where the image was snapped.

You definitely want to remove this information as well. Thankfully, this is extremely easy to do. Just send the picture to yourself via Signal Private Messenger, which takes care of stripping metadata from files like this for you. For more on this, read my guide, [Using Signal to share photos and media]({% link resources/for-providers/signal-for-sex-work/index.md %}#using-signal-to-share-photos-and-media).

Be sure you've removed this metadata before you move on to obscuring your face in the pixels themselves.

## How blur and unblur tools work

All blur tools work by first reading the original pixel data and then changing their values according to a known and, importantly, generally reversible algorithm.

For example, the most common blur filter is the [Gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur "Wikipedia article about Gaussian blur"){:target="_blank"}. This filter works by averaging the color values of a given pixel area together, which makes dark pixels surrounded by lighter pixels lighter, and lighter pixels surrounded by dark pixels darker. The result is a soft, out-of-focus effect, but it's an effect whose output was derived entirely from input that was in the original photo itself.

That's fundamentally different than encryption, which requires input that at no point was in the original source. This is why cryptographers named the omitted information that powers an encryption cipher a "*secret key*."

From an information theoretic perspective, since all blurring always uses data present in the original input to create its final output, it is theoretically reversible. That fact holds even though blurring is still a "lossy" process, that is, it results in an artifact with less detail than the original. The loss of detail isn't what's important, because that lost information can merely be added back to perfectly recreate the original.

What matters is that **rather than being omitted from the start, the original was simply modified in a predictable way.**

To (re-)sharpen a photo filtered through a Gaussian blur, you run the blurred pixel area through the inverse process as the blur itself. This darkens the pixels you lightened earlier, and lightens the pixels you darkened earlier. It isn't perfect, and the more severe the blur, the less perfect this inversion is, but it's a start.

If you want to take it further, combine this technique with AI that will "guess" at the right pixel color value at each pixel position based on a collection of millions of pictures of faces already in its database. Or, worse, how about using a fine-tuned AI model trained on not one, but all of *your* blurred selfies?

Perhaps that helps you more intuitively feel why AI-powered unblur tools can work so well!

## Why covering your face is better than blurring it

For most face-in providers, the critial thing to do to remain face-in is, well, covering your face! That is, after all, what the term implies.

Covering your face means exactly that: don't just blur your face, cover it.

You can cover your face in the original photo using a prop like a book, large flower, sunhat, or even the phone with which you're taking your selfie. By covering your face in the original photo, you no longer need to blur it. This is a great way to defeat photo unblur because you completely sidestep the battle.

It's also easy to cover your face after the fact, such as by using common image editing software often shipped with your phone to place an emoji, solid-color bar, or any number of other artifacts over your face. Many providers draw elegant strokes atop their faces that make it appear as though the photo itself was painted over with an acrylic brush:

{% comment %}
I don't really want to recommend these tools because they are pretty data-harvest-y, but I know of:

- [PicsArt](https://picsart.com/){:target="_blank"}
- [EPIK](https://apps.apple.com/us/app/epik-ai-photo-video-editor/id1577705074){:target="_blank"}
{% endcomment %}

{:.align-center}
![Face out: a picture of Violet kneeling on a beach looking up at the camera.]({% link images/gallery-originals/face-out.kneeling-on-the-beach-looking-at-camera.jpeg %}){:style="max-width: 40%; vertical-align: middle;"}
<span class="fa-icon fa-solid fa-right-long fa-2xl"></span>
![Face in: the same picture, but with a brushstroke artifact covering her face.]({% link images/gallery-originals/face-in.kneeling-on-the-beach-looking-at-camera.png %}){:style="max-width: 40%; vertical-align: middle;"}

What all of these methods have in common is that they completely overwrite the pixel data in the original photo, ensuring the new output is entirely unrelated to the original input.

**Make sure the opacity of your covering artifact is always `100%`,** so there's no data leaking through it from the underlying original pixel data. That's what makes covering your face so much more effective than blurring it.

## Find and cover other identifying information in photos

Obscuring one's face is intuitively important because a face is arguably the most recognizable part of a given human's body. But someone determined to dox you will be paying attention to *every* detail in the photo.

Tattoos, birthmarks, or freckles can also be used to identify you. Treat these like your face: remove or cover them in every photo before you post it. While it may stretch the term beyond comfort, we could argue that a "face-in" provider who nevertheless shows a very revealing tattoo is in practice more similar to a face-out provider!

Once you've ensured your media truly keeps you face-in, you should next consider what other identifying information is in your photo.

While most people naturally focus on just the subject of a photo, others **will pick apart details in the background** of photos, as well. Some of these can directly dox you but even those that don't can still be combined to ultimately do so when they're taken together. Information security and privacy specialists call this phenomenon *linkability* and, again, the best defense is not to reveal this information in the first place.

## Understanding data linkability, or, how easy it is to find where a photo or video was taken

What information in a photo or video besides your face can tell people who or where you are? It turns out, [more than you might realize](https://www.tiktok.com/@the_josemonkey/video/7243158161220209962){:target="_blank"}.

Street signs are obvious location markers, but clever sleuths can deduce your location by filtering on and then linking indirect details together, like the position of the sun in the sky, visible landmarks, and even the species of flora present in your media. I'll let fellow privacy educators [Naomi Brockwell](https://naomibrockwell.com/){:target="_blank"} and [Jose Monkey](https://josemonkey.com/){:target="_blank"} explain:

<div class="align-center">
<iframe style="max-width: 100%;" src="https://www.youtube-nocookie.com/embed/VaUsJvUMUgE?start=15" title="What Your Photos Reveal! by Naomi Brockwell TV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

If you want to get really good at this yourself, try playing a few rounds of [GeoGuessr](https://www.geoguessr.com/){:target="_blank"}. This game places you somewhere in the world and asks you to figure out where you are.

When done consensually, this kind of digital sleuthing can be a bunch of harmless fun. In fact, I enjoy these sorts of open sources intelligence (OSINT) challenges so much that I made [a rather spicy bondage video of myself](https://www.manyvids.com/Video/7387411){:target="_blank"} trying to complete them! ;)

## Have questions? Need advice?

Hopefully, you now have a renewed appreciation and increased understanding of the work required to remain face-in. It may still feel daunting, but the most important tool in your toolbox is simply the discipline to remove extraneous data from your media thoroughly and consistently before you share or post it.

If you have further questions or need additional advice, [I may be able to help]({% link consulting/for-providers/cybersecurity/index.md %})! I'm genuinely happy to help you level up your privacy game.

{:.button-container}
{% include link-as-button.md anchor_text="Previous: Signal for Sex Work" url=page.prev %}
{% include link-as-button.md anchor_text="<span class='fa-icon fa-solid fa-umbrella'></span> Provider Resources" url="../" %}
{% include link-as-button.md anchor_text="Next: Site Colophon" url=page.next %}
