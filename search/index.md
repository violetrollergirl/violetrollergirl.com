---
title: Search
description: >
    Search this site.
---

# Search

Type your search query in the field below:

<form>
    <input type="search" id="search-input" placeholder="Search posts and pages&hellip;" autofocus=autofocus />
</form>
<div id="search-results"></div>

<script src="https://unpkg.com/lunr/lunr.js"></script>
<script>
let searchIndex;
let documents = {};

// Pre-fill if arriving via GET querystring.
const params = new URLSearchParams(window.location.search);
const q = params.get('q');
if (q) {
    document.getElementById('search-input').value = q;
    // Trigger search...
}

fetch('{% link search/index.json %}')
    .then(res => res.json())
    .then(data => {
        data.forEach(doc => { documents[doc.url] = doc; });

        searchIndex = lunr(function () {
            this.ref('url');
            this.field('title', { boost: 10 });
            this.field('tags', { boost: 5 });
            this.field('content');

            data.forEach(doc => { this.add(doc); });
        });
    });

document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.trim();
    const resultsDiv = document.getElementById('search-results');

    if (!query || !searchIndex) {
        resultsDiv.innerHTML = '';
        return;
    }

    const results = searchIndex.search(query + '*');

    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    resultsDiv.innerHTML = results.map(result => {
        const doc = documents[result.ref];
        return `<div class="search-result">
        <a href="${doc.url}"><h3>${doc.title}</h3></a>
        <p>${doc.excerpt}</p>
        </div>`;
    }).join('');
});
</script>
