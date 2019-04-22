---
path: '/collecting-data-from-the-dark-web'
date: '2019-04-19'
title: 'Collecting Data From the Dark Web'
tags: ['threat intelligence', 'information retrieval', 'natural language processing']
excerpt: 'Data collection techniques for threat intelligence analysis.'
---
In light of special counsel Robert Mueller's [report](https://www.nytimes.com/interactive/2019/04/18/us/politics/mueller-report-document.html) on a Russian campaign to sabotage the 2016 presidential election, cybersecurity has moved into the spotlight. Cybersecurity is a broad and rich field that has spawned professions such as threat intelligence, a cross-functional discipline that encompasses cybersecurity and intelligence. 

## Data Collection for Threat Intelligence
Data collection is an important step in the threat intelligence cycle, and a common source of data is the Dark Web. Threat actors often use discussion forums on the Dark Web to conduct business, develop new exploits, and discuss tradecraft; vulnerabilities are often disclosed on the Dark Web [before](https://www.recordedfuture.com/vulnerability-disclosure-delay/) they reach the [National Vulberabilities Database](https://nvd.nist.gov/). Sometimes, threat actors also share code on forums, paste sites, or repositories. A list of collection sources may include:

- Private or invite-only forums
- Chat services platforms
- Illicit marketplaces
- Payment card shops
- Paste sites
- Social media sites

Collecting contents of discussion forums at scale is an information retrieval problem similar to search engine indexing. A Web crawler is deployed to scrape content from a set of forums. The collected data is then consumed by sentiment analysis and/or natural language processing. The following is a summary of several research papers that present technical solutions for this problem.

## Building a Crawling Engine
### Surfacing Collaborated Networks in Dark Web to Find Illicit and Criminal Content ([link](https://ieeexplore.ieee.org/document/7745452))
Scraping even one Website takes a handful of seconds; the researchers in this paper scaled scraping to more than 10,000 domains and more than 54,000 sites. Using a network proxy and URL partitioning speeds up the crawling, and network analysis provides a guideline to database design.

#### Process
1. Use [Privoxy](https://en.wikipedia.org/wiki/Privoxy) to connect crawler to nework
2. Distribute crawling to different machines by partitioning URL space
3. Use [Sphinx](https://en.wikipedia.org/wiki/Sphinx_(search_engine)) to perform full-text keyword search
4. Rank by degree distribution and centrality using graph theory
5. Yield 10,163 distinct Tor domains, 54,141 Tor web pages, 260GB of data

## Optimizing a Crawling Engine
### Uncovering Tor: An Examination of the Network Structure ([link](https://www.hindawi.com/journals/scn/2018/4231326/))
This network analysis model provides insights into how to optimize the scraping engine for maxim efficiency: find the closest matches to targeted keywords with the least work done.

#### Process
1. Identify 1,220 unique dark web websites and 150 seed websites. Find Tor domains through a Google search of the [Hidden Wiki](https://en.wikipedia.org/wiki/The_Hidden_Wiki), with additional URLs found on Reddit and other regular Internet sites.
2. Select sites at random using a random number generator 
3. Categorize domain through content analysis.

#### Results
1. Each node has an average degree score of 2.27 (number of other sites connected to), with 2,763 edges between nodes, and a network density of 0.002.
2. Only 136 edges were reciprocal between nodes, while 2,627 were not.
3. Node reciprocity is 4.9%, i.e. average distance 4.95 (5 connections from one end to other); surface web averge 16-19
4. Compare the categorical model and the one-mode continuous model using the _minres_ algorithm. The categorical model suggested a core of 61 websites with a periphery of 1,159 nodes and had a model fit of 0.22. One-mode continuous analysis suggested a core of eight nodes with 1,212 periphery nodes, and a model fit of 0.07.
5. In the continuous model, the core density was 0.25; meaning 25% of all the possible ties between core members were present. In the categorical model this rises to 66%, indicating that the core was responsible for almost two-thirds of all present ties.
6. Tor network appeared to share similar properties with other online networks although definitively more centralized. Degree centralization of 42% indicated the network contained properties associated with a scale-free network: few hubs with many connections.

## Targeted Crawling Based on Labels and Categories
### Sentiment Crawling: Extremist Content Collection Through a Sentiment Analysis Guided Web-Crawler ([link](https://ieeexplore.ieee.org/document/7403671))
This crawler that incorporates sentiment analysis and natural language processing in its crawling provides additional ideas on optimizing match accuracy, presumably at the cost of time efficiency.

#### Techniques
1. Web Crawler
    
    Input initial domains the crawler will start from, and the domains it should not search (such as search engines and sites without text to analyze). The crawler searches each page for the keywords specified, and also follows the links from its current page to other pages.

2. Parts of Speech (POS) tagging

    [OpenNLP](https://en.wikipedia.org/wiki/Apache_OpenNLP) POS tagger analyzes each page collected, determine which words appeared most frequently from data gathered. Extend OpenNLP, create frequency of type and specific words across all documents. Tagger generates frequency distribution, identifying most frequently used nouns to be used as inputs for sentiment analysis. 10 most frequently occurring nouns from each class are selected.

3. Sentiment Analysis
    
    [SentiStrength](https://pypi.org/project/sentistrength/) performs sentiment analysis. Given _w_ webpages collected, _n_ nouns identified, single sentiment score assigned to each page for each word on that page. Data arranged into _w x n_ table, with the class label, used as input for classification. [WEKA](https://en.wikipedia.org/wiki/Weka_(machine_learning)) generates a decision tree with J48 standard settings.

#### Process
1. Wide crawling without keyword
2. Separate crawl for each class, yielding 5,000-7,000 results for each class (_anti-extremist_, _pro-extremist_, _neutral_), and 60,000 for the _other_ class.
3. Randomly select 2,500 pages from each class (10,000 total) for analysis
4. Analyze each class using POS to determine the top 10 most frequently used nouns
5. Iterate each page, generate separate sentiment table for each of the 4 classes of size _2,500 x k_, where _2,500 = number of pages_ and _k = number of keywords_
6. Input sentiment tables into WEKA with J48 standard settings and generate a decision tree.
7. Perform secondary analysis on 10 pages from outside the sample used to construct decision trees.

#### Proposed improvement
1. Set up POS tagging to automatically get top _N_ results from each set of domains.
2. Compare keywords to dictionaries to detemine permutations and remove non-words.
3. Set up a command that test generated decision tree against secondary data source.
4. Once generated, automatically integrate decision trees back into web-crawler in real time

## References
- [Beyond Feeds: A Deep Dive Into Threat Intelligence Sources](https://www.recordedfuture.com/threat-intelligence-sources/)

- [Going Deep and Dark: Mining Threat Intelligence From the Hidden Web](https://www.recordedfuture.com/dark-web-threat-intelligence/)

- [Dark Web Threats: From Technical to Tactical](https://www.recordedfuture.com/dark-web-threats/)

- [Asking the Right Questions About Collection Strategies](https://www.flashpoint-intel.com/blog/asking-the-right-questions-about-collection-strategies/)

- [How You Can Use the Dark Web for Threat Intelligence](https://go.recordedfuture.com/dark-web)