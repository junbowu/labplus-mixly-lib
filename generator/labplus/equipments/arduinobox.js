//http://www.seeedstudio.com/wiki/GROVE_System
//http://www.seeedstudio.com/depot/index.php?main_page=advanced_search_result&search_in_description=1&keyword=grovefamily
//support starter bundle example http://www.seeedstudio.com/wiki/GROVE_-_Starter_Kit_V1.1b

/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.provide('Blockly.Arduino.arduinobox');

goog.require('Blockly.Arduino');


Blockly.Arduino.arduinobox_getTemp = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.getTemp()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_getLightVal = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.getLightVal()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_getSoundVal = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.getSoundVal()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_getSlidePotVal = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.getSlidePotVal()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_getPullPotVal = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.getPullPotVal()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_getIRremoteVal = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.getIRremoteVal()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_getButtonVal = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.getButtonVal()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_setBuzzer = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.SetBuzzer(' + this.getFieldValue('SOUND') + ');\n';
  return code;
};

Blockly.Arduino.arduinobox_setRGBLed = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var val = Blockly.Arduino.valueToCode(this, "VALUE", Blockly.Arduino.ORDER_ATOMIC);
  //val = eval(val);
  //if(val < 0) val = 0;
  //if(val > 255) val = 255;
  //val = parseInt(val);
  var code = 'Clabplus.SetRGBLed(' + this.getFieldValue('COLOR') + ', ' + val + ');\n';
  return code;
};

Blockly.Arduino.arduinobox_setLed = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.SetLed(LED' + this.getFieldValue('NO') + ', ' + this.getFieldValue('MODE') + ');\n';
  return code;
};

Blockly.Arduino.arduinobox_setRelay = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var code = 'Clabplus.SetRelay(RELAY' + this.getFieldValue('NO') + ', ' + this.getFieldValue('MODE') + ');\n';
  return code;
};

Blockly.Arduino.arduinobox_setMotor = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var val = Blockly.Arduino.valueToCode(this, "SPEED", Blockly.Arduino.ORDER_ATOMIC);
  //val = eval(val);
  //if(val < 0) val = 0;
  //if(val > 255) val = 255;
  //val = parseInt(val);
  var code = 'Clabplus.SetMotor(MOTOR' + this.getFieldValue('NO') + ', ' + this.getFieldValue('DIRECT') + ', ' + val + ');\n';
  return code;
};

Blockly.Arduino.arduinobox_setLCD = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var line1 = Blockly.Arduino.valueToCode(this, "LINE1", Blockly.Arduino.ORDER_ATOMIC);
  var line2 = Blockly.Arduino.valueToCode(this, "LINE2", Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Clabplus.SetLCD(' + line1 + ', ' + line2 + ');\n';
  return code;
};

Blockly.Arduino.arduinobox_setLCDLine = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var no = this.getFieldValue('NO');
  var content = Blockly.Arduino.valueToCode(this, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Clabplus.SetLCDLine(' + no + ', ' + content + ');\n';
  return code;
};

Blockly.Arduino.arduinobox_setMatrixLED = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var content = Blockly.Arduino.valueToCode(this, "CONTENT", Blockly.Arduino.ORDER_ATOMIC);
  var code = 'Clabplus.SetMatrixLED(' + content + ');\n';
  return code;
};

