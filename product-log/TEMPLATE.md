# Product Log — 每次开发后花 5 分钟填

复制下面这块到 `product-log/YYYY-MM-DD.md`。
这些是作品集的原材料 —— 当时不记，事后一定想不起来细节。

---

## Date:

**User problem**
（用户说的原话，不要提前总结成你的语言）

**What I observed**
（你看到的行为，和他说的可能不一样）

**Hypothesis**
（你认为根因是什么，一句话，要可证伪）

**What we changed**

**Why**
（从用户反馈 → 产品判断 → 具体需求，这条链路写清楚）

**Engineer discussion**
（工程师说了什么、提出什么约束、最后怎么定的）

**User feedback**

**Result**
（有数字就写数字）

**Next experiment**

---

### 填写示例

**Date:** Sep 22

**User problem:** "AI 给的建议太泛了，跟我简历没关系。"

**Hypothesis:** 建议必须引用用户简历里的具体经历才有用。

**What we changed:** 要求每条 recommendation 至少引用一条 CV 里的具体经验。

**Engineer discussion:** 需要把 CV 结构化后注入 context；讨论了输出校验怎么做。

**Result:** 用户反馈建议变得 actionable 了。

**Next:** 再找 5 个用户测。
