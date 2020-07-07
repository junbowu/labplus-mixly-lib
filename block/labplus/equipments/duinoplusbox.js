'use strict';

goog.provide('Blockly.Blocks.duinoplusbox');

goog.require('Blockly.Blocks');

Blockly.Blocks.duinoplusbox.HUE = 160;

profile["duinoplusbox"] = {
    description: "Duinoplus Box",
    digital: [["0", "0"],["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
    analog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
	pwm:[["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
	btn:[["上 - 管脚2", "2"], ["下 - 管脚3", "3"], ["左 - 管脚4", "4"], ["右 - 管脚5", "5"], ["中 - 管脚6", "6"]],
	interrupt : [["2", "2"], ["3", "3"]],
	serial_select:[["Serial", "Serial"],["SoftwareSerial", "mySerial"]],
    serial: 9600
};

Blockly.Blocks['duinoplus_digital'] = {
   init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.duinoplusbox.digital), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['duinoplus_analog'] = {
   init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.duinoplusbox.analog), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['duinoplus_pwm'] = {
   init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.duinoplusbox.pwm), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['duinoplus_btn'] = {
   init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(profile.duinoplusbox.btn), 'PIN');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.duinoplus_temperature = {
  init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
	this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_TEMPERATURE)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/temperature.jpg", 38, 32))
		.appendField(new Blockly.FieldTextInput('IRtemp'), 'VAR');
	this.setOutput(true, Number);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_light = {
  init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
	this.appendValueInput("PIN", Number)
		.appendField(Blockly.Msg.DUINOPLUS_LIGHT)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/light.jpg", 30, 32))
		.appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setOutput(true, Number);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_sound = {
  init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);	  
	this.appendValueInput("PIN", Number)
		.appendField(Blockly.Msg.DUINOPLUS_SOUND)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/sound.jpg", 30, 32))
		.appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setOutput(true, Number);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_humaninfrared = {
  init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
	this.appendValueInput("PIN", Number)
		.appendField(Blockly.Msg.DUINOPLUS_HUMANINFRARED)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/humanInfrared.jpg", 30, 32))
		.appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setOutput(true, Number);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_sliding = {
  init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
	this.appendValueInput("PIN", Number)
		.appendField(Blockly.Msg.DUINOPLUS_SLIDING)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/sliding.jpg", 30, 32))
		.appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setOutput(true, Number);
	this.setInputsInline(true);
    this.setTooltip('');		
  }
};

Blockly.Blocks.duinoplus_button = {
  init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
	this.appendValueInput("PIN", Number)
		.appendField(Blockly.Msg.DUINOPLUS_BUTTON)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/button.jpg", 30, 32))
		//.appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_DUINOPLUS_BTN_UP, "1"], [Blockly.MIXLY_DUINOPLUS_BTN_DOWN, "2"], [Blockly.MIXLY_DUINOPLUS_BTN_LEFT, "3"], [Blockly.MIXLY_DUINOPLUS_BTN_RIGHT, "4"], [Blockly.MIXLY_DUINOPLUS_BTN_MID, "5"]]), "STAT")
		.appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
	this.setOutput(true, Number);
	this.setInputsInline(true);
    this.setTooltip('');		
  }
};

Blockly.Blocks.duinoplus_led = {
  init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
	this.appendValueInput("PIN", Number)
		.appendField(Blockly.Msg.DUINOPLUS_LED)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/led.jpg", 30, 32))
		.appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput("NUM", Number)
        .appendField(Blockly.MIXLY_VALUE2)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];

Blockly.Blocks.tone_notes = {
   init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE2);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.duinoplus_buzzer = {
  init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.DUINOPLUS_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/buzzer.jpg", 39, 32));   	
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DUINOPLUS_NOTE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.duinoplus_buzzer2={
  init: function() {
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.DUINOPLUS_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/buzzer.jpg", 39, 32));   	
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DUINOPLUS_NOTE);
    this.appendValueInput('DURATION')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DUINOPLUS_DURATION);
	this.appendDummyInput("")
		.appendField(Blockly.Msg.MIXLY_DELAY_MS);	
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.duinoplus_buzzer3={
init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.DUINOPLUS_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/buzzer.jpg", 39, 32));   	
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DUINOPLUS_FREQUENCY);
    this.appendValueInput('DURATION')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.DUINOPLUS_DURATION);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_buzzer4={
init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
	    .appendField(Blockly.Msg.DUINOPLUS_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/buzzer.jpg", 39, 32))
        .appendField(Blockly.Msg.DUINOPLUS_OFF);		
	this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_digitalled_init={
init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED_SETUP)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/digitalLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('digitLed'), 'VAR');
	this.appendValueInput("PIN_CS", Number)
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED_CS)
        .setCheck(Number);
	this.appendValueInput("PIN_DI", Number)
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED_DI)
        .setCheck(Number);
	this.appendValueInput("PIN_CLK", Number)
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED_CLK)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_digitalled_display={
init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/digitalLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('digitLed'), 'VAR');
	this.appendValueInput("DIGITAL_LED_NUM1", Number)
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED_DISPLAY)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_digitalled_display1={
init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/digitalLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('digitLed'), 'VAR');
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_WHITCH_NUM)
		.appendField(new Blockly.FieldDropdown([['1', "1"], ['2', "2"], ['3', "3"], ['4', "4"]]), "DIGI_NUM")
		.appendField(Blockly.Msg.DUINOPLUS_WHITCH_NUM1);
	this.appendValueInput("DIGITAL_LED_NUM", Number)
        .setCheck(Number);
	this.appendDummyInput("")
      	.appendField(Blockly.Msg.DUINOPLUS_DOT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.DUINOPLUS_TRUE, "true"], [Blockly.Msg.DUINOPLUS_FALSE, "false"]]), "DOT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_digitalled_clear={
    init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/digitalLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('digitLed'), 'VAR');
	this.appendDummyInput("")
      	.appendField(Blockly.Msg.DUINOPLUS_CLEAR);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_matrix_init={
init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_MATRIXLED_SETUP)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
	this.appendValueInput("PIN_CS", Number)
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED_CS)
        .setCheck(Number);
	this.appendValueInput("PIN_DI", Number)
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED_DI)
        .setCheck(Number);
	this.appendValueInput("PIN_CLK", Number)
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.Msg.DUINOPLUS_DIGITALLED_CLK)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

