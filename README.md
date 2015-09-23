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

To obtain api key go to <http://steamcommunity.com/dev/apikey>

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
### Match History

Get matches by player name:
```javascript
dota.getByPlayerName('Na`Vi Dendi', function (err, res) {
    // ...
});
```

Get matches by hero id:
```javascript
dota.getByHeroID(12, function (err, res) {
    // ...
});
```

Get matches by league id:
```javascript
dota.getByLeague(156, function (err, res) {
    // ...
});
```

Get matches by steam account id:
```javascript
dota.getByAccountID(1234, function (err, res) {
    // ...
});
```

### Heroes

Get dota2 heroes list:
```javascript
dota.getHeroes(function (err, res) {
    // ...
});
```

### Replay

Get replay url:
```javascript
dota.getReplayUrl('my.cool.cluster', 'my_match_id', 'my_replay_salt');
// return url
```

### About

```
    Copyright (C) 2013  <jiin@insicuri.net>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
```
