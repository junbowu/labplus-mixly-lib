'use strict';

goog.provide('Blockly.Blocks.labplus');
goog.require('Blockly.Blocks');

profile["default"] = profile["Arduino/Genuino Uno"] ;

Blockly.Blocks.labplus.HUE = 10;
Blockly.Blocks.labplus.HUE1 = 50;
Blockly.Blocks.labplus.HUE2 = 90;
Blockly.Blocks.labplus.HUE3 = 130;
Blockly.Blocks.labplus.HUE4 = 170;
Blockly.Blocks.labplus.HUE5 = 210;
Blockly.Blocks.labplus.HUE6 = 250;

/* ********************** 创客中级实验箱 ****************************/ 
/* 红外测温 MLX90615 */
Blockly.Blocks.duinoplus_temperature = {
  init: function() {
    this.setColour(Blockly.Blocks.labplus.HUE4);
	this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_TEMPERATURE)
		.appendField(new Blockly.FieldImage("../../media/labplus/temperature.jpg", 38, 32))
		.appendField(new Blockly.FieldTextInput("IRtemp"), "VAR")
	this.setOutput(true, Number);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

/* 光敏电阻 */
Blockly.Blocks.duinoplus_light = {
  init: function() {
	this.setColour(Blockly.Blocks.labplus.HUE4);
	this.setOutput(true);
	this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_LIGHT)
		.appendField(new Blockly.FieldImage("../../media/labplus/light.jpg", 30, 32))
		.appendField(Blockly.MIXLY_PIN)
		.appendField('A1');
    this.setTooltip('');
  }
};

/* 声音传感器 */
Blockly.Blocks.duinoplus_sound = {
  init: function() {
	this.setColour(Blockly.Blocks.labplus.HUE4);
	this.setOutput(true);	  
	this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_SOUND)
		.appendField(new Blockly.FieldImage("../../media/labplus/sound.jpg", 30, 32))
		.appendField(Blockly.MIXLY_PIN)
		.appendField('A2');
    this.setTooltip('');
  }
};

/* 直滑电位器 */
Blockly.Blocks.duinoplus_sliding = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE4);
	  this.setOutput(true);	  
	  this.appendDummyInput()
		  .appendField(Blockly.DUINOPLUS_SLIDING)
		  .appendField(new Blockly.FieldImage("../../media/labplus/sliding.jpg", 30, 32))
		  .appendField(Blockly.MIXLY_PIN)
		  .appendField('A0');
	  this.setTooltip('');		
	}
  };

/* 人体红外 */
Blockly.Blocks.duinoplus_humaninfrared = {
  init: function() {
    this.setColour(Blockly.Blocks.labplus.HUE4);
	this.setOutput(true);	  
	this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_HUMANINFRARED)
		.appendField(new Blockly.FieldImage("../../media/labplus/humanInfrared.jpg", 30, 32))
		.appendField(Blockly.MIXLY_PIN)
		.appendField('7');
    this.setTooltip('');
  }
};

/* 5按键 */
var BTN = [["上 - 管脚2", "2"], ["下 - 管脚3", "3"], ["左 - 管脚4", "4"], ["右 - 管脚5", "5"], ["中 - 管脚6", "6"]];
Blockly.Blocks.duinoplus_button = {
  init: function() {
	this.setColour(Blockly.Blocks.labplus.HUE4);
	this.setOutput(true);
	this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_BUTTON)
		.appendField(new Blockly.FieldImage("../../media/labplus/button.jpg", 30, 32))
		.appendField(Blockly.MIXLY_PIN)
		.appendField(new Blockly.FieldDropdown(BTN), "btn");
    this.setTooltip('');		
  }
};

