---
title: "RSS Feeds"
date: 2026-11-24
author: "Evan Economou"
draft: false
description: "The best way to get news and follow sites on the internet, including mine"
---

At the bottom of this website there is a link labeled [RSS](https://evaneconomou.com/index.xml) that brings you to some raw code. Though that code probably isn't useful to you, it is used by tools to build something called an RSS feed. RSS, or Rich Site Summary, or RDF Site Summary, or Really Simple Syndication, is a technology from the early days of the internet that simply exposes a computer-readable view of a website or articles. An RSS feed then takes all that information from the sites you are interested in and puts it in one place, allowing you to build your own little corner of the internet.

Currently, I use an RSS feed to curate a few different news feeds for my own personal use, separating things like tech news and political sources into different groupings so I have more agency over the headlines I'm reading. Articles just sort chronologically, with no sponsored results and nobody deciding what you see besides yourself, which has been a nice breath of fresh air after years of getting news through social media.

## Making your own RSS feed

There are a few options for making your own setup, and it really depends on how you aim to use it.

### Mobile

This is my main use case, where I essentially just want an app that pulls in all of the content I would search for across the internet into a single place and allows me to easily access it on my own terms. I use an app called [NetNewsWire](https://apps.apple.com/us/app/netnewswire-rss-reader/id1480640210) to achieve this. Setup was trivially easy, you just need to provide a link to a site that supports RSS (such as [evaneconomou.com](evaneconomou.com)) for it to start aggregating and potentially giving you notifications about new posts. You can also create folders to form custom feeds, like for specific topics or other groupings.

Essentially, if you want to follow my work and continue seeing new articles I post, this is your best bet.

### Desktop

Historically, browsers would often have built-in RSS feeds. Firefox had its "Live Bookmarks" system, and Safari had a built-in feed reader. However, as the technology has aged and users were pushed towards getting news from individual monoliths like Reddit, Apple News, or Facebook, most have retired this option. If you really want to go the route of using a browser, ones like Vivaldi and SeaMonkey seem to still support this feature.

Beyond that, there are a few options depending on your operating system. For Windows, you can create a desktop widget using [Themia](https://themia.app/), or use a dedicated RSS reader app like Fluent Reader or RSS Guard. For macOS and Linux, you can also use RSS Guard. If you want to delve into the rabbit hole that is self-hosting, you could set up [FreshRSS](https://www.freshrss.org/) to access a single feed across all of your devices.

## Links
Here are a few of the links I use if you want to set up your own feed, but it is pretty easy to find more if you look for more options.

AllSides News: https://www.allsides.com/rss/news

NPR: https://feeds.npr.org/1014/rss.xml

AP News: https://openrss.org/feed/apnews.com

Security Week Cyber News: https://www.securityweek.com/feed/