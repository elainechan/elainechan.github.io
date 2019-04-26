---
path: '/choosing-data-engineering-project'
date: '2019-04-26'
title: 'Choosing a Data Engineering Project'
tags: ['data engineering']
excerpt: 'Strategies for choosing a project to learn data engineering.'
---
Wanna put Kafka and Airflow on your resume but no idea what to do with the actual technologies? Let's find a way.

## Data Engineering Project Approach
A _Hacker News_ user proposes a sensible [approach](https://news.ycombinator.com/item?id=17781990):
<blockquote style='color: gray'>
It doesn't really matter what you tackle, but I personally like ETLing either data gather from web crawling a single site[0] or push in a weekly gathered wikipedia dump. You'll learn many of the foundational reasons for all the tools the industry uses, which will make it very easy for you to get up to speed on them and to make the right choices about when to introduce them. I personally tend to favour tools that have an API or CLI so I can coordinate tasks without needing to click around, but many others like a giant GUI so they can see data flows graphically. Most good tools have at least some measure of both. [0] Use something like Scrapy for python (or Mechanize for ruby) with CSS selectors and use the extension Inspector Gadget to quickly generate CSS selectors.
</blockquote>

Another _Hacker News_ user tops it up with actual tool [suggestions](https://news.ycombinator.com/item?id=17782668):
<blockquote style='color: gray'>
1. Learn to do as much in plain Python as possible, focus on lazy evaluation (itertools, yielding, ...), you'll be able to process gigabytes with a tiny memory footprint, deployment will be a breeze etc.
<br>
<br>
2. Get to know some of the basic Python data processing/science packages like pandas, numpy, scipy etc.
<br>
<br>
3. Get used to writing short shell scripts - they probably won't be a part of your pipeline, but data engineering, especially development, involves a lot of data prep that coreutils will help you with. Throw in a bit of jq and you'll handle a lot of prep work.
<br>
<br>
4. Only once you've gotten used to the above, look at Dask, PySpark, Airflow etc. It really depends on your use cases, but chances are you won't have to touch these technologies at all.

Bottom line - wait with the heavyweight tools, they might be needlessly powerful. Also, work closely with DevOps, because the deployment side of things will help you understand consequences of your actions.
</blockquote>

## Course Progression
Based on the second _Hacker News_ user's comments, a course can be derived:

1. _Manipulation_: lazy evaluation (`itertools`, `yield`) and functional programming (`map`, `reduce`, `filter`)
2. _Collection_: Scrapy, BeautifulSoup
3. _Consumption_: Pandas, NumPy, SciPy
4. _Preparation_: shell scripting, jq
5. _Scaling_: Dask, PySpark
6. _Instrumentation_: Airflow, Luigi

## References
### Choosing Project
- [Ask HN: Simple, beginner friendly ETL / Data Engineering project ideas?](https://news.ycombinator.com/item?id=17781762)

- [Data Engineering Project Ideas](https://www.reddit.com/r/dataengineering/comments/8mgivy/data_engineering_project_ideas/)

- [MapMyCab: How I Chose a Data Engineering Project](https://blog.insightdatascience.com/mapmycab-how-i-chose-a-data-engineering-project-75bd659c5eec)

- [A Typical Data Engineering Project — Sharing From Netflix Data Engineering Team](https://medium.com/hasbrain/a-typical-data-engineering-project-sharing-from-netflix-data-engineering-team-cc27878fce55)

### Choosing ETL Tools

- [Data pipelines, Luigi, Airflow: everything you need to know](https://towardsdatascience.com/data-pipelines-luigi-airflow-everything-you-need-to-know-18dc741449b7)

- [Comparing Airbnb Airflow and Apache Nifi](https://www.reddit.com/r/bigdata/comments/51mgk6/comparing_airbnb_airflow_and_apache_nifi/)

- [workflow scheduler for ETL](https://community.hortonworks.com/questions/59329/workflow-scheduler-for-etl.html)

### Testing and Pipeline Debt

- [Down with Pipeline debt / Introducing Great Expectations](https://medium.com/@expectgreatdata/down-with-pipeline-debt-introducing-great-expectations-862ddc46782a)

- [7 challenges that data pipelines must solve](https://aiven.io/blog/7-challenges-that-data-pipelines-must-solve/?utm_source=medium&utm_medium=post&utm_campaign=7-challenges-intro)

### Resource Lists
- [Analytics Vidhya: Comprehensive List of Resources](https://www.analyticsvidhya.com/blog/2018/11/data-engineer-comprehensive-list-resources-get-started/)

- [Data Engineering Resources](https://diogoalexandrefranco.github.io/data-engineering-resources/)