/* 反转数值 */
Blockly.Blocks.duinoplus_cal_reverse = {
	init:function() {
		this.setColour(Blockly.Blocks.labplus.HUE4);
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

/* LED */
Blockly.Blocks.duinoplus_led = {
  init: function() {
    this.setColour(Blockly.Blocks.labplus.HUE1);
	this.appendValueInput("NUM", Number)
		.appendField(Blockly.DUINOPLUS_LED)
		.appendField(Blockly.MIXLY_PIN)
		.appendField('9')
		.appendField(Blockly.MIXLY_VALUE2)
		.appendField(new Blockly.FieldImage("../../media/labplus/led.jpg", 30, 32))
        .setCheck(Number);
    this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setInputsInline(true);
    this.setTooltip('');
  }
};

var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
		   ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];
		   
// Blockly.Blocks.tone_notes = {
//    init: function() {
//     this.setColour(Blockly.Blocks.blockgroup.duinoplusbox2);
//     this.appendDummyInput("")
//         .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
//     this.setOutput(true, Number);
//   }
// };

/* 蜂鸣器 */
Blockly.Blocks.duinoplus_buzzer = {
  init: function() {
    this.setColour(Blockly.Blocks.labplus.HUE6);
	this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/labplus/buzzer.jpg", 39, 32)) 
		.appendField(Blockly.MIXLY_PIN)
		.appendField('10')
		.appendField(Blockly.DUINOPLUS_NOTE)
		.appendField(new Blockly.FieldDropdown(TONE_NOTES), "notes");
    this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setInputsInline(true);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_buzzer2={
  init: function() {
    this.setColour(Blockly.Blocks.labplus.HUE6);
	this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/labplus/buzzer.jpg", 39, 32)) 
		.appendField(Blockly.MIXLY_PIN)
		.appendField('10')
		.appendField(Blockly.DUINOPLUS_NOTE)
		.appendField(new Blockly.FieldDropdown(TONE_NOTES), "notes");
	this.appendValueInput('DURATION')
		.appendField(Blockly.MIXLY_DELAY_MS)
		.appendField(Blockly.DUINOPLUS_DURATION)
		.setCheck(Number);		
    this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setInputsInline(true);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_buzzer3={
init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE6);
	this.appendValueInput('FREQUENCY')
		.appendField(Blockly.DUINOPLUS_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/labplus/buzzer.jpg", 39, 32))
		.appendField(Blockly.MIXLY_PIN)
		.appendField('10')
        .appendField(Blockly.DUINOPLUS_NOTE);
    this.appendValueInput('DURATION')
		.appendField(Blockly.DUINOPLUS_DURATION)
		.setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_buzzer4={
init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE6);
    this.appendDummyInput("")
	    .appendField(Blockly.DUINOPLUS_BUZZER)
		.appendField(new Blockly.FieldImage("../../media/labplus/buzzer.jpg", 39, 32))
		.appendField(Blockly.DUINOPLUS_OFF)
		.appendField(Blockly.MIXLY_PIN)
		.appendField('10');		
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setInputsInline(true);
	this.setTooltip('');
  }
};

/* 数码管 */
Blockly.Blocks.duinoplus_digitalled_init={
init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE5);
    this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_DIGITALLED_SETUP)	
		.appendField(new Blockly.FieldImage("../../media/labplus/digitalLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('digitLed'), 'VAR')
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.DUINOPLUS_DIGITALLED_CS)
		.appendField("8")
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.DUINOPLUS_DIGITALLED_DI)
		.appendField("11")
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.DUINOPLUS_DIGITALLED_CLK)
		.appendField("13");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_digitalled_display={
init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE5);
    this.appendValueInput('DIGITAL_LED_NUM1')
		.appendField(Blockly.DUINOPLUS_DIGITALLED)	
		.appendField(new Blockly.FieldImage("../../media/labplus/digitalLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('digitLed'), 'VAR')
		.appendField(Blockly.DUINOPLUS_DIGITALLED_DISPLAY)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_digitalled_display1={
init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE5);
    this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_DIGITALLED)	
		.appendField(new Blockly.FieldImage("../../media/labplus/digitalLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('digitLed'), 'VAR');
    this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_WHITCH_NUM)
		.appendField(new Blockly.FieldDropdown([['1', "1"], ['2', "2"], ['3', "3"], ['4', "4"]]), "DIGI_NUM")
		.appendField(Blockly.DUINOPLUS_WHITCH_NUM1);
	this.appendValueInput("DIGITAL_LED_NUM", Number)
        .setCheck(Number);
	this.appendDummyInput()
      	.appendField(Blockly.DUINOPLUS_DOT)
      	.appendField(new Blockly.FieldDropdown([[Blockly.DUINOPLUS_TRUE, "true"], [Blockly.DUINOPLUS_FALSE, "false"]]), "DOT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_digitalled_clear={
    init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE5);
    this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_DIGITALLED)	
		.appendField(new Blockly.FieldImage("../../media/labplus/digitalLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('digitLed'), 'VAR');
	this.appendDummyInput()
      	.appendField(Blockly.DUINOPLUS_CLEAR);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

/* 点阵 */
Blockly.Blocks.duinoplus_matrix_init={
init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE2);
    this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_MATRIXLED_SETUP)	
		.appendField(new Blockly.FieldImage("../../media/labplus/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR')
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.DUINOPLUS_DIGITALLED_CS)
		.appendField("12")
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.DUINOPLUS_DIGITALLED_DI)
		.appendField("11")
        .appendField(Blockly.MIXLY_PIN)
		.appendField(Blockly.DUINOPLUS_DIGITALLED_CLK)
		.appendField("13");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

var MATRIX_X_Y=[["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"], ["7", "7"]];

Blockly.Blocks['matrix_x_y'] = {
    init: function() {
    this.setColour(Blockly.Blocks.labplus.HUE2);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(MATRIX_X_Y), 'POINT');
	this.setOutput(true, Number);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_matrix_draw_pixel={
    init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE2);
    this.appendDummyInput()
		.appendField(Blockly.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/labplus/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
    this.appendValueInput('PIXEL_X')
        .setCheck(Number)
		.appendField(Blockly.PIXEL_X);
	this.appendValueInput('PIXEL_Y')
        .setCheck(Number)
        .appendField(Blockly.PIXEL_Y);
	this.appendDummyInput()
      	.appendField(new Blockly.FieldDropdown([[Blockly.PIXEL_ON, "1"], [Blockly.PIXEL_OFF, "0"]]), "PIXEL_ON_OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_matrix_display_string={
init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE2);
    this.appendDummyInput("")
		.appendField(Blockly.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/labplus/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
    this.appendValueInput('PIXEL_X')
        .setCheck(Number)
        .appendField(Blockly.PIXEL_X);
    this.appendValueInput('PIXEL_Y')
        .setCheck(Number)
        .appendField(Blockly.PIXEL_Y);
	this.appendValueInput("CHAR_VAR")
        .appendField(Blockly.DUINOPLUS_DIGITALLED_DISPLAY)
        .setCheck(String);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_matrix_draw_line={
    init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE2);
    this.appendDummyInput("")
		.appendField(Blockly.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/labplus/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
    this.appendValueInput('LINE')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.PIXEL_LINE);
	this.appendDummyInput("")
      	.appendField(Blockly.PIXEL_LINE1);
	this.appendValueInput("LINE_DAT")
       	.appendField(Blockly.DUINOPLUS_DISPLAY)
	    .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
	this.setTooltip('');
  }
};

Blockly.Blocks.duinoplus_matrix_draw_column={
    init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE2);
    this.appendDummyInput("")
		.appendField(Blockly.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/labplus/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
    this.appendValueInput('LINE')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.PIXEL_LINE);
	this.appendDummyInput("")
      	.appendField(Blockly.PIXEL_LINE2);
	this.appendValueInput("LINE_DAT")
       	.appendField(Blockly.DUINOPLUS_DISPLAY)
	    .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.duinoplus_matrix_clear={
    init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE2);
    this.appendDummyInput("")
		.appendField(Blockly.DUINOPLUS_MATRIXLED)	
		.appendField(new Blockly.FieldImage("../../media/labplus/matrixLed.jpg", 39, 32))
		.appendField(new Blockly.FieldTextInput('matrixLed'), 'VAR');
	this.appendDummyInput("")
      	.appendField(Blockly.PIXEL_CLEAR);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};
/* ********************** 创客中级实验箱 end****************************/ 

/* ********************** blue:bit 模块 ****************************/ 
/* +++++++++++++++++++++++ 传感器 +++++++++++++++++++++++++++++++++*/
/* blue:bit 模拟输入类传感器*/
var ANALOGREAD_MOD=[[Blockly.BLUEBIT_SOUND_MODULE,"AIN1"],[Blockly.BLUEBIT_LIGHT_MODULE,"AIN2"],
	                            [Blockly.BLUEBIT_WATER_MODULE,"AIN3"],[Blockly.BLUEBIT_SOIL_MODULE,"AIN4"],
	                            [Blockly.BLUEBIT_ROTATION_MODULE,"AIN5"],  
								[Blockly.BLUEBIT_JOYSTICK_MODULE,"AIN6"]   ];
								
Blockly.Blocks.bluebit_get_analog = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE4);
	  this.appendValueInput("PIN", Number)
		  .appendField(Blockly.ANALOGREAD_MODULE)
		  .appendField(new Blockly.FieldDropdown(ANALOGREAD_MOD),'NO_USE')
	      .appendField(Blockly.MIXLY_PIN)
		  .setCheck(Number);
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};

/* blue:bit 数字输入传感器*/
var DIGITALREAD_MOD=[[Blockly.BLUEBIT_SOUND_MODULE,"DIN1"],[Blockly.BLUEBIT_LIGHT_MODULE,"DIN2"],
	                       [Blockly.BLUEBIT_WATER_MODULE,"DIN3"],[Blockly.BLUEBIT_SOIL_MODULE,"DIN4"],
	                       [Blockly.BLUEBIT_GAS_MODULE,"DIN5"],   [Blockly.BLUEBIT_IR_OBSTACLE_MODULE,"DIN6"],   
	                       [Blockly.BLUEBIT_BUTTON_MODULE,"DIN7"],[Blockly.BLUEBIT_VIBRATION_MODULE,"DIN8"],
	                       [Blockly.BLUEBIT_RFID_MODULE,"DIN9"],[Blockly.BLUEBIT_FINGER_MODULE,"DIN10"],
	                       [Blockly.BLUEBIT_PIR_MODULE,"DIN11"],   [Blockly.BLUEBIT_MAGNETIC_MODULE,"DIN12"],
						   [Blockly.BLUEBIT_LINE_FOLLOWER_MODULE,"DIN13"],[Blockly.BLUEBIT_LIMIT_SWITCH, "DIN14"]
						   ];
						    
Blockly.Blocks.bluebit_get_digital = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE4);
	  this.appendDummyInput()
	  this.appendValueInput("PIN", Number)
		  .appendField(Blockly.DIGITALREAD_MODULE)
		  .appendField(new Blockly.FieldDropdown(DIGITALREAD_MOD),'MODDIG')
	      .appendField(Blockly.MIXLY_PIN)
		  .setCheck(Number);
	  this.setOutput(true, [Boolean,Number]);
	  this.setInputsInline(true);
	  this.setTooltip('循迹传感器检测为黑返回True');		  
	}
};

