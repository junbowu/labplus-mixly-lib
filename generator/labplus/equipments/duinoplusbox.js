'use strict';

goog.provide('Blockly.Arduino.duinoplusbox');

goog.require('Blockly.Arduino');

Blockly.Arduino.duinoplus_digital = function() {
  var code = this.getFieldValue('PIN');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_analog = Blockly.Arduino.duinoplus_digital;
Blockly.Arduino.duinoplus_pwm = Blockly.Arduino.duinoplus_digital;
Blockly.Arduino.duinoplus_btn = Blockly.Arduino.duinoplus_digital;

Blockly.Arduino.duinoplus_temperature = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_MLX90615'] = '#include "MLX90615.h"';
	var varName = this.getFieldValue('VAR');
    Blockly.Arduino.definitions_['define_MLX90615obj_' + varName] = 'MLX90615 '+varName+';';
    Blockly.Arduino.setups_['setup_MLX90615Begin_' + varName] = varName+'.begin();';
    var code = varName+'.getTemp(OBJ_TEMP)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_light = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
//    Blockly.Arduino.setups_['setup_input_light'] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'analogRead('+dropdown_pin+')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_sound = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
//    Blockly.Arduino.setups_['setup_input_sound'] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'analogRead('+dropdown_pin+')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_humaninfrared = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_input_humaninfrared'] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'digitalRead('+dropdown_pin+')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_sliding = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
//    Blockly.Arduino.setups_['setup_input_sliding'] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'analogRead('+dropdown_pin+')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_button = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_keyVal = Blockly.Arduino.valueToCode(this, 'STAT',Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_input_button'] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'digitalRead('+dropdown_pin+')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_led = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
//    Blockly.Arduino.setups_['setup_output_led'] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'analogWrite('+dropdown_pin+', '+value_num+');\n';
	return code;
};

Blockly.Arduino.duinoplus_led = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output'] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code = 'analogWrite('+dropdown_pin+', '+value_num+');\n';
	return code;
};

Blockly.Arduino.tone_notes = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_buzzer = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code="tone("+dropdown_pin+","+fre+");\n";
	return code;
};

Blockly.Arduino.duinoplus_buzzer2 = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code="tone("+dropdown_pin+","+fre+","+dur+");\n";
	return code;
};

Blockly.Arduino.duinoplus_buzzer3 = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code="tone("+dropdown_pin+","+fre+","+dur+");\n";
	return code;
};

Blockly.Arduino.duinoplus_buzzer4 = function() {
   var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
   var code="noTone("+dropdown_pin+");\n";
   Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
   return code;
};

Blockly.Arduino.duinoplus_digitalled_init = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_DigitalLED'] = '#include "DigitalLED.h"';
	var varName = this.getFieldValue('VAR');
	var pinCS = Blockly.Arduino.valueToCode(this, 'PIN_CS',Blockly.Arduino.ORDER_ATOMIC);
	var pinDI = Blockly.Arduino.valueToCode(this, 'PIN_DI',Blockly.Arduino.ORDER_ATOMIC);
    var pinCLK = Blockly.Arduino.valueToCode(this, 'PIN_CLK',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['var_DigitalLED'+varName] = 'DigitalLED '+varName+'('+pinCS+', '+pinDI+', '+pinCLK+');';	
	Blockly.Arduino.setups_['setup_DigitalLEDIntensity_' + varName] = varName+'.begin(2);';
	return '';
};

Blockly.Arduino.duinoplus_digitalled_display = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	var varName1 = this.getFieldValue('VAR');
	var displayData = Blockly.Arduino.valueToCode(this, 'DIGITAL_LED_NUM1',Blockly.Arduino.ORDER_ATOMIC);	
	var code = varName1+'.displayDigital('+displayData+');\n';
	return code;
};

Blockly.Arduino.duinoplus_digitalled_display1 = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	var varName1 = this.getFieldValue('VAR');
    var varDot = this.getFieldValue('DOT');
	var dropdown_digi = this.getFieldValue('DIGI_NUM');
	var displayData = Blockly.Arduino.valueToCode(this, 'DIGITAL_LED_NUM',Blockly.Arduino.ORDER_ATOMIC);	
	var code = varName1+'.displayDigital('+dropdown_digi+', '+displayData+', '+varDot+');\n';
	return code;
};

Blockly.Arduino.duinoplus_digitalled_clear = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	var varName = this.getFieldValue('VAR');
	var code = varName+'.clearDisplay();\n';
	return code;
};

