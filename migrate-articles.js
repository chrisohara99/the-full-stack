// Parse all articles from WordPress RSS feeds
const articles = [
  // 2023 articles
  {
    title: "CX Live London",
    date: "2023-01-06",
    dateDisplay: "January 2023",
    tags: ["cx", "cdp"],
    sourceUrl: "https://chrisohara.wordpress.com/2023/01/06/cx-live-london/",
    excerpt: "How to put customers at the heart of your intelligent enterprise and facilitate experiences that drive lifetime value through an enterprise-wide customer data foundation.",
    content: `<p><strong>Grow Your Business Through Enterprise-Wide Customer Centricity</strong></p>
<p>In this session, you'll learn how to put customers at the heart of your intelligent enterprise and facilitate experiences that drive lifetime value. You'll see how an enterprise-wide customer data foundation bridges organizational silos, enables real-time customer insights where decisions are made, and fuels personalized experiences that show that you truly know your customer.</p>`
  },
  {
    title: "Proactive customer experience: How a CDP can help end bad CX",
    date: "2023-01-04",
    dateDisplay: "January 2023",
    tags: ["cdp", "cx"],
    sourceUrl: "https://chrisohara.wordpress.com/2023/01/03/proactive-customer-experience-how-a-cdp-can-help-end-bad-cx/",
    excerpt: "All the energy for the first 10 years of the customer data platform era was focused on marketing and advertising. Now we're beginning to see the next phase: preventing bad experiences.",
    content: `<p>All the energy for the first 10 years of the customer data platform era was focused on marketing and advertising. Deep profile data and precise audience segmentation led to better performance in social ads, email campaigns, and customer journeys. Lately, we've seen CDPs also start to drive more connectivity between CRM applications for better customer experience. Now, we're beginning to see the next phase of customer data management: Creating better, proactive customer experience by preventing bad experiences.</p>
<h2>Bad customer experience: Why CX is getting worse and how brands can reverse the trend</h2>
<p>Today, smart brands are unearthing interesting signals from customer data and applying them for various use cases. For example, why market to customers that have an unresolved issue in the call center? They probably don't want to be sold anything new until their issues are resolved. By unifying marketing and service data, the CDP provides a way to execute this use case without making it a costly IT endeavor.</p>
<p>This is all great stuff, and exactly what customer experience managers should be doing. Leveraging loyalty data to drive e-mail campaign content, leveraging purchase data to drive next-best offers, and using survey and preference data to personalize messages. CDPs should be the glue that connects customer experience together.</p>
<p>Preventing a bad experience before it happens is deep, proactive customer experience – and one of the first steps on the way to enterprise CDP. Customer data pointed at the core systems that drive manufacturing and supply chain management is just one simple use case. There are hundreds more ways in which this powerful data can add intelligence and automation to backend of business processes. It's an exciting new era!</p>
<p class="orig-pub">This post originally appeared on The Future of Customer Experience.</p>`
  },
  {
    title: "Delight doesn't fly: Digital customer engagement for the future",
    date: "2023-01-04",
    dateDisplay: "January 2023",
    tags: ["cdp", "cx"],
    sourceUrl: "https://chrisohara.wordpress.com/2023/01/03/delight-doesnt-fly-digital-customer-engagement-for-the-future/",
    excerpt: "Direct mail legend Charles Stryker recounted a famous story about data that every leader managing digital customer engagement should know.",
    content: `<p>Direct mail legend Charles Stryker recounted a famous story in 2014 about data that every leader managing digital customer engagement should know. Years ago, the US Postal Service discovered they were spending millions of dollars a year to deliver mail to deceased people. Charles was hired to help them get a handle on their address records and create a "Do Not Mail" list.</p>
<p>The dead people responded at nearly twice the rate of the living. Researchers eventually determined what happened: successful mailers went to households where the husband of the family died, and their elderly spouses were taking great care to go through the mail of their deceased partners.</p>
<h2>Digital customer engagement: Amazon set the pace</h2>
<p>Today, brands must consider Amazon the gold standard for customer experience. You buy almost anything in the world available for sale on Amazon, do so quickly with one-click ordering, pay seamlessly, expect ultra-fast shipping, track your orders, easily return products, and get relevant product recommendations.</p>
<h2>Forget about delighting customers. Instead, solve their problems.</h2>
<p>Back in 2013, Gartner surveyed 97,000 consumers to understand how customer service interactions with brands impacted loyalty. The results were surprising. Many brands made gigantic investments trying to "delight" their customers, spending as much as 20% more in operational costs, but people didn't care. Customers just want their problems solved.</p>
<p class="orig-pub">This post was originally published on The Future of Customer Experience.</p>`
  },
  {
    title: "Data Management is the Backbone of Enterprise Agility in CX",
    date: "2022-04-12",
    dateDisplay: "April 2022",
    tags: ["cdp", "cx", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2022/04/12/data-management-is-the-backbone-of-enterprise-agility-in-cx/",
    excerpt: "Moving from next-best-action to next-best-dollar requires richer data, actionable intelligence, and pervasive automation.",
    content: `<p><em>Moving from next-best-action to next-best-dollar requires richer data, actionable intelligence, and pervasive automation</em></p>
<p>As Heraclitus reminds us, "No man ever steps in the same river twice, for it's not the same river and he's not the same man." This is arguably even more true since Heraclitus uttered the phrase, given the rapid and abrupt changes we have seen in the world lately and their impact on global business.</p>
<p>The framework for managing through this is broadly called "enterprise agility," or an organization's ability to quickly adapt to market changes. Amid rapid change, marketing always seems to lead the way.</p>
<h2>Data</h2>
<p>It starts, of course with customer data management. First, you need the scaled ability to capture first party data with consent. Every new customer coming to the website and mobile app must be encouraged to authenticate and start engaging with the brand.</p>
<h2>Intelligence</h2>
<p>If a company has managed to create a unified data model, and has created models that can predict true customer value, you still need to scale intelligence. How strong is your organization's ability to implement a machine learning framework that updates customer segments based on new information?</p>
<h2>Automation</h2>
<p>After intelligence comes automation. How do you action the insights you have aggregated? This is the new battleground in marketing – the ability to utilize intelligence at scale to render the right decision across both offline and online channels, in near-realtime.</p>
<p class="orig-pub">This post originally appeared in The Future of Customer Engagement on 12 April 2022.</p>`
  },
  {
    title: "The Data Gravity Effect",
    date: "2022-04-11",
    dateDisplay: "April 2022",
    tags: ["cdp", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2022/04/11/the-data-gravity-effect/",
    excerpt: "When less is more — why better data beats more data, and how brands that focus on meaningful value exchange will amass the right first-party data gravity.",
    content: `<p>Ben Bloom's recent post on the Gartner Blog ("CDPs Don't Eliminate Friction With Customer Data") shined a light on a topic we rarely hear about in the CDP world – the cost and effort associated with building a first-party data asset, and the possibly diminishing returns of building a complex "Customer 360" view.</p>
<p>Amidst the hype surrounding the "cookieless future," the answer seems to be "collect more first-party data with a CDP." While not wrong, the singular focus on data collection to make up for the scale and accessibility of third-party data misses the point.</p>
<p>Put simply, "data gravity" is when you reach a certain point in your collection efforts in which the more data you have, the more you attract. The basic model is a value exchange. I give Instacart both my weekly grocery business and the data related to it, and they save me countless hours shopping.</p>
<p>Brands that want to go beyond the "more is better" methodology and start to amass meaningful data gravity must consider: Authentication, Consent and Preferences, and Data Governance and Stewardship.</p>
<p class="orig-pub">A version of this post appeared on the Future of Customer Engagement.</p>`
  },
  {
    title: "The Five Vs of Data Virtuosity",
    date: "2022-03-15",
    dateDisplay: "March 2022",
    tags: ["cdp", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2022/03/15/the-five-vs-of-data-virtuosity/",
    excerpt: "Rethinking enterprise data management in our new normal — how volume, velocity, variety, veracity, and value should be re-examined in the age of CDPs.",
    content: `<h2>Rethinking enterprise data management in our new normal</h2>
<p>Ever since Gartner's Doug Laney coined the "3 Vs of Big Data" back in 2001, there have been endless iterations and attempts to define the terms of engagement. The core three were always "volume, velocity, and variety." In subsequent years, there has been a consensus around at least two more: veracity and value.</p>
<h2>Variety</h2>
<p>When it comes to leveraging data to drive customer experience, we are basically in the very first innings of a long and interesting game. There are so many possibilities for unleashing data on modern CX challenges.</p>
<h2>Volume</h2>
<p>Managing data at scale has always been a challenge. We need to consider that better data is greater than more data.</p>
<h2>Velocity</h2>
<p>The hidden layer when it comes to delivering meaningful velocity in data management has more to do with data that can unleash true business agility.</p>
<h2>Veracity</h2>
<p>In this new world, zero is everything. We have entered the CIAM era of identity management, and the new token of value is "zero-party" (permission-based) data.</p>
<h2>Value</h2>
<p>Is "enterprise data" hidden in the chain become the true driver of "enterprise CDP?"</p>`
  },
  {
    title: "The New Era of CDP",
    date: "2022-02-15",
    dateDisplay: "February 2022",
    tags: ["cdp", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2022/02/15/the-new-era-of-cdp/",
    excerpt: "We are in an interesting new era of marketing and technology. The last 20 years have been really fascinating to watch and be a participant in.",
    content: `<p>We are in an interesting new era of marketing and technology. The last 20 years have been really fascinating to watch and be a participant in. I started my career in the first "walled garden" era, in which big publishers tightly controlled access to their audiences through the gates of salespeople and insertion orders.</p>
<p>I recently wrote a book on the topic with my friend Martin Kihn (called "Customer Data Platforms"), and we speculated that this era in which CDPs are the dominant technology for organizing and managing customer data, would be around for a long time.</p>
<h2>What is the purpose of CDPs?</h2>
<p>Typical answer: CDPs are a data management technology for capturing, transforming, unifying, segmenting, and activating first-party people data. Very true, and not wrong. But why? Generally, the answer is "to improve customer experience."</p>
<h2>CDPs are Foundational</h2>
<p>The first thing is obvious: identity. Building a modern data management infrastructure begins and ends with mastering customer identity.</p>
<h2>The New Era</h2>
<p>In this new era, we will see identity redefined as consumer-driven through preference management. We will finally start to see supply chain management and customer experience coming together – threaded through data and identity infrastructure.</p>
<p class="orig-pub">A version of this post appeared on the Future of Customer Engagement.</p>`
  },
  {
    title: "Connecticut College Magazine",
    date: "2021-07-26",
    dateDisplay: "July 2021",
    tags: ["cdp", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2021/07/26/connecticut-college-magazine/",
    excerpt: "Chris O'Hara '90 of Salesforce is helping companies ethically navigate the evolving world of digital marketing and consumer data.",
    content: `<h2>Chris O'Hara '90 of Salesforce is helping companies ethically navigate the evolving world of digital marketing and consumer data.</h2>
<p>BY DOUG DANIELS</p>
<p>There's an iconic scene in Steven Spielberg's Minority Report in which Tom Cruise walks through a shopping mall, a steady stream of jabbering digital billboards scanning his retinas and instantly plying him with personalized advertisements.</p>
<p>That movie is set in the year 2054. But today, we already have much of the technical capability to create the type of intrusive consumer experience Spielberg's film envisioned.</p>
<p>"The challenge is striking a balance," says Chris O'Hara '90, VP of global product marketing in the Data and Identity Group at Salesforce. "People really want personalization, but they also want privacy."</p>
<p class="orig-pub">This originally appeared in Connecticut College's CC Magazine, Summer 2021 issue.</p>`
  },
  {
    title: "Master Your Marketing",
    date: "2021-04-30",
    dateDisplay: "April 2021",
    tags: ["cdp"],
    sourceUrl: "https://chrisohara.wordpress.com/2021/04/30/master-your-marketing/",
    excerpt: "Join me, co-author Martin Kihn and our friend Art Sebastian, head of digital for Casey's discuss CDPs and their impact on personalization.",
    content: `<p>Join me, co-author Martin Kihn and our friend Art Sebastian, head of digital for Casey's discuss CDPs and their impact on personalization.</p>`
  },
  {
    title: "CDP and the Five Vs",
    date: "2021-04-11",
    dateDisplay: "April 2021",
    tags: ["cdp", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2021/04/11/cdp-and-the-five-vs/",
    excerpt: "I jumped into my friend's amazing blog to write about the five Vs that every CDP needs to be successful.",
    content: `<p>I jumped into my friend's amazing blog to write about the "five Vs" that every CDP needs to be successful.</p>
<p>The rise of the customer data platform has been interesting to watch. CDPs are an exciting new software category, and most progressive organizations are looking at them as a way of solving some fundamental business challenges.</p>
<h2>Velocity</h2>
<p>Your systems need to manage a high volume of data, coming in at various speeds.</p>
<h2>Variety</h2>
<p>You then need to map first-party data into a single information model.</p>
<h2>Veracity</h2>
<p>Companies must ensure they can provision a single, persistent profile for every customer or account.</p>
<h2>Volume</h2>
<p>Once you manage to resolve and identify data from many different sources and systems, you end up with…a lot of data.</p>
<h2>Value</h2>
<p>The real question is, how do you make data actionable in every channel?</p>`
  },
  {
    title: "Customer Data Platforms: The Book!",
    date: "2020-10-08",
    dateDisplay: "October 2020",
    tags: ["cdp"],
    sourceUrl: "https://chrisohara.wordpress.com/2020/10/08/customer-data-platforms-the-book/",
    excerpt: "I'm very excited to announce a new book I have written with Martin Kihn, which is the first book on the customer data platform (CDP) category.",
    content: `<p>I'm very excited to announce a new book I have written with Martin Kihn, which is the first book on the customer data platform (CDP) category, a very hot topic in advertising and marketing technology right now! Look for it in November 2020, from Wiley.</p>
<p>Marketers are faced with a stark and challenging dilemma: customers demand deep personalization, but they are increasingly leery of offering the type of personal data required to make it happen. As a solution to this problem, Customer Data Platforms have come to the fore, offering companies way to capture, unify, activate, and analyze customer data.</p>
<p>In this book, you'll discover how to build 1:1 engagement that scales at the speed of today's customers.</p>`
  },
  {
    title: "Data Driven Wins the Axiom Awards!",
    date: "2019-02-20",
    dateDisplay: "February 2019",
    tags: ["cdp", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2019/02/20/data-driven-wins-the-axiom-awards/",
    excerpt: "Proud to announce that my book, Data Driven, has won the 2019 Silver medal for best Business Technology book!",
    content: `<p>Proud to announce that my book, Data Driven, has won the 2019 Silver medal for best Business Technology book!</p>
<p>In August of 2007, Jenkins Group launched the Axiom Awards, "recognizing and promoting the year's best business books." Now, 12 years later, they have announced the winners of the 2019 Axiom Business Book Awards, honoring this year's best business books, their authors, and publishers.</p>`
  },
  {
    title: "Q&A: Salesforce's Chris O'Hara Wants Marketers to Capitalize on the Data Revolution",
    date: "2019-01-07",
    dateDisplay: "January 2019",
    tags: ["cdp", "data", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2019/01/06/qa-salesforces-chris-ohara-wants-marketers-to-capitalize-on-the-data-revolution/",
    excerpt: "If you want to learn about data, Chris O'Hara is the right person to ask.",
    content: `<p>If you want to learn about data, Chris O'Hara is the right person to ask. O'Hara, who leads global product marketing for Salesforce Marketing Cloud's suite of data and audience products, is a big believer in the data revolution—but first, marketers need to take stock of what data they actually have.</p>
<p>"Some marketers think they have way more data than they actually have, and others think they don't have a lot of data but actually do," O'Hara said.</p>
<p>Before joining Salesforce, O'Hara was at Krux, the data management platform that Salesforce acquired in 2016, working on data marketing.</p>`
  },
  {
    title: "The Identity Based Data Platforms of the Future",
    date: "2018-02-05",
    dateDisplay: "February 2018",
    tags: ["cdp", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2018/02/05/the-identity-based-data-platforms-of-the-future/",
    excerpt: "Currently, marketers don't have a single source of truth about their consumers. Tomorrow, there must be a single place to build consumer profiles.",
    content: `<p>Currently, marketers don't have a single source of truth about their consumers. Tomorrow, there must be a single place to build consumer profiles with rich attribute data, and provisioned to the systems of engagement where that consumer spends their time.</p>
<p>At a recent industry event, we heard a lot about the upcoming year in marketing, and how data and identity will play a key role in driving marketing success.</p>
<h2>1. A single data segmentation engine</h2>
<p>Currently, marketers don't have a single source of truth about their consumers. Tomorrow, there must be a single place to build consumer profiles with rich attribute data.</p>
<h2>2. Data pipelining and governance capabilities</h2>
<p>This identity layer must also have the ability to provision data, based on privacy and usage restrictions, to systems of engagement.</p>
<h2>3. Leaping from DMPs to holistic data management</h2>
<p>Marketers can no longer depend solely on another party's match table to bridge the divide between CRM and DMP data.</p>
<p class="orig-pub">This article originally appeared in Econsultancy's blog on 2/1/2018.</p>`
  },
  {
    title: "Why Most of Today's DMPs are Lousy",
    date: "2017-10-20",
    dateDisplay: "October 2017",
    tags: ["martech", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2017/10/20/why-most-of-todays-dmps-are-lousy/",
    excerpt: "How Granular Data Collection and a Robust Second-Party Data Strategy Changes the Game.",
    content: `<p><em>How Granular Data Collection and a Robust Second-Party Data Strategy Changes the Game</em></p>
<p>The world's largest marketers and media companies have strongly embraced data management technology to provide personalization for customers that demand Amazon-like experiences. The good news is most enterprises have taken a technological leap of faith. The bad news is, the systems they are using today are deeply flawed and do not produce optimal audience segmentation.</p>
<p>The problem with a fixed, taxonomy-based collection methodology is just that—it is fixed. There is another way to do this. It's called "schema-on-read," which is the opposite of schema-on-write. In these types of systems, all of the underlying data is collected, and the taxonomy result is created upon reading all of the raw data.</p>`
  },
  {
    title: "The New CMO Lexicon: Redefining Identity and Marketing",
    date: "2017-10-17",
    dateDisplay: "October 2017",
    tags: ["martech", "cx"],
    sourceUrl: "https://chrisohara.wordpress.com/2017/10/17/the-new-cmo-lexicon-redefining-identity-and-marketing/",
    excerpt: "Today's consumers are highly demanding. They expect curated movie recommendations from Netflix, one-click restaurant reservations from OpenTable, on-demand limousine service from Uber.",
    content: `<p>Today's consumers are highly demanding. They expect curated movie recommendations from Netflix, one-click restaurant reservations from OpenTable, on-demand limousine service from Uber, limitless housing options from AirBnB and the world of commerce available 24/7 from Amazon Prime.</p>
<h2>Identity beyond IDs</h2>
<p>A few months ago, I wrote that "identity is the new basis of competition" in marketing. That's still true—you can't build meaningful cross-channel experiences if you can't tie people together with their devices.</p>
<h2>More than Marketing</h2>
<p>The problem is that our definition of marketing often misses the concept of touch points that can exist separately from marketing. These touch points can include interactions between salespeople and potential customers, what happens when a product is returned, and conversations on community sites.</p>
<p class="orig-pub">This article originally appeared in AdExchanger on 10.16.2017.</p>`
  },
  {
    title: "Five Principles of Modern Marketing",
    date: "2017-08-08",
    dateDisplay: "August 2017",
    tags: ["martech", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2017/08/08/five-principles-of-modern-marketing/",
    excerpt: "Every marketer and media company these days is trying to unlock the secret to personalization. Everyone wants to be the next Amazon.",
    content: `<p>Every marketer and media company these days is trying to unlock the secret to personalization. Everyone wants to be the next Amazon, anticipating customer wants and desires and delivering real-time customization.</p>
<h2>Put People First</h2>
<p>A people-centric viewpoint is critical to being a modern marketer. True people-based marketing needs to extend beyond advertising.</p>
<h2>Collect Everything, Measure Everything</h2>
<p>A true commitment to personalized marketing means that you have to understand people.</p>
<h2>Be A Retailer</h2>
<p>Brands must start to own customer relationships and create one-to-one experiences with buyers.</p>
<h2>See The World Dynamically</h2>
<p>Today's segmentation is very much static – and very ineffective for a dynamic world where things change all the time.</p>
<h2>Think Like A Technologist</h2>
<p>To create the change described above requires a commitment to understanding technology.</p>
<p class="orig-pub">This article originally appeared in AdExchanger on 8/7/2017.</p>`
  },
  {
    title: "Data's New Paradigm",
    date: "2017-09-25",
    dateDisplay: "September 2017",
    tags: ["data", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2017/09/25/datas-new-paradigm/",
    excerpt: "The Rules of Data-Driven Marketing are Changing as Data Rights Management Takes Center Stage.",
    content: `<p><em>The Rules of Data-Driven Marketing are Changing as Data Rights Management Takes Center Stage</em></p>
<p>Unless you've been living off the grid, you've seen the promise of "data as the new oil" slowly come to fruition over the last five years. Connected devices are producing data at a Moore's Law-like rate, and companies are building the artificial intelligence systems to mine that data into fuel.</p>
<p>Data owners are beginning to organize around a core principle: Any system that uses my data for insights that doesn't result in a purchase of that data is theft.</p>
<p class="orig-pub">This was originally published in AdExchanger on 9/26/17.</p>`
  },
  {
    title: "DMPs are Dead. Long Live DMPs.",
    date: "2017-05-30",
    dateDisplay: "May 2017",
    tags: ["cdp", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2017/05/30/dmps-are-dead-long-live-dmps/",
    excerpt: "Gartner's Marty Kihn recently made an argument that ad tech and mar tech would not come together, contrary to what he had predicted a few years ago.",
    content: `<p>Gartner's Marty Kihn recently made an argument that ad tech and mar tech would not come together, contrary to what he had predicted a few years ago. When Marty speaks about ad tech, people listen.</p>
<p>Advertising technology and the ecosystem that supports it, both from a commercial business model perspective and the strong influence of agencies in the execution process, has meant that the alignment with software-as-a-service (SaaS) marketing technology is not just an engineering problem to solve.</p>
<p class="orig-pub">This post appeared in AdExchanger on 5/9/2017.</p>`
  },
  {
    title: "What is the future of DMPs?",
    date: "2017-05-30",
    dateDisplay: "May 2017",
    tags: ["cdp", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2017/05/30/what-is-the-future-of-dmps/",
    excerpt: "What is the future of data management platforms? This is a question I get asked a lot.",
    content: `<p><strong>What is the future of data management platforms? This is a question I get asked a lot.</strong></p>
<p>The short answer is that DMPs are now part of larger marketing stacks, and brands realize that harnessing their data is a top priority in order to deliver more efficient marketing.</p>
<p>So, when I am asked, what is the future of DMPs, I say that the idea of licensing something called a "DMP" will not exist in a few years. DMPs will be completely integrated into larger stacks.</p>
<p class="orig-pub">This post was originally published 11 May, 2017 in Econsultancy blog.</p>`
  },
  {
    title: "The Technology Layer Cake",
    date: "2017-04-08",
    dateDisplay: "April 2017",
    tags: ["cdp", "martech", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2017/04/08/the-technology-layer-cake/",
    excerpt: "I saw a great presentation at this year's Industry Preview where Brian Anderson of LUMA Partners presented on the future of marketing clouds.",
    content: `<p>I saw a great presentation at this year's Industry Preview where Brian Anderson of LUMA Partners presented on the future of marketing clouds. His unifying marketechture drawings looked like an amalgamation of various whiteboarding sessions I have had recently with big enterprise marketers.</p>
<h2>The Data Management Layer</h2>
<p>Today's "stack" really consists of three individual layers when you break it down. The first layer, Data Management (DM), contains all of the "pipes" used to connect people identity together.</p>
<h2>The Orchestration Layer</h2>
<p>The next thing marketers need to have is an orchestration layer. This is the "When, Where, and How" of the stack.</p>
<h2>The Artificial Intelligence Layer</h2>
<p>When every single marketer and big media company owns a DMP, it is clear that the key point of differentiation will reside in the AI layer.</p>
<p class="orig-pub">This post was originally published April 4, 2017 on Econsultancy blog.</p>`
  },
  {
    title: "Deepening The Data Lake: How Second-Party Data Increases AI For Enterprises",
    date: "2017-03-17",
    dateDisplay: "March 2017",
    tags: ["data", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2017/03/17/deepening-the-data-lake-how-second-party-data-increases-ai-for-enterprises/",
    excerpt: "I have been hearing a lot about data lakes lately. Progressive marketers and some large enterprise publishers have been breaking out of traditional data warehouses.",
    content: `<p>I have been hearing a lot about data lakes lately. Progressive marketers and some large enterprise publishers have been breaking out of traditional data warehouses, mostly used to store structured data, and investing in infrastructure so they can store tons of their first-party data and query it for analytics purposes.</p>
<p>Large, sophisticated marketers and publishers are just starting to get their lakes built and begin gathering the data assets to deepen them, so we will likely see a great many examples of this approach over the coming months.</p>
<p>It's a great time to be a data-driven marketer.</p>`
  },
  {
    title: "How AI will Change UX",
    date: "2017-01-22",
    dateDisplay: "January 2017",
    tags: ["martech", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2017/01/22/how-ai-will-change-user-experience/",
    excerpt: "In 1960, the US Navy coined a design principle: Keep it simple, stupid. When it comes to advertising and marketing technology, we haven't enjoyed a lot of 'simple' over the last dozen years.",
    content: `<p>In 1960, the US Navy coined a design principle: Keep it simple, stupid.</p>
<p>When it comes to advertising and marketing technology, we haven't enjoyed a lot of "simple" over the last dozen years or so. In an increasingly data-driven world where delivering a relevant customer experience makes all the difference, we have embraced complexity over simplicity.</p>
<p>One of the biggest trends we will see over the next several years is what could be thought of as the democratization of data science. As data-driven marketing becomes the norm, the winners and losers will be sorted out by their ability to build robust first-party data assets and leverage data science.</p>`
  },
  {
    title: "How CRM and a DMP can combine to give a 360-degree view of the customer",
    date: "2016-12-20",
    dateDisplay: "December 2016",
    tags: ["cdp", "data", "cx"],
    sourceUrl: "https://chrisohara.wordpress.com/2016/12/20/how-crm-and-a-dmp-can-combine-to-give-a-360-degree-view-of-the-customer/",
    excerpt: "For years, marketers have been talking about building a bridge between their existing customers, and the potential or yet-to-be-known customer.",
    content: `<p><strong>For years, marketers have been talking about building a bridge between their existing customers, and the potential or yet-to-be-known customer.</strong></p>
<p>Until recently, the two have rarely been connected. Agencies have separate marketing technology, data and analytics groups. Marketers themselves are often separated organizationally between "CRM" and "media" teams.</p>
<p>The combination of a strong CRM system and an enterprise data management platform (DMP) brings these two worlds together.</p>
<h2>Targeting people who haven't opened an email</h2>
<p>The connection between CRM and DMP enables the marketer to reach the 95% of their database everywhere else on the web.</p>
<h2>Combining commerce and service data for journeys and sequencing</h2>
<p>Understanding which channels go together, and which sequences work best, can add up to tremendous lift for marketers.</p>`
  },
  {
    title: "Dynamic Real Time Segmentation",
    date: "2016-09-05",
    dateDisplay: "September 2016",
    tags: ["martech", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2016/09/05/dynamic-real-time-segmentation/",
    excerpt: "The term 'real time' is bandied about in the ad technology space almost as heavily as the word 'programmatic.'",
    content: `<p>The term "real time" is bandied about in the ad technology space almost as heavily as the word "programmatic." Years later, the meaning of programmatic is finally starting to be realized, but we are still a few years away from delivering truly real-time experiences.</p>
<h2>The Future Is Dynamic</h2>
<p>This brings up the idea of dynamic segmentation: Although I am always part of a static segment, the world changes around me in real time. The weather changes, my location changes, the time changes and the people around me change constantly. What if all of that dynamic data could be constantly processed in the background and appended to static segments at the moment of truth?</p>
<p class="orig-pub">This originally appeared in AdExchanger on 8/31/2016.</p>`
  },
  {
    title: "Data Science is the New Measurement",
    date: "2016-08-10",
    dateDisplay: "August 2016",
    tags: ["data", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2016/08/10/data-science-is-the-new-measurement/",
    excerpt: "It's a hoary old chestnut, but 'understanding the customer journey' in a world of fragmented consumer attention and multiple devices is not just an AdExchanger meme.",
    content: `<p>It's a hoary old chestnut, but "understanding the customer journey" in a world of fragmented consumer attention and multiple devices is not just an AdExchanger meme. Attribution is a big problem, and one that marketers pay dearly for.</p>
<p>Why is "data science the new measurement?" Because, when a marketer has all of that data at their fingertips, something close to true attribution becomes possible.</p>
<p>It's a really interesting space to watch. More and more data is becoming available to marketers, who are increasingly owning the data and technology to manage it.</p>
<p class="orig-pub">This post originally appeared in AdExchanger on 8/12/16.</p>`
  },
  {
    title: "Banning the Banner Ad",
    date: "2016-06-30",
    dateDisplay: "June 2016",
    tags: ["martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2016/06/30/banning-the-banner-ad/",
    excerpt: "As a longtime digital practitioner, I sometimes feel ashamed that I haven't clicked on many banner ads in the last 10 years or so.",
    content: `<p>As a longtime digital practitioner, I sometimes feel ashamed that I haven't clicked on many banner ads in the last 10 years or so. It's not that I don't like banner ads. I recognize that advertising is the thing that supports all of the great content I read.</p>
<p>But standard banners rarely get any consideration or clicks from me, unless they are incredibly relevant. Standard banner ads aren't particularly engaging – and the marketers buying them are getting frustrated with an ecosystem rife with fraud, technology taxes and nonhuman traffic.</p>
<p class="orig-pub">This article originally appeared in AdExchanger on 6.30.16.</p>`
  },
  {
    title: "CX: The CFO's Best Friend!",
    date: "2016-05-30",
    dateDisplay: "May 2016",
    tags: ["cx", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2016/05/30/cx-the-cfos-best-friend/",
    excerpt: "Although it's starting to become a well-worn aphorism, 'data is the new oil' resonates more than ever.",
    content: `<p>Although it's starting to become a well-worn aphorism, "data is the new oil" resonates more than ever. Like oil, data is an abundant resource, but it doesn't become useful until it is refined for use and turned into fuel.</p>
<p>The case for personalization – customer experience management, or CX – is palpable. When the Watermark Group studied the cumulative stock performance of Forrester Research-rated "leaders" or "laggards" in customer experience, the results were staggering.</p>
<p class="orig-pub">This post originally appeared in AdExchanger on 5/23/16.</p>`
  },
  {
    title: "DMPs Go Way Beyond Segmentation",
    date: "2016-05-02",
    dateDisplay: "May 2016",
    tags: ["cdp", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2016/05/02/dmps-go-way-beyond-segmentation/",
    excerpt: "While segmentation, audience analytics, lookalike modeling and attribution are currently the primary use cases for DMP tech, there is so much more that can be done.",
    content: `<p>Any AdExchanger reader probably knows more about data management technology than the average Joe, but many probably associate data management platforms (DMPs) with creating audience segments for programmatic media.</p>
<p>While segmentation, audience analytics, lookalike modeling and attribution are currently the primary use cases for DMP tech, there is so much more that can be done with access to all that user data in one place.</p>
<h2>Ad Blocking</h2>
<p>With reports of consumers using applications to block as many as 10% of ads, wouldn't it be great to know exactly who is blocking those ads?</p>
<h2>Header Bidding</h2>
<p>Speaking of DMP architecture being in the header, I often wonder why publishers who have a DMP installed insist on deploying a different header-bidding solution.</p>
<h2>Personalization</h2>
<p>In ad technology, we talk a lot about the various partners enabling "paid, owned and earned" exposures to consumers.</p>`
  },
  {
    title: "Big Data (for Marketing) is Real!",
    date: "2016-04-06",
    dateDisplay: "April 2016",
    tags: ["data", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2016/04/06/big-data-for-marketing-is-real/",
    excerpt: "We've been hearing about big data driving marketing for a long time, and to be honest, most is purely aspirational.",
    content: `<p>We've been hearing about big data driving marketing for a long time, and to be honest, most is purely aspirational.</p>
<p>Using third-party data to target an ad in real time does deploy some back-end big-data architecture for sure. But the real promise of data-driven marketing has always been that computers, which can crunch more data than people and do it in real time, could find the golden needle of insight in the proverbial haystack of information.</p>
<h2>Leveraging Machine Learning For Segmentation</h2>
<p>Now that huge global marketers are embracing data management technology, they are finally able to start activating their carefully built offline audience personas in today's multichannel world.</p>
<h2>Using New Kinds Of Data To Drive Addressable Marketing</h2>
<p>If I can look at all of my data for segmentation, is there really anything off the table?</p>`
  },
  {
    title: "CPG goes DMP",
    date: "2016-02-14",
    dateDisplay: "February 2016",
    tags: ["martech", "data"],
    sourceUrl: "https://chrisohara.wordpress.com/2016/02/14/cpg-goes-dmp/",
    excerpt: "If you think about the companies with perhaps the least amount of consumer data, you would automatically think about consumer packaged goods (CPG) manufacturers.",
    content: `<p>If you think about the companies with perhaps least amount of consumer data, you would automatically think about consumer packaged goods (CPG) manufacturers. Hardly anybody registers for their website or joins their loyalty clubs; moms don't flock to their branded diaper sites; and they are at arms-length from any valuable transaction data (store sales) until well after the fact.</p>
<p>So, with little registration, website, or offline sales data, why are so many large CPG firms licensing an expensive first-party data management platform?</p>
<h2>The Move to Purchase-Based Targeting (PBT)</h2>
<p>Marketers have come a long way from demographic targeting.</p>
<h2>Optimizing Category Reach</h2>
<p>CPG marketers are constantly thinking about how to grow the amount of product they sell.</p>
<h2>Increasing Lift through Cross-Channel Messaging</h2>
<p>CPG marketers have some highly evolved models that show just how much lift a working media dollar has on sales.</p>`
  },
  {
    title: "Data Triangulation: How Second-Party Data Will Eat The Digital World",
    date: "2016-02-05",
    dateDisplay: "February 2016",
    tags: ["data", "martech"],
    sourceUrl: "https://chrisohara.wordpress.com/2016/02/05/data-triangulation-how-second-party-data-will-eat-the-digital-world/",
    excerpt: "Marketers are getting frustrated with spending up to 60% of their working media dollars to fund intermediaries between themselves and their publishing partners.",
    content: `<p>Marketers are getting frustrated with spending up to 60% of their working media dollars to fund intermediaries between themselves and their publishing partners. By the time a marketer pays his agency, trading desk, exchange, third-party data provider, and subsidizes the publisher's ad serving stack, dollars turn into dimes.</p>
<p>Put simply, second-party data is heralding a return to the good old days when big marketers depended on relationships with big publishers as the stewards of audiences, and they created deep, direct relationships to ensure an ongoing value exchange.</p>
<p class="orig-pub">This article originally appeared in AdExchanger on 1/25/16.</p>`
  }
];

// Sort by date descending
articles.sort((a, b) => new Date(b.date) - new Date(a.date));

// Output as JSON
console.log(JSON.stringify(articles, null, 2));
