---
title: "Agile Can't See Golden Week Coming"
description: 'Why sprints quietly lose a release to public holidays and long leave — and the one change that fixes it without breaking agile.'
pubDate: 2026-09-26
tags: ['project management', 'agile', 'working in japan']
draft: false
---

Here is a sprint that has happened to most teams working in Japan.

Sprint planning on a Monday in late April. The team commits to the usual amount of work.
Two weeks later, the sprint closes. Almost nothing shipped. Every ticket moves to the next
sprint, the board is cleared, and the burndown chart is a flat line with an apologetic cliff
at the end.

Nobody underestimated anything. Nobody was blocked. **Golden Week happened.**

Ten working days became five. Two engineers took 有給 either side of the holiday and made it
four. The release date landed on May 3rd, so it got pushed anyway. The sprint was never
going to deliver — that was decided at planning, and nobody noticed.

## Waterfall doesn't have this problem

Say what you like about waterfall, it front-loads exactly this risk.

You build the schedule once, for the whole project, against a calendar. Public holidays are
in that calendar. Known leave is in that calendar. If a milestone lands in the middle of
Obon, you see it in month one and move it in month one.

The plan is wrong about many things, but it is rarely wrong about **when people will not be
at work.**

## Agile is structurally blind to it

Agile doesn't have a worse calendar. It has a shorter **planning horizon**.

If you plan one sprint at a time, your field of view is two weeks. A public holiday six weeks
out is not in the room during planning — not because anyone forgot it, but because the
ceremony that would surface it doesn't look that far.

The result is a specific, repeatable failure:

| | |
| --- | --- |
| Sprint N | Planned at full capacity. Loses days to holiday. Under-delivers. |
| Sprint N closes | All incomplete tickets move to Sprint N+1 |
| Sprint N+1 | Now carries its own scope **plus** the carryover. Also under-delivers. |
| Roadmap | Slips by a sprint. Nobody can point at the decision that caused it. |

The damage is not the lost sprint. The damage is that **the roadmap moved and no one
recorded why.** Three months later someone asks why the feature is late, and the honest
answer — "Golden Week, and then it compounded" — sounds like an excuse rather than a
capacity fact, because it was never written down as one.

## Japan makes this sharper

Three long holidays, all of them clustered and all of them predictable:

| | |
| --- | --- |
| **Golden Week** | Late April – early May |
| **Obon** | Mid-August |
| **年末年始** | Late December – early January |

Plus a 有給 culture where people often attach paid leave to the edges of those blocks, which
widens each one by a few days in a way that doesn't show up on any public calendar.

And if you work with an offshore team, add their holidays too. Chinese New Year alone can
take a development team out for a week while the Japan side is fully staffed and wondering
where the pull requests went.

## The fix is not "plan more sprints in detail"

This is where teams usually go wrong. The instinct is to plan two or three sprints ahead —
which is just waterfall with extra ceremonies, and it breaks the thing agile is good at.

**Separate the two horizons:**

| | Horizon | What it answers |
| --- | --- | --- |
| **Scope planning** | 1 sprint | What exactly are we building? |
| **Capacity planning** | 3 sprints | How many person-days do we actually have? |

Scope stays short. That is the point of agile and it should not change.

**Capacity runs long** — because capacity is not uncertain. You know the public holidays for
the entire year. You know approved leave weeks in advance. There is nothing agile about
pretending you don't.

## What that looks like in practice

**One leave calendar, visible where planning happens.** Not buried in an HR system nobody
opens. If the team plans in Jira, the holidays and approved leave belong in a board everyone
sees at planning. The test is simple: can someone answer "how many working days does this
sprint actually have?" without leaving the meeting.

**Compute capacity per sprint, not once.** Most teams carry an implicit constant — "we do
about 30 points." Replace it with the real number for *this* sprint. A two-week sprint with
three public holidays and one person on leave isn't 30 points. It's roughly half, and the
commitment should say so out loud.

**Look three sprints ahead for holidays only.** Not scope — just a two-minute check at the
end of planning: *are there holidays or known leave in the next three sprints, and does any
release date land on or next to one?* This is the whole intervention. It costs almost
nothing and it is the step that is missing.

**Move the release date before it becomes a slip.** A release the day before a long holiday
is a release nobody can hotfix. Shift it deliberately, in advance, as a decision — rather
than discovering it on the day and calling it a delay.

**Write capacity into the roadmap.** If a quarter contains Golden Week, that quarter has
fewer working days, and the roadmap should already reflect it. A roadmap built on calendar
weeks instead of available days is wrong before work starts.

## The actual change

Leave calendar, sprint planning, and product roadmap are usually owned by three different
places — HR, the team board, and a slide deck. They get reconciled when something has already
gone wrong.

They need to be **synced in advance, and on a regular cadence.** That's it. Not a new tool,
not a new ceremony — two minutes at the end of each planning session, looking three sprints
out, at a calendar everyone can see.

The sprint that produces nothing is not a team performance problem. It is a planning horizon
problem, and it is entirely preventable by people who already know when the holidays are.
