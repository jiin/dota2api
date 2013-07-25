![Dota2](http://i.imgur.com/XRzSfx1.jpg)

## About

Dota2 api wrapper written in node.js

## Installation 

Install this version via git:
```bash
npm install git://github.com/jiin/dota2api
```

And use in your node source:
```javascript
var Dota2Api = require('dota2api');
```

## Usage

### Initialization

```javascript
var dota = new Dota2Api('your api key');
```

For obtain api key go to <http://steamcommunity.com/dev/apikey>

### Match Details

Get match details from match id:
```javascript
dota.getMatchDetails('match_id', function (err, res) {
  // ...
});
```

Get matches between two dates:
```javascript
dota.getByDate({
  from: 'your date in unix timestamp'
  to: 'your date in unix timestamp'
}, function (err, res) {
  // ...
});
```

You can also use this function with Date object:
```javascript
dota.getByDate({
  from: new Date("24 July 2013"),
  to: new Date()
}, function (err, res) {
  // ...
});
```