Blockly.Arduino.duinoplus_matrix_init = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "MatrixLED.h"';
	var varName = this.getFieldValue('VAR');
	var pinCS = Blockly.Arduino.valueToCode(this, 'PIN_CS',Blockly.Arduino.ORDER_ATOMIC);
	var pinDI = Blockly.Arduino.valueToCode(this, 'PIN_DI',Blockly.Arduino.ORDER_ATOMIC);
    var pinCLK = Blockly.Arduino.valueToCode(this, 'PIN_CLK',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['var_matrixLED'+varName] = 'MatrixLED '+varName+'('+pinCS+', '+pinDI+', '+pinCLK+', 8, 8);';	
	Blockly.Arduino.setups_['setup_matrixLedBegin_' + varName] = varName+'.begin(2);';
	return '';
};

Blockly.Arduino.matrix_x_y = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_matrix_draw_pixel = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "MatrixLED.h"';
	var varName = this.getFieldValue('VAR');
    var var_x = Blockly.Arduino.valueToCode(this, 'PIXEL_X', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	var var_y = Blockly.Arduino.valueToCode(this, 'PIXEL_Y', Blockly.Arduino.ORDER_ASSIGNMENT) || '0'; 
    var pixelStat = this.getFieldValue('PIXEL_ON_OFF');
	var code = varName+'.drawPixel('+var_x+', '+var_y+', '+pixelStat+');\n'
			  +varName+'.writeDisplay();\n';
	return code;
};

Blockly.Arduino.duinoplus_matrix_display_string = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "MatrixLED.h"';
	var varName = this.getFieldValue('VAR');
    var var_x = Blockly.Arduino.valueToCode(this, 'PIXEL_X', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	var var_y = Blockly.Arduino.valueToCode(this, 'PIXEL_Y', Blockly.Arduino.ORDER_ASSIGNMENT) || '0'; 
    var str = Blockly.Arduino.valueToCode(this, 'CHAR_VAR', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var code = varName+'.setCursor('+var_x+', '+var_y+');\n'
	          +varName+'.print('+str+');\n'
			  +varName+'.writeDisplay();\n';
	return code;
};

Blockly.Arduino.duinoplus_matrix_draw_line = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "MatrixLED.h"';
	var varName = this.getFieldValue('VAR');
    var var_line = Blockly.Arduino.valueToCode(this, 'LINE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0'; 
    var var_line_dat = Blockly.Arduino.valueToCode(this, 'LINE_DAT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var code = varName+'.DrawLine('+var_line+', '+var_line_dat+');\n'
			  +varName+'.writeDisplay();\n';
	return code;
};

Blockly.Arduino.duinoplus_matrix_draw_column = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "MatrixLED.h"';
	var varName = this.getFieldValue('VAR');
    var var_line = Blockly.Arduino.valueToCode(this, 'LINE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0'; 
    var var_line_dat = Blockly.Arduino.valueToCode(this, 'LINE_DAT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var code = varName+'.DrawColumn('+var_line+', '+var_line_dat+');\n'
			  +varName+'.writeDisplay();\n';
	return code;
};

Blockly.Arduino.duinoplus_matrix_clear = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "MatrixLED.h"';
	var varName = this.getFieldValue('VAR');
	var code = varName+'.clear();\n';
	return code;
};

Blockly.Arduino.duinoplus_cal_reverse = function() {
	var numLength = Blockly.Arduino.valueToCode(this, 'NumLen', Blockly.Arduino.ORDER_ASSIGNMENT);
	if(numLength > 32) numLength = 32;
	var num = Blockly.Arduino.valueToCode(this, 'Num', Blockly.Arduino.ORDER_ASSIGNMENT);
	var num1 = Math.pow(2, numLength) - 1;
	if(num > num1) num = num1;
	Blockly.Arduino.definitions_['reverse_' + numLength] = 
	"int reverse_" + numLength + "(int num, byte len) {\n" +
	"  int tmp=0,i,j;\n" +
	"  for(i = 0, j = len - 1; i < len; ++i, --j) {\n"+
	"    if((num>>i)&1) tmp|=((num>>i)&1)<<j;\n" +
	"  }\n" +
	"  return tmp;\n" + 
	"}\n" ;
	var code = "reverse_" + numLength + "(" + num + ", " + numLength + ")";
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};