/* blue:bit NTC 温度*/
Blockly.Blocks.bluebit_get_ntc_temp = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE4);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_LINE_NTC_TEMP_MODULE)
		  .appendField(Blockly.BLUEBIT_PIN_MODULE)
		  .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN")
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};

/* blue:bit lm35 温度*/
Blockly.Blocks.bluebit_get_lm35_temp = {
		init: function() {
		  this.setColour(Blockly.Blocks.labplus.HUE4);
		  this.appendDummyInput("")
			  .appendField(Blockly.BLUEBIT_LINE_LM35_TEMP_MODULE)
			  .appendField(Blockly.BLUEBIT_PIN_MODULE)
			  .appendField(new Blockly.FieldDropdown(profile.default.analog), "PIN")
		  this.setOutput(true, Number);
		  this.setInputsInline(true);
		  this.setTooltip('');		  
		}
};

/* blue:bit DS18B20 */
Blockly.Blocks.ds18b20_1 = {
    init: function () {
        var UNIT = [[Blockly.MIXLY_DS18B20_C, '0'], [Blockly.MIXLY_DS18B20_F, '1']];
		var RESOLUTION = [['12', '12'], ['11', '11'], ['10', '10'], ['9', '9']];
        this.setColour(Blockly.Blocks.labplus.HUE4);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_DS18B20)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_DS18B20_GET_TEMP)
            .appendField(new Blockly.FieldDropdown(UNIT), "UNIT")
			.appendField(Blockly.RESOLUTION)
            .appendField(new Blockly.FieldDropdown(RESOLUTION), "RESOLUTION");
        this.setOutput(true, Number);
    }
};

