---

Everyone is jumping on the "let's prove a concept fast" bandwagon with AI-driven conversation technology. The real challenge? Moving from an impressive demo to a production-ready product. This transition catches most builders off guard. Big investments lead to big headaches.

At Mogil Ventures, we've spent considerable time building and analyzing how enterprises, startups, and individual developers approach conversational AI agents. We've identified six clear tiers that describe how someone can implement these systems. As you move down the tiers, each level brings more complexity and cost—but also more customization. It's natural to start near the top to build a higher-level proof of concept, then work your way down as new needs emerge and you want more control over your build.

Most builders, even those with strong engineering backgrounds, often lack direct experience creating AI agents. The field is simply too new. This reality underscores the need for intuitive solutions and orchestration management that help teams navigate the evolving landscape more easily.

---

## Core Architecture Components

Before diving into the tiers, let's establish what actually makes up a conversational AI agent. Understanding these components helps you evaluate where complexity lives and where you might want to own versus outsource.

**Orchestration Engine** — the "central conductor":

The AI Agent Core handles the brain of your system. This includes the Context Engine (managing tools, knowledge, and memory), where tools interact with external services to pull or push data, knowledge represents information pulled outside of user interactions, and memory enables continuous learning through storage and retrieval from past user interactions. LLM Integration covers model selection, prompt orchestration, and determining the voice and tone of the agent.

The State Manager retains conversation context across multiple channels—SMS, phone calls, and interactions with other agents, both human and AI.

The Workflow Manager bridges the gap between deterministic logic (if-then statements) and non-deterministic AI responses. This is where most production implementations get tricky.

**Channel Integrations** — where your agent meets customers:

Voice channels require text-to-speech, speech-to-text, interruption handling, turn detection, telephony integration, and increasingly speech-to-speech capabilities. Messaging spans SMS, RCS, email, webchat, and over-the-top platforms. Video adds another layer of complexity for face-to-face AI interactions.

**Production Requirements** — what separates demos from deployments:

Handoff Systems enable escalation from AI-driven conversations to human representatives or ticketing systems when necessary. Guardrails and Content Moderation ensure brand-safe, on-message output that isn't inadvertently offensive. An Evaluation Framework tests your application's performance across generative scenarios and rule-based sequences, including simulations and post-production evaluations. Analytics and Monitoring track post-deployment performance—observability matters. Version Management provides proper pipelines, rollback capabilities if new releases break, and A/B testing. Scaling and Hosting handles increasing traffic demands with automatic resource scaling.

That's the iceberg under the waterline. Great demos don't equal great production. There's no single "right way" to build an AI agent since the market moves so fast. Measuring "good" isn't always clear. Every channel adds complexity. Most builders feel like they're navigating blind.

---

## The Six-Tier Implementation Framework

This framework can help you place any customer, evaluate any vendor, and understand where organizations will likely move next. The tiers explain what they've built, what they can buy, and where they're headed.

### Tier 1: Complete Custom Build

**Builder Approach:** Everything from scratch.

**Capabilities:** Unlimited—if you have the time and capital to pull it off.

**Requirements:** You need top-tier engineers across multiple specialties. Teams building here typically have dedicated ML engineers, infrastructure specialists, and deep domain expertise.

**Characteristics:** Can be fragile at large volumes. Maintenance can turn into a nightmare if you're not prepared. This approach sometimes gets compared to setting up your own cloud infrastructure circa 2010. Feasible, yes. Optimal, maybe not.

**Time to Production:** Months to years.

**When This Makes Sense:** Organizations with unique requirements that no vendor can address, companies where the AI agent is their core product differentiator, or teams with substantial engineering resources and runway.

### Tier 2: Custom Orchestration + Components

**Builder Approach:** Construct your own orchestration logic while borrowing specialized modules from third parties.

**Capabilities:** Highly customizable, but less from-the-ground-up than Tier 1. You're still writing substantial custom code, but standing on the shoulders of specialized vendors for specific capabilities.

**Requirements:** Top-notch engineering talent, plus the ability to juggle vendor relationships. Integration work is real—expect to spend significant time on glue code.

**Characteristics:** Integrations can be dicey. Conflicting vendor requirements sometimes throw a wrench in the works. The component ecosystem includes solutions for voice orchestration, memory management, observability, and hosted models with built-in guardrails.

**Time to Production:** Weeks to months.

**When This Makes Sense:** Teams that want control over the core experience but don't need to reinvent every wheel. Common for organizations that have specific requirements in one area (say, voice quality) but can use off-the-shelf solutions elsewhere.

### Tier 3: Agent Frameworks

**Builder Approach:** Frameworks exist so builders don't have to reinvent every wheel. They abstract the orchestration and state management layer for underlying primitives.

**Market Leaders:**
- **LangChain/LangGraph** (~111k GitHub stars) — The dominant general-purpose framework for LLM application development
- **CrewAI** (~34k GitHub stars) — Focused on multi-agent orchestration and role-based agent teams
- **OpenAI Agents SDK** (~12k GitHub stars) — Native integration with OpenAI models, increasingly popular for production deployments
- **Pipecat** (~7k GitHub stars) — Specialized for real-time, multimodal AI applications
- **LiveKit Agents SDK** (~7k GitHub stars) — Purpose-built for real-time voice and video AI agents

