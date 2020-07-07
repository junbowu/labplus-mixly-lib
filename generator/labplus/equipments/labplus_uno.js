'use strict';

goog.provide('Blockly.Arduino.labplus_uno');

goog.require('Blockly.Arduino');

Blockly.Arduino.eeprom_write = function() {
  var addr = Blockly.Arduino.valueToCode(this, 'addr', Blockly.Arduino.ORDER_ATOMIC);
  var value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>\n'; 
  var code = 'EEPROM.write(' + addr + ', ' + value + ');\n';
  return code;
};

Blockly.Arduino.eeprom_read = function() {
  var addr = Blockly.Arduino.valueToCode(this, 'addr', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>\n'; 
  var code = 'EEPROM.read(' + addr + ')';
  return [code ,Blockly.Arduino.ORDER_ATOMIC];
};