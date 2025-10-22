---
title: "On-ramping: acquiring cryptocurrency funds"
description: >
    Learn about various ways you can get crypto (as a sex worker).
    Getting paid in crypto is easiest, but there are other ways!
prev: resources/for-providers/using-cryptocurrency/wallet-apps/
next: resources/for-providers/using-cryptocurrency/off-ramping/
last_modified: Wed Oct 22 16:59:12 EDT 2025
---

# On-ramping: acquiring cryptocurrency funds

> &#128161; This is part of [{{ site.title }}'s Guide to Using Cryptocurrency (as a Sex Worker)]({% link resources/for-providers/using-cryptocurrency/index.md %}). If you haven't yet read the primer, consider starting there!

Now that you have a privacy-preserving [cryptocurrency wallet app]({% link resources/for-providers/using-cryptocurrency/wallet-apps/index.md %}) and can receive funds in a privacy coin like Zcash or Monero, it's time to start acquiring some funds. The cryptocurrency world calls this "on-ramping," using the analogy of a highway on-ramp from one place (the fiat economy) to another (the so-called "crypto-native" economy, or whatever).

## In this article

1. [Getting paid directly in crypto](#getting-paid-directly-in-crypto)
    1. [Getting paid in Zcash when your client or customer only has Bitcoin](#getting-paid-in-zcash-when-your-client-or-customer-only-has-bitcoin)
1. [MintPay: Fiat income with cryptocurrency withdrawals](#mintpay-fiat-income-with-cryptocurrency-withdrawals)
1. [Converting fiat currency to cryptocurrency](#converting-fiat-currency-to-cryptocurrency)
    1. [Buy ZEC via cryptocurrency exchanges](#buy-zec-via-cryptocurrency-exchanges)
    1. [Buy Monero in Cake Wallet](#buy-monero-in-cake-wallet)

## Getting paid directly in crypto

I'll be blunt: the easiest way for many of us to start getting crypto is to just get a client or customer to pay or tip us in cryptocurrency. This simply avoids any interaction with the fiat economy entirely. This is of course even better if we get paid directly in a privacy coin like Zcash or Monero and don't have to convert, exchange, or swap the money we make into one of these privacy-preserving cryptocurrencies, but [my favorite Zcash wallet app, Zashi]({% link resources/for-providers/using-cryptocurrency/wallet-apps/index.md %}#zashi-privacy-focused-zcash-wallet-app), even makes it easy to [receive deposits in Zcash from a range of cryptocurrencies](#getting-paid-in-zcash-when-your-client-only-has-bitcoin).

### Receiving the same cryptocurrency being sent

The simplest way to get paid in crypto is to simply receive the same cryptocurrency your client or customer has to send you. More often than not, this is likely to be Bitcoin, because all of the major cryptocurrency exchanges support that. My more privacy-conscious clients actually prefer paying directly in Zcash, though, which is why I have both Zashi (the most private Zcash wallet app) and Cake Wallet (a privacy-focused wallet app that supports most other major currencies, but not yet Zcash); together, these two wallets let me accept dozens upon dozens of cryptocurrencies without needing to swap or exchange one currency for another.

To get paid in this situation when you don't need to perform a currency swap, find the "Receive" button in your wallet app. Every wallet app makes this button very big and clear, because everyone likes getting paid and that's what wallet apps are for. Tap or click the Receive button and you'll be presented with options to reveal the full address, a QR code of the address, and sometimes also other ways to share the address of your wallet such as by sharing a link. (This is exactly [how my own cryptocurrency tips and donation links work]({% link colophon/index.md %}#cryptocurrency-tips-and-donation-links), by the way.)

Send the address or the generated QR code to your client or customer however you're already talking with them. Ideally, you're communicating over [Signal Private Messenger](https://Signal.org/){:target="_blank"} but any method of sending them some text or an image, including email or text message, will work. Have them press the complementary "Send" button in their wallet app, enter the address you gave them, whether via copy-and-paste or by scanning the QR code you showed them, and you'll have your money a few moments after they confirm the transaction on their side.

I've also written a complementary guide to this one for clients that explains the whole process from the client perspective, so feel free to point your client or customer at that page on my site:

{:.align-center}
[Paying your provider]({% link resources/for-clients/using-cryptocurrency/paying-your-provider/index.md %}){:.button}

Zashi even has a "Request" button in its "Receive" screen that lets you enter an amount you'd like to receive and embeds this amount into a QR code that you can display, or save as an image to send. If your client or customer also has Zashi (or any other wallet app that supports Zcash QR codes), they can just scan the QR code to send you exactly that amount of money in Zcash's cryptocurrency, called *ZEC, the Zcash Electric Coin*.

You can think of Zashi's "request via QR code" feature like a simplistic point-of-sale system. I love it because it's perfect for us as providers since we're so often interactively requesting payment from customers and clients who need things to be as easy as "scan-and-send."

### Getting paid in Zcash when your client or customer only has Bitcoin

Zashi also has a neat feature worth knowing about that makes it possible for you to receive cryptocurrency deposits (or even payments!) regardless of whether your client or customer will send you Zcash directly. It's called a "swap deposit," and it's one way I make paying me in cryptocurrency easy for clients who won't deal with anything except Bitcoin, Ethereum, or whatever their cryptocurrency of choice is.

To perform a swap deposit you'll ideally need a second wallet that supports the currency your client or customer wants to pay you in; this is why I use a combination of Zashi with Cake Wallet. In the example below, let's assume your client wants to pay in Bitcoin, but you want to receive the most private currency you can as quickly as you can, which is shielded Zcash in Zashi.

The way we do this is by initiating a currency swap trade, but we'll have the client play the role of the seller while we act as the buyer. Put another way, we are where failed trades will be refunded, and we'll also be where successful trades are sent. This means the "trade" actually serves as a full cross-currency, cross-chain payment in one fell swoop.

**Do this** to get paid from a client or customer by performing a swap deposit in Zashi using your Cake Wallet as the "refund" address:

1. Open Cake Wallet to the wallet of the cryptocurrency your client is sending you, such as Bitcoin.
1. Tap the **Receive** button. This reveals your own wallet's recipient address.
1. Copy your own wallet's recipient address and make a note of it somewhere. We'll use this as the "refund" address in Zashi's Swap feature.
    - I like to send this to myself using [Signal Private Messenger's "Note to self" feature](https://support.signal.org/hc/en-us/articles/360043272451-Note-to-Self){:target="_blank"}.
1. Open your Zashi wallet.
1. Tap the **More&hellip;** button to reveal Zashi's advanced wallet functionality drawer.
1. Tap **Swap ZEC with NEAR Intents** to open Zashi's decentralized exchange (DEX) integration.
1. In the **From** cryptocurrency selection drop-down menu, choose the currency (and network) your client or customer wants to send. In this example, we'll choose `BTC` (Bitcoin on the main Bitcoin network).
1. In the **Refund Address** field, paste the receive address of your own self-custodial wallet that you noted earlier.
1. In the **Amount** field, enter how much you're asking your client or customer to pay.
    - This is the exact amount you expect to receive in ZEC. Any additional funds will be sent to the Refund Address you entered earlier.
    - You don't need to calculate transaction fees yourself; you'll get an automated estimate for this shortly.
1. In the **To** section, choose a **slippage tolerance**, that is, how much *more* than the target price your client or customer is likely comfortable paying.
    - I tell clients that this covers "all transaction and payment processing fees, inclusive."
    - I usually leave this at its default of `1%`. This is low enough that it's usually a much cheaper option than many fiat services such as wishlists or tipping sites.
    - You can set a custom slippage tolerance if you want to be extra sure the swap succeeds and you think your client or customer will not care much about the increase in total price.
1. Tap the **Get a quote** button to generate a swap trade quote with a total estimate, including fees and any extra price slippage.
1. Review the quote. It'll look something like what's shown in the screenshot below:

    ![Screenshot showing a swap quote in the Zashi wallet app.]({% link resources/for-providers/using-cryptocurrency/on-ramping/screenshot.zashi.swap-deposit.review-quote.png %})

1. Tap **Confirm** to generate the swap trade's address, amount, and QR code.
1. Show, share, or send this payment information to your client or customer.
    - Tell your client or customer that they have about 1 hour to confirm the send.
    - The payment address shown here is *ephemeral* (temporary), much like other cryptocurrency shopping cart checkout pages. You cannot reuse it ever again.
1. Tap the **I've sent the funds** button.

At this point, the swap trade is "`pending deposit`." Remember, it's actually *your client or customer* who's sending funds, not you. Moreover, they're not sending funds directly to you, but rather to the decentralized exchange to which you've requested a currency swap from their currency into yours.

The address shown in the quote confirmation isn't your address, but rather a deposit address for the underlying DEX associated with the currency swap trade you were quoted. This is why the address will eventually expire and why your client or customer needs to send the funds sooner rather than later.

When your client or customer actually sends those funds to the exchange's deposit address, the exchange will attempt to make the trade between currencies. When it does, one of two things will happen:

- If the swap trade **succeeds**:
    - your Zashi wallet app will see the receipt of exactly the amount you've requested and will immediately auto-shield it, making your funds completely private.
    - your Cake Wallet app will see any overage paid, i.e., the difference betweent the slippage tolerance you set and the actual realized slippage of the trade as it was made, "refunded" to you from the exchange. This amount is also now yours, completely immune from chargebacks.
- If the swap trade **fails**:
    - your Zashi wallet app will report the trade as unsuccessful for whatever reason, but&hellip;
    - &hellip;your Cake Wallet app will see *all* of the original currency (Bitcoin, in this example), received as a "refund" and is completely immune from chargebacks. You can now try the swap again or use another exchange to swap into Monero. (I like Cake Wallet because [Trocador, a centralized exchange aggregator and proxy site](https://noscript.trocador.app/){:target="_blank"} is built into Cake Wallet!)

What's clever about this is that no matter what happens, *you* receive the money the client or customer sends. Moreover, you are never interacting directly with the client's wallet; there's no next-neighbor connection between you and them. You only ever interact with the currency exchanges, keeping any digital association between you and your client or customer to an absolute minimum for ultimate discretion.

For some of us, however, getting paid directly in crypto seems like a stretch. Our clients or customers are wary of cryptocurrency, they don't have the technical skill to do it, they have no existing cryptocurrency funds themselves, or they don't have the same cryptocurrencies that we want to accept payments in. I'll address all of these points in one of my other articles, ["How and why to convince clients and customers to pay us in cryptocurrency"]({% link resources/for-providers/using-cryptocurrency/convincing-clients/index.md %}) but, for now, let's talk about on-ramping in other ways.

## MintPay: Fiat income with cryptocurrency withdrawals

{% assign x = site.data.social_urls | find: "group", "Tip me" | first %}
{% assign mintpay = x.items | where: "label", "MintStars" | first %}

One newer option available specifically for online creators, including adult creators, is *MintPay*, or the "tip" feature available via [MintStars.com](https://mintstars.com/){:target="_blank"}. If you're familiar with content sites like OnlyFans, you can think of MintStars as a crypto-friendly alternative except, unlike OnlyFans, people who want to send you money don't need to make an account or subscribe to you before tipping you.

Fans and customers can send you tips using their debit or credit card, and when you receive a tip on MintStars it arrives instantaneously to your MintPay balance. You can then withdraw that balance to either a traditional bank account, or a cryptocurrency wallet that supports the token MintStars pays out in. At the time of this writing, you can only withdraw USDC (on the Polygon network) when choosing the crypto withdrawal option.

{:.align-center}
[![Screenshot of the MintStars withdrawal chooser.]({% link resources/for-providers/using-cryptocurrency/on-ramping/screenshot.mintstars.mintpay.withdrawal-chooser.png %})]({{ mintpay.url }} "{{ mintpay.description }}")

Withdrawing your MintPay balance to a [self-custodial crypto wallet such as Cake Wallet]({% link resources/for-providers/using-cryptocurrency/wallet-apps/index.md %}#cake-wallet-privacy-focused-monero-wallet-app) means you can avoid the need for a bank account, with the caveat that you need to have some Polygon (POL) coins so you can actually use your USDC tokens. But if you do, this makes MintStars an attractive on-ramping option for sex workers who are already de-banked or cannot otherwise access traditional banking services in their countries, including for me in the United States.

If you'd like to try the tipping experience out, consider sending me a tip [via my MintStars tip page]({{ mintpay.url }} "{{ mintpay.description }}"). To see what it looks like from the creator's side, see [MintStars Help: How to withdraw using crypto](https://mintstars.frontkb.com/en/articles/1967553). When or you want to sign up, I'd appreciate it greatly if you used my [MintStars creator referral link]({{ site.data.affiliates.mintstars }} "Sign up to MintStars via my referral link")!

{:.align-center}
{% include link-as-button.md anchor_text="Join MintStars (via Referral)" url=site.data.affiliates.mintstars target="_blank" %}

## Converting fiat currency to cryptocurrency

If you have existing fiat currency, like US Dollars (USD), Euros (EUR), or whatever, the simplest way to acquire Zcash funds ("ZEC") or Monero ("XMR") is to buy it. This works like any other foreign currency conversion. By way of analogy, when you're converting fiat currencies from one to another, you go to a currency exchange counter such as those that are at airports. There, you ask the person at the currency exchange service counter for an equivalent amount of the local currency given your available foreign currency.

Fiat-to-cryptocurrency conversions work just like that, except instead of going up to a physical counter, you visit the currency conversion service's website. Many such fiat-to-cryptocurrency exchanges exist. Today, the biggest and most famous of these are Coinbase, Kraken, and Binance, all of which will convert your fiat currency to Zcash.

While this method is very easy, the downside is that in *some* situations, you may be asked to show your government ID to the exchange, especially if you're trying to convert currencies in large amounts. This can be a big privacy risk if you've previously used that exchange's services to make other kinds of transactions that you don't want linked to you legal identity. In this case, consider creating a brand-new account from scratch.

The good news is that it's in no way shady to be buying privacy coins. These are just currencies and securities like any other. But by choosing to purchase a privacy coin, once you receive your ZEC or XMR, you can move it about freely and privately. You've effectively freed your money.

### Buy ZEC via cryptocurrency exchanges

If you already have some fiat currency like US Dollars and want to enter the cryptocurrency ecosystem, you can treat cryptocurrency like money from another country. Just as you might convert your dollars into Euros at a foreign currency exchange service desk when you visit France, so too can you convert your dollars into ZEC (or another cryptocurrency).

This means you need to open an account at a cryptocurrency exchange service, and this will almost certainly require you to upload your legal identity documents when opening the account or making your first exchange. Once you do this, though, you can move fiat funds into crypto and then from there move your newly-acquired crypto to a [self-custody wallet]({% link resources/for-providers/using-cryptocurrency/primer/index.md %}#self-custody-or-bust) (like [Zashi]({% link resources/for-providers/using-cryptocurrency/wallet-apps/index.md %}#zashi-privacy-focused-zcash-wallet-app)) outside of the exchange's control.

Since our clients face way less banking discrimination than we do, it's far more likely that they will be able to create and keep accounts with such exchanges open. However, if you are lucky enough to have avoided banking discrimination and can also do this, you can pretend to be your own client and walk through the steps I've written for how to do this in my client-facing guide just as they would:

{:.align-center}
[Crypto Quick(est) Start]({% link resources/for-clients/using-cryptocurrency/quick-start/index.md %}){:.button}

For regulatory compliance reasons, most big exchanges don't support Zcash's shielded mode, which means buying ZEC with fiat currency is one of a very small number of situations in which you may need to provide your transparent address (sometimes called a "t-addr") to the exchange to buy your ZEC. However, once purchased and sent directly to your Zashi wallet, the app will automatically shield your funds, making them private again.

> &#x1F4A1; As of this writing (August 2025), [Gemini is the one cryptocurrency exchange I'm aware of that supports Zcash's shielded addresses](https://www.gemini.com/blog/youre-one-step-closer-to-financial-freedom-with-shielded-zec-withdrawals){:target="_blank"}, including the universal address format that Zashi uses.

It's important to note that buying ZEC from one of these big exchanges and sending it directly to your Zashi wallet app is not the same as buying ZEC and then keeping it in the account you created at the exchange from which you bought the ZEC. By moving your funds out of the exchange and into your Zashi wallet app immediately, you are doing the equivalent of withdrawing your money from the bank so you can hold onto it (and protect it) yourself.

### Buy Monero in Cake Wallet

> I still need to write this section. It's basically the same as the above; go into Cake Wallet, hit the "Buy" button, and get some XMR into your wallet via whatever exchange they support.

{:.button-container}
{% include link-as-button.md anchor_text="Previous: Wallet apps" url=page.prev %} {% include link-as-button.md anchor_text="Up" url="../" %} {% include link-as-button.md anchor_text="Next: Off-ramping" url=page.next %}
