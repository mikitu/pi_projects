const  i2c = require('i2c-bus'),
    Oled = require('oled-i2c-bus'),
    font = require('oled-font-5x7');

const SIZE_X=128,
    SIZE_Y=32,
    CHANNEL = 1
;
const i2cBus = i2c.openSync(CHANNEL)

const opts = {
    width: SIZE_X,
    height: SIZE_Y,
    address: 0x3C
};

const oled = new Oled(i2cBus, opts);

export function writeText(text, font_size, x, y, wrap) {
    if (typeof font_size === "undefined") {
        font_size = 1;
    }
    if (typeof x === "undefined") {
        x = 1;
    }
    if (typeof y === "undefined") {
        y = 1;
    }
    if (typeof wrap === "undefined") {
        wrap = true;
    }
    on();
    clear();
    oled.setCursor(x, y);
    oled.writeString(font, font_size, text, 1, wrap);
}
export function clear() {
    oled.clearDisplay();
}
export function on() {
    oled.turnOnDisplay();
}



