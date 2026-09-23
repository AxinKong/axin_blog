---
title: 'Enishi AI — Getting Hired in Japan'
subtitle: 'I used AI to apply to 48 IT roles in Japan. 8 instant rejections, 1 interview. Then I traced every reason why.'
description: 'A 0→1 AI product for job seekers in Japan — built from an n=1 failure, a real pricing dataset, and a deliberate decision not to ship the course yet.'
pubDate: 2026-09-23
role: 'Product & Growth Lead'
team: ['Steven — AI Engineer', '【TBD: name】 — UI']
timeline: '2026-09 — ongoing (Phase 0)'
stack: ['Claude Agent Skill', 'Shukatsu-ops']
status: 'in-progress'
draft: true
---

> **Status: Phase 0 — validation.** This documents a project without a conclusion yet.
> Everything marked with real numbers happened. Everything else is labelled
> *Planned* or 【TBD】. No estimates are presented as results.

## Context

**[Enishi AI](https://www.linkedin.com/company/enishi-ai-career/)** (founded 2026 July) is an
AI-powered tool set for getting hired in Japan

> *Upgrade your AI skills. Secure your career. Your bridge to opportunities in Japan.*

**For job seekers**, it automates the hard parts of a job search in Japan — matching a
resume to the right Japanese format, auto-searching for suitable job opportunities, submitting applications, and tracking every step that follows.
It is built specifically for **new graduates and mid-level career changers in Japan** 

**For individuals and teams**, it also covers AI adoption: setup and consulting that turn AI tools into actual workflows.

This case study covers the job-seeker product.

### Distribution: KinC

[KinC](https://kinc.jp) is a professional agency dedicated to helping English-speaking individuals study and build careers in Japan. three years old, a community of ~1,450, and **108 paying customers to date**.

**KinC's students are Enishi AI's users.** That matters more than it sounds:

- **No cold start.** The product launches into an existing, reachable audience instead of
  hunting for first users.
- **The pricing dataset in §10 is the same population.** What those 108 customers paid is
  directly predictive of what Enishi AI users will pay — not a proxy from a different market.
- **Discovery has a real sample pool.** The interviews in §9 draw from people who are
  already paying to solve this exact problem.

The constraint that comes with it: **this audience is Chinese speakers in Japan.**
Whether the findings generalise to the wider "job seekers in Japan" market in Enishi AI's positioning is untested. 【TBD】

A three-person project: product, UI, and engineering.

## 01. Origin — I was user zero, and it failed

Before building anything, I ran the full job-search workflow myself using existing AI tools.

**Result: 48 applications to IT roles in Japan. 8 instant rejections, 1 interview.**

This was far worse than my previous job search through recruiters. But it produced something
more useful than a success would have: a failure I could take apart.

## 02. Failure analysis — five distinct breakdowns

Reviewing all 48 applications, the failures clustered into five points:

| # | Breakdown | What actually happened | Cost |
| --- | --- | --- | --- |
| 1 | **Undetected data error** |A date on my CV was wrong by a full year | One month of applications wasted without being detected by AI| 
| 2 | **AI screening was unreliable** | Some of the positions in the generated job list do not match my background at all and some positions are even closed | The screening step added no value|
| 3 | **Auto online apply were untrustworthy** | auto but super slow job application & limited data type can be filled in on websites | time wasting for AI apply instead of time saving |
| 4 | **No visibility after applying** | 12 applications, three weeks, zero follow-up signal | No way to tell which stage was failing |
| 5 | **No replies after applying** | Only resumes polished with the help of AI secured interviews and resumes generated entirely by AI did not| Truth and credibility violation |

These five are the real starting point of the project. They are not second-hand insights
from interviews — they are first-hand evidence from running the process end to end.

### What they point to

The five breakdowns are not the same kind of problem, and they do not have the same owner:

| # | Type of problem | Who should fix it |
| --- | --- | --- |
| 1 | **Execution quality** — no verification step | Engineering. One-time fix. |
| 2 | **Data freshness** — wrong source of truth | Engineering. Switch to API-verified listings. |
| 3 | **Tool boundary** — interface mismatch | Partly fixable. Standard ATS is fast; custom portals are slow. |
| 4 | **Measurement gap** — no outcome feedback | Structural. Only proxy metrics are available. |
| 5 | **Source of authority** — facts came from the model, not from me | **Not a bug to fix. A line to draw.** |

**#5 is the one that changes the product.** The others are engineering problems with
engineering answers. #5 says something about where AI belongs in this workflow at all:

> Only CVs that I wrote and AI *polished* got interviews.
> CVs that AI *generated* did not.

The model can improve how a claim is worded. It cannot be the source of the claim.
That is not a limitation to engineer around — it is the boundary the product should enforce.

## 03. Problem statement

> AI job-search tools produce two things at scale: lists of roles to apply to, and documents to apply with. 
> Neither is checked against a source of truth — so closed roles, mismatched roles, and factual errors in a CV 
> all reach the employer before anyone notices and with no tracking nor replies afterwards


## 04. Hypotheses

The problem statement names two unchecked outputs — the **list** and the **documents** —
so there are two hypotheses, tested separately.

### H1 — Verify the list against a live source

If every role reaching the user is confirmed **open** and confirmed to match stated
requirements via the source system rather than a scraped snapshot, then time spent on
roles that were never applicable drops.

**Falsifiable form:** measure the share of surfaced roles that turn out closed or
clearly mismatched when opened. Baseline is my own run. 【TBD: baseline rate, post-fix rate】

### H2 — AI polishes, never authors

The sharpest signal in §2 is #5: **AI-polished CVs got interviews; AI-generated CVs did not.**

If every factual claim originates from the user's own record and AI is restricted to
wording and formatting, then credibility is preserved and reply rate improves.

**Falsifiable form:** compare reply rates between AI-polished and AI-generated applications.
My own n=1 already points one way; it needs a real sample. 【TBD】

> H2 is the more interesting one, because it argues **against** the thing most competitors
> sell. "AI writes your CV" is the category's main pitch. My own data says that is exactly
> what stops working.

## 05. Key product decision — not shipping the course yet

The original sequence was *run the workflow → record the course → sell it*. After 48
applications, 8 instant rejections and 1 interview, I reversed it.

**The reasoning: when the outcome is unknown, the process is the content.**

Every competing course sells the same story — *"I used AI and got an offer in three days."*
What I can tell right now is *"I sent 48 AI-assisted applications, did worse than when
recruiters did it for me, and then traced every reason why."*
**That is more credible, and nobody else is telling it.**

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

> *I used AI to apply to 48 IT roles in Japan. 8 instant rejections, 1 interview —
> worse than when recruiters did it for me. Today I traced every reason why.*

Images: tracking-sheet screenshot (company names redacted) + before/after of the CV date error.

**【TBD: real post metrics — saves, likes, comments, follower delta】**

## 07. Product / MVP

Not an "AI job-search platform." The five breakdowns each get a different treatment,
and being explicit about which is which *is* the product decision:

| Breakdown | Decision | Why |
| --- | --- | --- |
| #1 Execution quality | **Build** — verify every CV fact against the user's own record before it ships | One-time engineering fix, high cost when it fails |
| #2 Data freshness | **Build** — confirm a role is open via API before surfacing it | Same |
| #3 Tool boundary | **Partial** — support standard ATS, skip custom portals | Custom portals are slower than applying by hand |
| #4 Measurement gap | **Accept** — instrument proxy metrics, don't pretend to solve it | Employers don't return outcome data. Structural. |
| #5 Source of authority | **Constrain** — AI may reword, never originate a fact | Not a bug. The boundary the product enforces. |

**AI Job Fit — assisted, verified applications**

| | |
| --- | --- |
| **Input** | The user's own experience record + a job description |
| **Output** | A verified-open role match, plus application documents where **every factual claim traces back to the user's record** — AI controls wording, not substance |

**Out of scope:** generating experience the user did not supply, custom-portal auto-apply,
interview simulation. The first is ruled out by #5; the others don't pay for themselves.

### Built on

Engineering is built on **shukatsu-ops**, a fork of
[career-ops](https://github.com/santifer/career-ops) (MIT, by santifer). We did not rewrite
CV parsing and ATS integration from scratch — we put the engineering time into
**what is specific to job seekers in Japan**.

*That choice is itself a product decision:* trade an open-source base for iteration speed,
and spend scarce engineering time on the part nobody has solved.

## 08. Engineering collaboration

**【TBD — needs one real end-to-end round】**

Format:

| Step | Content |
| --- | --- |
| Observation | Generated role lists contained positions that were closed, and positions unrelated to my background |
| Product interpretation | The list was built from a stale snapshot, not from a live source — so freshness, not ranking, is the defect |
| Requirement | A role may only be surfaced after its status is confirmed open against the source system |
| Engineering discussion | 【TBD: Steven's constraints — API coverage, rate limits, what to do when no API exists】 |
| Implementation | 【TBD】 |
| Validation | 【TBD: share of surfaced roles found closed, before vs after】 |

## 09. Customer discovery

**Planned.** Every insight so far comes from n=1 — me. The next step is testing whether
these five breakdowns generalise.

Interviews with job seekers in the KinC community, focused on:

1. When AI gives you a list of roles, do you open each one? How many turn out closed or irrelevant?
2. Do you let AI write your CV, or write it yourself and have AI polish it? Which got replies?
3. Have you ever sent an application with a factual error you didn't catch?
4. After applying, how do you know what happened? What do you actually do?

| Pain point | Count | Severity |
| --- | --- | --- |
| Stale / irrelevant roles in AI-generated lists | 【TBD】 | 【TBD】 |
| AI-generated CVs underperform AI-polished ones | 【TBD】 | 【TBD】 |
| Undetected factual errors in applications | 【TBD】 | 【TBD】 |
| Auto-apply slower than applying by hand | 【TBD】 | 【TBD】 |
| No visibility after applying | 【TBD】 | 【TBD】 |

## 10. Monetization — a real pricing dataset

KinC has been selling job-search help to this exact audience for three years —
the same people who are Enishi AI's users. This is the actual distribution across
108 paying customers:

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
| My own AI-assisted run | 48 applications / 8 instant rejections / 1 interview |
| Interviews from AI-generated CVs | 0 |
| Interviews from AI-polished CVs | 1 (the only one) |

**Targets (planned, not yet validated)**

| Metric | Target | How measured | By when |
| --- | --- | --- | --- |
| First post saves | > 50 | Xiaohongshu analytics | End of Phase 0 |
| Follower growth | +1,000 | Xiaohongshu analytics | End of Phase 1 |
| First-month conversions | 3 | Order count | Month 1 post-launch |

## 12. What I learned

**【TBD — project ongoing. Write specifics, not "I learned a lot about AI."】**

Two things are already clear:

**1. Verification matters more than generation.** Every breakdown except #5 came from an
output that was never checked against a source — a stale listing, an unverified date, an
application sent into a void. The model wasn't writing badly. Nothing was checking it.

**2. There is a line AI should not cross, and finding it is a product decision.**
AI-polished CVs got an interview. AI-generated CVs got instant rejections. The category
sells "AI writes your CV"; my own data says that is the part that breaks. Deciding *where*
AI stops being useful turned out to be more valuable than making it do more.

## My Role

**Product & Growth Lead**

- User zero / failure analysis
- Problem definition / product scope
- Phase planning and entry conditions
- Requirement definition / engineering collaboration
- Content strategy and acquisition
- Pricing and monetization design

**Steven — AI Engineer** — implementation and technical development.
**【TBD: name】 — UI.**

Three people, no separate researcher or data analyst. Everything in the list above was mine.
