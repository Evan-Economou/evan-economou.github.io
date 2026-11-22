---
title: "\"Black October\" and the Future"
date: 2026-11-20
author: "Evan Economou"
description: "A dive into the current state of the cyber industry"
---

In the last few weeks we have seen some unprecedented disruptions to the technological infrastructure that we all take for granted, and it is important to understand the driving force behind that.

In August, a researcher using AI found an ancient exploit in PHP (the programming language that about 70% of the internet uses) allowing arbitrary execution of any code an attacker wanted on anyone's servers. Good news is they found it first, but the bad news is they weren't able to fix it in time. The people behind PHP made a fix, and were planning on making an announcement and release it but the existence of the exploit leaked onto a hacker forum 2 days before they were going to do that. Because of this, we saw mass shutdowns across the internet as sites scrambled to take themselves down before an attacker could just steal all of their data, set up a bitcoin miner, or just delete your codebase. However, many sites are blogs from someone's grandma, or shops run by small artists, or just old sites that haven't been updated in 20 years. These people are not closely monitoring the security of their sites, and may never update them, leaving potential playgrounds for hackers to do whatever they want with. I saw some uncorroborated stories of people using the exploit to run the code needed to update some of these types of websites, which would be awesome and I hope that's happening, but I don't really believe it.

Some cybersecurity people are referring to this and the slew of other incidents as "Black October", and as we have progressed through November we have seen even more outages and attacks start to pop up.

## What led to this

All of these incidents are indicative of two main overarching trends in the industry. 

The first is the fact that open models with no guardrails are catching up to the frontier proprietary models, and these are able to be ran by anyone, anywhere, if they have enough compute. "Enough compute" can mean an individual with \$15,000 to spare at this point, we aren't even talking governments with data centers. The problem is, unlike the models from OpenAI or Anthropic, open model aren't able to enforce rules like "do not ask how to make napalm" or "don't hack the government". There is essentially nothing stopping anyone from using the newest open model produced by a Chinese lab to do whatever they want with it.
Hacking at this level used to take both a lot of time, and an immense amount of skill. It was infeasible to ingest and understand millions of lines of code for a human. AI solves both the time and skill issues by design, and just allows anyone that wants to commit a crime to go do some hacking. [Google](https://cloud.google.com/blog/topics/threat-intelligence/agentic-threat-activity-crosses-a-significant-threshold) and the [FBI](https://www.ic3.gov/CSA/2026/261113.pdf) have both recently published warnings about fully autonomous hacking tools that are becoming the norm.

There is a parallel trend occuring though, where the proprietary models are achieving unheard of results in patching vulnerabilities in aging software. You can look at examples like [OpenAI finding 1000 issues in Linux](https://openai.com/index/a-thousand-fewer-paths-to-root/) or the researcher I mentioned earlier that found an issue with PHP. The labs in charge of these models are providing them to the largest software companies in the world under the assumption that they will be able to use them to reinforce their code. This is a good thing overall, but it certainly still contributes to the number of outages we are seeing. Pushing rushed updates to fix time-sensitive flaws is essential now, but those can lead to collapses in other places. This is the most likely cause behind things like the recent Microsoft, bank, or FAA outages.

## Obviously, this is bad. But how will it affect you?

Consider for a moment what services you rely on that are running on 30 year old software and are connected to the internet. Power plants, water treatment facilities, communication networks, emergency services, hospitals, bank account access. If something does occur, I do think it will be temporary and I do have a potentially misplaced hope that the government is preparing for this. There are certainly some countries that have a vested interest in having that kind of power over a major urban area in the US, I would not be surprised in the slightest to see some critical systems go down in the near future.

While we are in the midst of this period of instability, I would recommend at the very least revisiting your disaster preparedness. Ensure you have a few gallons of water, some non-perishable food, and whatever else you need to make it through a few days if something were to happen. Even putting aside the instability in the tech space, this is just solid advice for the modern world as a whole.

There are also a few easier things you can do to improve your resiliance to things like this. Be sure that you update every device you have immediately when new patches come out, as they may contain critical security changes. Consider installing tools like [EFF's privacy badger](https://privacybadger.org/) that will help prevent trackers from websites if they become compromised. Read the articles I post about cybersecurity, and try to heed my advice as well as you can.

## Is the world ending?

I do think that this will be temporary, though I'm not sure how temporary (I would guess 18 months or so). Eventually critical software will be well vetted and insulated against the insane attacks we're seeing, and we'll go back to just having people be the weak link in those systems. But until then, be skeptical on the internet and stay safe.