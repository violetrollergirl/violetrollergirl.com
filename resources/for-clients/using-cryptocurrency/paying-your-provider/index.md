---
title: How to pay your provider in crypto
description: >
    Learn how to get and send crypto to your provider's wallet
    address.
prev: resources/for-clients/using-cryptocurrency/
last_modified: Sat Oct  4 18:21:12 EDT 2025
---

# {{ site.title }}'s guide to paying your provider in crypto

No matter what crypto app you use, you'll need your provider's wallet address to send (crypto) money to them. It turns out all you have to do is ask for it!

> **&#9432; This page is for clients or customers.** If you are a provider, seller, or vendor you should instead read [{{ site.title }}'s Resources for Providers Using Cryptocurrency (as a Sex Worker)]({% link resources/for-providers/using-cryptocurrency/index.md %}).

## In this guide

1. [Ask your provider where to send your payment](#ask-your-provider-where-to-send-your-payment)
1. [Send crypto to your provider](#send-crypto-to-your-provider)
1. [Ask for confirmation of receipt](#ask-for-confirmation-of-receipt)

## Ask your provider where to send your payment

Once you have some crypto you'd like to spend on your provider, companion, or creator, you'll need to know where to send this payment so that they receive it.

> <span class="fa fa-solid fa-icon fa-triangle-exclamation"></span> Depending on the technology your provider uses, **each payment may have a unique receipt address so you should always ask your worker for the current address they are expecting you to send to!**

Ask your provider:

> What's the (Bitcoin, Ethereum, Zcash, Monero, etc.) receive address for this payment?

{% assign links_group_donations = site.data.social_urls | find: "group_name", "Tip me" | first %}
{% assign zcash_donation_data = links_group_donations.items | where: "label", "Zcash" | first %}
{% assign zcash_donation_addr = zcash_donation_data.url | split: ":" %}

Your provider will send you back one of several things. It will either be:

- a long string of text that you can copy into your clipboard:

      {{ zcash_donation_addr[1]}}

- an image of a QR code that you can save to your phone's gallery:

    ![QR code showing Violet Rollergirl's Zcash donation address]({% link images/qr.zcash.violetrollergirl.gif %})

The above are examples of my own [Zcash donation addresses]({% link colophon/index.md %}#cryptocurrency-tips-and-donation-links).

Do not use these specific addresses unless you intend to send *me, {{ site.title }}, specifically,* tips or donations! Instead, use the one that your provider gives you.

## Send crypto to your provider

Now that you have your provider's wallet address, send your crypto there. Sometimes, this is simply called a "withdrawal" or a "transfer." When you "withdraw" or "transfer" crypto to *your provider's wallet address* rather than your own, it is ultimately just a "payment."

Exactly how you do this depends on the specific crypto app you're using but regardless of the app you use, here are some additional points for first-time senders:

- Be certain you have entered the correct wallet address before you confirm your send!
- It's also usually acceptable to send your payment in two chunks:
    1. the first send can be a small test transaction to ensure that the address you entered is correct.
    1. the second send is the remainder.
- Regardless of how you send, be sure to send enough to cover any possible transaction fees. (The crypto app will often calculate these for you, but it never hurts to send a little somethin' extra, y'know?)

Click the button corresponding to the app you're using to send from:

{:.align-center}
[Send via Binance](https://www.binance.com/en/support/faq/detail/329c82f07443410b99fc3683ebf07490){:.button target="_blank"}
[Send via Coinbase](https://help.coinbase.com/en/coinbase/trading-and-funding/cryptocurrency-trading-pairs/steps-to-send-crypto){:.button target="_blank"}
[Send via CashApp](https://cash.app/help/3106-bitcoin-withdrawals){:.button target="_blank"}
[Send via Kraken](https://support.kraken.com/articles/360000672763-how-to-withdraw-cryptocurrencies-from-your-kraken-account){:.button target="_blank"}
[Send via PayPal](https://www.paypal.com/us/cshelp/article/how-do-i-transfer-my-crypto-help822){:.button target="_blank"}

## Ask for confirmation of receipt

When your provider receives confirmation of your send, they will let you know! If they don't, it's okay to ask them to acknowledge your send.

{:.button-container}
{% include link-as-button.md anchor_text="Previous: Resources for Clients Using Cryptocurrency" url=page.prev %} {% include link-as-button.md anchor_text="Home" url="/" %}
