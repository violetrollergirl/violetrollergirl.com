---
title: Securing Your Mobile Phone (as a Paranoid Sex Worker)
description: >
  Some things you (probably) don't need to do to secure
  your mobile phone.
featured_image:
  alt:
  url: https://web.archive.org/web/20260505191325if_/https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:wkcjjssofbmslfdbqkvqllyj/bafkreihtvmlfz2xngdkdoyfmoqthf7ryxtzzpivxxhedh6eweuzuia2zdm
prev: resources/for-providers/
last_modified: Thu May 14 16:56:11 EDT 2026
---

# {{ site.title }}'s Guide to Securing Your Mobile Phone (as a Paranoid Sex Worker)

{% include part-of-paranoid-security.md %}

Your mobile phone is one of the most critical devices you own.

It knows a lot about you, along with a bunch about whoever else you interact with. It comes with you wherever you go. It's often in the same room with you as a client. And it's small, so it's easy to steal, or even just to lose.

Let's talk about how to secure it, and how to keep yourself safe while you use it.

## In this article

1. [One phone or two?](#one-phone-or-two)
1. [Choosing hardware](#choosing-hardware)
    1. [What about iPhones?](#what-about-iphones)
1. [Install GrapheneOS](#install-grapheneos)
1. [Set up your user profiles in GrapheneOS](#set-up-your-user-profiles-in-grapheneos)
    1. [Set up your Owner profile in GrapheneOS](#set-up-your-owner-profile-in-grapheneos)
    1. [Set up your secondary user profiles in GrapheneOS](#set-up-your-secondary-user-profiles-in-grapheneos)

## One phone or two?

> TK-TODO: I need to write this more properly but this section is mostly a reminder that if you're going to use a "two phone" approach, which is super popular, don't buy a cheap phone for your second phone. Cheap phones are cheap for a reason, and mostly that reason is because they are not secured and/or not private.
>
> Think it through like this: if you have one good phone and one cheap phone, you have to pick whether your cheap, unsecurable phone will be your "main/personal" phone, and which one is going to be your work phone. If you make your main/personal phone the cheap one, your legal identity and whatever else you use on a daily basis for your personal life is open to compromise. If you instead opt to make your cheap phone your work phone, your sex work clients and all of your work persona stuff is more likely to end up compromised.
>
> Just don't do it. If you don't have enough money for two securable phones, buy one good phone and use the software compartmentalization tools I'll discuss in my guides, such as GrapheneOS's secondary user profiles.

## Choosing hardware

Realistically, there aren't *that* many real choices for picking good hardware for your mobile phone. The choice itself is further restricted by what operating system you're ultimately going to pick and, for that, you only have three "paranoid" choices. They are:

<ul class="fa-ul">
<li markdown="1">
<span class="fa-li fa-brands fa-debian"></span> A fully free software operating system for whom every single component is open source, namely [PureOS](https://pureos.net/){:target="_blank"}.

- This is a true Linux system, based on [Debian](https://www.debian.org/){:target="_blank"}.
- It runs only on niche hardware built and sold by a company called [Purism](https://puri.sm/){:target="_blank"}.
- It's relatively expensive and probably out of budget for most sex workers, even many mid- and high-end escorts like me.

If you're truly a puritan and devoted to fully free software, I suggest trying a [Librem5 running PureOS](https://puri.sm/products/librem-5/){:target="_blank"}.

</li>
<li markdown="1">
<span class="fa-li fa-brands fa-apple"></span> An Apple device, namely [iOS](https://www.apple.com/os/ios/){:target="_blank"}.

- You must buy Apple hardware if you want to run Apple software. Shrug?

A lot of people are going to choose Apple iPhones for a variety of reasons, mostly stemming from perceived ease of use, and I don't blame them!
</li>
<li markdown="1">
<span class="fa-li fa-brands fa-android"></span> An [Android](https://source.android.com/){:target="_blank"}-derived operating system, such as [LineageOS](https://lineageos.org/){:target="_blank"} or [GrapheneOS](https://grapheneos.org/){:target="_blank"}.

- [LineageOS runs on a fair number of devices](https://wiki.lineageos.org/devices/){:target="_blank"}, including some rather inexpensive hardware, making it a good choice for the "paranoid" sex worker on a budget.
- [GrapheneOS runs *only* on Google Pixel phones](https://grapheneos.org/faq#supported-devices){:target="_blank"}, although as of this writing Motorola support has been announced and is expected.

If you can't afford a Google Pixel, consider LineageOS running on inexpensive hardware. Otherwise, you're buying a Google Pixel and installing GrapheneOS onto it.
</li>
</ul>

I have used all of the above options except for the Librem5 running PureOS by Purism.

My favorite is GrapheneOS. So, yup, I bought a Google Pixel.

### What about iPhones?

I no longer use mobile devices made by Apple. They feel unbearably restrictive to me. This is *mostly* a personal opinion, not a comment about their security.

iPhones and other Apple iOS devices like iPads can be used reasonably securely, and I have a lot of experience helping people secure them. They're generally very safe if you have good security habits, such as [setting and using strong unlock passcodes](https://support.apple.com/guide/iphone/set-a-passcode-iph14a867ae/ios){:target="_blank"} (not merely numeric PIN codes), [enabling automatic updates](https://support.apple.com/guide/iphone/update-ios-iph3e504502/ios){:target="_blank"}, and so on. However, since they're part of Apple's tightly controlled ecosystem, most people who use iPhones report that their life is made significantly more difficult when they fail to buy in to *every* Apple-provided convenience.

The security problem with iPhones isn't the iPhone. It's that other Apple services are not as secure (or securable) as their extremely well-protected phones. And if you're *paranoid*, you want to use tools that give you the ability to not only *secure* everything at any part of the system, but to easily *abandon* the entire system if you one day need to.

Apple makes it hard to leave them. They want to lock you in to using Apple products and services. In contrast, I prioritze data portability and product interoperability because that is the only way to protect myself from the system or platform I'm using, should it ever betray me.

In other words, if Apple truly loved you, they'd let you go.

That all said, here are my Apple-specific recommendations for how to use an iPhone securely:

- [Disable and delete all biometric unlock methods](https://www.apple.com/legal/privacy/data/en/face-id/){:target="_blank"}, including Face ID and Touch ID.
    - Find this option in Settings &rarr; Face ID &amp; Passcode &rarr; enter your passcode &rarr; Reset Face ID.
- [Turn on Apple's Advanced Data Protection (ADP)](https://support.apple.com/en-us/108756){:target="_blank"}.
    - Find this option on iOS in Settings &rarr; tap your name &rarr; iCloud &rarr; Advanced Data Protection &rarr; Turn on Advanced Data Protection.
    - Advanced Data Protection can and should also be enabled from your macOS laptop or desktop computer, if you have one.
        - Find this option on macOS in  &rarr; System Settings &rarr; click your name &rarr; iCloud &rarr; Advanced Data Protection &rarr; Turn On.
    - Turning on Apple's ADP enables it for your entire Apple iCloud account and all compatible devices; you cannot enable it on a per-device basis.

## Install [GrapheneOS](https://grapheneos.org){:target="_blank"}

Paranoia notwithstanding, [GrapheneOS strikes a fantastic balance](https://grapheneos.org/features){:target="_blank"} between usability, compatibility, and security. It's my recommended mobile phone operating system for any sex worker who needs serious protections without the desire to become a code-level free software expert, themselves.

Switching to GrapheneOS is not without pain points, but that's because switching from any operating system to another comes with a learning curve. If you're switching away from an Apple iOS device, you'll find a lot of things take some getting used to. If you're switching from Google's proprietary version of Android, you'll notice a lot is familiar but takes a bit more setting up.

Regardless of where you're switching from, GrapheneOS has broad compatibility with apps and services that you probably depend on, so you can just start using it right away. But it also offers more private alternatives, making it easy to incrementally improve your security as you gain familiarity and confidence with its ecosystem.

The [GrapheneOS Web installer](https://grapheneos.org/install/web){:target="_blank"} provides clear instructions that are easy to follow and is the recommended way to install GrapheneOS for most users. Once you have your Google Pixel in hand, you can immediately go get GrapheneOS and install it on your new phone.

{:.align-center}
[Get GrapheneOS](https://grapheneos.org/install/web){:.button target="_blank"}

## Set up your user profiles in GrapheneOS

One of the most compelling reasons for sex workers to use GrapheneOS is [its support for Android's user profiles feature](https://grapheneos.org/features#improved-user-profiles){:target="_blank"}.

User profiles make it easy to use one physical phone for more than one work persona or identity. As of this writing, multiple user profiles is also the only way to [get multiple Signal Private Messenger profiles]({% link resources/for-providers/signal-for-sex-work/index.md %}#getting-multiple-signal-profiles) short of having two physical phones.

If you're a visual learner, watch Naomi Brockwell's quick introduction explaining GrapheneOS user profiles:

{% include embed-youtube.html vid="YB01HHFitFA" %}

As she also explains, each user profile on an Android-based operating system provides an isolated environment. You can install different apps in different user profiles, give each of those installations different privileges, or otherwise permit those apps different levels of access to the underlying system or your data. This feature really makes it feel like you have more than one phone, while providing the convenience of only carrying one around with you.

There are two kinds of user profiles available to you on GrapheneOS:

- Owner profile, sometimes also called an administrative user.
- Secondary profiles, sometimes also called standard, unprivileged, or additional users.

The owner profile is special. It has certain privileges that secondary profiles cannot be granted. The owner profile is the one you log into and set up first upon completing a GrapheneOS installation.

After you unlock your phone's owner profile, you can create secondary profiles to serve a number of different purposes. You might use them to provide a workspace for a second work persona, experiment with unfamiliar apps, or further restsrict your use of apps that are especially annoying, addictive, or otherwise dangerous. Exactly how or if you set up any secondary profiles is up to you, but I think you'll find them useful.

My recommendations for using GrapheneOS user profiles:

- Use the Owner profile *solely* for administering the phone's system itself.
    - Install most apps for other user profiles from this profile, but immediately disable them after installation.
        - Disable an app on GrapheneOS by going to Settings &rarr; Apps &rarr; See all apps &rarr; tap the app &rarr; Disable.
        - Exempt any app that you need for administering the phone, such as some baseband carrier apps.
- Relegate *all* daily phone use to one of a number of secondary profiles.
    - See [Set up your secondary user profiles in GrapheneOS](#set-up-your-secondary-user-profiles-in-grapheneos).
- Set strong passcodes, not merely numeric PIN unlock codes, for *every* user profile.
    - It's *okay*, albeit not great, to use the same passcode for secondary profiles of more-or-less equal sensitivity.

### Set up your Owner profile in GrapheneOS

As mentioned earlier, the owner profile in GrapheneOS is special. There are some things you can only do when working within this profile that you can't do when logged into secondary profiles. This is by design.

When you first start up a new GrapheneOS phone, you must set up the Owner profile before you can do anything else. If you were not "paranoid," you could run through the new profile setup wizard and just begin using your phone like any other. Install whatever apps you want, set up your device settings as you see fit, and so on.

However, doing things that way means you aren't taking advantage of the heightented compartmentalization features GrapheneOS offers. I recommend setting things up a little more intentionally.

My recommendations for setting up your Owner profile in GrapheneOS:

- Enable multiple user profiles, which can only be done from this profile.
    - Find this toggle in Settings &rarr; System &rarr; Users &rarr; Allow multiple users.

### Set up your secondary user profiles in GrapheneOS

Think of a secondary user profile in GrapheneOS like a separate "virtual" phone.

These profiles are granted broad yet limited privileges on the phone, and are isolated from other profiles. This makes a secondary profile perfect for compartmentalizing one of your personas or identities from another. It also means you can "turn off" the phone for a given persona while it's still turned on for another.

As a sex worker, you probably have at least two personas:

- Your legal, or government identity.
- Your work, or public persona.

I don't think most of you would be too surprised to learn that {{ site.title }} is not the name governments know me by. It *is* my "real" name, and I *do* go by this name in a great many social and personal contexts. But I don't want an app that knows my government name to know this name, too. Likewise, I don't want an app that knows me by this name to know my government name.

That's a job for user profiles!

Another nice perk of using profiles this way is that when you want to clock out of work from a certain persona, you just log out of that user profile. All the apps installed in that profile will close, and the profile's data will be put to rest. You won't receive any texts or alerts from any VoIP number, email account, or other app installed in that user profile until you log back in.

As mentioned earlier, exactly how you set up secondary profiles is somewhat personal, but the point is that you set up at least some. Consider starting with a minimal set of profiles and adding more if you feel you outgrow them or want more separation.

Secondary user profiles can only be created when you are logged into the Owner profile. To create a secondary profile:

1. Log into the Owner profile on your GrapheneOS device if you are not already.
1. Go to Settings &rarr; System &rarr; Users &rarr; Add user.
1. Give your new user profile a name based on its *purpose* (like "Escorting"), not your persona's name.

My recommendations for setting up your secondary user profiles in GrapheneOS:

- Create a secondary user profile for your government identity.
- Create another secondary user profile for each of your work personas.
    - If you have an escort persona and a massage persona, this means you'll add two more personas, in addition to the profile for your government identity.
    - To avoid doxing all your personas to anyone looking at your phone in person, name the profiles after the persona type, not your actual name.
        - For example, you might name the profiles `Escorting` and `Massage`.
        - Do *not* name profiles with your persona's actual names, as they will appear side-by-side on your screen.
- Enable forwarding notifications to the current user.
    - Find this option in Settings &rarr; System &rarr; Users &rarr; Send notifications to current user.
- Disallow a secondary profile from running in the background unless it is a work persona or part of a set of profiles that you need to switch between to complete one larger task.
    - Find this option in Settings &rarr; System &rarr; Users &rarr; tap the profile &rarr; Allow running in background.
    - Your work personas should always be allowed to run in the background, as the larger task they are assigned to is, y'know, working.
- Disallow a secondary profile from access to the phone and SMS/text message service unless it is one of your daily driver profiles. 
    - Find this option in Settings &rarr; System &rarr; Users &rarr; tap the profile &rarr; Turn on phone calls &amp; SMS.
    - Personas that use VoIP apps do *not* need to have this option enabled, so leave this disabled for those, too.

{:.button-container}
{% include link-as-button.md anchor_text="Previous: For Providers" url=page.prev %}
[<span class="fa-icon fa-solid fa-folder-tree"></span> Up](../){:.button}
