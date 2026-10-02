---
title: FAQs
description: >
    Your question about choosing a companion has likely already been answered.
    If so, this page will get you that answer.
featured_image:
  alt: Violet relaxes in the sands of a beach on all fours as enjoys the waves.
  url: images/gallery-originals/back-arch-on-the-beach-in-bikini.jpg
last_modified: Fri Oct  2 15:57:12 EDT 2026
---

# Frequently Asked Questions (and Answers)

My website is detailed, thorough, and expansive, so this page gathers the most common questions you may have to make my answers easier for you to find, and easier for me to reference when needed.

You can also search for the answers to your questions with keywords:

{% include search-form.html %}

{% assign faq_groups = site.faq | group_by: "group_name" %}

{% for faq_group in faq_groups %}
## {{ faq_group.name }}

{% assign desc_item = faq_group.items | where: "slug", "DESCRIPTION" | first %}
{{ desc_item.content }}

{% assign group_items = faq_group.items | where_exp: "item", "item.publish != false" | sort: "weight", "first" %}
{% for q in group_items %}
1. [{{ q.name }}]({{ q.url }})
{% endfor %}
{% endfor %}
