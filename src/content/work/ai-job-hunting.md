---
title: 'AI Job Hunting Tools · KinC'
subtitle: 'I used AI to apply to 20 IT roles in Japan. Zero replies. Then I traced every reason why.'
description: 'A 0→1 AI product for international job seekers in Japan — built from an n=1 failure, a real pricing dataset, and a deliberate decision not to ship the course yet.'
pubDate: 2026-09-23
role: 'Product & Growth Lead'
team: ['Steven — AI Engineer']
timeline: '2026-09 — ongoing (Phase 0)'
stack: ['Claude Agent Skill', 'career-ops (MIT, upstream)']
status: 'in-progress'
draft: true
---

> **Status: Phase 0 — validation.** This documents a project without a conclusion yet.
> Everything marked with real numbers happened. Everything else is labelled
> *Planned* or 【TBD】. No estimates are presented as results.

## Context

[KinC](https://kinc.jp) is a job-search agency for Chinese professionals working in
Japan. It has been running for three years and has a community of roughly **1,450 people**.

The original plan: use AI to remove two obvious sources of repetitive work in a job
search — **screening which companies are worth applying to**, and **re-entering the same
information on every application** — then package the method into a video course and
sell it through Xiaohongshu, Taobao and Instagram.

A two-person project: product and engineering.

## 01. Origin — I was user zero, and it failed

Before building anything, I ran the full job-search workflow myself using existing AI tools.

**Result: 20 applications to IT roles in Japan. Zero replies.**

That killed the original plan outright — **you cannot record a course with no successful
outcome.** But it produced something more useful than a success would have: a failure I
could take apart.

## 02. Failure analysis — four distinct breakdowns

Reviewing all 20 applications, the failures clustered into four points:

| # | Breakdown | What actually happened | Cost |
| --- | --- | --- | --- |
| 1 | **Undetected data error** | A date on my CV was wrong by a full year | One month of applications wasted |
| 2 | **AI screening was unreliable** | 7 roles screened as "strong matches" in the morning — all 7 disproved once I opened the actual JD | The screening step added zero value |
| 3 | **Platform signals were untrustworthy** | LinkedIn flagged "you have a competitive edge"; the detail page showed 0/10 requirements matched | Actively misleading |
| 4 | **No visibility after applying** | 12 applications, three weeks, zero follow-up signal | No way to tell which stage was failing |

These four are the real starting point of the project. They are not second-hand insights
from interviews — they are first-hand evidence from running the process end to end.

### What they point to

The four breakdowns are not the same kind of problem:

- **#1 is an execution-quality problem** — AI-generated content had no verification step
- **#2 and #3 are signal-credibility problems** — both the AI and the platform produced
  confidence scores that did not survive checking
- **#4 is a process-visibility problem** — once submitted, the pipeline is a black box

**#2 and #3 are the ones worth building for.** They are not specific to me, and nothing
on the market — including ChatGPT and LinkedIn itself — currently solves them.

## 03. Problem statement

> International job seekers in Japan cannot tell whether a role is genuinely worth
> applying to, or whether they genuinely match it. Both AI tools and hiring platforms
> produce match signals that look credible and do not hold up when checked.

## 04. Hypothesis

If every judgement the AI makes is **traceable to a specific line in the JD and a specific
line in the CV**, match signals become checkable, and users can spend their time on roles
that are actually worth applying to.

**Falsifiable form:** have users verify each AI match judgement line by line and record the
share that gets overturned. That share should be meaningfully lower than my own 7-out-of-7.

**【TBD: this test has not been run. Fill in the real overturn rate.】**

## 05. Key product decision — not shipping the course yet

The original sequence was *run the workflow → record the course → sell it*. After 20
applications and zero replies, I reversed it.

**The reasoning: when the outcome is unknown, the process is the content.**

Every competing course sells the same story — *"I used AI and got an offer in three days."*
What I can tell right now is *"I used AI for 20 applications, got nothing, and then traced
every reason why."* **That is more credible, and nobody else is telling it.**

Recording the course after I actually land a role produces material of a completely
different quality.

> This is the decision I'd most want to be judged on: **turn the uncertainty into a content
> asset instead of pretending the certainty already exists.**

## 06. Phased plan — gated on evidence, not dates

Each phase has an explicit entry condition. If the condition isn't met, the next phase
doesn't start.

| Phase | When | What | Entry condition |
| --- | --- | --- | --- |
| **0 — Validate** | This week | One Xiaohongshu post to test the water. Zero cost. | — |
| **1 — Free content** | September | 3 posts/week, target +1,000 followers | First post > 50 saves **and** at least 1 interview |
| **2 — Productise** | Oct–Nov | Template pack, ¥199–399 | 1,000+ followers |
| **3 — Full course** | From December | Full course, ¥5,000–10,000 | **Already hired** |

**Phase 3 is gated on me actually getting hired.** Until then, the course does not go on sale.

### Phase 0 deliverable

> *I used AI to apply to 20 IT roles in Japan. Zero interviews. Today I traced every reason why.*

Images: tracking-sheet screenshot (company names redacted) + before/after of the CV date error.

**【TBD: real post metrics — saves, likes, comments, follower delta】**

## 07. Product / MVP

Not an "AI job-search platform." Based on the analysis above, the MVP addresses only #2 and #3:

**AI Job Fit — match judgements you can check**

| | |
| --- | --- |
| **Input** | Job description + CV |
| **Output** | A match judgement where **every claim cites its source** — which JD requirement, which line of the CV |

**Out of scope:** auto-apply, interview simulation, CV ghostwriting. Each is either already
well served or doesn't address the breakdowns identified above.

### Built on

Engineering is built on a fork of [career-ops](https://github.com/santifer/career-ops)
(MIT, by santifer). We did not rewrite CV parsing and ATS integration from scratch — we put
the engineering time into **what is specific to international job seekers in Japan**.

*That choice is itself a product decision:* trade an open-source base for iteration speed,
and spend scarce engineering time on the part nobody has solved.

## 08. Engineering collaboration

**【TBD — needs one real end-to-end round】**

Format:

| Step | Content |
| --- | --- |
| Observation | 7 screened roles, all 7 disproved on inspection |
| Product interpretation | A match judgement is worthless if it can't be checked against source |
| Requirement | Every claim must cite a specific JD requirement and a specific CV line |
| Engineering discussion | 【TBD: Steven's constraints and the resolution】 |
| Implementation | 【TBD】 |
| Validation | 【TBD】 |

## 09. Customer discovery

**Planned.** Every insight so far comes from n=1 — me. The next step is testing whether
these four breakdowns generalise.

Interviews with job seekers in the KinC community, focused on:

1. Have you used AI to screen roles? Do you verify the results one by one?
2. When you verify, what share gets overturned?
3. Do you trust LinkedIn's match indicators?
4. How do you follow up after applying?

| Pain point | Count | Severity |
| --- | --- | --- |
| AI screening unreliable | 【TBD】 | 【TBD】 |
| Platform match signals untrustworthy | 【TBD】 | 【TBD】 |
| Undetected CV data errors | 【TBD】 | 【TBD】 |
| No visibility after applying | 【TBD】 | 【TBD】 |

## 10. Monetization — a real pricing dataset

KinC has been selling job-search help for three years. This is the actual distribution
across 108 paying customers:

| Tier | What it is | Price | Customers | Revenue | % of revenue |
| --- | --- | --- | --- | --- | --- |
| Intro | One-off 1-hour session on using AI tools for job hunting | ¥1,000 | **94** | ¥94,000 | 28.1% |
| Coaching | Monthly, AI + human coaching | ¥7,500 | **8** | ¥60,000 | 18.0% |
| Until-hired | Ongoing AI + human coaching until placed | ¥30,000 | **6** | ¥180,000 | 53.9% |
| | | | **108** | **¥334,000** | |

ARPU: **¥3,093**. The 14 coaching customers are **13% of customers and 72% of revenue**.

### The finding

Look at what happens to volume at each price step:

| Price step | Multiple | Customers | Drop |
| --- | --- | --- | --- |
| ¥1,000 → ¥7,500 | 7.5× | 94 → 8 | **−91.5%** |
| ¥7,500 → ¥30,000 | 4.0× | 8 → 6 | **−25.0%** |

**A 4× price increase costs almost no volume.** Above a certain threshold, demand is
close to price-insensitive — the hard decision for the customer is *"do I want real help"*,
not *"how much does it cost."*

Two things follow:

1. **The ¥7,500 tier is probably destroying value.** If most of those 8 customers would
   have bought at ¥30,000, the middle tier is discounting the exact people who were willing
   to pay most.
2. **The real bottleneck is ¥1,000 → paid coaching**, where 91.5% drop off. That is where
   volume is, and where the product should be aimed.

### Open question → next experiment

**【TBD: repricing test not yet run.】** The experiment to run:

- Does removing or repricing the middle tier increase total revenue, or does it lose the 8?
- Is there room *above* ¥30,000, given how insensitive that step already is?
- Of the 94 intro customers, how many were already in the community vs. newly acquired —
  i.e. is the ¥1,000 session a product, or a lead magnet?

> Stated willingness-to-pay from a survey does not count here. The gap between what people
> say and what they pay is exactly what this dataset measures — and it's the reason this
> section has real numbers instead of estimates.

## 11. Metrics

**Baseline (real)**

| Metric | Value |
| --- | --- |
| KinC community | ~1,450 (3 years) |
| Paying customers to date | 108 |
| Revenue to date | ¥334,000 |
| My own applications | 20 sent / 0 replies |
| AI screening accuracy | 0 of 7 |

**Targets (planned, not yet validated)**

| Metric | Target | How measured | By when |
| --- | --- | --- | --- |
| First post saves | > 50 | Xiaohongshu analytics | End of Phase 0 |
| Follower growth | +1,000 | Xiaohongshu analytics | End of Phase 1 |
| First-month conversions | 3 | Order count | Month 1 post-launch |

## 12. What I learned

**【TBD — project ongoing. Write specifics, not "I learned a lot about AI."】**

One thing is already clear:

**The credibility of an AI's output matters more than its quality.** Seven out of seven
screened roles were wrong — not because the writing was bad, but because the judgement
could not be checked. The user had no way to know whether to trust it.

## My Role

**Product & Growth Lead**

- User zero / failure analysis
- Problem definition / product scope
- Phase planning and entry conditions
- Requirement definition / engineering collaboration
- Content strategy and acquisition
- Pricing and monetization design

**Steven — AI Engineer**
Implementation and technical development.

Two people total — no designer, no separate researcher. Everything in the list above
was mine to do.
