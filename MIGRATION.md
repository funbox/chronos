# Migration

## 3.3.0 → 4.0.0

Nothing changed. 

The lib works fine with Node.js 12, but we've dropped the support, so major version bump is here. 


## 2.1.0 → 3.0.0

If the project was using `getTime` then this function should be replaced with
`getUnixTimestamp`. Also the first param of this function accepts `ChronosDate` instead of `Date`.


## 1.8.0 → 2.0.0

If the project was using `formatTime` then this function should be replaced with
`formatTimeString`. It's the same function but different name.
