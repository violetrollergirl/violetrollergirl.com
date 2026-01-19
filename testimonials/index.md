---
title: Testimonials
description: >
  Glimpse what time with me was like for some of my other friends.
featured_image:
  alt:
  url: images/gallery-originals/charcuterie-tequila-coffee-fireplace-winter-wonderland.jpg
---

# Testimonials about {{ site.title }}

> Every man is the sum total of his reactions to his experiences.
>
> <cite>&mdash;Hunter S. Thompson</cite>

Each person is different. That alone makes each encounter unique. But, like a beautiful melody, there is an ostinato I repeat during every visit.

See if you can hear it in the kind words from some of my darlings and sweethearts, below.

{% for t in site.testimonials %}
{:style="margin-top: 3em;"}
## "{{ t.title }}"
<details id="testimonial-{{ t.title | slugify }}"
    name="testimonial-details"
    {% if forloop.first %}open="open"{% endif %}>
<summary>
    <a
        href="#{{ t.title | slugify }}"
        onclick="this.closest('details').open = true;"
    >Read testimonial by {{ t.author.name }}</a>:
</summary>
<blockquote>
{{ t.content }}

&mdash;{{ t.author.name }}
</blockquote>
</details>
{% endfor %}
