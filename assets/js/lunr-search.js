---
# This is loaded on the Search page and retrieves the search index
# database (a JSON file), builds the index, and performs the search.
layout: none
---
let searchIndex;    // Search index database, a JSON file.
let documents = {}; // Search results.

fetch('{% link search/index.json %}')
    .then( res => res.json() )
    .then( data => {
        data.forEach( doc => { documents[doc.url] = doc; } );

        searchIndex = lunr(function () {
            this.ref('url');
            this.field('title', { boost: 10 });
            this.field('tags', { boost: 5 });
            this.field('content');
            this.field('description');

            // TODO: Add search term highlighting?
            //this.metadataWhitelist.push('position');

            data.forEach( doc => { this.add(doc); } );
        });
    } );

// Perform searches whenever a the search field receives new input.
document.getElementById('search-input').addEventListener('input', function (e) {
    const query = this.value.trim();
    const resultsDiv = document.getElementById('search-results');

    if ( !query || !searchIndex ) {
        resultsDiv.innerHTML = '';
        return;
    }

    const results = searchIndex.search(`${query}`);

    if ( 0 === results.length ) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    resultsDiv.innerHTML = results.map( result => {
        const doc = documents[result.ref];
        return `
<div class="search-result">
    <h3><a href="${doc.url}">${doc.title}</a></h3>
    <blockquote>
        <p>${doc.excerpt}</p>
    </blockquote>
    <p class="button-container">
        <a href="${doc.url}" class="button">Go to this result <span class="fa-icon fa-solid fa-magnifying-glass-arrow-right"></span></a>
    </p>
</div>`;
    } ).join('');
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
