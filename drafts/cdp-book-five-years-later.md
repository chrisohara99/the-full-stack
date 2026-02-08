# What We Got Right (and Wrong) About CDPs: A 5-Year Retrospective

*Revisiting the predictions Martin Kihn and I made in 2020 — and what we never saw coming*

---

In December 2020, Martin Kihn and I published *Customer Data Platforms: Use People Data to Transform the Future of Marketing Engagement*. It was the first mainstream book on CDPs, written at a moment when the category was exploding with hype and confusion. Every vendor wanted to be a CDP. Every CMO wanted to buy one. Nobody agreed on what one actually was.

I should say upfront: Martin is the smarter half of this partnership. He came to the project from Gartner, where he'd been the leading analyst covering marketing technology. Before that, he was an Emmy-nominated head writer for MTV's Pop-Up Video, a stand-up comic, and the author of *House of Lies* — the memoir that became the Showtime series starring Don Cheadle. The man has range.

Martin's still at Salesforce as SVP of Strategy for Marketing Cloud, where he's become the voice of their AI agent strategy. He just published *[Agentforce: Harnessing the Agency of AI to Scale, Grow, and Lead Any Industry](https://www.amazon.com/Agentforce-Harnessing-Agency-Scale-Industry-ebook/dp/B0FCP4DMND)* — with a foreword by Marc Benioff — which is essentially the definitive guide to autonomous AI agents in enterprise software. He also hosts the [PaleoAdTech podcast](https://martinkihn.com), where he interviews the pioneers who built the advertising technology industry. If you want to understand where martech is heading, follow Martin.

Five years later, I decided to go back and read our CDP book again. Not to admire our prescience, but to honestly assess: What did we nail? What did we whiff on? And what changes in the world were simply impossible to predict from the vantage point of 2020?

The answer, as it turns out, is a mix of all three.

---

## The Thesis That Held Up

Our central argument was simple, even contrarian at the time: **CDPs are not a revolution. They're an evolution of CRM.**

This was Martin's insight, really — he'd watched the category emerge from his perch at Gartner and understood that the hype was obscuring something more fundamental. We wrote:

> "The CDP category is not new; it is not an invention de novo. Rather it represents the latest evolution of the CRM category, applied to B2C and then to B2B contexts, and expanding (as CRM did) well beyond marketing into service, commerce, sales and beyond."

This framing has aged remarkably well. In 2020, CDP vendors were positioning themselves as something entirely new — the silver bullet that would finally unify customer data. We pushed back. We argued that the problems CDPs were solving were the same problems marketers had been wrestling with since the Society of the Divine Savior was running predictive models on IBM tape drives in 1961.

Today, nobody serious debates this anymore. CDPs are understood as a layer in the stack, not a replacement for everything that came before. The hype has settled into reality.

---

## The Problem We Diagnosed: Still the Problem

Perhaps our most durable insight was identifying what we called the "Frankenstack" — the accretion of disconnected marketing technologies that plague every enterprise.

We described a luxury automotive brand that ended up with "at least four uncoordinated teams, and three different agencies, each aligned around a different channel." A single customer could have data sitting in twelve different databases, none of them connected.

Sound familiar? It should. This is *still* the reality for most enterprises in 2026. If anything, the problem has gotten worse. Now there's a thirteenth database for the AI tools someone bought without telling IT.

We also nailed the root cause:

> "The problem is not a lack of data. In fact, marketers report using a median of 10 distinct data sources in 2020, and will expand that to 12 next year... So, lack of data is not the issue."

Data scarcity was never the problem. Data fragmentation was. That insight remains as true today as it was then.

---

## The Framework That Became Industry Standard

In Chapter 4, Martin and I proposed a framework that would shape how the entire industry talked about CDPs for years to come: the distinction between **Systems of Insight** and **Systems of Engagement**.

This came from Martin's analysis of 400+ RFPs at Salesforce. He noticed that buyers were asking for fundamentally different things, and crystallized them into two buckets:

- **System of Insight:** Focused on creating a "golden record" — a unified customer profile for analysis, segmentation, and measurement.
- **System of Engagement:** Focused on real-time personalization — making split-second decisions about what message to show, what offer to make.

We observed that most CDP vendors fell cleanly into one camp or the other. Very few could do both. We argued that true "Enterprise CDPs" would need to combine both capabilities.

This framing stuck. Walk into any CDP evaluation today, and you'll hear buyers asking: "Is this an insights CDP or an engagement CDP?" We didn't invent the distinction, but we codified it.

---

## The Privacy Prediction: Prophetic

Chapter 6, on building first-party data assets with consent, reads like prophecy now.

We wrote extensively about the "Privacy Paradox" — the tension between consumers' demand for personalization and their distrust of data collection. We predicted that browser changes and regulatory pressure would fundamentally reshape how marketers collect and use data.

> "While the exact contours of the browser solutions aren't clear, it's safe to say that the future of ad targeting and measurement will be driven by first-party data (where it's available); consumers who explicitly opt-in to collection and use of their data; and the use of aggregate — rather than user-level — information."

This was written before Chrome announced its cookie deprecation timeline. Before Apple's ATT bombshell. Before the cookieless future became the cookieless present.

We got lucky on timing, but the underlying analysis was sound: the third-party data ecosystem was built on workarounds and borrowed time. First-party data with consent wasn't just a nice-to-have — it was going to be the only game in town.

---

## Where We Were Wrong

Here's where the retrospective gets uncomfortable.

### The Warehouse Blindspot

We assumed CDPs would *be* the data layer — the single source of truth that housed the golden customer record. We wrote about data ingestion, harmonization, and storage as core CDP functions.

What we didn't see coming was the rise of the **modern data stack** and the composable CDP architecture.

In 2026, the most sophisticated marketing organizations don't store their customer data in their CDP. They store it in Snowflake or BigQuery. The CDP — tools like Hightouch, Census, or the composable versions from legacy vendors — sits on top of the warehouse and activates that data.

> Our 2020 view: CDP stores the golden record
> 2026 reality: Warehouse stores the golden record; CDP activates it

This is a fundamental architectural shift we completely missed. The data engineering world (dbt, Fivetran, the whole modern data stack) evolved faster than the martech world, and CDPs had to adapt to sit on top of infrastructure they didn't control.

### The LiveRamp Prediction

We wrote extensively about "data onboarding" as the critical bridge between known and unknown customer data. LiveRamp was the poster child:

> "LiveRamp is the most widely-used of these companies, and it built a $3 billion business by providing the identity infrastructure marketers and publishers can license to connect the known and unknown together."

We assumed this onboarding model would remain central. Instead, the composable CDP architecture — connecting directly to data warehouses — made the middleman step less necessary for many use cases. LiveRamp is still around, but the model we described isn't the dominant paradigm anymore.

### Cross-Device Identity Got Harder, Not Easier

We spent significant page count on Cross-Device Identity Management (CDIM), arguing it was critical infrastructure for the customer-driven future.

We were right that it mattered. We were wrong about the trajectory.

The cookie apocalypse didn't make cross-device identity easier — it made it nearly impossible for most brands. Deterministic matching relies on logged-in states that most publishers can't achieve at scale. Probabilistic matching got regulated into oblivion. Most marketers have simply accepted the loss and moved on.

### Market Consolidation vs. Proliferation

We cited Scott Brinker's famous marketing technology landscape — 8,000+ vendors and counting. We anticipated continued proliferation.

Instead, 2024-2025 brought a massive M&A wave. The CDP Institute's 90+ members? Maybe 30 independent ones remain. The rest were acquired, merged, or quietly shut down. The category didn't expand — it consolidated, violently.

---

## What We Could Never Have Predicted

Some things simply weren't predictable from the vantage point of 2020.

### Generative AI Changed Everything

Chapter 9 of our book covered artificial intelligence. We discussed machine learning for segmentation, propensity modeling, and product recommendations — the state of the art at the time.

What we couldn't have imagined was ChatGPT, Claude, and the generative AI revolution that would arrive two years later.

Today's CDPs don't just use AI to *score* customers. They use AI to *create* content, *write* campaigns, and in some cases, *autonomously execute* marketing programs without human intervention. The "Personalize" layer we described has been transformed by technology that didn't exist when we were writing.

### AI Agents Are Making Decisions

We wrote about "Plan and React" capabilities — the ability for marketers to set up journeys and rules for handling real-time events.

In 2026, the cutting edge isn't "Plan and React." It's "Plan and Let the AI React." Autonomous agents are embedded in CDPs, making optimization decisions, adjusting send times, selecting creative variants — all without a human in the loop.

Martin has literally written the book on this — *Agentforce* covers why AI agents are the "third wave" of AI development, far beyond chatbots and copilots. He calls it "digital labor" — agents that don't just assist humans but act autonomously within guardrails. It's the natural evolution of everything we wrote about in the CDP book, but we couldn't have seen it coming in 2020.

Our book described a world where AI *informed* human decisions. The reality is a world where AI increasingly *makes* the decisions.

### The Modern Data Stack Emerged From Engineering, Not Marketing

The composable CDP paradigm didn't come from martech innovation. It came from data engineering teams who built the modern data stack (dbt, Fivetran, etc.) and then extended it to marketing use cases.

This was a classic example of disruption from an adjacent field. We were watching the CDP vendors. We should have been watching the data engineers.

---

## What We'd Write Differently Today

I ran this retrospective by Martin, and we agreed: if we were writing *Customer Data Platforms* in 2026, here's what would change:

**1. Start with the warehouse.** The architectural assumption would flip. CDPs would be positioned as activation layers on top of data infrastructure, not replacements for it.

**2. Add a chapter on AI agents.** The "Personalize" layer needs to account for autonomous decision-making, not just ML models that inform human choices.

**3. Less on DMPs.** We spent significant pages on how DMPs would evolve into CDPs. That transition happened, but it's old news now. The DMP as a distinct category is effectively dead.

**4. More on organizational change.** Chapter 7 touched on building a "customer-driven marketing machine," but the people and process challenges deserve more weight. Technology is 30% of the problem. The other 70% is getting humans to change how they work.

**5. Composable architecture.** The entire "Organizing Customer Data" chapter would need a rewrite to account for reverse ETL, warehouse-native activation, and the composable paradigm.

---

## Predictions for 2030

Having been humbled by what we got wrong, let me make a few cautious predictions for the next five years:

**1. The CDP category name will fade.** Not because the problems go away, but because the capabilities will be absorbed into broader platforms. Just as "email service provider" became a feature of marketing clouds, "CDP" will become a feature of data platforms.

**2. AI agents will handle 50%+ of campaign decisions.** Humans will set guardrails and strategy. AI will handle execution and optimization.

**3. First-party data networks will emerge.** Brands will form consortiums to share anonymized data in privacy-preserving ways — a decentralized alternative to the walled gardens.

**4. Real-time will matter less.** Controversial take: the obsession with millisecond response times will fade as marketers realize that "fast enough" beats "instant" for most use cases.

**5. Identity will bifurcate.** Enterprises with logged-in user bases will have incredible identity resolution. Everyone else will operate in probabilistic fog. The gap will widen.

---

## The Bottom Line

Five years ago, we wrote a book trying to make sense of a confusing, hype-filled technology category. We got the fundamentals right: the problems marketers face, the framework for thinking about solutions, and the inevitability of privacy-first data strategies.

We got some specifics wrong: the architectural shift toward warehouses, the trajectory of cross-device identity, and the pace of market consolidation.

And we couldn't have predicted the generative AI revolution that would reshape not just CDPs, but the entire practice of marketing.

That's the nature of writing about technology. You do your best to identify durable truths and make educated guesses about the rest. Some of those guesses land. Some don't. The honest thing to do is go back, look at the record, and learn from both.

The good news: the core problem we diagnosed — fragmented customer data preventing personalized experiences — hasn't been solved. If anything, it's gotten worse as AI tools add new data silos to the Frankenstack.

Which means there's still work to do. Martin's already on it — his new book *Agentforce* tackles the autonomous AI future head-on. Maybe it's time for us to write a sequel. *Customer Data Platforms 2.0: Now With AI Agents* has a nice ring to it. Or maybe Martin's already written it.

---

*Chris O'Hara is VP of Product Marketing at SAP and co-author of* Customer Data Platforms *(Wiley, 2020) and* Data Driven *(McGraw Hill, 2018). He writes about marketing, technology, and the future of customer engagement at [thefullstack.chrisohara.com](https://thefullstack.chrisohara.com).*

*Martin Kihn is SVP of Strategy for Salesforce Marketing Cloud and author of* [Agentforce: Harnessing the Agency of AI to Scale, Grow, and Lead Any Industry](https://www.amazon.com/Agentforce-Harnessing-Agency-Scale-Industry-ebook/dp/B0FCP4DMND) *(Wiley, 2025),* Customer Data Platforms *(Wiley, 2020), and* House of Lies *(Hachette), which became a Showtime series. He hosts the [PaleoAdTech podcast](https://martinkihn.com) and writes about marketing trends for Forbes.*
