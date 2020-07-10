'use strict';

goog.provide('Blockly.Arduino.labplus');
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
	Blockly.Arduino.definitions_['define_MLX90615'] = '#include "DuinoplusMLX90615.h"';
	var varName = this.getFieldValue('VAR');
    Blockly.Arduino.definitions_['define_MLX90615obj_' + varName] = 'MLX90615 '+varName+';';
    Blockly.Arduino.setups_['setup_MLX90615Begin_' + varName] = varName+'.begin();';
    var code = varName+'.getTemp(OBJ_TEMP)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_light = function() {
    var code = 'analogRead(A1)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_sound = function() {
    var code = 'analogRead(A2)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_sliding = function() {
    var code = 'analogRead(A0)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_humaninfrared = function() {
    Blockly.Arduino.setups_['setup_input_humaninfrared'] = 'pinMode(7, INPUT);';
    var code = 'digitalRead(7)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_button = function() {
    var dropdown_pin = this.getFieldValue('btn');
	var dropdown_keyVal = Blockly.Arduino.valueToCode(this, 'STAT',Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_input_button'] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = 'digitalRead('+dropdown_pin+')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
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


Blockly.Arduino.duinoplus_led = function() {
	var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.setups_['setup_output_led'] = 'pinMode(9, OUTPUT);';
    var code = 'analogWrite(9, '+value_num+');\n';
	return code;
};

Blockly.Arduino.tone_notes = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.duinoplus_buzzer = function() {
	var fre =  this.getFieldValue('notes');
    Blockly.Arduino.setups_['setup_output_buzzer'] = 'pinMode(10, OUTPUT);';
    var code="tone(10,"+fre+");\n";
	return code;
};

Blockly.Arduino.duinoplus_buzzer2 = function() {
    var fre =  this.getFieldValue('notes');
    var dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    Blockly.Arduino.setups_['setup_output_buzzer'] = 'pinMode(10, OUTPUT);';
    var code="tone(10,"+fre+","+dur+");\n";
	return code;
};

Blockly.Arduino.duinoplus_buzzer3 = function() {
    var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    Blockly.Arduino.setups_['setup_output_buzzer'] = 'pinMode(10, OUTPUT);';
    var code="tone(10,"+fre+","+dur+");\n";
	return code;
};

Blockly.Arduino.duinoplus_buzzer4 = function() {
   var code="noTone(10);\n";
//    Blockly.Arduino.setups_['setup_output_buzzer'] = 'pinMode(10, OUTPUT);';
   return code;
};

Blockly.Arduino.duinoplus_digitalled_init = function() {
	Blockly.Arduino.definitions_['define_DigitalLED'] = '#include "DuinoplusDigitalLED.h"';
	var varName = this.getFieldValue('VAR');
	Blockly.Arduino.definitions_['var_DigitalLED'+varName] = 'DigitalLED '+varName+'(8, 11, 13);';	
	Blockly.Arduino.setups_['setup_DigitalLEDIntensity_' + varName] = varName+'.begin(2);';
	return '';
};

Blockly.Arduino.duinoplus_digitalled_display = function() {
	var varName1 = this.getFieldValue('VAR');
	var displayData = Blockly.Arduino.valueToCode(this, 'DIGITAL_LED_NUM1',Blockly.Arduino.ORDER_ATOMIC);	
	var code = varName1+'.displayDigital('+displayData+');\n';
	return code;
};

Blockly.Arduino.duinoplus_digitalled_display1 = function() {
	var varName1 = this.getFieldValue('VAR');
    var varDot = this.getFieldValue('DOT');
	var dropdown_digi = this.getFieldValue('DIGI_NUM');
	var displayData = Blockly.Arduino.valueToCode(this, 'DIGITAL_LED_NUM',Blockly.Arduino.ORDER_ATOMIC);	
	var code = varName1+'.displayDigital('+dropdown_digi+', '+displayData+', '+varDot+');\n';
	return code;
};

Blockly.Arduino.duinoplus_digitalled_clear = function() {
	var varName = this.getFieldValue('VAR');
	var code = varName+'.clearDisplay();\n';
	return code;
};

Blockly.Arduino.duinoplus_matrix_init = function() {
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "DuinoplusMatrixLED.h"';
	var varName = this.getFieldValue('VAR');
	Blockly.Arduino.definitions_['var_matrixLED'+varName] = 'MatrixLED '+varName+'(12, 11, 13, 8, 8);';	
	Blockly.Arduino.setups_['setup_matrixLedBegin_' + varName] = varName+'.begin(2);';
	return '';
};

Blockly.Arduino.matrix_x_y = function() {
  var code = this.getFieldValue('POINT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// Blockly.Arduino.t_highlow = function () {
//     // Boolean values HIGH and LOW.
//     var code = (this.getFieldValue('BOOL') == 'HIGH') ? 'HIGH' : 'LOW';
//     return [code, Blockly.Arduino.ORDER_ATOMIC];
// };

Blockly.Arduino.duinoplus_matrix_draw_pixel = function() {
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "DuinoplusMatrixLED.h"';
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
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "DuinoplusMatrixLED.h"';
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
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "DuinoplusMatrixLED.h"';
	var varName = this.getFieldValue('VAR');
    var var_line = Blockly.Arduino.valueToCode(this, 'LINE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0'; 
    var var_line_dat = Blockly.Arduino.valueToCode(this, 'LINE_DAT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var code = varName+'.DrawLine('+var_line+', '+var_line_dat+');\n'
			  +varName+'.writeDisplay();\n';
	return code;
};

Blockly.Arduino.duinoplus_matrix_draw_column = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "DuinoplusMatrixLED.h"';
	var varName = this.getFieldValue('VAR');
    var var_line = Blockly.Arduino.valueToCode(this, 'LINE', Blockly.Arduino.ORDER_ASSIGNMENT) || '0'; 
    var var_line_dat = Blockly.Arduino.valueToCode(this, 'LINE_DAT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var code = varName+'.DrawColumn('+var_line+', '+var_line_dat+');\n'
			  +varName+'.writeDisplay();\n';
	return code;
};

Blockly.Arduino.duinoplus_matrix_clear = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_include_maxtrixLED'] = '#include "DuinoplusMatrixLED.h"';
	var varName = this.getFieldValue('VAR');
	var code = varName+'.clear();\n';
	return code;
};

// // Blockly.Arduino.eeprom_write = function() {
// //   var addr = Blockly.Arduino.valueToCode(this, 'addr', Blockly.Arduino.ORDER_ATOMIC);
// //   var value = Blockly.Arduino.valueToCode(this, 'value', Blockly.Arduino.ORDER_ATOMIC);
// //   Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>\n'; 
// //   var code = 'EEPROM.write(' + addr + ', ' + value + ');\n';
// //   return code;
// // };

// // Blockly.Arduino.eeprom_read = function() {
// //   var addr = Blockly.Arduino.valueToCode(this, 'addr', Blockly.Arduino.ORDER_ATOMIC);
// //   Blockly.Arduino.definitions_['define_eeprom'] = '#include <EEPROM.h>\n'; 
// //   var code = 'EEPROM.read(' + addr + ')';
// //   return [code ,Blockly.Arduino.ORDER_ATOMIC];
// // };

/* blue:bit 模块 */
/* blue:bit 模拟输入类模块 */
Blockly.Arduino.bluebit_get_analog = function () {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = 'analogRead(' + dropdown_pin + ')';
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* blue:bit 数字输入类模块 */
Blockly.Arduino.bluebit_get_digital = function () {
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    var code = "";
    if (window.isNaN(dropdown_pin) && !(new RegExp("^A([0-9]|10|11|12|13|14|15)$").test(dropdown_pin))) {
        var funcName = 'mixly_digitalRead';
        var code2 = 'int' + ' ' + funcName + '(uint8_t pin) {\n'
        + '  pinMode(pin, INPUT);\n'
        + '  return digitalRead(pin);\n'
        + '}\n';
        Blockly.Arduino.definitions_[funcName] = code2;
        code = 'mixly_digitalRead(' + dropdown_pin + ')';
    } else {
        if (Blockly.Arduino.setups_['setup_output_' + dropdown_pin]) {
            //存在pinMode已设为output则不再设为input
        } else {
            Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
        }
        if (Blockly.Arduino.setups_['setup_setup']) { //解决pullup重复问题
            if (Blockly.Arduino.setups_['setup_setup'].indexOf('pinMode(' + dropdown_pin) > -1) {
                delete Blockly.Arduino.setups_['setup_input_' + dropdown_pin];
            }
        }
        code = 'digitalRead(' + dropdown_pin + ')';
    }
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* blue:bit 数字输出类模块 */
Blockly.Arduino.bluebit_set_digital = function () {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
    var code = 'digitalWrite(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

/* blue:bit 颜色 */
Blockly.Blocks.bluebit_get_color_val = {
	init: function() {
	  this.setColour(Blockly.Blocks.Bluebit.hUE);
	  this.appendDummyInput("")
		  .appendField(Blockly.Msg.bluebit_get_color_val)
		  .appendField(new Blockly.FieldDropdown([['R', 'r'], ['G', 'g'], ['B', 'b']]), "color");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');	
	}
};

/* blue:bit NTC温度*/
Blockly.Arduino.bluebit_get_ntc_temp = function (){
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_pin = this.getFieldValue('PIN');;
	var code = 'get_ntcTemp(' + dropdown_pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* blue:bit LM35温度*/
Blockly.Arduino.bluebit_get_lm35_temp = function (){
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_pin = this.getFieldValue('PIN');
	var code = 'get_lm35Temp(' + dropdown_pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* blue:bit DS18B20 */
// Blockly.Arduino.ds18b20_1 = function () {
//     var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
//     var unit = this.getFieldValue('UNIT');
// 	var reso = this.getFieldValue('RESOLUTION');
//     Blockly.Arduino.definitions_['define_OneWire'] = '#include <OneWire.h>';
//     Blockly.Arduino.definitions_['define_DallasTemperature'] = '#include <DallasTemperature.h>';
//     Blockly.Arduino.definitions_['var_OneWire_oneWire_' + dropdown_pin] = 'OneWire oneWire_' + dropdown_pin + '(' + dropdown_pin + ');';
//     Blockly.Arduino.definitions_['var_DallasTemperature_sensors_' + dropdown_pin] = 'DallasTemperature sensors_' + dropdown_pin + '(&oneWire_' + dropdown_pin + ');';
//     Blockly.Arduino.definitions_['var_DeviceAddress_insideThermometer'] = 'DeviceAddress insideThermometer;';
//     Blockly.Arduino.setups_['setup_sensors_' + dropdown_pin + '_getAddress'] = 'sensors_' + dropdown_pin + '.getAddress(insideThermometer, 0);';
//     Blockly.Arduino.setups_['setup_sensors_' + dropdown_pin + '_setResolution'] = 'sensors_' + dropdown_pin + '.setResolution(insideThermometer,' + reso + ');';
//     var funcName = 'ds18b20_' + dropdown_pin + '_getTemp';
//     var code = 'float' + ' ' + funcName + '(int w) {\n'
// 	+ '  sensors_' + dropdown_pin + '.requestTemperatures();\n'
// 	+ '  if(w==0) {return sensors_' + dropdown_pin + '.getTempC(insideThermometer);}\n'
// 	+ '  else {return sensors_' + dropdown_pin + '.getTempF(insideThermometer);}\n'
// 	+ '}\n';
//     Blockly.Arduino.definitions_[funcName] = code;
//     return ['ds18b20_' + dropdown_pin + '_getTemp(' + unit + ')', Blockly.Arduino.ORDER_ATOMIC];
// };

Blockly.Arduino.ds18b20_1 = function () {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
	var unit = this.getFieldValue('UNIT');
	var reso = this.getFieldValue('RESOLUTION');
	Blockly.Arduino.definitions_['include_OneWire'] = '#include <OneWire.h>';
	Blockly.Arduino.definitions_['include_DallasTemperature'] = '#include <DallasTemperature.h>';
	Blockly.Arduino.definitions_['var_declare_OneWire_DallasTemperature_sensors_' + dropdown_pin] = 'OneWire oneWire_' + dropdown_pin + '(' + dropdown_pin + ');\nDallasTemperature sensors_' + dropdown_pin + '(&oneWire_' + dropdown_pin + ');';
	Blockly.Arduino.definitions_['var_declare_DeviceAddress_insideThermometer'] = 'DeviceAddress insideThermometer;';
	Blockly.Arduino.setups_['setup_sensors_' + dropdown_pin + '_getAddress'] = 'sensors_' + dropdown_pin + '.getAddress(insideThermometer, 0);';
	Blockly.Arduino.setups_['setup_sensors_' + dropdown_pin + '_setResolution'] = 'sensors_' + dropdown_pin + '.setResolution(insideThermometer, '+reso+');';
	var funcName = 'ds18b20_' + dropdown_pin + '_getTemp';
	var code = 'float' + ' ' + funcName + '(int w) {\n'
	+ 'sensors_' + dropdown_pin + '.requestTemperatures();\n'
	+ 'if(w==0) {\nreturn sensors_' + dropdown_pin + '.getTempC(insideThermometer);\n}\n'
	+ 'else {\nreturn sensors_' + dropdown_pin + '.getTempF(insideThermometer);\n}\n'
	+ '}\n';
	Blockly.Arduino.definitions_[funcName] = code;
	return ['ds18b20_' + dropdown_pin + '_getTemp(' + unit + ')', Blockly.Arduino.ORDER_ATOMIC];
   }

/* blue:bit 数字光线*/
Blockly.Arduino.bluebit_get_ambient_light_val = function (){
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	var code = 'getAmbientLight()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* blue:bit 四按键*/
Blockly.Arduino.bluebit_get_four_button = function () {
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
    var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
    //var code = 'analogRead(' + dropdown_pin + ')';
	var dropdown_button = this.getFieldValue('button');
	var code = 'get_joy_button(' + dropdown_button + ',' + dropdown_pin + ')'
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* I2C开始 */
Blockly.Arduino.bluebit_get_ultrasoni_val = function (){
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	var code = 'Distance()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_I2C_light = function (){
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	var code = 'getAmbientLight()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_sht20_val = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_sht20'] = '#include <BluebitSHT20.h>';
	Blockly.Arduino.definitions_['define_sht20_obj'] = 'SHT20 sht20;';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	Blockly.Arduino.setups_['setup_Wire_sth20init'] = 'sht20.initSHT20();';
	Blockly.Arduino.setups_['setup_Wire_sth20delay'] = 'delay(100);';
	Blockly.Arduino.setups_['setup_Wire_sth20check'] = 'sht20.checkSHT20();';	
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case 'var_temp':
			var code = 'sht20.readTemperature()';
			break;
		case 'var_hum':
			var code = 'sht20.readHumidity()';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_I2C_current = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case '0':
			var code = 'readCodesI2C(0x60)/100';
			break;
		case '1':
			var code = 'readCodesI2C(0x61)/100';
			break;
		case '2':
			var code = 'readCodesI2C(0x62)/100';
			break;
		case '3':
			var code = 'readCodesI2C(0x63)/100';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_I2C_voltage = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case '0':
			var code = 'readCodesI2C(0x6A)/100';
			break;
		case '1':
			var code = 'readCodesI2C(0x6B)/100';
			break;
		case '2':
			var code = 'readCodesI2C(0x6C)/100';
			break;
		case '3':
			var code = 'readCodesI2C(0x6D)/100';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_I2C_pH = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case '0':
			var code = 'readCodesI2C(0x54)/100';
			break;
		case '1':
			var code = 'readCodesI2C(0x55)/100';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_I2C_airPressure = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case '0':
			var code = 'readCodesI2C(0x5C)/100';
			break;
		case '1':
			var code = 'readCodesI2C(0x5D)/100';
			break;
		case '2':
			var code = 'readCodesI2C(0x5E)/100';
			break;
		case '3':
			var code = 'readCodesI2C(0x5F)/100';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_I2C_magnetic = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case '0':
			var code = 'readCodesI2C(0x58)/100';
			break;
		case '1':
			var code = 'readCodesI2C(0x59)/100';
			break;
		case '2':
			var code = 'readCodesI2C(0x5A)/100';
			break;
		case '3':
			var code = 'readCodesI2C(0x5B)/100';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_I2C_conductivity = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case '0':
			var code = 'readCodesI2C(0x68)/100';
			break;
		case '1':
			var code = 'readCodesI2C(0x69)/100';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_I2C_PhotoelectricGate = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case '0':
			var code = 'readPhotoelectricGate(0x50)';
			break;
		case '1':
			var code = 'readPhotoelectricGate(0x69)';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_get_I2C_force = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case '0':
			var code = 'readCodesI2C(0x64)/100';
			break;
		case '1':
			var code = 'readCodesI2C(0x65)/100';
			break;
		case '2':
			var code = 'readCodesI2C(0x66)/100';
			break;
		case '3':
			var code = 'readCodesI2C(0x67)/100';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.bluebit_set_I2C_codeMotor = function (){	
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	var dropdown_mode = this.getFieldValue('STAT');
	switch(dropdown_mode) {
		case '0':
			var code = 'readCodesI2C(0x64)/100';
			break;
		case '1':
			var code = 'readCodesI2C(0x65)/100';
			break;
		case '2':
			var code = 'readCodesI2C(0x66)/100';
			break;
		case '3':
			var code = 'readCodesI2C(0x67)/100';
			break;
	}
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* blue:bit DC马达*/
Blockly.Arduino.bluebit_set_DCmotor = function (){		
	var dropdown_pin1 = this.getFieldValue('PIN1');
	var dropdown_pin2 = this.getFieldValue('PIN2');
	var dropdown_dir = this.getFieldValue('DIR');
	var dropdown_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
	switch(dropdown_dir) {
		case 'clockwise':
			var code = 'analogWrite(' + dropdown_pin1 + ',' + dropdown_speed + '); \n' +
			           'analogWrite(' + dropdown_pin2 + ',' + '0); \n';
			break;
		case 'anti-clockwise':
			var code = 'analogWrite(' + dropdown_pin2 + ',' + dropdown_speed + '); \n' +
			           'analogWrite(' + dropdown_pin1 + ',' + '0); \n';
			break;
		case 'stop':
			var code = 'analogWrite(' + dropdown_pin2 + ',' + '0); \n' +
		               'analogWrite(' + dropdown_pin1 + ',' + '0); \n';
			break;
	}
	return code;
};

/* blue:bit mp3 */
Blockly.Arduino.bluebit_initMp3 = function() {
	Blockly.Arduino.definitions_['include_kt540b'] = '#include "BluebitKt540b.h"';
	var dropdown_rx = this.getFieldValue('PIN_RX');
	var dropdown_tx = this.getFieldValue('PIN_TX');
	Blockly.Arduino.definitions_['define_bluebit_mp3_obj'] = 'Kt540bClass mp3Play(' + dropdown_rx + ', ' + dropdown_tx + ');\n';
	Blockly.Arduino.setups_['setup_mp3_begin'] = 'mp3Play.begin();\n';
	return "";
};

Blockly.Arduino.bluebit_playMp3 = function() {
	var var_musicnum = Blockly.Arduino.valueToCode(this, 'Num', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'mp3Play.play(' + var_musicnum + ');\n';
	return code;
};

Blockly.Arduino.bluebit_loopMp3 = function() {
	var var_musicnum = Blockly.Arduino.valueToCode(this, 'Num', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'mp3Play.loop(' + var_musicnum + ');\n';
	return code;
};

Blockly.Arduino.bluebit_setMp3 = function() {
	var var_stat = this.getFieldValue('STAT');
	var code = '';
	switch(var_stat) {
		case '0': code = 'mp3Play.stop();\n';
		break;
		case '1': code = 'mp3Play.play();\n';
		break; 
		case '2': code = 'mp3Play.pause();\n';
		break; 
		case '3': code = 'mp3Play.playNext();\n';
		break; 
		case '4': code = 'mp3Play.playPrev();\n';
		break; 
	}
	return code;
};

Blockly.Arduino.bluebit_setMp3Volume = function() {
	var var_vol = Blockly.Arduino.valueToCode(this, 'VOL', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'mp3Play.setVolume(' + var_vol + ');\n'
	return code;
};

Blockly.Arduino.joint_getMp3Stat = function() {
	var var_stat = this.getFieldValue('STAT');
	var code = '(mp3Play.getPlayState() == ' + var_stat + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* blue:bit midi */
Blockly.Arduino.bluebit_midi_init = function() {
	Blockly.Arduino.definitions_['include_SetMidi'] = '#include "BluebitMidi.h"';
	var dropdown_rx = this.getFieldValue('PIN_RX');
	var dropdown_tx = this.getFieldValue('PIN_TX');
	var var_vol = Blockly.Arduino.valueToCode(this, 'VOL', Blockly.Arduino.ORDER_ATOMIC);	
	Blockly.Arduino.definitions_['define_midi_obj'] = 'LdSetMidi midi = LdSetMidi(' + dropdown_rx + ',' + dropdown_tx + ');';
	Blockly.Arduino.setups_['setup_midi_init'] = 'midi.begin();\n';
	Blockly.Arduino.setups_['setup_midi_delay'] = 'delay(500);\n';
	Blockly.Arduino.setups_['setup_midi_set_volume'] = 'midi.MidiChangeControl(0, 0x07, '+ var_vol+');\n';
	return "";
};

Blockly.Arduino.bluebit_midi_set1 = function() {
	var var_chs = this.getFieldValue('MIDI1');
	var code = 'midi.MidiChangeProgram(0, ' + var_chs + ');\n';
	return code;
};

Blockly.Arduino.bluebit_midi_set2 = function() {
	var var_chs = this.getFieldValue('MIDI1');
	var code = 'midi.MidiChangeProgram(10, ' + var_chs + ');\n';
	return code;
};

Blockly.Arduino.bluebit_midi_playNote = function() {
	var var_note = this.getFieldValue('NOTE');
	var var_velocity = Blockly.Arduino.valueToCode(this, 'VELOCITY', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'midi.noteOn(0x90, ' + var_note + ','+var_velocity+');\n';
	return code;
};

Blockly.Arduino.bluebit_midi_stopPlay = function() {
	var var_note = this.getFieldValue('NOTE');
	var var_velocity = Blockly.Arduino.valueToCode(this, 'VELOCITY', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'midi.noteOn(0x90, ' + var_note + ', 0);\n';
	return code;
};

/* blue:bit 蜂鸣器 */
Blockly.Arduino.bluebit_buzzer = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
	var fre =  this.getFieldValue('notes');
	Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code='tone('+dropdown_pin+', '+fre+');\n';
	return code;
};

Blockly.Arduino.bluebit_buzzer2 = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var fre =  this.getFieldValue('notes');
    var dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code="tone("+dropdown_pin+","+fre+","+dur+");\n";
	return code;
};

Blockly.Arduino.bluebit_buzzer3 = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var fre = Blockly.Arduino.valueToCode(this, 'FREQUENCY', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    var dur = Blockly.Arduino.valueToCode(this, 'DURATION', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
    Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
    var code="tone("+dropdown_pin+","+fre+","+dur+");\n";
	return code;
};

Blockly.Arduino.bluebit_buzzer4 = function() {
	var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
    var code="noTone("+dropdown_pin+");\n";
//    Blockly.Arduino.setups_['setup_output_buzzer'] = 'pinMode(10, OUTPUT);';
   return code;
};

/* 数码管开始 */
Blockly.Arduino.bluebit_TM1650_cmd = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit_TM1650'] = '#include "BluebitTM1650.h"';
	Blockly.Arduino.definitions_['define_TM1650_obj'] = 'TM1650 digit;';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	Blockly.Arduino.setups_['setup_TM1650_init'] = 'digit.init();';
  var dropdown_stat = this.getFieldValue('STAT');
  var code = 'digit.'+dropdown_stat+'();\n'
  return code;
};
//int类型
Blockly.Arduino.bluebit_TM1650_setDigit_Int = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit_TM1650'] = '#include "BluebitTM1650.h"';
	Blockly.Arduino.definitions_['define_TM1650_obj'] = 'TM1650 digit;';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	Blockly.Arduino.setups_['setup_TM1650_init'] = 'digit.init();';
	var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'digit.disComplexString(' + value_num + ');\n' + 'digit.displayOn();\n';
	return code;	
};
//Char类型
Blockly.Arduino.bluebit_TM1650_setDigit_Char = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit_TM1650'] = '#include "BluebitTM1650.h"';
	Blockly.Arduino.definitions_['define_TM1650_obj'] = 'TM1650 digit;';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	Blockly.Arduino.setups_['setup_TM1650_init'] = 'digit.init();';
	var char1 = Blockly.Arduino.valueToCode(this, 'Char', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'digit.disComplexString(' + char1 + ');\n' + 'digit.displayOn();\n';
	return code;	
};
//int类型
Blockly.Arduino.bluebit_TM1650_setDot = function() {
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit_TM1650'] = '#include "BluebitTM1650.h"';
	Blockly.Arduino.definitions_['define_TM1650_obj'] = 'TM1650 digit;';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	Blockly.Arduino.setups_['setup_TM1650_init'] = 'digit.init();';
	var value_pos = this.getFieldValue('POS');
	var value_state = this.getFieldValue('ON');
	var code = 'digit.setDot(' + value_pos + ', ' + value_state + ');\n' + 'digit.displayOn();\n';
	return code;	
};

/* 点阵开始 */
Blockly.Arduino.bluebit_matrix_init = function (){
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_matrix'] = '#include <BluebitAdafruitLEDBackpack.h>';
	Blockly.Arduino.definitions_['define_gfx'] = '#include <BluebitAdafruitGFX.h>';
	Blockly.Arduino.definitions_['define_matrix_obj'] = 'Adafruit_8x8matrix matrix = Adafruit_8x8matrix();';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	Blockly.Arduino.setups_['setup_matrix_init'] = 'matrix.begin(0x70);';
	return "";
}

Blockly.Arduino.bluebit_matrix_draw_pixel = function (){
    var var_x = Blockly.Arduino.valueToCode(this, 'PIXEL_X', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	var var_y = Blockly.Arduino.valueToCode(this, 'PIXEL_Y', Blockly.Arduino.ORDER_ASSIGNMENT) || '0'; 
    var pixelStat =  this.getFieldValue('PIXEL_ON_OFF');
	var code = 'matrix.drawPixel('+var_x+',' + var_y + ','+pixelStat+');\n';
	return code;
}

Blockly.Arduino.bluebit_matrix_display_string = function() {
    var var_x = Blockly.Arduino.valueToCode(this, 'PIXEL_X', Blockly.Arduino.ORDER_ASSIGNMENT) || '0';
	var var_y = Blockly.Arduino.valueToCode(this, 'PIXEL_Y', Blockly.Arduino.ORDER_ASSIGNMENT) || '0'; 
    var var_str = Blockly.Arduino.valueToCode(this, 'CHAR_VAR', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var code = 'matrix.setCursor('+var_x+', '+var_y+');\n'
	    code += 'matrix.print('+var_str+');\n'
		code += 'matrix.writeDisplay();\n';
	return code;
}

Blockly.Arduino.bluebit_matrix_cmd = function (){ 
    var var_cmd =  this.getFieldValue('MATRIX_CMD');
	var code;
	switch(var_cmd) {
		case 'clear':   code = 'matrix.clear();\n';
		break;
		case 'display': code = 'matrix.writeDisplay();\n';
		break; 
	}
	return code;
}

/* 彩灯 */
Blockly.Arduino.bluebit_initPixel = function (){
	var var_n = Blockly.Arduino.valueToCode(this, 'n', Blockly.Arduino.ORDER_ATOMIC);
	var var_pin = Blockly.Arduino.valueToCode(this, 'pin', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_i2c'] = '#include <BluebitAdafruitNeoPixel.h>';
	//Blockly.Arduino.definitions_['define_matrix'] = '#include <BluebitAdafruitLEDBackpack.h>';
	//Blockly.Arduino.definitions_['define_gfx'] = '#include <BluebitAdafruitGFX.h>';
	Blockly.Arduino.definitions_['define_strip_obj'] = 'Adafruit_NeoPixel strip = Adafruit_NeoPixel('+ var_n +','+ var_pin +');';
	Blockly.Arduino.setups_['setup_strip_begin'] = 'strip.begin();';
	//Blockly.Arduino.setups_['setup_matrix_init'] = 'matrix.begin(0x70);';
	return "";
}

Blockly.Arduino.bluebit_setPixelAndShow = function() {
	var var_n = Blockly.Arduino.valueToCode(this, 'n', Blockly.Arduino.ORDER_ATOMIC);
	var var_r = Blockly.Arduino.valueToCode(this, 'r', Blockly.Arduino.ORDER_ATOMIC);
	var var_g = Blockly.Arduino.valueToCode(this, 'g', Blockly.Arduino.ORDER_ATOMIC);
	var var_b = Blockly.Arduino.valueToCode(this, 'b', Blockly.Arduino.ORDER_ATOMIC);
	var code = 'strip.setPixelColor(' + var_n + ',' + var_r + ','+ var_g + ','+ var_b + ');\n'+ 'strip.show();\n'
	return code;
};

/* 1603 LCD */
Blockly.Arduino.bluebit_lcd_init = function (){
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['define_bluebit_lcd1602'] = '#include <BluebitLcd1602.h>';
	Blockly.Arduino.definitions_['define_lcd1602_obj'] = 'LiquidCrystal lcd;';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	Blockly.Arduino.setups_['setup_lcd1602_init'] = 'lcd.begin(16, 2);';
	return "";
}

Blockly.Arduino.bluebit_lcd_print2 = function (){
	var var_row = Blockly.Arduino.valueToCode(this, 'row', Blockly.Arduino.ORDER_ATOMIC) || '1';
	var var_col = Blockly.Arduino.valueToCode(this, 'column', Blockly.Arduino.ORDER_ATOMIC) || '1';
	var var_str = Blockly.Arduino.valueToCode(this, 'TEXT', Blockly.Arduino.ORDER_ATOMIC) || 'String(\"\")';
	var code = 'lcd.setCursor('+var_col+'-1, '+var_row+'-1);\n'
	code+= 'lcd.print('+var_str+');\n';
	return code;
}

Blockly.Arduino.bluebit_lcd_cmd = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  var code = 'lcd.'+dropdown_stat+'();\n'
  return code;
};

/* 串口 */
//初始化
Blockly.Arduino.bluebit_serial_softserial = function () {
	var serial_select = this.getFieldValue('serial_select');
	var dropdown_pin1 = Blockly.Arduino.valueToCode(this, 'RX',Blockly.Arduino.ORDER_ATOMIC);
	var dropdown_pin2 = Blockly.Arduino.valueToCode(this, 'TX',Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include <SoftwareSerial.h>';
	Blockly.Arduino.definitions_['var_' + serial_select] = 'SoftwareSerial '+ serial_select+'(' + dropdown_pin1 + ',' + dropdown_pin2 + ');';
	Blockly.Arduino.setups_['setup_serial_' + serial_select ] = serial_select + '.begin(115200);';
	//return [code, Blockly.Arduino.ORDER_ATOMIC];
	return "";
  };
  //清空缓存
  Blockly.Arduino.bluebit_serial_flush = function() {
	var serial_select = this.getFieldValue('serial_select');
	// if(Blockly.Arduino.setups_['setup_serial_'+serial_select+profile.default.serial]){
	// }else{
	  // Blockly.Arduino.setups_['setup_serial_'+serial_select+profile.default.serial] = serial_select+'.begin('+profile.default.serial+');';
	// }
	var code = serial_select+'.flush();\n';
	return code;
  };
  //有数据可读
  Blockly.Arduino.bluebit_serial_available = function() {
	 var serial_select = this.getFieldValue('serial_select');
	 // if(Blockly.Arduino.setups_['setup_serial_'+serial_select+profile.default.serial]){
	 // }else{
	   // Blockly.Arduino.setups_['setup_serial_'+serial_select+profile.default.serial] = serial_select+'.begin('+profile.default.serial+');';
	 // }
	 var code =serial_select+".available() > 0";
	 return [code,Blockly.Arduino.ORDER_ATOMIC];
  };
  //换行打印
  Blockly.Arduino.bluebit_serial_println = function() {
	var serial_select = this.getFieldValue('serial_select');
	var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"'
	// if(Blockly.Arduino.setups_['setup_serial_'+serial_select+profile.default.serial]){
	// }else{
	  // Blockly.Arduino.setups_['setup_serial_'+serial_select+profile.default.serial] = serial_select+'.begin('+profile.default.serial+');';
	// }
	var code = serial_select+'.println('+content+');\n';
	return code;
  };
  //原始输出
  Blockly.Arduino.bluebit_serial_write = function () {
	  var serial_select = this.getFieldValue('serial_select');
	  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '\"\"'
	  // if (Blockly.Arduino.setups_['setup_serial_' + serial_select + profile.default.serial]) {
	  // } else {
		  // Blockly.Arduino.setups_['setup_serial_' + serial_select + profile.default.serial] = serial_select + '.begin(' + profile.default.serial + ');';
	  // }
	  var code = serial_select + '.write(' + content + ');\n';
	  return code;
  };

  /* -------扩展端口-------------*/
Blockly.Arduino.bluebit_extIOInit = function () {
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    var code = 'extIOInit(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};
Blockly.Arduino.bluebit_readExtendedIO = function (){
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
	var dropdown_pin = this.getFieldValue('PIN');
	var code = 'readExtendedIO(' + dropdown_pin + ')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.bluebit_writeExtendedIO = function () {
	Blockly.Arduino.definitions_['define_bluebit'] = '#include <Bluebit.h>';
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>';
	Blockly.Arduino.setups_['setup_Wire_begin'] = 'Wire.begin();';
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_stat = this.getFieldValue('STAT');
    var code = 'writeExtendedIO(' + dropdown_pin + ',' + dropdown_stat + ');\n'
    return code;
};

