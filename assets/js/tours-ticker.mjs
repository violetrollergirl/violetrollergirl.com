---
# IMPORTANT:
#     This is parsed as Jekyll data even though it's JavaScript!

layout: none
---
import gCalendarFetcher from 'https://cdn.jsdelivr.net/npm/g-calendar-fetcher@0.7.0/+esm'

const corsBaseUrl = 'https://cors.anarchism.nyc/';
const parser = new gCalendarFetcher({
    url: `${corsBaseUrl}{{ site.data.tours.google_calendar.ics_url | uri_escape }}`,
    amountOfPastEvents: 0,
});

parser.fetchEvents().then( ( events ) => {
    // Explicit export to global scope. Intentional.
    globalThis.toursUpcomingEvents = events;
} ).catch( (error) => {
    console.error(
        'Error fetching or parsing calendar events from {{ site.data.tours.google_calendar.ics_url | uri_escape }}',
        error
    );
});
