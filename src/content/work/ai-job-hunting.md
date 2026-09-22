---
title: 'AI Job Hunting Skill'
subtitle: 'From User Pain Point to AI Product — a 0→1 experiment for international job seekers in Japan'
description: '面向在日外国求职者的 AI 产品实验：从用户痛点出发，到 MVP、用户测试、迭代与获客。'
pubDate: 2026-09-22
role: 'Product & Growth Lead'
team: ['Steven — AI Engineer']
timeline: '2026-09 — 进行中'
stack: ['Claude Agent Skill', 'career-ops (MIT, upstream)']
status: 'in-progress'
draft: true
---

> ⚠️ **这是骨架，不是成品。** 标着【待填】的地方必须用真实数据填，
> 没做过的访谈、没测过的用户、没发生的结果都不要写。
> 招聘经理会追问细节，编的东西在面试里撑不过三个问题。

## Process Overview

这个案例记录的是一条完整的 0→1 链路，而不是「一个 AI 小项目」：

```text
Customer Discovery          采访 20 个求职者
        ↓                   发现 5 个主要 pain points
Product Hypothesis          设计 AI Skill
        ↓
MVP                         和 AI Engineer 开发
        ↓
User Testing                30 人使用
        ↓
Feedback                    completion rate / satisfaction
        ↓                   failure points / repeat usage
Iteration                   修改 Skill
        ↓
Growth                      小红书 · LinkedIn · WeChat · 社群 · referral
        ↓
Monetization                ¥1,000 / ¥3,000 / ¥5,000 定价测试
```

每一步的真实记录见下。

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

计划让 30 人使用，收集四类数据：

| Metric | 定义 | Value |
| --- | --- | --- |
| Completion rate | 走完整条流程的比例 | 【待填】 |
| User satisfaction | 【待填：怎么测？几分制？】 | 【待填】 |
| Common failure points | 用户卡住/放弃的位置 | 【待填】 |
| Repeat usage | 用了不止一次的人数 | 【待填】 |

**Failure points 是这四个里最有价值的。** 满意度告诉你好不好，
失败点告诉你下一步做什么 —— 它直接变成 Iteration 那一节的输入。

## 09. Growth / GTM

测试获客渠道：小红书 / LinkedIn / WeChat / 在日国际学生社群 / Referral

| Channel | Leads | Conversion | Cost |
| --- | --- | --- | --- |
| 小红书 | 【待填】 | 【待填】 | 【待填】 |
| LinkedIn | 【待填】 | 【待填】 | 【待填】 |
| WeChat | 【待填】 | 【待填】 | 【待填】 |
| Community | 【待填】 | 【待填】 | 【待填】 |

> *I didn't just build the product. I also tested how to acquire its first users.*

## 10. Monetization

用户愿不愿意付钱，是验证价值最硬的一道检验 —— 比满意度评分可信得多。

**定价测试**

| Package | 价格 | 包含什么 | 转化率 | 样本量 |
| --- | --- | --- | --- | --- |
| Basic | ¥1,000 | 【待填】 | 【待填】 | 【待填】 |
| Standard | ¥3,000 | 【待填】 | 【待填】 | 【待填】 |
| Premium | ¥5,000 | 【待填】 | 【待填】 | 【待填】 |

**要回答的问题**

- 三档里哪一档转化最高？为什么？
- 说「愿意付费」的人和**真的付了钱**的人，差多少？（这个差值本身就是一个发现）
- 不付费的人卡在哪 —— 价格、信任、还是价值没说清？

> ⚠️ 【待填】这一节必须是真实的付费测试。
> 问卷里的「你愿意付多少钱」**不算数** —— 说和做之间的鸿沟，
> 恰恰是 PM 需要证明自己懂的东西。没做过就先空着，
> 写「Planned」比写假数字强得多。

## 11. What I Learned

**【待填 — 写具体的，不要写 "I learned a lot about AI"】**

参考方向（填你自己真正经历过的）：

1. Users don't always know how to articulate the real problem.
2. AI accuracy isn't always the biggest UX problem.
3. Product requirements need to translate qualitative feedback into testable behavior.
4. Small iterations can improve user experience more than adding features.
5. AI product development requires continuous collaboration between users, product and engineering.

## My Role

**Product & Growth Lead**

- Customer discovery / User interviews
- Product definition / Workflow design
- AI Skill design / Requirement definition
- Engineer collaboration
- User testing / Feedback analysis
- Product iteration
- Early user acquisition / GTM experiments
- Pricing & monetization experiments

**Steven — AI Engineer**
Implementation & technical development.

### Built on

这个产品构建在 [career-ops](https://github.com/santifer/career-ops) 之上 ——
一个 MIT 许可的开源求职工具集（作者 santifer）。我们没有从零写一套简历解析和
ATS 对接，而是 fork 了它，把工程精力集中在**面向在日国际求职者的那部分差异**上。

*这个选择本身是一个产品决策：* 用现成的开源底座换取迭代速度，
把有限的工程资源投在真正没人解决过的问题上，而不是重复造轮子。
