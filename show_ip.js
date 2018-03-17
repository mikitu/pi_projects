const ip = require('ip');
const display = require("./oled");
let text = ip.address();
display.writeText(text);