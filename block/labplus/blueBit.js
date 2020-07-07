'use strict';

goog.provide('Blockly.Blocks.blueBit');

goog.require('Blockly.Blocks');

Blockly.Blocks.blueBit.HUE = 160;

profile["blueBit"] = {
    description: "blueBit",
    digital: [["0", "0"],["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
    analog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
	pwm:[["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
	btn:[["上 - 管脚2", "2"], ["下 - 管脚3", "3"], ["左 - 管脚4", "4"], ["右 - 管脚5", "5"], ["中 - 管脚6", "6"]],
	interrupt : [["2", "2"], ["3", "3"]],
	serial_select:[["Serial", "Serial"],["SoftwareSerial", "mySerial"]],
    serial: 9600
};

Blockly.Blocks['blutBit_'] = {
   init: function() {
    this.setColour(Blockly.Blocks.blueBit.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.blueBit.digital), 'PIN');
    this.setOutput(true, Number);
  }
};
