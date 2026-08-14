---
title: Search
description: >
    Search this site.
featured_image:
    alt:
    url: images/gallery-originals/hacker-terminal-Violet-Rollergirl-9095_124315~2.jpg
---

# Search {{ site.title }}'s site

Type keywords in the search field below. You can use [advanced search techniques](https://lunrjs.com/guides/searching.html){:target="_blank"}.

<form id="search-form" action="{% link search/index.md %}" method="GET">
    <input type="search" id="search-input" name="q" placeholder="Search all of this site&hellip;" autofocus="autofocus" />
</form>
<div id="search-results"></div>

<!-- Load the Lunr.js library. -->
<script src="https://cdn.jsdelivr.net/npm/lunr@2.3.9/lunr.min.js" integrity="sha256-DFDZACuFeAqEKv/7Vnu1Tt5ALa58bcWZegGGFNgET8g=" crossorigin="anonymous"></script>
<!-- Load our own Lunr.js search script. -->
<script src="{% link assets/js/lunr-search.js %}"></script>
