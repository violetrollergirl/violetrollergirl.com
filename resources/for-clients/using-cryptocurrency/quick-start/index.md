---
title: Violet Rollergirl's Cryptocurrency Quick(est) Start
description: >
    Brand new to crypto? Start here to learn how to quickly get and
    send payments to your providers directly in crypto.
prev: resources/for-clients/using-cryptocurrency/
last_modified: Wed Oct  1 18:41:11 EDT 2025
---

# Violet Rollergirl's Cryptocurrency Quick(est) Start

If you're reading this page, you're ready to pay in crypto. Awesome! Only one problem: you don't have any, and haven't done this before.

Here's what you should do. Many of these steps only have to be done once. Once finished, you can simply buy more crypto and then send it to your provider whenever you need to make payments.

> **&#9432; This page is for clients or customers.** If you are a provider, seller, or vendor you should instead read [{{ site.title }}'s Resources for Providers Using Cryptocurrency (as a Sex Worker)]({% link resources/for-providers/using-cryptocurrency/index.md %}).
>
> **&#9432; This guide presumes you have no existing digital payment services at all.** If you already have a digital payment app that supports cryptocurrency and want to use that one, see my [list of cryptocurrency guides]({% link resources/for-clients/using-cryptocurrency/index.md %}#list-of-guides).

## In this guide

