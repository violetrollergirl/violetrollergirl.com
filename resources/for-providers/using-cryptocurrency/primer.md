---
title: Cryptocurrency Primer for Sex Workers
description: >
    Violet Rollergirl's cryptocurrency primer gives you a
    foundation for understanding privacy-preserving finance tech.
---

# {{ site.title }}'s cryptocurrency primer for providers

If you're reading this, I hope it means you're going to give me the chance to convince you to start using cryptocurrency. As I write this, a lot of sex workers don't. And I get why.

Cryptocurrency has a reputation problem. It's often maligned for social reasons ("cryptobros"), ecological reasons ("blockchains are killing the planet"), and political reasons ("money is made up bullshit and a tool of the oppressor"). I'm not going to refute any of these points, except maybe the second one; both of the cryptocurrency technologies I'm going to recommend are moving away from compute-intensive Proof-of-Work (PoW) schemes to ecologically-friendly Proof-of-Stake (PoS) schemes.

This article is for my colleagues who are willing to give cryptocurrency a chance.

## In this article

1. [Why I use cryptocurrency as a provider](#why-i-use-cryptocurrency-as-a-provider)
1. [Two kinds of cryptocurrencies: private and not private](#two-kinds-of-cryptocurrencies-private-and-not-private)
    1. [Zcash in a nutshell](#zcash-in-a-nutshell)
    1. [Monero in a nutshell](#monero-in-a-nutshell)
1. [Self-custody or bust](#self-custody-or-bust)
1. [I'm convinced: what's next?](#im-convinced-whats-next)

## Why I use cryptocurrency as a provider

Broadly speaking, there are two big reasons to use cryptocurrency. Regardless of whether you are a sex worker or not, cryptocurrencies can be used as:

- a medium of exchange, i.e., you can use it like cash, to pay for things and accept payments from clients and customers.
- a store of value, i.e., you can use it like a bank account or an investment portfolio, to keep financial assets in a safe place, to trade it like stocks or mutual funds, or to hold onto it like a retirement plan.

Both are valid uses, but let's be frank: most of us are poor. We don't have large investment portfolios. We don't care about the crypto stock market. We aren't tracking the volatility metrics of a given coin. We are mostly just trying to survive, and so we aren't here to learn day trading strategies.

As a sex worker, I just want a way to pay for things (like [my ads]({% link index.html %}#links-group-ad-listings)) and a safe way for my clients and customers to pay me. Unfortunately, if we rely on the traditional financial system (often called the "fiat" economy), we are taking on a bunch of additional risks. These risks include:

- having our legal identity revealed ("doxxed") to our client or customer
- getting banned from the payment app we're using, or losing access to our bank account (getting "de-banked") and having our funds in it frozen or confiscated
- having sales reversed (suffering "chargebacks") by disgruntled, malicious, or scammy clients
- accidentally accepting counterfeit bills. It's even possible for a client not to know a bill they gave us is counterfeit!

Using cryptocurrency correctly solves every single one of these problems. That's why I use it.

Since cryptocurrency can function like digital cash, I don't need to sign up to a big tech service or open an account at the cryptocurrency equivalent of a bank to use it. Since it's not actually physical, but rather "mathematical" money, there's no chance at all of a client giving me counterfeit bills or coins. For the same reason, once a client or customer sends me money in a cryptocurrency transaction, there's no way for that sender to initiate a reversal or punish me with a chargeback.

There are also some additional benefits that using cryptocurrency has over fiat currency. I think the most awe-inspiring of these is how I can cross an international border with absolutely no physical device on my person, and yet still travel with all my money. In other words, cryptocurrency changes money from something you have (physical cash) into something you know (a secret pass phrase). If you memorize your cryptocurrency wallet's secret phrase, you'll always have access to your money in a way that no one can take away from you, even if you're traveling with nothing but your birthday suit.

## Two kinds of cryptocurrencies: private and not private

Some of the above, like the way cryptocurrency makes counterfeits impossible (cryptographers would say, "mathematically infeasible") is made possible regardless of which cryptocurrency you use. Bitcoin is the famous cryptocurrency, and it's had this counterfeit-proof characteristic since its inception. But some of the other things I talk about above are only possible if you strictly limit yourself to certain cryptocurrency technologies that are broadly classified as *privacy coins*.

A privacy coin is a cryptocurrency that keeps transaction data, such as a payment's sender, recipient, and amount, secret. Technically, privacy coins use math known as zero-knowledge proofs (*ZKPs*) to encrypt the details of each transaction so that only the sender and intended recipient know what's up. Only privacy coins do this. In contrast, using Bitcoin literally broadcasts your financial dealings for the world to see. I don't want to be doing that, nor do my clients.

There are a lot of privacy coins out there, but the only two that I'm going to talk about are the two most reputable and proven ones, the ones [I prefer to accept: Zcash and Monero]({% link colophon.md %}#cryptocurrency-tips-and-donation-links).

### Zcash in a nutshell

Zcash is the gold standard in cryptocurrency privacy technology. It was also the first privacy coin to popularize the idea of using zero-knowledge proofs to encrypt cryptocurrency transactions. It was super slow when it was first introduced in 2016, but has since become faster and better in so many ways. Today, Zcash is in its sixth major iteration (called a [*network upgrade*](https://z.cash/network/){:target="_blank"}), and now uses a technology called [zk-SNARKs](https://z.cash/learn/what-are-zk-snarks/){:target="_blank"}, which is a funny name that stands for Zero-Knowledge Succinct Non-interactive ARguments of Knowledge, to massively speed up the computation required for the strong privacy guarantees it gives us.

A lot of people who have been in the cryptocurrency space for a while have a lot of bad information about Zcash, which stem from an outdated understanding of its technology and app ecosystem.

Most people who rag on Zcash will tell you that it's "not private by default." This is just not true anymore. They are saying this because Zcash actually supports both a private and a non-private mode. In Zcash parlance, we call this "shielded" (private) and "transparent" (non-private/public) addresses and transactions. Back in the day, most apps that supported Zcash's currency token, called *ZEC (the Zcash Electric Coin)*, didn't support the shielded functionality, but that's since changed.

Good apps like [Zashi Wallet](https://electriccoin.co/zashi/){:target="_blank"} exist that not only fully support and default to Zcash's shielded mode, they also automatically convert non-private/public/transparent Zcash funds into their shielded/private equivalents. Zashi in particular also prevents you from spending unshielded funds, and even goes so far as to help protect your privacy from all kinds of other deanonymization techniques by making it dead-simple to use the famous privacy-enhancing anonymizing proxy called Tor from right within the app. Zashi is made by the same team that built Zcash itself. It's [my favorite wallet app for Zcash]({% link resources/for-providers/using-cryptocurrency/how-to-start.md %}#zashi-privacy-focused-zcash-wallet-app).

Some critics of Zcash will also describe it as having "too small an anonymity set," which is fancy-speak for "not enough people are using it to make it really private." That's a bit like saying you shouldn't use Signal Private Messenger because using it will look suspicious, and while that may be true(-ish) for some people in some circumstances some of the time, it's just not a convincing argument. If you have the choice between two tools, and one protects you while the others don't, just use the one protecting you.

### Monero in a nutshell

The other privacy coin a lot of people like, and that I'll use, is Monero. This is the bad boy of the privacy coin world, because it's been the cryptocurrency most used by darknet markets and ransomware gangs. A lot of people think Monero is only useful for evil things, but that's also like saying encryption is only useful for evil things.

In reality, Monero is just a privacy coin like Zcash, except it uses a different technology than Zcash to offer its privacy. Unlike Zcash, Monero uses a technique called [Ring Confidential Transactions or RingCT](https://www.getmonero.org/resources/moneropedia/ringCT.html){:target="_blank"}, in which your transaction data is mixed with and hidden among a bunch of decoy transactions. This makes it harder (but not impossible) to determine which transaction is your real one and which is not.

There's a famous saying in the cybersecurity world that goes, "security through obscurity is no security at all." That's why I personally like Zcash's technology better than Monero's. That said, Monero is absolutely "good enough" for me for now and getting better all the time.

I also like Monero specifically because it doesn't use the same technology as Zcash. Another famous saying in cybersecurity is that all good security measures have "defense in depth." This is sometimes called "layered security," and in this case it means there's only an upside to using both Monero and Zcash together if you want to. I think this is overkill for everyone except the most dedicated or at-risk individuals, but using two technologies that are different from one another means that if disaster strikes and one of the two is later broken, you're still protected because you used the other, too.

My favorite app for Monero is [Cake Wallet](https://cakewallet.com/){:target="_blank"}.

## Self-custody or bust

Just like there are two broad kinds of cryptocurrencies you could use (private and not-private), there are two broad categories of cryptocurrency apps you can use: self-custody, and third-party custody.

The concept of "custody" in cryptocurrency refers to who keeps your money for you. Either you do, *self-custody*, or someone else does *third-party custody*. This is confusing for a lot of people because both types of apps will call themselves "wallets," which makes people think the money is in their own hands, just like putting money inside of a physical wallet means you keep it on your person. In reality, only self-custody wallets do this. Third-party custodial wallets, such as those offered by Coinbase, CashApp, and many others, are actually more like traditional bank accounts; you need to ask a teller to please give you your money back when you need it, because they're holding on to it for you.

I don't trust third-party custodial wallets. I don't have them. I won't use them. I'll never recommend them.

Self-custodial wallet apps are the way to go. Using a third-party custodial wallet re-introduces most of the risks of the traditional financial system. Put another way, self-custodial wallets are the only sure-fire way to protect yourself from suffering chargebacks, or getting doxed.

Both of my favorite wallet apps mentioned above, Zashi (for Zcash) and Cake Wallet for (Monero and Bitcoin), are examples of self-custodial wallets.

Self-custody wallets do come with a tradeoff, the same way physical wallets do: if you lose your wallet app, you lose your money. The way to protect yourself from this is a backup. You can safely back up your wallet app to your Google Account or Apple iCloud Account, because good wallet apps will encrypt your wallet data to your phone's unlock PIN or passcode. But the best way to protect yourself from losing your money is to store your wallet app's "secret phrase," perhaps even storing it in your mind (memorizing it), so that you can regenerate it later.

I'll talk more about that later, but for now the important thing to know is that unless you're using a self-custody wallet app, you're actually giving the third-party service direct access to your money, just like a regular bank account. This defeats the point of crypto, for me, so I don't really listen to anything anyone has to say about them.

## I'm convinced: what's next?

Hopefully, this gives you enough of a foundation to understand why I use cryptocurrency and why you might want to, too. By sticking to privacy coins like Zcash and Monero, none of my financial transactions can be linked to my real-world information. By avoiding third-party custodial wallets and services, I never need to show my government ID to a banking institution, and I'm protected from chargebacks because I am effectively my own bank. And using cryptocurrency in the first place protects me from counterfeits.

The biggest downside to cryptocurrency is that it's still not used by a lot of clients and customers. But, hopefully, as more providers learn to accept and use it, that will change, too.

So that's basically all you need to know to get a sense of what to ignore and what to pay attention to in the crypto space as a sex worker.

Next, [learn how to actually start using cryptocurrency today]({% link resources/for-providers/using-cryptocurrency/how-to-start.md %}).
