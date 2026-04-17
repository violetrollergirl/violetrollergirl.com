---
title: Defeating Photo Unblur and Remaining Face-In
description: >
  Face-in providers are those that don't show their face online. Here's why
  covering your face, not just blurring it, is important to stay face-in.
featured_image:
  alt:
  url: images/gallery-originals/floral-skater-mesh-top-dress-and-leather-jacket.jpeg
last_modified: Fri Apr 10 12:55:34 EDT 2026
---

# {{ site.title }}'s Guide to Defeating Photo Unblur and Remaining Face-In

A *face-in provider* is any sex worker who does not show their face on social media, in advertising photos, or in content they create. There are many reasons why a provider may want to remain face-in. Most of them come down to feelings of safety or exclusivity of access.

Remaining face-in also helps some go unnoticed when on dates in public. Other providers either don't have this luxury, or choose not to hide this part of their identity. For example, for better or worse, I'm undeniably recognizable and memorable. Moreover, as a trans provider, obscuring my face could make too many potential clients shy away from [booking me]({% link resources/for-clients/booking-guide/index.md %}) for fear that my face isn't "womanly" enough. Regardless of why a provider might show their face, the fact that we do makes us *face-out* providers.

Despite being a face-out provider myself, many colleagues consider me one of the most cyber-secure sex workers in the world today. As a result, I routinely get asked numerous digital safety and online privacy questions from face-in providers about how to stay safe and pseudonymous online in this age of increasing state surveillance and advancements in facial recognition technology powered by AI.

## In this article

1. [What digital pictures are](#what-digital-pictures-are)
    1. [A note on photo file metadata](#a-note-on-photo-file-metadata)
1. [How blur and unblur tools work](#how-blur-and-unblur-tools-work)
1. [Why covering your face is better than blurring-it](#why-covering-your-face-is-better-than-blurring-it)
1. [Find and cover other identifying information in photos](#find-and-cover-other-identifying-information-in-photos)

## What digital pictures are

Most face-in providers who fail to protect their identity in photos (i.e., the ones who get doxxed in this manner) fail simply because they don't remove enough information from the original pic. And they don't remove enough info simply because they underestimate the amount of information in the photo in the first place.

It's worth pointing out that the photos cameras take today are incredibly high-resolution recordings. In other words, you can zoom in on the pictures you take to what was once an astonishing degree of detail simply because there is so much information packed into the file that makes up the pic.

When you snap a picture with your iPhone 17 and its 48 megapixel camera, for example, you're recording a huge amount of information! Point that camera at your face, and that information can often uniquely identify you even if lighting conditions change or you wear different makeup the next day. That's basically how Apple's Face ID (and all other facial recognition technology) works, after all.

If there were less detail recorded in the image, wearing more or less makeup or moving to a room with darker lighting might confuse Face ID, but that's not true anymore. Facial recognition technology is as good as it is largely because there is just *so much* detail in the original photo. It comes as no surprise, then, that remaining face-in is all about removing identifying information from the photo before you share or post it.

The more information you remove, the harder it is to use the info left in the photo to identify you.

### A note on photo file metadata

It's important to recognize that there is more information in a digital photo than just the pixels you can see on your screen. Depending on the camera you use to take the photo, *metadata* about the photo is often written into the file's invisible areas (sometimes called file *headers* or *exchangeable image file format, or EXIF, information*). This can include details about the make and model of the camera that took the photo, the date and time the photo was taken, or the GPS coordinates of where the image was snapped.

You definitely want to remove this information as well. Thankfully, this is extremely easy to do. Just send the picture to yourself via Signal Private Messenger, which takes care of stripping metadata from files like this for you. For more on this, read my guide, [Using Signal to share photos and media]({% link resources/for-providers/signal-for-sex-work/index.md %}#using-signal-to-share-photos-and-media).

Be sure you've removed this metadata before you move on to obscuring your face in the pixels themselves.

## How blur and unblur tools work

All blur tools work by first reading the original pixel data and then changing their values according to a known and, importantly, generally reversible algorithm.

For example, the most common blur filter is the gaussian blur. This filter works by averaging the color values of a given pixel area together, which makes dark pixels surrounded by lighter pixels lighter, and lighter pixels surrounded by dark pixels darker. The result is a soft, out-of-focus effect, but it's an effect whose output was derived entirely from input that was in the original photo itself.

That's fundamentally different than encryption, which requires input that at no point was in the original source. This is why that omitted input powering encryption technology is called a *secret key*.

From an information theoretic perspective, since all blurring always uses data solely from the original input to create its final output, it is theoretically reversible. Even though these forms of blurring are still "lossy" processes, that is, they result in an artifact with less detail than the original, what's important is that the information was not entirely discarded, it was simply modified in a predictable way.

To (re-)sharpen a photo filtered through a gaussian blur, you run the blurred pixel area through the inverse process as the blur itself. This darkens the pixels you lightened earlier, and lightens the pixels you darkened earlier. It isn't perfect, and the more severe the gaussian blur, the less perfect this inversion is, but it's a start.

If you want to take it further, combine this technique with AI that will "guess" at the right pixel color value at each pixel position based on a collection of millions of pictures of faces already in its database, and you can more intuitively feel why AI-powered unblur tools work so well.

## Why covering your face is better than blurring it

For most providers, the single most important part of being face-in is, well, covering your face. It is, after all, what the term implies. Obscuring one's face is intuitively important because the face is arguably the most recognizable part of the human body.

Covering your face means exactly that: don't just blur your face, cover it.

You can cover your face in the original photo using a book, large flower, sunhat, or the phone with which you're taking the selfie. By covering your face in the original photo, you no longer have any need to blur it. This is a great way to defeat photo unblur because you completely sidestep the battle.

It's also easy to cover your face after the fact, such as by using an emoji, solid-color bar, or any number of other artifacts. Many providers draw elegant strokes atop their faces that make it appear as though the photo itself was painted over with an acrylic brush.

What all of these methods have in common is that they completely overwrite the pixel data in the original photo, ensuring the new output is completely unrelated to the original input. This is why no blur is as effective as this form of cover.

## Find and cover other identifying information in photos

> TODO: Still need to write about this. For example, this includes tattoos, street signs, and so on.
>
> Have a peek at the following video as well for more info on this.
>
> <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/VaUsJvUMUgE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