var MATRIX_X_Y=[["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"], ["7", "7"]];

Blockly.Blocks.matrix_x_y = {
    init: function() {
    this.setColour(Blockly.Blocks.blockgroup.HUE2);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(MATRIX_X_Y), 'STAT');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.duinoplus_matrix_draw_pixel={
    init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
    this.appendValueInput('PIXEL_X')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PIXEL_X);
    this.appendValueInput('PIXEL_Y')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PIXEL_Y);
	this.appendDummyInput("")
      	.appendField(new Blockly.FieldDropdown([[Blockly.Msg.PIXEL_ON, "1"], [Blockly.Msg.PIXEL_OFF, "0"]]), "PIXEL_ON_OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_matrix_display_string={
init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
    this.appendValueInput('PIXEL_X')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PIXEL_X);
    this.appendValueInput('PIXEL_Y')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PIXEL_Y);
	this.appendValueInput("CHAR_VAR")
        .appendField(Blockly.Msg.DUINOPLUS_DIGITALLED_DISPLAY)
        .setCheck(String);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_matrix_draw_line={
    init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
    this.appendValueInput('LINE')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PIXEL_LINE);
	this.appendDummyInput("")
      	.appendField(Blockly.Msg.PIXEL_LINE1);
	this.appendValueInput("LINE_DAT")
       	.appendField(Blockly.Msg.DUINOPLUS_DISPLAY)
	    .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_matrix_draw_column={
    init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
    this.appendValueInput('LINE')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PIXEL_LINE);
	this.appendDummyInput("")
      	.appendField(Blockly.Msg.PIXEL_LINE2);
	this.appendValueInput("LINE_DAT")
       	.appendField(Blockly.Msg.DUINOPLUS_DISPLAY)
	    .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_matrix_clear={
    init:function(){
    this.setColour(Blockly.Blocks.duinoplusbox.HUE);
    this.appendDummyInput("")
		.appendField(Blockly.Msg.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/duinoplusbox/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
	this.appendDummyInput("")
      	.appendField(Blockly.Msg.PIXEL_CLEAR);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_cal_reverse = {
	init:function() {
		this.setColour(Blockly.Blocks.duinoplusbox.HUE);
		this.appendDummyInput("")
		    .appendField(Blockly.Cal_Reverse);
		this.appendValueInput("Num", Number)
		    .appendField(Blockly.Cal_Value)
			.setCheck(Number);
		this.appendValueInput("NumLen", Number)
		    .appendField(Blockly.Cal_NumLen)
		    .setCheck(Number);
		this.setInputsInline(true);
		this.setOutput(true, Number);
	 }
};