/* blue:bit 数字光线*/
Blockly.Blocks.bluebit_get_ambient_light_val = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE4);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_AMBIENT_LIGHT_MODULE)
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};

/* blue:bit 4 按键*/
Blockly.Blocks.bluebit_get_four_button = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE4);
	  this.appendValueInput("PIN", Number)
		  //.appendField(Blockly.ANALOGREAD_MODULE)
		  .appendField(Blockly.bluebit_get_four_button)
		  //.appendField(new Blockly.FieldDropdown(ANALOGREAD_MODULE),'MODDAND')
		  .appendField(new Blockly.FieldDropdown([['A', '1'], ['B', '2'], ['C', '3'], ['D', '4']]),'button')
		  .appendField(Blockly.MIXLY_PIN)
		  .setCheck(Number);
	  this.setOutput(true, [Boolean,Number]);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
	};

/* blue:bit 颜色 */
// Blockly.Blocks.bluebit_get_color_val = {
// 	init: function() {
// 	  this.setColour(Blockly.Blocks.labplus.HUE4);
// 	  this.appendDummyInput("")
// 		//   .appendField(Blockly.bluebit_get_color_val)
// 		  .appendField("color");
// 	  this.setOutput(true, Number);
// 	  this.setInputsInline(true);
// 	  this.setTooltip('');	
// 	}
// };

/* I2C 超声波*/
Blockly.Blocks.bluebit_get_ultrasoni_val = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_ULTRASONIC_MODULE)
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C 光线*/
Blockly.Blocks.bluebit_get_I2C_light = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_I2C_light)
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C SHT20 温湿度*/
Blockly.Blocks.bluebit_get_sht20_val = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_SHT20_MODULE)
		  .appendField(new Blockly.FieldDropdown([[Blockly.TEMPERATURE, "var_temp"], [Blockly.HUMILITY, "var_hum"]]), "STAT");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C 电流*/
Blockly.Blocks.bluebit_get_I2C_current = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_I2C_current)
		  .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1'],['2', '2'], ['3', '3']]), "STAT");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C 电压*/
Blockly.Blocks.bluebit_get_I2C_voltage = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_I2C_voltage)
		  .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1'],['2', '2'], ['3', '3']]), "STAT");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C pH*/
Blockly.Blocks.bluebit_get_I2C_pH = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_I2C_pH)
		  .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1']]), "STAT");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C 气压*/
Blockly.Blocks.bluebit_get_I2C_airPressure = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_I2C_airPressure)
		  .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1'],['2', '2'], ['3', '3']]), "STAT");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C 磁感*/
Blockly.Blocks.bluebit_get_I2C_magnetic = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_I2C_magnetic)
		  .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1'],['2', '2'], ['3', '3']]), "STAT");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C 电导率*/
Blockly.Blocks.bluebit_get_I2C_conductivity = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_I2C_conductivity)
		  .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1']]), "STAT");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C 光电门*/
Blockly.Blocks.bluebit_get_I2C_PhotoelectricGate = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_I2C_PhotoelectricGate)
		  .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1']]), "STAT");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};
/* I2C 力*/
Blockly.Blocks.bluebit_get_I2C_force = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_I2C_force)
		  .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1'],['2', '2'], ['3', '3']]), "STAT");
	  this.setOutput(true, Number);
	  this.setInputsInline(true);
	  this.setTooltip('');		  
	}
};

/* ++++++++++++ 执行器 +++++++++++++++++ */
/* blue:bit 数字输出类*/
var DIGITALWRITE_MOD=[[Blockly.BLUEBIT_LED_MODULE,"DO2"],
	                [Blockly.BLUEBIT_FAN_MODULE,"DO3"],[Blockly.BLUEBIT_RELAY_MODULE,"DO4"],
					[Blockly.BLUEBIT_LASER_MODULE,"DO5"]   ,[Blockly.BLUEBIT_RECODER_MODULE,"DO6"],
					[Blockly.BLUEBIT_USB_MODULE,"DO7"], [Blockly.BLUEBIT_LABMP_STRING, "DO8"]]; 	