**Capabilities:** Quick development cycles because the architecture is already there for you. These frameworks provide opinionated structures for common patterns while still offering escape hatches for customization.

**Important Caveat:** Most frameworks make it difficult to use outside primitives because they have their own. For example, some voice-focused SDKs require you to use their session services to connect to telephony infrastructure. If you're using their SDK, you may not be able to swap in a different voice orchestration layer. Evaluate lock-in carefully.

**Time to Production:** Weeks.

**When This Makes Sense:** Teams that want to move fast but maintain code-level control. Developers comfortable working within opinionated systems. Organizations that anticipate needing to customize behavior as they scale.

### Tier 4: Agent Building Platforms

**Builder Approach:** Graphical interfaces plus some API flexibility. You get something up and running quickly while retaining some control over backend configurations.

**Capabilities:** "Configure business logic, deploy." The platform handles heavy lifting behind the scenes—hosting, scaling, basic observability.

**Use Cases:** Prototypes, MVPs, or narrow use cases like appointment scheduling, FAQ handling, or simple customer service flows.

**Market Players:**
- **General Platforms:** Microsoft AI Foundry Assistants, AWS Bedrock Agents
- **Voice-Specific:** Retell AI, Vapi, Bland AI, ElevenLabs, Deepgram

**Note:** These players largely build their own primitives and make it difficult or impossible for builders to use outside components (typically only accessible via tool calls). This is by design—they optimize for speed to deployment, not flexibility.

**Time to Production:** Days to weeks.

**When This Makes Sense:** Teams that need to validate an idea quickly. Organizations without dedicated AI engineering resources. Use cases that fit cleanly into the platform's supported patterns.

### Tier 5: Outcome-Based Platforms

**Builder Approach:** Let someone else handle the majority of work, from architecture to updates. These are essentially Tier 4 platforms with added services—vendor teams help design, build, and ship your agents.

**Market Players:** Sierra.ai, Decagon.ai, Regal.ai, Yellow.ai (some are moving closer to Tier 4 territory as they expand self-service capabilities).

**Capabilities:** Minimal in-house workload. You manage the relationship with the vendor and focus on business outcomes rather than technical implementation.

**Characteristics:** You don't control everything. Typically, you're locked into that vendor unless you're ready for a major migration. The trade-off is speed—these vendors have seen dozens of implementations and can accelerate past common pitfalls.

**Time to Production:** Days.

**When This Makes Sense:** Organizations where AI agents are not a core competency but are strategically important. Teams under time pressure with budget for vendor relationships. Companies that prefer buying over building.

### Tier 6: Vertical Solutions

**Builder Approach:** Pre-made, specialized packages for specific industries.

**Market Players:** Slang.ai (restaurants), Setter.ai (home services), and dozens of industry-specific solutions across healthcare, real estate, financial services, and beyond.

**Capabilities:** Ready to roll out of the box. Zero to live in no time. These vendors have encoded industry-specific knowledge, compliance requirements, and integration patterns.

**Characteristics:** Limited scope if your needs are broad. Sometimes they match your use case perfectly, but they're not flexible for edge cases or significant customization.

**Time to Production:** Hours to days.

**When This Makes Sense:** Smaller businesses that prefer purchasing solutions rather than building them. Organizations in well-defined verticals with standard workflows. Teams that need immediate ROI without engineering investment.

---

## Developer Ownership Across Tiers

Ownership works like a dimmer switch, not an on/off toggle.

At Tier 1, you own mostly custom code, need many engineers, and measure deployment in months. Tiers 2 and 3 involve some custom code, still require capable engineering teams, and deployment takes weeks to months. Tier 4 is mostly platform-driven, requires a small team, and deploys in weeks. Tiers 5 and 6 are vendor-managed with deployment measured in days.

Lower tiers give builders control by owning more of the iceberg. Higher tiers trade control for speed. Neither is universally better—it depends on your organization's capabilities, timeline, and strategic priorities.

**Critical insight:** Customers move up and down these tiers as they encounter different requirements and resources for every agent they build. Your first agent might be Tier 5; your fifth might be Tier 2. The path isn't linear.

---

## Three Patterns That Predict Movement

Having observed dozens of implementations across these tiers, we've seen three patterns consistently emerge. Understanding them helps predict where an organization is headed—and what challenges they'll face.

### Pattern 1: Starting High and Moving Low

Most teams start at Tier 4 or 5. Why? Internal mandates and market pressure to "show AI now."

These tiers let you spin up a proof of concept in days, not weeks. That quick time-to-value gets attention and budget from stakeholders. The demo goes well. Leadership is excited.

Then reality sets in: production.

As you move to real workloads, needs get more complex. Multi-agent coordination, context and memory management, state handling, governance, cost control. More UX control equals more complexity.

