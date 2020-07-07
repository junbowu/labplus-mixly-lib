/**
 * @fileoverview Helper functions for generating Labplus Joint Lite Suite blocks.
 * @author 6692776@qq.com (Wu Wen Jie)
 */

goog.provide('Blockly.Blocks.jointlite');

goog.require('Blockly.Blocks');

Blockly.Blocks.jointlite.HUE = 200;


//按键传感器
Blockly.Blocks['jointlite_getButtonVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_BUTTON_VALUE)
		//.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

/* //声音触发器
Blockly.Blocks['jointlite_getSoundVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SOUNDTRIGGER_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
}; */

//倾斜传感器
Blockly.Blocks['jointlite_getTiltSwitchVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_TLITSWITCH_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

//红外传感器
Blockly.Blocks['jointlite_getInfraredVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_INFRARED_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

//SildeSwitch
Blockly.Blocks['jointlite_getSildeSwitchVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SILDESWITCH_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

//MotionTrigger
Blockly.Blocks['jointlite_getMotionTriggerVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_MOTIONTRIGGER_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

//SoundTrigger
Blockly.Blocks['jointlite_getSoundTriggerVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SOUNDTRIGGER_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

//TouchButton
Blockly.Blocks['jointlite_getTouchButtonVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_TOUCHBUTTON_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

/*
//IrDistanceTrigger
Blockly.Blocks['jointlite_getIrDistanceTriggerVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField('红外接近触发器值')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
  }
};
*/

//MagneticSwitch
Blockly.Blocks['jointlite_getMagneticSwitchVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_MAGNETICSWITCH_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

//LimitSwitch
Blockly.Blocks['jointlite_getLimitSwitchVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_LIMITSWITCH_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

//光线传感器（水分、滑杆、旋钮、温度、灵敏光线、阻性传感器同）
Blockly.Blocks['jointlite_getLightVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_LIGHTSENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
  }
};

//滑杆传感器
Blockly.Blocks['jointlite_getSlideVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SLIDINGPOTENTIOMETER_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
  }
};

//旋钮传感器
Blockly.Blocks['jointlite_getRotateVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_ROTATINGPOTENTIOMETER_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
  }
};

//灵敏光线传感器
Blockly.Blocks['jointlite_getLowLightVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_LOWLIGHTSENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
  }
};

//阻性传感器
Blockly.Blocks['jointlite_getResistanceVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_RESISTANCESENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
  }
};

//水分传感器
Blockly.Blocks['jointlite_getWaterVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_WATERSENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
  }
};

//FlameSensor
Blockly.Blocks['jointlite_getFlameSensorVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_FIRETRIGGER_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};


//温度传感器
Blockly.Blocks['jointlite_getTemperatureVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_TEMPSENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
  }
};


//蜂鸣器
Blockly.Blocks['jointlite_setBuzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_BUZZER)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//LED灯
Blockly.Blocks['jointlite_setLed'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_LED)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//StripLED
Blockly.Blocks['jointlite_setStripLed'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_LEDSTRIPLED)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//VibrationMotor
Blockly.Blocks['jointlite_setVibrationMotor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_VIBRATIONMOTOR)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//电磁铁
Blockly.Blocks['jointlite_setElectromagnet'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_ELECTROMAGNET)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//继电器
Blockly.Blocks['jointlite_setRelay'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RELAY)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//风扇
Blockly.Blocks['jointlite_setFan'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_FAN)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//马达
Blockly.Blocks['jointlite_setMotor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_MOTOR)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//直流电机
Blockly.Blocks['jointlite_setMotorDC'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_DCMOTOR)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT, "3_9"]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.CLOCKWISE, "clockwise"], [Blockly.Msg.ANTICLOCKWISE, "anti-clockwise"], [Blockly.Msg.STOP, "stop"]]), "DIR");
    this.appendValueInput("NUM", Number)
        .appendField(Blockly.Msg.SPEED)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//RGB灯
Blockly.Blocks['jointlite_setRGBLED'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RGBLED)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT, "3_9"]]), "PIN");
    this.appendValueInput("R", Number)
        .appendField(Blockly.Msg.RED)
        .setCheck(Number);
    this.appendValueInput("G", Number)
        .appendField(Blockly.Msg.GREEN)
        .setCheck(Number);
    this.appendValueInput("B", Number)
        .appendField(Blockly.Msg.BLUE)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