Blockly.Blocks.bluebit_set_digital = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE4);
		this.appendDummyInput("")
	  	    .appendField(Blockly.BLUEBIT_sensor)
	  	    .appendField(new Blockly.FieldDropdown(DIGITALWRITE_MOD),'MODDIG1')
			.appendField(Blockly.BLUEBIT_PIN_MODULE)
			.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
			.appendField(Blockly.MIXLY_STAT)
			.appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_HIGH, "HIGH"], [Blockly.MIXLY_LOW, "LOW"]]), "STAT");
	  this.setPreviousStatement(true);
	  this.setNextStatement(true);
	  this.setTooltip('');		  
	}
};
/* blue:bit DC马达驱动*/
Blockly.Blocks.bluebit_set_DCmotor={
init:function(){
	this.setColour(Blockly.Blocks.labplus.HUE4);
	this.appendDummyInput("")
		 .appendField(Blockly.BLUEBIT_DCMOTOR_MODULE)	
		 .appendField(new Blockly.FieldDropdown(profile.default.pwm), "PIN1")	
		 .appendField(Blockly.BLUEBIT_AIN2_PIN)
		 .appendField(new Blockly.FieldDropdown(profile.default.pwm), "PIN2")
		 .appendField(Blockly.BLUEBIT_DIR)
		 .appendField(new Blockly.FieldDropdown([[Blockly.CLOCKWISE,"clockwise"],[Blockly.ANTICLOCKWISE,"anti-clockwise"],[Blockly.STOP,"stop"]]),"DIR");
	this.appendValueInput("SPEED", Number)
		.appendField(Blockly.BLUEBIT_DCMOTOR_SPEED)
		.setCheck(Number);
	this.setInputsInline(true);
	this.setPreviousStatement(true,null);
	this.setNextStatement(true,null);
}};

/* ++++++++++++ 播放器 +++++++++++++++++ */
/* blue:bit mp3*/
Blockly.Blocks.bluebit_initMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE2);
		this.appendDummyInput()
			.appendField(Blockly.BLUEBIT_INIT_MP3)
			.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_RX")	
			.appendField(Blockly.BLUEBIT_MP3_TX)
			.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_TX");	
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};
Blockly.Blocks.bluebit_playMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE2);
		this.appendDummyInput()
			.appendField(Blockly.BLUEBIT_MP3PLAY);
		this.appendValueInput('Num', Number)
			.appendField(Blockly.BLUEBIT_MP3MENU);
		this.appendDummyInput()
			.appendField(Blockly.BLUEBIT_MP3MUSIC);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

	
Blockly.Blocks.bluebit_loopMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE2);
		this.appendDummyInput()
			.appendField(Blockly.BLUEBIT_MP3LOOP);
		this.appendValueInput('Num', Number)
			.appendField(Blockly.BLUEBIT_MP3MENU);
		// .appendField(new Blockly.FieldDropdown([['root', 'root'], ['1', '1'], ['2', '2'], ['3','3']]), 'DIR');
		this.appendDummyInput('')
			.appendField(Blockly.BLUEBIT_MP3MUSIC);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.bluebit_setMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE2);
		this.appendDummyInput()
			.appendField(Blockly.BLUEBIT_MP3SET)
			.appendField(new Blockly.FieldDropdown([[Blockly.BLUEBIT_PAUSE, '2'], [Blockly.BLUEBIT_STOP, '0'], [Blockly.BLUEBIT_PLAY, '1'], [Blockly.BLUEBIT_NEXT, '3'], [Blockly.BLUEBIT_PREVIOUS, '4']]), 'STAT');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.bluebit_setMp3Volume = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE2);
		this.appendValueInput('VOL')
			.appendField(Blockly.BLUEBIT_MP3SETVOLUME);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.bluebit_setMp3Stat = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE2);
		this.appendDummyInput()
			.appendField(Blockly.BLUEBIT_MP3STAT)
			.appendField(new Blockly.FieldDropdown([[Blockly.BLUEBIT_PLAY, '1'], [Blockly.BLUEBIT_PAUSE, '2'], [Blockly.BLUEBIT_STOP, '0']]), 'STAT');
		this.setOutput(true, Boolean);
		// this.setTooltip(Blockly.JOINT_MP3STATTIP);
	}
};

Blockly.Blocks.bluebit_midi_init = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE3);
		this.appendDummyInput()
			.appendField(Blockly.BLUEBIT_INIT_MIDI)
			.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_RX")	
			.appendField(Blockly.BLUEBIT_MP3_TX)
			.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN_TX");	
		this.appendValueInput("VOL", Number)
			.appendField(Blockly.BLUEBIT_VOL)
			.setCheck(Number);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

var melodic = [[Blockly.BLUEBIT_MIDI_PIANO, '1'], [Blockly.BLUEBIT_Vibraphone, '12'], 
               [Blockly.BLUEBIT_MIDI_ORGAN, '17'], [Blockly.BLUEBIT_Acoustic_Guitar, '25'], 
			   [Blockly.BLUEBIT_Electric_Guitar, '31'], [Blockly.BLUEBIT_Acoustic_Bass, '33'], 
			   [Blockly.BLUEBIT_Violin, '41'], [Blockly.BLUEBIT_String_Ensemble, '49'], 
			   [Blockly.BLUEBIT_Trumpet, '57'], [Blockly.BLUEBIT_Sax, '65'], 
			   [Blockly.BLUEBIT_Flute, '74'], [Blockly.BLUEBIT_Steel_Drums, '115'], 
			   [Blockly.BLUEBIT_Lead, '81'], [Blockly.BLUEBIT_Pad, '89']];


