---
title: Cryptocurrency wallet apps for sex workers
next: resources/for-providers/using-cryptocurrency/on-ramping/
prev: resources/for-providers/using-cryptocurrency/primer/
---

# Everything (and only) what you need to know about cryptocurrency wallets

A lot of people think getting started with cryptocurrency is hard. That might have been true a number of years ago, but it's not anymore. There are really good, easy to use apps, often called "wallets" or, more precisely, "wallet apps," that make setting up your cryptocurrency "accounts" really fast.

## In this article

1. [Choose and install your wallet app](#choose-and-install-your-wallet-app)
    1. [Zashi: Privacy-focused Zcash wallet app](#zashi-privacy-focused-zcash-wallet-app)
    1. [Cake Wallet: Privacy-focused Monero wallet app](#cake-wallet-privacy-focused-monero-wallet-app)
    1. [Using multiple wallet apps](#using-multiple-wallet-apps)
1. [Open your wallet app and you're good to go](#open-your-wallet-app-and-youre-good-to-go)
    1. [Quick safety note: backups and recover phrases](#quick-safety-note-backups-and-recovery-phrases)

## Choose and install your wallet app

Choosing a wallet app is really important. In some ways, it's a bit like choosing a Web browser. Different people have different needs, preferences, and even aesthetic choices. For me, as a sex worker and as a technologist, the most important considerations are which wallet:

- supports the private cryptocurrencies (Zcash and/or Monero) I need to use, and
- operates in a self-custodial way so I'm not re-introducing the risks of being de-banked by using a third-party service.

These are my two deal-breakers. If the wallet app doesn't support Zcash or Monero, then it's basically useless to me because it won't support the privacy-preserving technologies I rely on to keep my financial data private. Similarly, if the wallet app doesn't work in a self-custody manner, then it's not really a wallet, it's a teller window at a bank, which means I don't actually have any of my money on my person. (The bank is holding on to it for me.)

In addition to the two above considerations, I would also like my wallet app to work with some other time-tested privacy tools so that not only my financial transactions but also my use of the Internet is kept private and secure.

The cryptocurrency ecosystem evolves quickly, but as of this writing there are two very clear winners. I'll show you both.

### Zashi: Privacy-focused Zcash wallet app

If you're going to use Zcash (and I think you should; Zcash is the gold standard in private cryptocurrency technologies), the best wallet app to use is [Zashi Wallet](https://electriccoin.co/zashi/){:target="_blank"}. Zashi is a mobile phone app that can run on Apple iOS or Android devices, including [GrapheneOS](https://grapheneos.org/), the privacy-focused, de-Google-ified Android alternative. It is by far one of the easiest and most privacy-protecting Zcash wallet app.

{:.align-center}
{% include link-as-button.md anchor_text="Go install Zashi now" url="https://electriccoin.co/zashi/" target="_blank" %}

Zashi has some special features that make it especially attractive for sex workers:

- if you ever make a mistake and share your non-private (unshielded, or transparent) receive address for a client or customer to send you funds, Zashi automatically shields (makes private) your money for you. In the privacy coin ecosystem, we call this behavior "auto-shielding."
- every time you share your address with a client or customer from the app, Zashi automatically rotates your address for you and then keeps track of which addresses received money. We call this address auto-rotation, and it's yet another way to help you avoid revealing information about who you are in case you ever communicate about your cryptocurrency addresses over unsecured communication channels (like texting).
- your money will stay securely hidden and "private at rest" in the Zcash shielded pool, and yet whenever you need to pay for something in crypto, like your ads, you can send that payment in a huge range of cryptocurrencies (yes, including Bitcoin) directly out of your Zcash balance without leaving Zashi. What's even better is that your payment has no digital link at all to your wallet even when you're paying in non-private cryptocurrencies like Bitcoin because of the underlying decentralized exchange (DEX) protocol that automatically swaps your ZEC into the needed payment currency automatically and anonymously. [More on this later](#paying-in-bitcoin-when-you-only-have-zcash).
- you can "set and forget" extra and powerful privacy protections provided by the [Tor Project](https://torproject.org/){:target="_blank"} from within the app itself. I highly recommend enabling this; the Electric Coin blog shows you [how to enable Tor within Zashi](https://electriccoin.co/blog/zashi-2-1-enhanced-privacy-with-tor-beta/){:target="_blank"}.

I think Zashi is fast becoming the killer app for anyone who's at risk of being de-banked from the traditional financial system. As a self-custodial, auto-shielding, address-rotating, Torified, Zcash wallet with a fully private decentralized off-ramp to literally dozens upon dozens of supported cryptocurrencies, including Bitcoin, it's the one wallet we as sex workers should be using today if we can only use one wallet app.

The one caveat (for now) is that Zashi only supports *receiving* funds in Zcash. This means your client or customer will need to get Zcash to pay you, but thankfully this is very easy and can be done within the app itself, too. Moreover, the Zashi developers have accounced that this limitation is being worked on as well. For now, though, if you can't convince your clients or customers to send you Zcash, you'll need a second wallet that supports something they do want to send you.

For that, there's also good news. Just read on.

### Cake Wallet: Privacy-focused Monero wallet app

If, for some reason, you want to use Monero instead of (or in addition to) Zcash, or if you need a privacy-focused wallet app that can accept something other than Zcash, look at [Cake Wallet](https://cakewallet.com/){:target="_blank"}.

{:.align-center}
{% include link-as-button.md anchor_text="Go install Cake Wallet now" url="https://docs.cakewallet.com/get-started/#installing-cake-wallet" target="_blank" %}

Cake Wallet is perhaps most popular within the Monero community because, like Zashi, it is a self-custodial wallet app (although they call themselves "non-custodial," which means the same thing) that supports address auto-rotation and has Tor integration built-in. Unlike Zashi, Cake Wallet supports a whole slew of different cryptocurrencies, including non-private cryptocurrencies like old school Bitcoin proper. This means that you need to know a little bit more about what you're doing when you're using Cake Wallet than when you're using Zashi, but it's still pretty easy to figure out.

In addition, Cake Wallet also supports some other nice privacy-preserving features. These include:

- in-app currency swaps via [Trocador](https://noscript.trocador.app){:target="_blank"}, a currency exchange proxy site. If you need to turn your Monero into Bitcoin, or your Bitcoin into Monero, you can use Trocador's service from directly within the Cake Wallet app to do this easily. And you can turn on Cake Wallet's built-in Tor support for extra protection when using Trocador.

### Using multiple wallet apps

As I write this, the cryptocurrency ecosystem is very fragmented. Different wallet apps work with different cryptocurrencies, different "coins" are available on different "chains" as "tokens." It's all very confusing and annoying.

One of the effects of this fragmentation is that it's likely you'll find yourself needing to use more than one wallet.

However, if you stick with Zashi for your Zcash and Cake Wallet for your Monero and your Bitcoin (or Ethereum or whatever other non-private cryptocurrency you're ultimately pushed to use), you'll cover what I estimate is 80-90% of your use cases.

I personally use Zashi most often. After that, I use Cake Wallet. For what it's worth, if you really want to explore wallets and feel comfortable getting a bit adventurous with your choices, I also like [Edge Wallet](https://edge.app/){:target="_blank"} and [Ywallet](https://ywallet.app/){:target="_blank"}.

## Open your wallet app and you're good to go

This is the surprising part for a lot of people: once you open your self-custodial wallet app, you're immediately able to receive payments. That's literally all there is to it. No need to enter a name, make an account, verify your age, or prove your government identity. Get the right kind of wallet app, and you're instantly set up to make sales and accept deposits or payments, albeit interactively.

In every wallet app, you'll see a button labelled "Receive." This is the button you press to, you guessed it, reveal the way other people send you whatever cryptocurrency the wallet app supports. That's what we'll need to start getting crypto.

### Quick safety note: backups and recovery phrases

Wallet apps are *truly* like physical wallets, not bank accounts: if you uninstall the wallet app, or your phone is lost or gets stolen, and you don't have a backup somewhere, all the money in your cryptocurrency wallet is lost, too.

Another useful analogy, at least for those of us who have physical safe vaults at our our incalls, is that you should think of your self-custody wallet app like a physical vault in which you keep your cold, hard cash. Lose the key to the safe, and you lose access to the money inside. There is no bank teller you can go to beg for help from.

Thankfully, it's very easy to protect yourself from this kind of financial loss. To understand how it works, you should know a tiny little bit more about what happens when you open a self-custody wallet app on your phone for the first time.

When you install your wallet app of choice, it automatically generated what's called a wallet seed phrase, or recovery phrase, or BIP32/BIP39/BIP44 mnemonic code, or something to that effect. This is a fancy way of saying "the wallet app made up a secret passphrase that gives you control over your money." All of those terms mean the same thing.

Your wallet's seed phrase is usually a sequence of 12 to 24 words that, as soon as you start caring about your funds, you should probably write down somewhere safe. (I suggest using a password manager like [Bitwarden](https://bitwarden.com){:target="_blank"}.) Eventually, you may even want to memorize it. This secret recovery seed phrase or whatever you want to call it is your magic money spell, the incantation you can invoke to "magically" conjure your money using any wallet app that supports both your cryptocurrency and your recovery phrase algorithm. Almost all modern wallets support this cool feature, now.

If you memorize the words of your wallet's seed phrase in the right order, you can do some amazingly sci-fi-esque shit, like cross international borders carrying nothing at all, and still emerge on the other side able to access your funds again as soon as you get your hands on a smartphone with an Internet connection. It's like you're a mashup of Trinity from The Matrix and Natasha Romanov from the Marvel Cinemantic Universe or something. It's crazy that this works, but it does!

This seed phrase is actually the input to a cryptographic algorithm that's used to deterministically generate a multitude of cryptocurrency addresses that you fully control. Only you can see the value they store, and only you have the power to spend from those addresses. (That's why you don't want to share this secret phrase with anyone else; anyone who knows the secret phrase will have the same power you do.) Despite generating a ton of addresses that may, over time, contain different amounts, your wallet app sums them all to show you a single, total balance.

{:.align-center}
{% include link-as-button.md anchor_text="Previous: Primer" url=page.prev %} {% include link-as-button.md anchor_text="Up" url="../" %} {% include link-as-button.md anchor_text="Next: On-ramping" url=page.next %}
