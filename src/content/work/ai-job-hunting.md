---
title: 'AI Job Hunting Skill'
subtitle: 'From User Pain Point to AI Product — a 0→1 experiment for international job seekers in Japan'
description: '面向在日外国求职者的 AI 产品实验：从用户痛点出发，到 MVP、用户测试、迭代与获客。'
pubDate: 2026-09-22
role: '【待填：Product / Growth Lead？还是别的】'
team: ['【待填：AI Engineer — implementation & technical development】']
timeline: '2026-09 — 进行中'
stack: ['Claude', 'Agent Skill']
status: 'in-progress'
draft: true
---

> ⚠️ **这是骨架，不是成品。** 标着【待填】的地方必须用真实数据填，
> 没做过的访谈、没测过的用户、没发生的结果都不要写。
> 招聘经理会追问细节，编的东西在面试里撑不过三个问题。

## 01. Problem

International job seekers in Japan often struggle to translate their actual
experience into Japanese-market-ready job applications.

**【待填：你自己观察到的问题，每条都要能说出是从哪来的】**

- Problem 1 — 不知道自己的经验应该对应什么岗位
- Problem 2 — JD 看不懂，不知道 employer 真正在找什么
- Problem 3 — 简历写出来了，但无法证明自己符合 JD
- Problem 4 — 不知道如何针对不同岗位调整 CV / interview answer

### User Journey

```text
Find Job → Read JD → Understand requirements → Compare with own experience
        → Rewrite CV → Apply → Interview
```

**Where does the user struggle?**

【待填：在上面这条链路上标出断点，并说明你凭什么判断这里是断点】

## 02. Customer Discovery

**【待填 — 这一节是整个案例的地基，没有它下面全是空中楼阁】**

计划访谈 10–20 位国际求职者，问题清单：

1. 你最近申请什么岗位？
2. 哪一步最困难？
3. 你有没有使用 ChatGPT？
4. ChatGPT 哪些地方帮助不大？
5. 你最终为什么没有继续使用？
6. 如果 AI 可以自动完成 X，你会不会使用？
7. 你愿意付多少钱？

### Pain Point Matrix

| Pain Point | 出现人数 | 严重程度 |
| --- | --- | --- |
| 不知道如何匹配 JD | 【待填】 | 【待填】 |
| CV tailoring 很麻烦 | 【待填】 | 【待填】 |
| 不知道自己的优势 | 【待填】 | 【待填】 |
| Interview preparation | 【待填】 | 【待填】 |

## 03. Product Hypothesis

**Hypothesis**

如果 AI 能够完成 `JD → 用户经验 → Skill Gap → Application Strategy` 这条链路，
用户就可以更快判断：**「这个职位到底适不适合我，以及我应该怎么申请。」**

**【待填：这个假设可证伪吗？你打算怎么验证它成立或不成立？】**

## 04. MVP

不做「AI 求职平台」，只做一个核心 Skill：

**AI Job Fit & Application Strategy Skill**

| | |
| --- | --- |
| **输入** | Job Description + Resume |
| **输出** | ① Job Fit ② Matching Experience ③ Missing Skills ④ Positioning Strategy ⑤ CV Improvement ⑥ Interview Focus |

**Out of scope（同样重要）**：【待填 — 明确说不做什么，边界比功能更能体现 PM 判断】

## 05. AI Skill Design

### 产品逻辑

```text
                 USER
                  │
          Resume + Job Description
                  │
                  ▼
          ┌─────────────────┐
          │  Job Analysis   │
          └────────┬────────┘
                   ↓
          Requirement Mapping
                   ↓
          ┌─────────────────┐
          │   Experience    │
          │    Matching     │
          └────────┬────────┘
                   ↓
             Skill Gap
                   ↓
          Application Strategy
                   ↓
        ┌──────────┼──────────┐
        ↓          ↓          ↓
      CV Tips   Interview   Positioning
```

### 技术链路

```text
User Input → Prompt / Skill → LLM → Structured Output
          → Validation → User → Feedback → Skill Iteration
```

**【待填：这两张图要换成你们实际的设计。现在这版是计划里的示意图，
不是你们真正做出来的东西 —— 面试官会问「validation 具体验什么」。】**

## 06. Engineer Collaboration

> 这一节是你 IT PM 背景最值钱的地方。不要写 "I worked with an AI engineer."

**Product → Engineering Translation（示例格式）**

| 环节 | 内容 |
| --- | --- |
| User feedback | 「AI 的 recommendation 太 generic。」 |
| Product interpretation | Recommendations need to reference the user's actual experience and target JD requirements. |
| Product requirement | Each recommendation must cite at least one specific experience from the user's CV. |
| Engineering discussion | Prompt structure / context injection / output validation |
| Implementation | 【待填】 |
| User testing | 【待填】 |
| Iteration | 【待填】 |

**【待填：换成你们真实发生过的一次。一个真实的完整回合，
胜过五个漂亮但虚构的。】**

## 07. Version History

| Version | Change | Why |
| --- | --- | --- |
| V0.1 | 【待填】 | Initial hypothesis |
| V0.2 | 【待填】 | User feedback |
| V0.3 | 【待填】 | User feedback |
| V0.4 | 【待填】 | User feedback |

## 08. User Testing & Results

**【待填 — 全部必须是真实数字】**

| Metric | Value |
| --- | --- |
| Users tested | 【待填】 |
| Completed the workflow | 【待填】 |
| Said the output changed how they would apply | 【待填】 |
| Used it more than once | 【待填】 |
| Recommendation acceptance | 【待填】 |

## 09. Growth / GTM

测试获客渠道：小红书 / LinkedIn / WeChat / 在日国际学生社群 / Referral

| Channel | Leads | Conversion | Cost |
| --- | --- | --- | --- |
| 小红书 | 【待填】 | 【待填】 | 【待填】 |
| LinkedIn | 【待填】 | 【待填】 | 【待填】 |
| WeChat | 【待填】 | 【待填】 | 【待填】 |
| Community | 【待填】 | 【待填】 | 【待填】 |

> *I didn't just build the product. I also tested how to acquire its first users.*

## 10. What I Learned

**【待填 — 写具体的，不要写 "I learned a lot about AI"】**

参考方向（填你自己真正经历过的）：

1. Users don't always know how to articulate the real problem.
2. AI accuracy isn't always the biggest UX problem.
3. Product requirements need to translate qualitative feedback into testable behavior.
4. Small iterations can improve user experience more than adding features.
5. AI product development requires continuous collaboration between users, product and engineering.

## My Role

**【待填：见下方"角色归属"说明，这一节必须先想清楚再写】**

- Customer discovery / User interviews
- Product definition / Workflow design
- AI Skill design / Requirement definition
- Engineer collaboration
- User testing / Feedback analysis
- Product iteration
- Early user acquisition / GTM experiments

**Others**：【待填：AI Engineer 是谁、负责什么。如果项目基于他人的开源工作，在这里写明】
