---
title: Search
description: >
    Search this site.
featured_image:
    alt:
    url: images/gallery-originals/hacker-terminal-Violet-Rollergirl-9095_124315~2.jpg
---

# Search {{ site.title }}'s site

Type your search query in the field below.

<form id="search-form" action="{% link search/index.md %}" method="GET">
    <input type="search" id="search-input" name="q" placeholder="Search all of this site&hellip;" autofocus="autofocus" />
</form>
<div id="search-results"></div>

<!-- Load the Lunr.js library. -->
<script src="https://cdn.jsdelivr.net/npm/lunr@2.3/lunr.min.js" integrity="sha256-DFDZACuFeAqEKv/7Vnu1Tt5ALa58bcWZegGGFNgET8g=" crossorigin="anonymous"></script>

<script>
let searchIndex;    // Search index database, a JSON file.
let documents = {}; // Search results.

fetch('{% link search/index.json %}')
    .then( res => res.json() )
    .then(data => {
        data.forEach( doc => { documents[doc.url] = doc; } );

        searchIndex = lunr(function () {
            this.ref('url');
            this.field('title', { boost: 10 });
            this.field('tags', { boost: 5 });
            this.field('content');

            data.forEach( doc => { this.add(doc); } );
        });
    });

// Perform searches whenever a the search field receives new input.
document.getElementById('search-input').addEventListener('input', function (e) {
    const query = this.value.trim();
    const resultsDiv = document.getElementById('search-results');

    if ( !query || !searchIndex ) {
        resultsDiv.innerHTML = '';
        return;
    }

    const results = searchIndex.search(`*${query}*`);

    if ( 0 === results.length ) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    resultsDiv.innerHTML = results.map(result => {
        const doc = documents[result.ref];
        return `
<div class="search-result">
    <h3><a href="${doc.url}">${doc.title}</a></h3>
    <blockquote>
        <p>${doc.excerpt}</p>
    </blockquote>
    <p class="button-container">
        <a href="${doc.url}" class="button">Go to "${doc.title}" result</a>
    </p>
</div>`;
    }).join('');
});

// Pre-fill if arriving via GET querystring.
document.addEventListener('DOMContentLoaded', function (e) {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
        document.getElementById('search-input').value = q;
        var inputEvent = new Event('input', { bubbles: true });
        document.getElementById('search-input').dispatchEvent(inputEvent);
    }
});
</script>
