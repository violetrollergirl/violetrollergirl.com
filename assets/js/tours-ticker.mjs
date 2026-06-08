---
# IMPORTANT:
#     This is parsed as Jekyll data even though it's JavaScript!

layout: none
---
import gCalendarFetcher from 'g-calendar-fetcher';
import linkifyStr from 'linkify-string';

const corsBaseUrl = 'https://cors.anarchism.nyc/';
const parser = new gCalendarFetcher({
    url: `${corsBaseUrl}{% include calendar-google-ics.url calendar_id=site.data.tours.gcal_id %}`,
    amountOfPastEvents: 0,
});

parser.fetchEvents().then( ( events ) => {
    events.forEach(function (x) {
        if (x.description) {
            x.description = linkifyStr(x.description, {
                target: '_blank'
            });
        }
    });
    // Explicit export to global scope. Intentional.
    globalThis.toursUpcomingEvents = events;
} ).catch( (error) => {
    console.error(
        'Error fetching or parsing calendar events from {% include calendar-google-ics.url calendar_id=site.data.tours.gcal_id %}',
        error
    );
});