1. [Overview: How to understand what's happening here](#overview-how-to-understand-whats-happening-here)
1. [Create your Coinbase account](#create-your-coinbase-account)
1. [Add a payment method to your Coinbase account](#add-a-payment-method-to-your-coinbase-account)
1. [Complete your crypto purchase via Coinbase](#complete-your-crypto-purchase-via-coinbase)
1. [Ask your provider where to send your payment](#ask-your-provider-where-to-send-your-payment)
1. [Send crypto to your provider](#send-crypto-to-your-provider)
1. [Have questions? I'm here for you!](#have-questions-im-here-for-you)

## Overview: How to understand what's happening here

Using cryptocurrency is just like using money in another currency. Let's say you have a bank account full of United States Dollars (USD), but you're taking a trip to France. When you arrive in France, you need to change your money from US Dollars into Euros, the local currency accepted by businesses there.

That's exactly how cryptocurrency works: you start with US Dollars, and you'll exchange those for one of any number of other (crypto)currencies. Those currencies have names like Bitcoin, Ethereum, Zcash, Monero, and more. Most providers accept a lot of different cryptocurrencies, but if they accept crypto at all, they also almost certainly accept all of those.

So, here's what we'll do:

1. Sign up for an account at a *cryptocurrency exchange*.
    - We'll use a popular one, called Coinbase.
    - This is the crypto equivalent of the foreign currency exchange at the airport.
1. Link your bank account or other traditional payment method (like a debit card) to your Coinbase account.
1. Use Coinbase to *buy* crypto (really *exchange* dollars for crypto) that your provider accepts. If you're not sure, ask your worker what crypto to buy.
1. Finally, make your payment by sending the crypto you bought to your worker.

Here are some key things to keep in mind:

- You will need your legal identity documents, such as a driver's license, at the ready.
- Making your account only takes about 30 minutes, but&hellip;
- &hellip;you still may not be able to actually pay in crypto for another day. It depends! Be patient and plan ahead.

## Create your Coinbase account

Creating your Coinbase account is a multi-step process that requires you to:

- verify an email and phone number
- submit personal information to Coinbase to verify your legal identity
- upload your legal identity documents

Coinbase requires this because, despite claims to the contrary, Coinbase is *not* a wallet but rather a banking service. They also periodically change their account creation process due to changing financial regulations but thankfully the process only needs to be performed once and they maintain good guides on their site:

{:.align-center}
{% include link-as-button.md anchor_text="Create a Coinbase Account" url="https://help.coinbase.com/en/coinbase/getting-started/getting-started-with-coinbase/create-a-coinbase-account" target="_blank" %}

Once your Coinbase account is created and validated, you can proceed to adding a payment method.

## Add a payment method to your Coinbase account

With a Coinbase account, you can use their currency exchange services but you still need to supply Coinbase with payment information so that you can swap your existing US Dollars (or other local currency) into cryptocurrencies. Coinbase enforces different purchase limits on different payment methods, but in general any payment method you have like a debit card or bank account will work. They also have good guides to help you add a payment method, so follow those instructions now:

{:.align-center}
{% include link-as-button.md anchor_text="Add a Coinbase Payment Method" url="https://help.coinbase.com/en/coinbase/getting-started/add-a-payment-method/manage-method" target="_blank" %}

Depending on the payment method you chose and how you linked it, you may be able to buy crypto immediately or you may need to validate the method with a confirmation loop of some kind. Either way, once linked and activated, you will see your purchase limits on Coinbase increase and are ready to get your first crypto coins.

## Complete your crypto purchase via Coinbase

Once you [create your Coinbase account](#create-your-coinbase-account) and [add a payment method to it](#add-a-payment-method-to-your-coinbase-account), you can use Coinbase to exchange some of your existing local money into crypto. This is Coinbase's entire purpose for existing, so they make it really easy to do this. Keep the following points in mind when buying crypto:

- get enough crypto to cover both the price of the service or good you're paying your worker for as well as covering Coinbase's own service fees, which fluctuate.
    - A good rule of thumb is to buy 20% more crypto than you think you'll actually need, but in practice it rarely amounts to that much overhead.
- choose a cryptocurrency your provider supports. You can ask, or you can stick to this ordered list of the popular currencies:
    1. Bitcoin (BTC)
    1. Ethereum (ETH)
    1. Zcash (ZEC)
    1. Monero (XMR)
- you can make a purhcase quickly but, if this your first time using Coinbase, you may not be able to send those funds anywhere until a short waiting period is over, which usually lasts for about a day.

{:.align-center}
{% include link-as-button.md anchor_text="How to Buy Crypto on Coinbase" url="https://help.coinbase.com/en/coinbase/trading-and-funding/buying-selling-or-converting-crypto/how-do-i-buy-digital-currency" target="_blank" %}

At this point, Coinbase will show you that you have a positive crypto balance in your "wallet" (which is really a bank account, not a true wallet). You can now use that balance to pay your worker in crypto!

## Ask your provider where to send your payment

Now that you have a balance in crypto, you need to know where to send this payment so that your provider receives it.

Ask your provider:

> What's the address of your (Bitcoin, Ethereum, Zcash, or Monero) wallet?

{% assign links_group_donations = site.data.social_urls | find: "group_name", "Tip me" | first %}
{% assign zcash_donation_data = links_group_donations.items | where: "label", "Zcash" | first %}
{% assign zcash_donation_addr = zcash_donation_data.url | split: ":" %}

Your provider will send you back one of several things. It will either be:

- a long string of text that you can copy into your clipboard:

      {{ zcash_donation_addr[1]}}

- an image of a QR code that you can save to your phone's gallery:

    ![QR code showing Violet Rollergirl's Zcash donation address]({% link images/qr.zcash.violetrollergirl.gif %})

The above are examples of my own [Zcash donation addresses]({% link colophon/index.md %}#cryptocurrency-tips-and-donation-links). Don't use these unless you are intending to send me tips or donations! Use the one that your provider gives you.

## Send crypto to your provider

Now that you have your provider's wallet address, send your crypto there. Coinbase makes this easy, so follow their steps for sending crypto or watch their videos:

{:.align-center}
{% include link-as-button.md anchor_text="Coinbase: Steps to send crypto" url="https://help.coinbase.com/en/coinbase/trading-and-funding/cryptocurrency-trading-pairs/steps-to-send-crypto" target="_blank" %}

Here are some additional points for first-timers:

- Be certain you have entered the correct wallet address before you confirm your send!
- It's also usually acceptable to send your payment in two chunks:
    1. the first send is a small test transaction to ensure that the address is correct.
    1. the second send is the remainder.
- Regardless of how you send, be sure to send enough to cover any possible transaction fees. (Coinbase will often calculate these for you, but it never hurts to send a little somethin' extra, y'know?)

When your provider receives confirmation of your send, they will let you know!

## Have questions? I'm here for you!

Have questions? Ask your provider, or [contact me]({% link resources/for-clients/booking-guide/index.md %}#connection-methods) directly! I'm genuinely happy to help you get started using cryptocurrency and would only ask for [a tip or donation]({% link resources/for-clients/booking-guide/index.md %}#links-zcash) as a thank you!

{:.button-container}
{% include link-as-button.md anchor_text="Up" url="../" %}
