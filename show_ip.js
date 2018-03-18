const ip = require('ip');
const display = require("./oled");
var text = ip.address();
display.writeText(text);
