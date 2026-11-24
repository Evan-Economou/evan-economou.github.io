---
title: "Settings to Change on Your Smart TV"
date: 2026-11-23
author: "Evan Economou"
draft: false
description: "How smart TVs track what you watch, and the settings you should turn off to protect your data"
tags: ["Privacy and Digital Safety"]
---

TVs are one of the very few goods, especially in the tech space, that have trended down in price over the last two decades. Though some of this is explained by the improvements in the tech and it becoming easier to manufacture, a lot of it has actually paralleled the rise of big data and large tech companies. That 65" HD TV is only $200 because they know they can make their money back by selling information about the you as you use it. If that is a trade you are willing to make that is okay, but I am at least a fan of informed consent. 

Anecdotally this was inspired by my own efforts to opt out on my own TVs. Between deeply convoluted menus and interface design that makes it look like your only option is to agree, it was really clear that the average person would just breeze straight through and donate their data to large tech companies.

## How does a TV spy on you?

Unless you haven't bought a TV in the last 20 years, it is very likely that your smart TV has a feature called **Automatic Content Recognition**, or ACR. Every few seconds, the TV will gather information on whatever you are currently using your TV for. That information gets sent to the manufacturer's servers, who then compares it against a huge library of shows, movies, commercials, games, and more to figure out exactly what your TV is displaying. This applies to every single thing displayed through the TV, including family photos over HDMI input from a laptop, a game you're playing on a console, or a streaming box. ACR gives TV manufacturers are in a unique position of power, where they can understand the broad picture of what you do in the space between apps, where something like Netflix can only ever gather data on what you do inside Netflix.

Combining that information with your IP address and other devices it can find on your network, the company ends up with a pretty detailed profile of your household. They're able to understand what you watch, when you watch it, and what ads you were served. They then utilize this profile for targeted ads on the TV itself and sell it to data brokers to combine with other profiles built on your digital presence. Just like with [cookies](/education/cookies/), once that data is out there you have basically no control over where it goes or who does what with it.

Though this sounds a little like a conspiracy theory, this isn't just speculation. One of the biggest examples I could find is that back in 2017, Vizio [paid \$2.2 million to settle with the FTC](https://www.ftc.gov/news-events/news/press-releases/2017/02/vizio-pay-22-million-ftc-state-new-jersey-settle-charges-it-collected-viewing-histories-11-million) for collecting the viewing history of 11 million TVs without people's consent and selling it. The problem hasn't gone away either, with the YouTube channel [Gamers Nexus](https://youtu.be/6IFVTcM28KA) putting out an incredible piece of investigative journalism this year about the network activity of LG TVs and how often they phone home to LG itself. There are still a lot of mysteries about exactly what data is collected, how it is used, and who it is actually shared with, but at the very least they found evidence that it was probing other devices on the network and sending data back to LG.

## It's not just ACR

A few other things your TV is probably doing:

- **Advertising ID.** Your TV has a unique ID that lets third party companies recognize it and follow your activity across the internet
- **Voice features.** If your TV or remote use voice search, those recordings are potentially sent to the company and processed and kept there.
- **"Usage" or "diagnostic" data.** These settings provide a legitimate purpose for companies to track which apps you open, what buttons you press, and how long you use things. Some of it really is used to understand and fix bugs, but I don't believe it is your responsibility to share your data to help with that.

## The settings to change

Every manufacturer calls ACR something different, and usually include warnings about how awesome it is for you to have more accurate ads. Menus move around between models and software updates, but I did my best with aggregating information for some of the top operating systems. Also disclaimer that I only actually have access to LG TVs so I haven't verified most of these, but if you cant find it then searching "[your TV brand] turn off ACR" will usually get you there.

**Samsung**
- Settings > All Settings > General & Privacy > Terms & Privacy
- Turn off **Viewing Information Services** (ACR)
- Turn off **Interest-Based Advertisement** and **Voice Recognition Services**

**LG**
- Settings > All Settings > General > System > Additional Settings
- Turn off **Live Plus** (ACR)
- Also look for **User Agreements** and uncheck viewing information, voice information, and interest-based advertising

**Vizio**
- Settings > Admin & Privacy
- Turn off **Viewing Data** (ACR)
- Under **Advertising**, turn on limit ad tracking

**Roku TVs** (a lot of TCL and Hisense TVs)
- Settings > Privacy > Smart TV Experience
- Uncheck **Use info from TV inputs**
- Settings > Privacy > Advertising, check **Limit ad tracking**

**Google TV / Android TV** (most Sony TVs, and other TCL and Hisense models)
- Settings > Privacy, turn off **Usage & diagnostics**
- Settings > Privacy > Ads, opt out of ad personalization or delete your advertising ID
- Sony TVs specifically may also have something called **Samba Interactive TV**, which is ACR, so turn that off or decline it if you see it

**Amazon Fire TV**
- Settings > Preferences > Privacy Settings
- Turn off **Device Usage Data**, **Collect App Usage Data**, and **Interest-based Ads**

None of these settings will affect any of the functionality of the TV, it just stops it from collecting unnecessary data on you.

The other thing to check across any type of TV are the user agreements you clicked through during setup. Occasionally, like in the case of LG, there are a few that are entirely optional, and the TV only requires the Terms of Service and privacy policy. Some of these agreements cover data collection, sale of your data, or other things that you can easily opt out of. Look for "Do Not Sell or Share My Personal Information" or "Reset Advertising ID" in your settings menus as well, they are other good steps to take. There has been some ongoing research into [if opting out actually does anything](https://arstechnica.com/gadgets/2026/10/does-opting-out-of-smart-tv-tracking-work-research-finds-suspicious-traffic/), but I think we should give them the benefit of the doubt until proven otherwise. Remember, if you really want to make sure none of this data tracking occurs, you can choose to just never connect the TV to the internet and use it like it's the 90s by just plugging in your cable box or computer and having it do nothing but display an image.

## Summary

1. Go through the settings above on every TV in your house, it only takes a few minutes
2. When you set up a new TV, or any other device, slow down on the setup screens. This business model is reliant on people just not caring
3. If you already use a streaming stick or box for everything, consider just not connecting the TV itself to Wi-Fi at all so that it can't send information back to its home servers
4. If you use voice search, look for the option to not save your recordings, otherwise just turn it off completely

The overall goal here is just to make you conscious of your options. I don't mind if someone is aware of these practices and okay with them, but I really dislike how obscured all of this information is from TV companies.