var percussion = [[Blockly.BLUEBIT_Bass_Drum, '36'], [Blockly.BLUEBIT_Snare_Drum, '38'], 
                  [Blockly.BLUEBIT_Closed_Hi_hat, '42'], [Blockly.BLUEBIT_Open_Hi_hat, '46'], 
				  [Blockly.BLUEBIT_Low_Tom, '43'], [Blockly.BLUEBIT_High_Tom, '48'], 
				  [Blockly.BLUEBIT_Tambourine, '54'], [Blockly.BLUEBIT_Crash_Cymbal, '57'], 
				  [Blockly.BLUEBIT_Ride_Cymbal, '59'], [Blockly.BLUEBIT_Mute_High_Conga, '62'], 
				  [Blockly.BLUEBIT_Low_Conga, '64'], [Blockly.BLUEBIT_Maracas, '70'], 
				  [Blockly.BLUEBIT_Claves, '75']];
				  
Blockly.Blocks.bluebit_midi_set1 = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE3);
		this.appendDummyInput()
		    .appendField(Blockly.BLUEBIT_SET_MIDI1)
			.appendField(new Blockly.FieldDropdown(melodic),'MIDI1');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};
	
Blockly.Blocks.bluebit_midi_set2 = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE3);
		this.appendDummyInput()
		    .appendField(Blockly.BLUEBIT_SET_MIDI2)
			.appendField(new Blockly.FieldDropdown(percussion),'MIDI1');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

var TONE_NOTES1=[["NOTE_C3", "60"],["NOTE_D3", "62"],["NOTE_E3", "64"],["NOTE_F3", "65"],["NOTE_G3", "67"],["NOTE_A3", "69"],["NOTE_B3", "71"],
                 ["NOTE_C4", "72"],["NOTE_D4", "74"],["NOTE_E4", "76"],["NOTE_F4", "77"],["NOTE_G4", "79"],["NOTE_A4", "81"],["NOTE_B4", "83"],
				 ["NOTE_C2", "48"],["NOTE_D2", "50"],["NOTE_E2", "52"],["NOTE_F2", "53"],["NOTE_G2", "55"],["NOTE_A2", "57"],["NOTE_B2", "59"]];
				 
Blockly.Blocks.bluebit_midi_playNote = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE3);
		this.appendDummyInput("")
			.appendField(Blockly.BLUEBIT_MIDI_PLAY_NOTE)
			.appendField(new Blockly.FieldDropdown(TONE_NOTES1),'NOTE');
		this.appendValueInput('VELOCITY', Number)
			.appendField(Blockly.BLUEBIT_MIDI_VELOCITY);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.bluebit_midi_stopPlay = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE3);
		this.appendDummyInput("")
			.appendField(Blockly.BLUEBIT_STOPPLAYMIDI)
			.appendField(new Blockly.FieldDropdown(TONE_NOTES1),'NOTE');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.bluebit_buzzer = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE6);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.DUINOPLUS_BUZZER) 
			.appendField(Blockly.MIXLY_PIN)
			.setCheck(Number);
		this.appendDummyInput()
			.appendField(Blockly.DUINOPLUS_NOTE)
			.appendField(new Blockly.FieldDropdown(TONE_NOTES), "notes");
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
		this.setTooltip('');
	}
};
  
Blockly.Blocks.bluebit_buzzer2={
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE6);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.DUINOPLUS_BUZZER) 
			.appendField(Blockly.MIXLY_PIN)
			.setCheck(Number);
		this.appendDummyInput()
			.appendField(Blockly.DUINOPLUS_NOTE)
			.appendField(new Blockly.FieldDropdown(TONE_NOTES), "notes");
		this.appendValueInput('DURATION')
			.appendField(Blockly.MIXLY_DELAY_MS)
			.appendField(Blockly.DUINOPLUS_DURATION)
			.setCheck(Number);		
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
		this.setTooltip('');
	}
};
  
Blockly.Blocks.bluebit_buzzer3={
	init:function(){
		this.setColour(Blockly.Blocks.labplus.HUE6);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.DUINOPLUS_BUZZER) 
			.appendField(Blockly.MIXLY_PIN)
			.setCheck(Number);
		this.appendValueInput('FREQUENCY')
			.appendField(Blockly.DUINOPLUS_NOTE);
		this.appendValueInput('DURATION')
			.appendField(Blockly.DUINOPLUS_DURATION)
			.setCheck(Number);
		this.setInputsInline(true);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip('');
	}
};
  
Blockly.Blocks.bluebit_buzzer4={
	init:function(){
		this.setColour(Blockly.Blocks.labplus.HUE6);
		this.appendValueInput("PIN", Number)
			.appendField(Blockly.DUINOPLUS_BUZZER)
			.appendField(Blockly.DUINOPLUS_OFF) 
			.appendField(Blockly.MIXLY_PIN)
			.setCheck(Number);	
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setInputsInline(true);
		this.setTooltip('');
	}
};

/* ++++++++++++++++显示器 ++++++++++++++++*/
/* I2C 数码管*/
Blockly.Blocks.bluebit_TM1650_cmd = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput()
		  .appendField(Blockly.DUINOPLUS_DIGITALLED)
		  .appendField(new Blockly.FieldDropdown([[Blockly.DUINOPLUS_DISPLAY, "displayOn"], [Blockly.TurnOff_DISPLAY, "displayOff"], [Blockly.PIXEL_CLEAR, "clear"]]), "STAT");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	}
  };
  //int类型
  Blockly.Blocks.bluebit_TM1650_setDigit_Int = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendValueInput("NUM", Number)
		  .appendField(Blockly.JOINT_SET_DIGITON);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	}
  };
  //Char类型
  Blockly.Blocks.bluebit_TM1650_setDigit_Char = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendValueInput('Char')
		  .appendField(Blockly.JOINT_SET_DIGITON_Char);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	}
  };	
  //int类型
  Blockly.Blocks.bluebit_TM1650_setDot = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE6);
	  this.appendDummyInput("")
		  .appendField(Blockly.DUINOPLUS_DIGITALLED_DOT_POS)
		  .appendField(new Blockly.FieldDropdown([['0', '0'], ['1', '1'],['2', '2'], ['3', '3']]), "POS")
		  .appendField(Blockly.As)
		  .appendField(new Blockly.FieldDropdown([['True', "1"], ['False', "0"]]), "ON");
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	}
  };

