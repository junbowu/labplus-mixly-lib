/**
 * @fileoverview Helper functions for generating Labplus arduino experiment box blocks.
 * @author 6692776@qq.com (Wu Wen Jie)
 */

goog.provide('Blockly.Blocks.arduinobox');

goog.require('Blockly.Blocks');

Blockly.Blocks.arduinobox.HUE = 170;


Blockly.Blocks['arduinobox_getTemp'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('温度值');
    this.setOutput(true, Number);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_getLightVal'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('光线传感器值');
    this.setOutput(true, Number);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_getSoundVal'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('声音传感器值');
    this.setOutput(true, Number);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_getSlidePotVal'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('滑杆电位器值');
    this.setOutput(true, Number);
    //this.setTooltip('返回按键编号1、2、3、4、5');
  }
};

Blockly.Blocks['arduinobox_getPullPotVal'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('拨动电位器值');
    this.setOutput(true, Number);
    //this.setTooltip('返回按键编号1、2、3、4、5');
  }
};

Blockly.Blocks['arduinobox_getIRremoteVal'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('红外遥控值');
    this.setOutput(true, Number);
    //this.setTooltip('返回按键编号1、2、3、4、5');
  }
};

Blockly.Blocks['arduinobox_getButtonVal'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('按键值');
    this.setOutput(true, Number);
    //this.setTooltip('返回按键编号1、2、3、4、5');
  }
};

Blockly.Blocks['arduinobox_setBuzzer'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('蜂鸣器发音')
		.appendField(new Blockly.FieldDropdown([['DO', 'DO'], ['RE', 'RE'], ['MI', 'MI'], ['FA', 'FA'], ['SOL', 'SOL'], ['LA', 'LA'], ['SI', 'SI']]), "SOUND");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_setRGBLed'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('设置三色灯')
		.appendField(new Blockly.FieldDropdown([["红", "RED"], ["绿", "GREEN"], ["蓝", "BLUE"]]), "COLOR");
	this.appendValueInput('VALUE', Number)
		.appendField('亮度')
		.setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_setLed'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('设置LED灯')
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5']]), "NO")
		.appendField(new Blockly.FieldDropdown([["开", "ON"], ["关", "OFF"]]), "MODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_setRelay'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('设置继电器开关')
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']]), "NO")
		.appendField(new Blockly.FieldDropdown([["开", "ON"], ["关", "OFF"]]), "MODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_setMotor'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('设置马达')
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2'], ['3', '3'], ['4', '4']]), "NO")
		.appendField(new Blockly.FieldDropdown([['顺时针旋转', 'CLOCKWISE'], ['逆时针旋转', 'ANTICLOCKWISE'], ['停止', 'STOP']]), "DIRECT");
	this.appendValueInput('SPEED', Number)
		.appendField('速率')
		.setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_setLCD'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendValueInput('LINE1', String)
		.appendField('设置LCD两行内容为')
		.setCheck(String);
	this.appendValueInput('LINE2', String)
		.setCheck(String);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_setLCDLine'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendDummyInput()
		.appendField('设置LCD第')
		.appendField(new Blockly.FieldDropdown([['1', '1'], ['2', '2']]), "NO");
	this.appendValueInput('CONTENT', String)
		.appendField('行内容为')
		.setCheck(String);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_setMatrixLED'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendValueInput('CONTENT', String)
		.appendField('在点阵上显示')
		.setCheck(String);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['arduinobox_setDigitalLED'] = {
  //helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(Blockly.Blocks.arduinobox.HUE);
	this.appendValueInput('DAT', Number)
		.appendField('在数码管上显示')
		.setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

