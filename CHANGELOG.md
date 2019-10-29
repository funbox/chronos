# Changelog

## 1.1.2 (29.10.2019)

Fixed hours formatting in `formatDate` (sometimes `HH` returned one digit instead of two),
and values rounding in `getDiffInDays` & `getDiffInMinutes`.


## 1.1.1 (24.10.2019)

Replaced Number.isNaN with isNaN, because the first one doesn't work in IE11.


## 1.1.0 (21.10.2019)

Added the possibility to pass Unix Timestamp as a string to every function that accepts date. 

Added new two functions: `getStartOfDecade` and `getEndOfDecade`.

Renamed functions `getDiffOf*` to `getDiffIn*` (e.g. there was `getDiffOfMinutes`,
and now it's `getDiffInMinutes`). It's a breaking change, but the library isn't used anywhere,
so we're not releasing a major version. 


## 1.0.2 (16.10.2019)

Added flag `files` into package.json, to prevent useless files from putting into npm-package. 


## 1.0.1 (16.10.2019)

Removed flag `private: true` from package.json, to make it possible to publish the package.


## 1.0.0 (16.10.2019)

Initial version.