/*点阵*/
Blockly.Blocks.bluebit_matrix_init={
	init:function(){
		this.setColour(Blockly.Blocks.labplus.HUE4);
		this.appendDummyInput("")
			.appendField(Blockly.BLUEBIT_MATRIXLED_SETUP);	
		this.setPreviousStatement(true);
		this.setNextStatement(true);
  }
};

Blockly.Blocks.bluebit_matrix_draw_pixel={
    init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE4);
    this.appendDummyInput("")
		.appendField(Blockly.BLUEBIT_DRAW_PIXEL)	
    this.appendValueInput('PIXEL_X')
        .setCheck(Number)
        .appendField(Blockly.BLUEBIT_PIXEL_X);
    this.appendValueInput('PIXEL_Y')
        .setCheck(Number)
        .appendField(Blockly.BLUEBIT_PIXEL_Y);
	this.appendDummyInput("")
      	.appendField(new Blockly.FieldDropdown([[Blockly.BLUEBIT_PIXEL_ON, "1"], [Blockly.BLUEBIT_PIXEL_OFF, "0"]]), "PIXEL_ON_OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.bluebit_matrix_display_string={
init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE4);
    this.appendDummyInput("")
		.appendField(Blockly.BLUEBIT_MATRIX_STR);	
    this.appendValueInput('PIXEL_X')
        .setCheck(Number)
        .appendField(Blockly.BLUEBIT_PIXEL_X);
    this.appendValueInput('PIXEL_Y')
        .setCheck(Number)
        .appendField(Blockly.BLUEBIT_PIXEL_Y);
	this.appendValueInput("CHAR_VAR")
        .appendField(Blockly.BLUEBIT_MATRIX_DISPLAY)
        .setCheck(String);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.Blocks.bluebit_matrix_cmd={
    init:function(){
    this.setColour(Blockly.Blocks.labplus.HUE4);
    this.appendDummyInput("")
		.appendField(Blockly.BLUEBIT_MATRIX_CMD)
		.appendField(new Blockly.FieldDropdown([[Blockly.BLUEBIT_MATRIX_CLEAR, "clear"], [Blockly.BLUEBIT_MATRIX_DISPLAY, "display"]]), "MATRIX_CMD");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

/* 彩灯 */
Blockly.Blocks.bluebit_initPixel = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE2);
		// this.appendDummyInput()
			// .appendField("彩灯初始化 数量")
			// .appendField(new Blockly.FieldDropdown(profile.default.digital), "n")	
			// .appendField("引脚")
			// .appendField(new Blockly.FieldDropdown(profile.default.digital), "pin");
		this.appendValueInput("n", Number)
			.appendField(Blockly.bluebit_initPixel)
			.setCheck(Number);
		this.appendValueInput("pin", Number)
			.appendField(Blockly.BLUEBIT_PIN_MODULE)
			.setCheck(Number);			
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.bluebit_setPixelAndShow = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE2);
		// this.appendDummyInput()
			// .appendField("彩灯初始化 数量")
			// .appendField(new Blockly.FieldDropdown(profile.default.digital), "n")	
			// .appendField("引脚")
			// .appendField(new Blockly.FieldDropdown(profile.default.digital), "pin");
		this.appendValueInput("n", Number)
			.appendField(Blockly.bluebit_setPixelAndShow)
			.setCheck(Number);
		this.appendValueInput("r", Number)
			.appendField(Blockly.RED)
			.setCheck(Number);
		this.appendValueInput("g", Number)
			.appendField(Blockly.GREEN)
			.setCheck(Number);	
		this.appendValueInput("b", Number)
			.appendField(Blockly.BLUE)
			.setCheck(Number);	
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
	}
};

/*1602 LCD */
Blockly.Blocks.bluebit_lcd_init = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE1);
	  this.appendDummyInput("")
		  .appendField(Blockly.BLUEBIT_LCD1602);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setInputsInline(true);
	}
  };

Blockly.Blocks.bluebit_lcd_print2 = {
init: function() {
	this.setColour(Blockly.Blocks.labplus.HUE1);
	this.appendValueInput("row", Number)
		.setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT)
		//.appendField(Blockly.MIXLY_DF_LCD)
		.appendField('1602LCD')
		.appendField(Blockly.MIXLY_LCD_ROW);
	this.appendValueInput("column", Number)
		.setCheck(Number)
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.MIXLY_LCD_COLUMN);
	this.appendValueInput("TEXT", String)
		.setCheck([String,Number])
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.MIXLY_LCD_PRINT);
	this.setPreviousStatement(true, null);
	this.setInputsInline(true);
	this.setNextStatement(true, null);
}
};