Blockly.Arduino.arduinobox_setDigitalLED = function() {
  Blockly.Arduino.definitions_['arduinobox_include_lcd'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_include'] = '#include "Clabplus.h"\n';
  Blockly.Arduino.setups_['arduinobox_setup'] = 'Clabplus.begin();\n';
  var val = Blockly.Arduino.valueToCode(this, "DAT", Blockly.Arduino.ORDER_ATOMIC);
  //val = eval(val);
  //if(val < 0) val = 0;
  //if(val > 9999) val = 9999;
  //val = parseInt(val);
  var code = 'Clabplus.SetDigitalLED(' + val + ');\n';
  return code;
};

/*
Blockly.Arduino.arduinobox_lcd_setcursor = function() {
  var pos_x = this.getFieldValue('POS_X');
  var pos_y = this.getFieldValue('POS_Y');
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);';
  var code = 'lcd.setCursor('+pos_x+','+pos_y+');\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_home = function() {
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);';
  var code = 'lcd.home();\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_print = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //content = content.replace('(','').replace(')','');
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);\n';
  var code = 'lcd.print('+content+');\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_write = function() {
  var content = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || 0
  //content = content.replace('(','').replace(')','');
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);\n';
  var code = 'lcd.write('+content+');\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_autoscroll = function() {
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);\n';
  var code = (this.getFieldValue('MODE') == 'START') ? 'lcd.autoscroll();\n' : 'lcd.noAutoscroll();\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_clear = function() {
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);\n';
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_blink = function() {
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);\n';
  var code = (this.getFieldValue('MODE') == 'START') ? 'lcd.blink();\n' : 'lcd.noBlink();\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_cursor = function() {
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);\n';
  var code = (this.getFieldValue('MODE') == 'SHOW') ? 'lcd.cursor();\n' : 'lcd.noCursor();\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_display = function() {
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);\n';
  var code = (this.getFieldValue('MODE') == 'SHOW') ? 'lcd.display();\n' : 'lcd.noDisplay();\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_scrolldisplay = function() {
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);\n';
  var code = (this.getFieldValue('DIRECT') == 'LEFT') ? 'lcd.scrollDisplayLeft();\n' : 'lcd.scrollDisplayRight();\n';
  return code;
};

Blockly.Arduino.arduinobox_lcd_textdirection = function() {
  Blockly.Arduino.definitions_['arduinobox_lcd_include'] = '#include <LiquidCrystal.h>\n';
  Blockly.Arduino.definitions_['arduinobox_lcd_define'] = 'LiquidCrystal lcd(40, 41, 34, 35, 36, 37);\n';
  Blockly.Arduino.setups_['arduinobox_lcd'] = 'lcd.begin(16, 2);\n';
  var code = (this.getFieldValue('DIRECT') == 'LEFT') ? 'lcd.leftToRight();\n' : 'lcd.rightToLeft();\n';
  return code;
};

Blockly.Arduino.arduinobox_light_read = function() {
  Blockly.Arduino.definitions_['arduinobox_light_define'] = '#define  LIGHT A7\n';
  var code = 'analogRead(LIGHT)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_loudness_read = function() {
  Blockly.Arduino.definitions_['arduinobox_loudness_include'] = '#include "Loudness.h"\n';
  Blockly.Arduino.definitions_['arduinobox_loudness_define'] = '#define  MIC A6\n';
  var code = 'loudness(MIC)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_temperature_read = function() {
  Blockly.Arduino.definitions_['arduinobox_temperature_include'] = '#include <OneWire.h>\n#include <DallasTemperature.h>\n';
  Blockly.Arduino.definitions_['arduinobox_temperature_define'] = '#define ONE_WIRE_BUS 42\n\nOneWire oneWire(ONE_WIRE_BUS);\nDallasTemperature sensors(&oneWire);\n';
  Blockly.Arduino.setups_['arduinobox_temperature'] = 'sensors.begin();\n';
  var code = 'sensors.getTempCByIndex(0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_buzzer = function() {
  Blockly.Arduino.definitions_['arduinobox_buzzer_define'] = '#define BUZZER 43\n';
  Blockly.Arduino.setups_['arduinobox_buzzer'] = 'pinMode(BUZZER, OUTPUT);\n';
  var code = (this.getFieldValue('MODE') == 'ON') ? 'digitalWrite(BUZZER, HIGH);\n' : 'digitalWrite(BUZZER, LOW);\n';
  return code;
};

Blockly.Arduino.arduinobox_button = function() {
  Blockly.Arduino.definitions_['arduinobox_button_include'] = '#include "button.h"\n';
  var code = 'getButton()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_slider = function() {
  Blockly.Arduino.definitions_['arduinobox_slider_define'] = '#define POTPIN A10\n';
  var code = 'analogRead(POTPIN)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_pullpot = function() {
  Blockly.Arduino.definitions_['arduinobox_pullpot_define'] = '#define PULLPIN A9\n';
  var code = 'analogRead(PULLPIN)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.arduinobox_rgbled = function() {
  Blockly.Arduino.definitions_['arduinobox_rgbled_define'] = '#define LED_R 44\n#define LED_G 45\n#define LED_B 46\n';
  Blockly.Arduino.setups_['arduinobox_rgbled'] = 'pinMode(LED_R, OUTPUT);\n  pinMode(LED_G, OUTPUT);\n  pinMode(LED_B, OUTPUT);\n';
  var mode = (this.getFieldValue('MODE') == 'ON') ? 'HIGH' : 'LOW';
  var code = 'digitalWrite(LED_' + this.getFieldValue('COLOR') + ', ' + mode + ');\n';
  return code;
};

Blockly.Arduino.arduinobox_led = function() {
  Blockly.Arduino.definitions_['arduinobox_led_define'] = '#define LED1 A11\n#define LED2 A12\n#define LED3 A13\n#define LED4 A14\n#define LED5 17\n';
  Blockly.Arduino.setups_['arduinobox_led'] = 'pinMode(LED1, OUTPUT);\n  pinMode(LED2, OUTPUT);\n  pinMode(LED3, OUTPUT);\n  pinMode(LED4, OUTPUT);\n  pinMode(LED5, OUTPUT);\n';
  var mode = (this.getFieldValue('MODE') == 'ON') ? 'HIGH' : 'LOW';
  var code = 'digitalWrite(LED' + this.getFieldValue('NO') + ', ' + mode + ');\n';
  return code;
};
*/
