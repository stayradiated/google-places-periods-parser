# google-places-periods-parser

> Transforms opening hours data from Google Places into the [schema.org/OpeningHoursSpecification](https://schema.org/OpeningHoursSpecification) format.

- Zero dependencies
- Typescript
- Even has a few unit tests

## Why would I want this?

When retrieving opening hours data from the [Google Maps
API](https://developers.google.com/places/web-service/details) you will notice
the data looks like this:

```json
[
  { "close": { "day": 0, "time": "1430" }, "open": { "day": 0, "time": "0830" } },
  { "close": { "day": 1, "time": "1430" }, "open": { "day": 1, "time": "0730" } },
  { "close": { "day": 2, "time": "1430" }, "open": { "day": 2, "time": "0730" } },
  { "close": { "day": 3, "time": "1430" }, "open": { "day": 3, "time": "0730" } },
  { "close": { "day": 4, "time": "1430" }, "open": { "day": 4, "time": "0730" } },
  { "close": { "day": 5, "time": "1430" }, "open": { "day": 5, "time": "0730" } },
  { "close": { "day": 6, "time": "1430" }, "open": { "day": 6, "time": "0830" } }
]
```

There are already plenty of libraries available for parsing opening hours, but
I couldn't find any that worked with this format.

Instead of writing another parser, this library transform the data into another
format -- the [OpeningHoursSpecification](https://schema.org/OpeningHoursSpecification).

```typescript
import parseGooglePlacesPeriods from 'google-places-periods-parser'

const result = parseGooglePlacesPeriods(periods)

/*
result === [{
  dayOfWeek: [ 'sunday', 'saturday' ],
  opens: '08:30',
  closes: '14:30'
},
{
  dayOfWeek: [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday' ],
  opens: '07:30',
  closes: '14:30'
}]
*/
```

## Are they open?

I recommend you use [`openinghours.js`](https://www.npmjs.com/package/openinghours.js) to find this out.

```typescript
import parseGooglePlacesPeriods from 'google-places-periods-parser'
import { getCurrentState } from 'openinghours.js'

const periods = [
  { open: { day: 0, time: '08:00' }, close: { day: 0, time: '14:00' } },
]

const state = getCurrentState(parseGooglePlacesPeriods(periods))

/*
state === {
  isOpen: true,
  closesAt: new Date("2019-12-05T14:00:00.000Z")
}
*/
```

