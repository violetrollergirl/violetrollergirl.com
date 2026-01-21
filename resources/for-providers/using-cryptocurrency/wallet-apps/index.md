---
title: Cryptocurrency wallet apps for sex workers
description: >
    Wallet apps make it possible to get and spend cryptocurrency.
    This page shows you which are the safest and most private to use.
next: resources/for-providers/using-cryptocurrency/on-ramping/
prev: resources/for-providers/using-cryptocurrency/primer/
featured_image:
  alt:
  url: images/gallery-originals/showered-in-fifty-dollar-bills.jpg
last_modified: Wed Jan 21 15:44:02 EST 2026
---

# Everything (and only) what you need to know about cryptocurrency wallets

> &#128161; This is part of [{{ site.title }}'s Guide to Using Cryptocurrency (as a Sex Worker)]({% link resources/for-providers/using-cryptocurrency/index.md %}). If you haven't yet read the primer, consider starting there!

> **&#9432; This page is for providers, companions, or creators.** If you are a client or customer, you should instead read [{{ site.title }}'s Guide to Paying your Provider in Crypto]({% link resources/for-clients/using-cryptocurrency/index.md %}).

A lot of people think getting started with cryptocurrency is hard. That might have been true years ago, but it's not anymore. There are really good, easy to use apps, often called "wallets" or, more precisely, *wallet apps*, that make setting up your cryptocurrency "accounts" shockingly fast and private.

## In this article