Blockly.Blocks['jointlite_analogRead'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.INOUT_ANALOG_READ)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['jointlite_analogWrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.INOUT_ANALOG_WRITE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN");
    this.appendValueInput("NUM", Number)
        .appendField(Blockly.Msg.INOUT_ANALOG_WRITE_VALUE)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['jointlite_digitalRead'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.INOUT_DIGITAL_READ)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_INPUT, "A0"],[Blockly.Msg.JOINTLITE_INPUTR, "A0 "], [Blockly.Msg.JOINTLITE_INPUTL, "A3 "]]), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.Msg.INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks['jointlite_digitalWrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.INOUT_DIGITAL_WRITE)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT,"3"],[Blockly.Msg.JOINTLITE_OUTPUTR, "3 "], [Blockly.Msg.JOINTLITE_OUTPUTL, "9 "]]), "PIN")
		.appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_STAT)
      	.appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//激活录放模块定时
Blockly.Blocks['jointlite_setRec'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RECON)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT, "3_9"]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.PLAY_RECORD, "PLAY"], [Blockly.Msg.START_RECORD, "RECORD"]]), "DIR");
    this.appendValueInput("NUM", Number)
        .setCheck(Number);
	this.appendDummyInput()
		.appendField(Blockly.Msg.SECOND);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//激活录放
Blockly.Blocks['jointlite_setRecOn'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RECON)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT, "3_9"]]), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.PLAY_RECORD, "PLAY"], [Blockly.Msg.START_RECORD, "RECORD"]]), "DIR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//关闭录放
Blockly.Blocks['jointlite_setRecOff'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RECOFF)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINTLITE_OUTPUT, "3_9"]]), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

	
Blockly.Blocks.jointlite_setMidi1 = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendValueInput('CHS', Number)
		.appendField(Blockly.Msg.JOINT_SET)
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_out), 'PIN')
		.appendField(Blockly.Msg.JOINT_SET_MIDI1);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};
	
Blockly.Blocks.jointlite_setMidi2 = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendValueInput('CHS', Number)
		.appendField(Blockly.Msg.JOINT_SET)
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_out), 'PIN')
		.appendField(Blockly.Msg.JOINT_SET_MIDI2);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.jointlite_playNote = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendValueInput('NOTE', Number)
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_out), 'PIN')
		.appendField(Blockly.Msg.JOINT_PLAYNOTE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.jointlite_playNote1 = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendValueInput('NOTE', Number)
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_out), 'PIN')
		.appendField(Blockly.Msg.JOINT_PLAYNOTE);
		this.appendValueInput('VOL', Number)
		.appendField(Blockly.Msg.JOINT_VOLUME);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.jointlite_stopPlay = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_STOPPLAYMIDI)
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_out), 'PIN');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.jointlite_playMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_out), 'PIN')
		.appendField(Blockly.Msg.JOINT_MP3PLAY);
		this.appendValueInput('Num', Number)
		// .appendField(new Blockly.FieldDropdown([['root', 'root'], ['1', '1'], ['2', '2'], ['3','3']]), 'DIR')
		.appendField(Blockly.Msg.JOINT_MP3MENU);
		this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_MP3MUSIC);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};
	
Blockly.Blocks.jointlite_loopMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_out), 'PIN')
		.appendField(Blockly.Msg.JOINT_MP3LOOP);
		this.appendValueInput('Num', Number)
		.appendField(Blockly.Msg.JOINT_MP3MENU);
		// .appendField(new Blockly.FieldDropdown([['root', 'root'], ['1', '1'], ['2', '2'], ['3','3']]), 'DIR');
		this.appendDummyInput('')
		.appendField(Blockly.Msg.JOINT_MP3MUSIC);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.jointlite_setMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_all), 'PIN')
		.appendField(Blockly.Msg.JOINT_MP3SET)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINT_PAUSE, '2'], [Blockly.Msg.JOINT_STOP, '0'], [Blockly.Msg.JOINT_PLAY, '1'], [Blockly.Msg.JOINT_NEXT, '3'], [Blockly.Msg.JOINT_PREVIOUS, '4']]), 'STAT');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.jointlite_setMp3Volume = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendValueInput('VOL')
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_all), 'PIN')
		.appendField(Blockly.Msg.JOINT_MP3SETVOLUME);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.jointlite_getMp3Stat = {
	init: function() {
		this.setColour(Blockly.Blocks.jointlite.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_out), 'PIN')
		.appendField(Blockly.Msg.JOINT_MP3STAT)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINT_PLAY, '1'], [Blockly.Msg.JOINT_PAUSE, '2'], [Blockly.Msg.JOINT_STOP, '0']]), 'STAT');
		this.setOutput(true, Boolean);
	}
};

Blockly.Blocks['jointlite_getUltrasonic'] = {
  init: function() {
    this.setColour(Blockly.Blocks.jointlite.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_ULTRASONICSENSOR_VALUE0)
		.appendField(new Blockly.FieldDropdown(profile.jointlite.group_in), 'PIN');
    this.setOutput(true, Number);
  }
};