So builders move down to Tier 3 and below. They keep what worked up high and add customization where they need to differentiate.

**Takeaway:** Start high to learn fast, but plan the descent early so you can launch and scale.

### Pattern 2: Starting Low and Moving High

The flip side: early adopters and companies building AI agents as a core product for their customers often start in Tier 1 or 2. They want maximum control, and they've got the engineering talent to execute.

You get raw primitives, full UX control—but the complexity stacks up fast once you hit production. Scaling, reliability, observability, compliance. Each adds overhead.

As pressure grows, builders get overwhelmed and move up tiers to deliver value faster. Higher tiers mean faster time-to-value because more is managed for you: orchestration, guardrails, hosting, compliance, QA.

**Example:** A healthcare company started at Tier 2, building on low-level voice components with a custom orchestration layer. Challenge: short timeline, limited resources. They moved to Tier 5 with a managed platform to offload complexity and focus on patient outcomes rather than infrastructure.

**Takeaway:** Keep the custom pieces that differentiate, and abstract the rest as you scale.

### Pattern 3: Building for Customers vs. Building for Internal Use

Here's how the ecosystem naturally sorts itself.

Companies building AI agents for internal use—especially smaller or less-technical teams—tend to buy instead of build. That's why Tiers 5 and 6 fit them best: more is managed, outcomes show up faster.

Meanwhile, companies building AI-powered products for their customers do the heavy lifting down in Tiers 1 through 4. They use Tiers 2 and 3 as the foundation, then package that work into Tier 5 and 6 offerings for their end users.

The pattern: most internal-use builders cluster in Tiers 4 through 6, while product companies span Tiers 1 through 4 as they build for others and try to capture value.

**Takeaway:** Understand whether you're building for internal operations or building a product to sell. The tier strategy differs significantly.

---

## Identifying Where You (or Your Customer) Sits

Four directional questions help identify the current tier and likely next move:

**1. Do you have dedicated AI/ML engineers?**
If no, you're probably Tier 4 or higher. If yes, how many and how experienced? That determines whether Tier 1, 2, or 3 makes sense.

**2. What's your timeline to production?**
Days? Tier 5 or 6. Weeks? Tier 3 or 4. Months? Tier 1 or 2 might be feasible.

**3. How unique are your requirements?**
Standard use case with some customization? Higher tiers work. Highly differentiated experience that's core to your product? You'll need to go lower.

**4. Who's driving this initiative?**
Business stakeholder wanting quick results? Lean toward higher tiers. Technical leadership wanting control and differentiation? Lower tiers become more attractive.

---

## The Market Is Shifting

The market is evolving rapidly. What customers wanted last year—a black-box bot that "just works"—is giving way to a preference for building blocks they can control. Customers want to own the points that drive ROI.

Recent research shows the shift clearly. In 2023, roughly 80% of organizations bought vendor solutions. By 2024, it was nearly split: 47% building in-house versus 53% buying. The drivers aren't primarily cost—only about 1% cite price as the deciding factor. Instead, organizations are motivated by measurable ROI (around 30%), industry-specific customization (around 26%), and data control and compliance (around 21%).

Translation: customers want platforms and primitives, not black boxes. The winners in this space will offer both rapid deployment for those who need speed and granular control for those who need differentiation.

---

## Recommendations for Builders

Based on our work with clients across these tiers, here's practical guidance for navigating the landscape:

**If you're just starting:**
Begin at Tier 4 or 5 to validate the use case and build organizational buy-in. Don't over-invest in infrastructure before you've proven value. Use managed platforms to learn what matters for your specific domain—which edge cases break, what users actually need, where you'll want to customize.

**If you've validated and need to scale:**
Plan your descent early. Identify which components are commodity (use higher-tier solutions) versus differentiating (invest in lower-tier control). Common patterns: own the orchestration layer, buy the voice/speech components, build custom memory and context systems.

**If you're building a product for your customers:**
Start lower than your customers will need to. You need to understand the full stack to build defensible products. Then package your learnings into higher-tier offerings that abstract complexity for your end users.

**If you're evaluating vendors:**
Ask about escape hatches. How hard is it to move data and workflows if you outgrow the platform? What can you customize versus what's locked? How do they handle the transition from POC to production?

**Regardless of tier:**
Voice is the most complex channel due to its real-time nature. If voice is important to your use case, evaluate voice capabilities carefully and separately from general platform capabilities.

---

## Final Thoughts

Only about 5% of generative AI pilots reach production today. The problem isn't the technology—it's the path to production.

This six-tier framework provides a mental model for placing any organization, evaluating any vendor, and predicting where the journey leads next. The patterns are consistent: most teams underestimate the demo-to-production gap, overestimate their ability to build everything, and eventually find their right tier through some combination of ambition, constraint, and hard-won lessons.

The organizations that succeed are the ones that match their tier to their capabilities and timeline—then plan for movement as requirements evolve.

---

*Looking to navigate the conversational AI landscape for your organization? [Book a call with Mogil Ventures](#book-call) to discuss your specific situation and identify the right approach for your team.*
