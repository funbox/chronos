# Migration

## 4.1.2 → 5.0.0

If you used `getWeek`, then make sure you've replaced this function with your own implementation.

If you used [`getDiffInMonths`](lib/getDiffInMonths.ts) or [`getDiffInYears`](lib/getDiffInYears.ts), 
then check their sources. Ensure that they work exactly as you expect. It's possible that instead you'd like to use 
[`getDiffInCalendarMonths`](lib/getDiffInCalendarMonths.ts) and [`getDiffInCalendarYears`](lib/getDiffInCalendarYears.ts).

Everything else should work as before.


## 3.3.0 → 4.0.0

Nothing changed. 

The lib works fine with Node.js 12, but we've dropped the support, so major version bump is here. 


## 2.1.0 → 3.0.0

If the project was using `getTime` then this function should be replaced with
`getUnixTimestamp`. Also the first param of this function accepts `ChronosDate` instead of `Date`.


## 1.8.0 → 2.0.0

If the project was using `formatTime` then this function should be replaced with
`formatTimeString`. It's the same function but different name.
