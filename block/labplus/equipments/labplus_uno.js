'use strict';

goog.provide('Blockly.Blocks.labplus_uno');

goog.require('Blockly.Blocks');

Blockly.Blocks['eeprom_write'] = {
  init:function() {
	this.setColour(225);
	this.appendValueInput('addr', Number)
		.appendField(Blockly.Msg.EEPROMADDRW);
	this.appendValueInput('value', Number)
		.appendField(Blockly.Msg.EEPROMVALUE);
	this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);	
  }
};

Blockly.Blocks['eeprom_read'] = {
  init:function() {
	this.setColour(225);
	this.appendValueInput('addr', Number)
		.appendField(Blockly.Msg.EEPROMADDRR);
	this.setOutput(true, Number);
  }
};