---
path: '/cybersecurity-threat-intelligence-cycle'
date: '2019-04-21'
title: 'The Cybersecurity Threat Intelligence Cycle'
tags: ['cybersecurity','threat intelligence', 'google it']
excerpt: 'An overview of the cybersecurity threat intelligence cycle.'
---
This is a summary of what I learned about the cybersecurity threat intelligence cycle through a Google search.

### The Cybersecurity Threat Intelligence Cycle
An intelligence cycle has five or six steps, depending who you talk to. Each step is a seprate function in the sense that the objectives are different for each stage, although the steps do not necessarily have to occur discretely or chronologically in the order specified.

1. _Requirements_: make a plan based on knowledge of risks and attack vectors
2. _Collection_: build a pipeline to acquire the data
3. _Processing_: normalize and digest the data into consumable input for analysis
4. _Analysis_: translate the data into actionable information and construct a meaningful picture.
5. _Dissemination_: deliver the finished intelligence to the right people
6. _Feedback_: receive user comments on the product and make changes accordingly. In a 5-step cycle, this step is combined with _Dissemination_.

Here is a [video exceprt](https://youtu.be/1UK99bk7i3o?t=2006) containing a slide that explains the intelligence cycle pretty well.

## Intelligence Requirements
Intelligence requirements (IRs) are a set of guidelines for conducting the operations of the rest of the intelligence cycle. Like many terms in cybersecurity, intelligence requirements is a term borrowed from the vocabulary of the military and the intelligence community.

### Steps
1. Identify and prioritize critical assets
    - What are the assets that are critical to the survival of your business?
    - Which one of those assets, should it be compromised, would kill your business first?
2. Identify adversaries and their objectives
    - Who had previously targeted your assets?
    - Who had previously targeted similar businesses or similar assets?
    - Adversaries are usually financially motivated, seeking personally identifiable information (PII), login credentials, etc. for monetization schemes.
3. Narrow operational focus
    - Be specific and concrete.
    - What are the tactics, techniques, and procedures ([TTP](http://ryanstillions.blogspot.com/2014/04/on-ttps.html))?
    - For example: what types of social engineering tactics are most likely to result in a successful business email compromise (BEC) scam? What types of employee training could help prevent this?

## Priority Intelligence Requirements
Priority intelligence requirements (PIRs) are intelligence requirements which are critical to accomplishing the mission. Basically, they are a handful of IRs that are more important than all other IRs: the manager approves a prioritized list of IRs and designates some of them as PIRs.

<img 
    src='https://smallwarsjournal.com/sites/default/files/inline-images/kingimage1.jpg'
    alt='Priority intelligence requirements flow diagram'
    />
<style>
img {
    max-width: 100%;
    height: auto;
}
</style>

## Collection Requirements
Collection requirements can be seen as the concrete implementation of IRs using specified methodologies that inform data collection operations in the intelligence cycle. The first part is to identify, prioritize, and document observables and inputs that are needed to fullfil IRs. The second part is to specify the technical implementations needed to fulfill collection requirements. This [blog post](https://www.flashpoint-intel.com/blog/oversight-of-intelligence-operations-begins-with-collections-management/) has a good example of developing collection requirements in the context of cybersecurity. If you are interested in the history of the concept of collection requirements, see this [article](https://www.cia.gov/library/center-for-the-study-of-intelligence/kent-csi/vol4no4/html/v04i4a03p_0001.htm) in the CIA library. 

## References
- [A Fresh Look at Collection Requirements](https://www.cia.gov/library/center-for-the-study-of-intelligence/kent-csi/vol4no4/html/v04i4a03p_0001.htm)

- [On TTPs](http://ryanstillions.blogspot.com/2014/04/on-ttps.html)

- [The Cyber Threat Intelligence Cycle](https://www.flashpoint-intel.com/blog/the-cyber-threat-intelligence-cycle/)

- [Three Things You Need for Effective Intelligence Requirements](https://www.flashpoint-intel.com/blog/three-things-you-need-for-effective-intelligence-requirements/)

- [Developing Requirements for Your Intelligence Section](https://www.optiv.com/blog/developing-requirements-for-your-intelligence-section)

- [Threat Analyst Insights: How to Develop Effective Intelligence Requirements](https://www.recordedfuture.com/effective-intelligence-requirements/)

- [Requirements to Action: Cyber Threat Intelligence](https://www.scmagazine.com/home/opinion/executive-insight/requirements-to-action-cyber-threat-intelligence/)

- [Threat Intelligence: Planning and Direction](https://www.sans.org/reading-room/whitepapers/threatintelligence/threat-intelligence-planning-direction-36857)

- [What is Cyber Threat Intelligence?](https://www.cisecurity.org/blog/what-is-cyber-threat-intelligence/)

- [Defining Threat Intelligence Requirements](https://isc.sans.edu/forums/diary/Defining+Threat+Intelligence+Requirements/21519/)

- [The Importance of Priority Intelligence Requirements to the Army Service Component Command (ASCC) and the Intelligence Apparatus](https://smallwarsjournal.com/jrnl/art/importance-priority-intelligence-requirements-army-service-component-command-ascc-and)

- [FM 34-2 Appendix D - Developing Priority Intelligence Requirements](https://fas.org/irp/doddir/army/fm34-2/Appd.htm)

- [Oversight of Intelligence Operations Begins with Collections Management](https://www.flashpoint-intel.com/blog/oversight-of-intelligence-operations-begins-with-collections-management/)

- [The Threat Intelligence Handbook](https://cyber-edge.com/wp-content/uploads/2018/11/Recorded-Future-eBook.pdf)

- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)