var LCD_CMD = [[Blockly.bluebit_LCD_STAT_ON, "display"], [Blockly.bluebit_LCD_STAT_OFF, "noDisplay"], 
			   [Blockly.MIXLY_LCD_STAT_CURSOR, "cursor"], [Blockly.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], 
			   [Blockly.MIXLY_LCD_STAT_BLINK, "blink"], [Blockly.MIXLY_LCD_STAT_NOBLINK, "noBlink"], 
				[Blockly.MIXLY_LCD_STAT_CLEAR, "clear"], [Blockly.bluebit_LCD_scrollDisplayLeft, "scrollDisplayLeft"], 
				[Blockly.bluebit_LCD_scrollDisplayRight , "scrollDisplayRight"],
				[Blockly.bluebit_LCD_autoscroll, "autoscroll"], [Blockly.bluebit_LCD_noAutoscroll , "noAutoscroll"]];
				
Blockly.Blocks.bluebit_lcd_cmd = {
init: function() {
	this.setColour(Blockly.Blocks.labplus.HUE1);
	this.appendDummyInput()
		.appendField('1602LCD')
		.appendField(new Blockly.FieldDropdown(LCD_CMD), "STAT");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
}
};

/* ++++++++++++++++ 通信 ++++++++++++++++*/
/* blue:bit 红外/蓝牙串口 */
var serial_select = [[Blockly.Serial_IR, "Serial_IR"], [Blockly.Serial_BL, "Serial_BL"]];

Blockly.Blocks.bluebit_serial_softserial = {
	init: function() {
	 this.setColour(Blockly.Blocks.labplus.HUE5);
	 this.appendValueInput("RX", Number)
		 .appendField(Blockly.MIXLY_SETUP)
		 .appendField(new Blockly.FieldDropdown(serial_select), "serial_select")
		 .appendField("RX#")
		 .setCheck(Number)
		 .setAlign(Blockly.ALIGN_RIGHT);
	  this.appendValueInput("TX", Number)
		 .appendField("TX#")
		 .setCheck(Number)
		 .setAlign(Blockly.ALIGN_RIGHT);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setInputsInline(true);
	}
  };
  //清空缓存
  Blockly.Blocks.bluebit_serial_flush = {
	init: function() {
	 this.setColour(Blockly.Blocks.labplus.HUE5);
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown(serial_select), "serial_select")
		  .appendField(Blockly.MIXLY_SERIAL_FLUSH);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	}
  };
  //有数据可读
  Blockly.Blocks.bluebit_serial_available = {
	init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE5);
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldDropdown(serial_select), "serial_select")
		  .appendField(Blockly.MIXLY_SERIAL_AVAILABLE);
	  this.setOutput(true, Boolean);
	  this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERIAL_AVAILABLE);
	}
  };
  //换行打印
  Blockly.Blocks.bluebit_serial_println = {
	 init: function() {
	  this.setColour(Blockly.Blocks.labplus.HUE5);
	  this.appendValueInput("CONTENT", String)
		  .appendField(new Blockly.FieldDropdown(serial_select), "serial_select")
		  .appendField(Blockly.MIXLY_SERIAL_PRINTLN);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setTooltip(Blockly.TEXT_PRINT_TOOLTIP);
	}
  };
  //原始输出
  Blockly.Blocks.bluebit_serial_write = {
	  init: function () {
		  this.setColour(Blockly.Blocks.labplus.HUE5);
		  this.appendValueInput("CONTENT", String)
			  .appendField(new Blockly.FieldDropdown(serial_select), "serial_select")
			  .appendField(Blockly.MIXLY_SERIAL_WRITE);
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setTooltip(Blockly.TEXT_WRITE_TOOLTIP);
	  }
  };

/*扩展端口开始*/
/*
Blockly.Blocks.bluebit_extIOInit = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE4);
		this.appendDummyInput("")
	  	   // .appendField('传感器')
	  	    //.appendField(new Blockly.FieldDropdown(DIGITALWRITE_MODULE),'MODDIG1')
			.appendField(Blockly.bluebit_extIOInit)
			.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
			.appendField(Blockly.MIXLY_STAT)
			.appendField(new Blockly.FieldDropdown([[Blockly.JOINTLITE_INPUT , "1"], [Blockly.JOINTLITE_OUTPUT , "0"]]), "STAT");
	  this.setPreviousStatement(true);
	  this.setNextStatement(true);
	  this.setTooltip('');		  
	}
};
Blockly.Blocks.bluebit_readExtendedIO = {
			init: function() {
			  this.setColour(Blockly.Blocks.labplus.HUE4);
			  this.appendDummyInput("")
				  .appendField(Blockly.bluebit_readExtendedIO)
				  //.appendField(Blockly.BLUEBIT_PIN_MODULE)
				  .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
			  this.setOutput(true, Number);
			  this.setInputsInline(true);
			  this.setTooltip('');		  
			}
};
Blockly.Blocks.bluebit_writeExtendedIO = {
	init: function() {
		this.setColour(Blockly.Blocks.labplus.HUE4);
		this.appendDummyInput("")
			.appendField(Blockly.bluebit_writeExtendedIO)
			.appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
			.appendField(Blockly.As)
			.appendField(new Blockly.FieldDropdown([['HIGH', "1"], ['LOW', "0"]]), "STAT");
	  this.setPreviousStatement(true);
	  this.setNextStatement(true);
	  this.setTooltip('');		  
	}
};
*/
/*扩展端口结束*/