var level = require('level');
var Sublevel = require('level-sublevel');

var db = Sublevel(level(process.argv[2]));
var subRobots = db.sublevel('robots');
var subDinosaurs = db.sublevel('dinosaurs');

subRobots.put('slogan', 'beep boop');

subDinosaurs.put('slogan', 'rawr');