1. [Understand the "wallet" metaphor](#understand-the-wallet-metaphor)
1. [Wallet app selection criteria](#wallet-app-selection-criteria)
    1. [Wallet app dealbreakers](#wallet-app-dealbreakers)
    1. [Wallet app nice-to-haves](#wallet-app-nice-to-haves)
1. [Choose and install your wallet app](#choose-and-install-your-wallet-app)
    1. [Zashi: Privacy-focused Zcash wallet app](#zashi-privacy-focused-zcash-wallet-app)
    1. [Cake Wallet: Privacy-focused Monero wallet app](#cake-wallet-privacy-focused-monero-wallet-app)
    1. [Using multiple wallet apps](#using-multiple-wallet-apps)
1. [Open your wallet app and you're good to go](#open-your-wallet-app-and-youre-good-to-go)
    1. [Quick safety note](#quick-safety-note)
        1. [Backups and recovery phrases](#backups-and-recovery-phrases)

## Understand the "wallet" metaphor

Cryptocurrency is realized in software, not paper or metal. You cannot hold a Bit-"coin" in your hand, nor can you put one inside a literal wallet. Therefore, of course, cryptocurrency "wallets" are not literally wallets, but rather programs you install on your phone (your computer) that let you interact with cryptocurrency networks for the purposes of conducting transactions with others who are also using them.

The use of the term *wallet* is, of course, just a metaphor.

Case in point, this Web page isn't really a literal page (unless you've printed it out and are reading it on paper). Nevertheless, the metaphor of printed words on paper is useful for communicating something very important. If you've previously encountered a book, pamphlet, brochure, or magazine, then describing this section of my guide as a "page" instantly communicates what you can do here: read, learn, browse forward and backwards, even highlight the text, copy it, and more.

Metaphors are useful for talking about familiar characteristics in unfamiliar environments. But they are still just metaphors. That's why you'll often hear me describe crypto wallets more precisely as wallet *apps*.

Cryptocurrency apps are often called wallets because we use those apps to hold (or otherwise access) the money stored in them. When we need to pay for something with paper money, we dig around for our wallet in our purse or pocket, reach into one of its pouches and pull out a bill or some coins. When we pay for something with cryptocurrency, we similarly need to find the wallet app on our phone and tap a button labelled *Send*, *Transfer*, or *Withdraw*.

More elaborate physical wallets sometimes have multiple pouches in them, perhaps one for your US Dollars and another for your Euros or for that loose change you got from a recent corner store purchase, slots for credit or ID cards, and more. Similarly, more elaborate cryptocurrency wallet apps can hold multiple currencies, offer separate metaphorical pouches (confusingly also often called "wallets") for keeping certain funds discretely organized away from other funds, or even let you log in to various other electronic services with the use of identity credentials.

## Wallet app selection criteria

Different wallet apps have different features, so your choice of wallet app matters. In some ways, this is like choosing a Web browser. Different people have different needs, preferences, and even aesthetic choices.

### Wallet app dealbreakers

For me as a sex worker, as a trans woman, and as a privacy advocate, the most important considerations in choosing which wallet app or apps to use are that whatever I pick must:

- support the [private cryptocurrencies]({% link resources/for-providers/using-cryptocurrency/primer/index.md %}#two-kinds-of-cryptocurrencies-private-and-not-private) (Zcash and/or Monero) I need to use, and
- operate in a [self-custodial]({% link resources/for-providers/using-cryptocurrency/primer/index.md %}#self-custody-or-bust) way so I'm not re-introducing the risks of being de-banked by using a third-party service.

These are my two deal-breakers.

If the wallet app doesn't support Zcash or Monero, then it's not very useful to me because it won't work with the privacy-preserving technologies I rely on to keep my financial data private.

Similarly, if the wallet app doesn't work in a self-custody manner, then it's not really a wallet, it's a teller window at a bank. That means I don't actually have any of my money on my person, because the bank is holding on to it for me. I've personally experienced having my funds inaccessible because the financial institution unilaterally denied me access to my own money and one of the whole points of using cryptocurrency for me is to ensure this can never happen again.

### Wallet app nice-to-haves

The best privacy-focused wallet apps also offer other protections from privacy violations or even from making costly mistakes as I'm learning to use them. Here's my additional list of wallet app nice-to-haves:

- **Auto-shielding:** since Zcash has a public (transparent) and private (shielded) mode, good Zcash wallet apps will automatically shield (make private) any publicly visible funds deposited into them.
- **Address auto-rotation:** to receive crypto-money, wallet apps generate cryptocurrency network addresses, sometimes called wallet addresses, which you need to then share with a client or customer so they know how to pay you. Address auto-rotation means your wallet app automatically gives you a new wallet address to share with each new client, for each new payment, or whenever you demand it.
    - This means I can give different clients different addresses, frustrating any attempts they may make to collude with one another to compare notes about who they're paying. This feature is sometimes called "ephemeral addresses," but this is a misnomer, as all past addresses can still receive funds without interruption, so they aren't really temporary or ephemeral in any way.
- **Permissionless swap deposits:** this feature makes it possible for me to unilaterally protect a client or customer's payment privacy even if they refuse to use a privacy-preserving technology themselves, enabling me to [*receive* Zcash even if my client or customer pays me in another currency]({% link resources/for-providers/using-cryptocurrency/on-ramping/index.md %}#getting-paid-in-zcash-when-your-client-or-customer-only-has-bitcoin) like Bitcoin.
- **Built-in Tor protection:** keeping financial transactions private in the blockchain ledger system is great, but the best privacy-focused wallet apps also protect you from classic network surveillance via "set and forget" integration with [Tor Project](https://torproject.org/){:target="_blank"}'s anonymizing network proxy from within the app itself.
    - Using Tor makes it harder for anyone to know that you're even using a cryptocurrency network in the first place.
    - I highly recommend enabling this feature if your wallet app supports it. For example, the Electric Coin Company's blog shows you [how to enable Tor within Zashi](https://electriccoin.co/blog/zashi-2-1-enhanced-privacy-with-tor-beta/){:target="_blank"}.

Both of the wallet apps I'll recommend next support all of these features!

## Choose and install your wallet app

The cryptocurrency ecosystem evolves quickly, but as of this writing there are two very clear winners. I'll show you both.

### Zashi: Privacy-focused Zcash wallet app

[Zashi Wallet](https://electriccoin.co/zashi/){:target="_blank"} is the best beginner's privacy coin wallet app, period, full stop.

Its simple user interface may frustrate more experienced cryptocurrency users and there are some edge cases it can't account for on its own. However, this same simplicity is what novices will be blessedly relieved by. If you've never used a cryptocurrency wallet before, Zashi will delight you from the very first moment you open it.

I like to say that Zashi is to money what Signal Private Messenger is to speech: an app so uncompromising about financial privacy and yet so easy to use that it's almost impossible to fuck up. If you're just starting out in sex work today and you want only one simple app to communicate bookings with clients or sales to customers, [make it Signal Private Messenger]({% link resources/for-providers/signal-for-sex-work/index.md %}). Likewise, if you've never tried cryptocurrency before and you only want to use one app to [get clients or customers to pay you in crypto]({% link resources/for-providers/using-cryptocurrency/on-ramping/index.md %}), make it Zashi.

Zashi runs on Apple iOS or Android devices, including [GrapheneOS](https://grapheneos.org/){:target="_blank"}, the privacy-focused, de-Google-ified Android alternative:

{:.align-center}
{% include link-as-button.md anchor_text="Go install Zashi now" url="https://electriccoin.co/zashi/" target="_blank" %}

Some other unique features that make Zashi particularly attractive to privacy coin novices are:

- **Crosspay:** this feature is the easiest and most private way to make payments in Bitcoin or other cryptocurrencies directly out of your (shielded) Zcash balance without having to do any conversion or transaction fee math yourself! [More on this later]({% link resources/for-providers/using-cryptocurrency/off-ramping/index.md %}#paying-in-bitcoin-when-you-only-have-zcash).

I think Zashi is fast becoming the killer app for anyone who's at risk of being de-banked from the traditional financial system. By holding shielded ZEC, your money stays entirely private. Since Zashi's Crosspay and swap features are built on a permissionless, decentralized exchange (DEX) protocol called [NEAR Intents](https://near-intents.org/){:target="_blank"}, you still have access to the broader crypto ecosystem in a way no one can ban you from.

### Cake Wallet: Privacy-focused Monero wallet app

If you're already more experienced with cryptocurrency, or if you simply want a more elaborate wallet app, I suggest you look at [Cake Wallet](https://cakewallet.com/){:target="_blank"}.

Unlike Zashi, Cake Wallet supports holding a whole slew of different cryptocurrencies, including Monero, (shielded) Zcash, and many other non-private cryptocurrencies like old school Bitcoin proper. This means that as long as you're comfortable with its slightly more complex user interface, you can consolidate all of your crypto needs into this one single wallet app.

{:.align-center}
{% include link-as-button.md anchor_text="Go install Cake Wallet now" url="https://docs.cakewallet.com/get-started/#installing-cake-wallet" target="_blank" %}

Some other unique features that make Cake Wallet particularly attractive to privacy coin veterans are:

- **Swap provider switcher**: this feature lets you choose the currency conversion/swap service you want to use when you want to exchange one kind of cryptocurrency into another. Most notably, in addition to the NEAR Intents decentralized exchange, they also support [Trocador](https://noscript.trocador.app){:target="_blank"}, a centralized exchange currency conversion service proxy site, which provides an additional layer of identity protection when making currency swaps. You can further use Trocador over Tor from within the app.
    - For example, if you need to turn your Monero into Bitcoin, or your Bitcoin into Monero (a swap NEAR doesn't support), you can use Trocador's service from directly within the Cake Wallet app to do this easily. 

### Using multiple wallet apps

Although I find that the majority of my needs are met with just Zashi wallet, once you start learning about cryptocurrency you'll find it both easy and useful to at least dabble in other cryptocurrencies and wallet apps. There are multiple reasons for this:

- Sometimes, it's easier to get paid if you can "meet clients where they are" by using a wallet app that more natively supports whatever currency theirs does, without going through a decentralized exchange that may delay receiving your funds from less cooperative clients.
- Once you start amassing some wealth, you may want to mitigate some of your risk by spreading your holdings out across multiple wallet apps, cryptocurrencies, or both.
- Occasionally, you may run into a technical limitation that requires you to use another wallet app to get something done. This is becoming much rarer, but does still happen.

As I write this, the cryptocurrency ecosystem is also still very fragmented. Different wallet apps work with different cryptocurrencies, and different "coins" are available on different "chains" (sometimes called "networks") as "tokens." It's all very confusing and can get annoying and rather jargon-filled quickly.

This fragmentation itself may also push you to need more than one wallet. However, if you stick with Zashi for your Zcash and Cake Wallet for your Monero and your Bitcoin (or Ethereum or whatever other non-private cryptocurrency you're ultimately pushed to use), you'll cover what I estimate is 90-95% of your use cases.

I personally use Zashi most often. After that, I use Cake Wallet. For what it's worth, if you really want to explore wallets and feel comfortable getting a bit adventurous with your choices, I also like [Edge Wallet](https://edge.app/){:target="_blank"} and [Ywallet](https://ywallet.app/){:target="_blank"}.

## Open your wallet app and you're good to go

This is the surprising part for a lot of people: once you open your self-custodial wallet app, you're immediately able to receive payments. That's literally all there is to it. No need to enter a name, make an account, verify your age, or prove your government identity. Get the right kind of wallet app (always self-custodial or non-custodial), and you're instantly set up to make sales and accept deposits or payments interactively.

In every wallet app, you'll see a button labelled "Receive." This is the button you press to, you guessed it, reveal your address, which is the way other people send you whatever cryptocurrency the wallet app supports. That's what we'll need to start getting crypto.

### Quick safety note

Self-custody wallet apps are *truly* like physical wallets, not bank accounts: if you uninstall the wallet app, or your phone is lost or gets stolen, and you don't have a backup somewhere then all the money in your cryptocurrency wallet is lost, too.

Another useful analogy, at least for those of us who have physical safe vaults at our incalls, is that you should think of your self-custody wallet app like a physical vault in which you keep your cold, hard cash. Lose the key to the safe, and you lose access to the money inside. There is no bank teller you can go to beg for help from, even though the money is still right there, sitting just out of reach.

Thankfully, it's very easy to protect yourself from this kind of financial loss. To understand how it works, you should know a tiny little bit more about what happens when you open a self-custody wallet app on your phone for the first time.

#### Backups and recovery phrases

When you install your wallet app of choice, it automatically generated what's called a wallet seed phrase, or recovery phrase, or BIP32/BIP39/BIP44 mnemonic code, or something to that effect. This is a fancy way of saying "the wallet app made up a secret passphrase that gives you control over your money." All of those terms mean the same thing.

Your wallet's seed phrase is usually a sequence of 12 to 24 words that, as soon as you start caring about your funds, you should probably write down somewhere safe. (I suggest using a password manager like [Bitwarden](https://bitwarden.com){:target="_blank"}.) Eventually, you may even want to memorize it. This secret recovery seed phrase or whatever you want to call it is your magic money spell, the incantation you can invoke to "magically" conjure your money using any wallet app that supports both your cryptocurrency and your recovery phrase algorithm. Almost all of the good, modern wallets support this cool feature.

If you memorize the words of your wallet's seed phrase in the right order, you can do some amazingly sci-fi-esque shit, like cross international borders carrying nothing at all, and still emerge on the other side able to access your funds again as soon as you get your hands on a smartphone with an Internet connection. It's like you're a mashup of Trinity from The Matrix and Natasha Romanov from the Marvel Cinemantic Universe or something. It's crazy that this works, but it does!

This seed phrase is actually the input to a cryptographic algorithm that's used to deterministically generate a multitude of cryptocurrency addresses that you fully control. Only you can see the value they store, and only you have the power to spend from those addresses. (That's why you don't want to share this secret phrase with anyone else; anyone who knows the secret phrase will have the same power you do.) Despite generating a ton of addresses that may, over time, contain different amounts, your wallet app sums them all to show you a single, total balance.

{:.button-container}
{% include link-as-button.md anchor_text="Previous: Primer" url=page.prev %} {% include link-as-button.md anchor_text="Up" url="../" %} {% include link-as-button.md anchor_text="Next: On-ramping" url=page.next %}
