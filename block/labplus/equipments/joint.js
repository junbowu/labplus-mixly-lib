'use strict';

goog.provide('Blockly.FieldLabplusMatrix');
goog.require('Blockly.Field');


/**
 * Class for a checkbox field.
 * @param {string} state The initial state of the field ('TRUE' or 'FALSE').
 * @param {Function=} opt_validator A function that is executed when a new
 *     option is selected.  Its sole argument is the new checkbox state.  If
 *     it returns a value, this becomes the new checkbox state, unless the
 *     value is null, in which case the change is aborted.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldLabplusMatrix = function(colour, opt_validator) {
  Blockly.FieldLabplusMatrix.superClass_.constructor.call(this, colour, opt_validator);
  // Set the initial state.
  this.setText(Blockly.Field.NBSP + Blockly.Field.NBSP); 
  //this.setColourI_(colour);
  this.setValue(colour);
};
goog.inherits(Blockly.FieldLabplusMatrix, Blockly.Field);

/**
 * Mouse cursor style when over the hotspot that initiates editability.
 */
Blockly.FieldLabplusMatrix.prototype.CURSOR = 'default';

/**
 * The default colour of the field.
 */
Blockly.FieldLabplusMatrix.prototype.colourI_ = "#E8E8E8";
Blockly.FieldLabplusMatrix.prototype.colour_ = "#E8E8E8";
Blockly.FieldLabplusMatrix.prototype.setColourI_ = function(colour) {
	this.colourI_ = colour;
}

/**
 * Define the color when the block is selected.
 */

Blockly.FieldLabplusMatrix.prototype.colourS_ = '#00BFFF';
Blockly.FieldLabplusMatrix.prototype.setColourS_ = function(colour) {
	this.colourS_ = colour;
}
/**
 * Install this field on a block.
 * @param {!Blockly.Block} block The block containing this field.
 */
Blockly.FieldLabplusMatrix.prototype.init = function(block) {
  Blockly.FieldLabplusMatrix.superClass_.init.call(this, block);
  this.borderRect_.style['fillOpacity'] = 1;
  this.setValue(this.getValue());
 /*  if (this.sourceBlock_) {
    // Checkbox has already been initialized once.
    return;
  }
  Blockly.FieldLabplusMatrix.superClass_.init.call(this, block);
  // The checkbox doesn't use the inherited text element.
  // Instead it uses a custom checkmark element that is either visible or not.
  this.checkElement_ = Blockly.createSvgElement('text',
      {'class': 'blocklyText', 'x': -3, 'y': 14}, this.fieldGroup_);
  var textNode = document.createTextNode('\u2713');
  this.checkElement_.appendChild(textNode);
  this.checkElement_.style.display = this.state_ ? 'block' : 'none'; */
};

/**
 * Return 'TRUE' if the checkbox is checked, 'FALSE' otherwise.
 * @return {string} Current state.
 */
/* Blockly.FieldLabplusMatrix.prototype.getValue = function() {
  return String(this.state_).toUpperCase();
}; */

/**
 * Set the checkbox to be checked if strBool is 'TRUE', unchecks otherwise.
 * @param {string} strBool New state.
 */
/* Blockly.FieldLabplusMatrix.prototype.setValue = function(strBool) {
  var newState = (strBool == 'TRUE');
  if (this.state_ !== newState) {
    this.state_ = newState;
    if (this.checkElement_) {
      this.checkElement_.style.display = newState ? 'block' : 'none';
    }
  }
}; */

/**
 * Toggle the state of the checkbox.
 * @private
 */
Blockly.FieldLabplusMatrix.prototype.showEditor_ = function() {
  var newState = !this.state_;
  if (this.sourceBlock_ && this.validator_) {
    // Call any validation function, and allow it to override.
    var override = this.validator_(newState);
    if (override !== undefined) {
      newState = override;
    }
  }
  if (newState !== null) {
    this.sourceBlock_.setShadow(false);
	if(this.colour_ == this.colourS_){
		this.setValue(this.colourI_)
	}else {
		this.setValue(this.colourS_)
	}
  }
};

/* Blockly.FieldLabplusMatrix.prototype.getText = function() {
	if(this.colour_ == this.colourI_){
		return '0';
	}else {
		return '1';
	}
}
 */

Blockly.FieldLabplusMatrix.prototype.getValue = function() {
  return this.colour_;
};


/**
 * Set the colour.
 * @param {string} colour The new colour in '#rrggbb' format.
 */
Blockly.FieldLabplusMatrix.prototype.setValue = function(colour) {
  if (this.sourceBlock_ && Blockly.Events.isEnabled() &&
      this.colour_ != colour) {
    Blockly.Events.fire(new Blockly.Events.Change(
        this.sourceBlock_, 'field', this.name, this.colour_, colour));
  }
  this.colour_ = colour;
  if (this.borderRect_) {
    this.borderRect_.style.fill = colour;
  }
};

goog.provide('Blockly.Blocks.joint');
goog.require('Blockly.Blocks');

Blockly.Blocks.joint.HUE = 200;

Blockly.Blocks.joint_digital_pin = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
	.appendField(new Blockly.FieldDropdown(profile.joint.digital), 'PIN');
	this.setOutput(true, Number);
  }
};

//按键传感器
Blockly.Blocks['joint_getButtonVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_BUTTON_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// 倾斜传感器
Blockly.Blocks['joint_getTiltSwitchVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_TLITSWITCH_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// 红外接近触发器
Blockly.Blocks['joint_getInfraredVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_INFRARED_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// SildeSwitch
Blockly.Blocks['joint_getSildeSwitchVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SILDESWITCH_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// MotionTrigger
Blockly.Blocks['joint_getMotionTriggerVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_MOTIONTRIGGER_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// SoundTrigger
Blockly.Blocks['joint_getSoundTriggerVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SOUNDTRIGGER_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// TouchButton
Blockly.Blocks['joint_getTouchButtonVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_TOUCHBUTTON_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// MagneticSwitch
Blockly.Blocks['joint_getMagneticSwitchVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_MAGNETICSWITCH_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// FlameSensor
Blockly.Blocks['joint_getFlameSensorVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_FIRETRIGGER_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// 光线传感器（水分、滑杆、旋钮、温度同）
Blockly.Blocks['joint_getLightVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_LIGHTSENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.analog_read), "PIN");
    this.setOutput(true, Number);
  }
};

// 直滑电位器
Blockly.Blocks['joint_getSlideVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SLIDINGPOTENTIOMETER_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.analog_read), "PIN");
    this.setOutput(true, Number);
  }
};

// 旋转电位器
Blockly.Blocks['joint_getRotateVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_ROTATINGPOTENTIOMETER_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.analog_read), "PIN");
    this.setOutput(true, Number);
  }
};

// 温度传感器
Blockly.Blocks['joint_getTemperatureVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_TEMPSENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.analog_read), "PIN");
    this.setOutput(true, Number);
  }
};

// 水分传感器
Blockly.Blocks['joint_getWaterVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_WATERSENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.analog_read), "PIN");
    this.setOutput(true, Number);
  }
};

// 蜂鸣器
Blockly.Blocks['joint_setBuzzer'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_BUZZER)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// LED灯
Blockly.Blocks['joint_setLed'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_LED)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// StripLED
Blockly.Blocks['joint_setStripLed'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_LEDSTRIPLED)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// VibrationMotor
Blockly.Blocks['joint_setVibrationMotor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_VIBRATIONMOTOR)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 直流电机
Blockly.Blocks['joint_setMotorDC'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_DCMOTOR)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_out), "PIN")
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

// RGB灯
Blockly.Blocks['joint_setRGBLED'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RGBLED)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_out), "PIN");
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

Blockly.Blocks['joint_analogRead'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.INOUT_ANALOG_READ)
		.appendField(new Blockly.FieldDropdown(profile.joint.analog_read), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.Msg.INOUT_ANALOG_READ_TOOLTIP);
  }
};

Blockly.Blocks['joint_analogWrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.INOUT_ANALOG_WRITE)
		.appendField(new Blockly.FieldDropdown(profile.joint.analog_write), "PIN");
    this.appendValueInput("NUM", Number)
        .appendField(Blockly.Msg.INOUT_ANALOG_WRITE_VALUE)
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['joint_digitalRead'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.INOUT_DIGITAL_READ)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, Number);
    this.setTooltip(Blockly.Msg.INOUT_DIGITAL_READ_TOOLTIP);
  }
};

Blockly.Blocks['joint_digitalWrite'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.INOUT_DIGITAL_WRITE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN")
		.appendField(Blockly.Msg.INOUT_DIGITAL_WRITE_STAT)
      	.appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// LimitSwitch
Blockly.Blocks['joint_getLimitSwitchVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_LIMITSWITCH_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN");
    this.setOutput(true, [Boolean,Number]);
  }
};

// 灵敏光线传感器
Blockly.Blocks['joint_getLowLightVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_LOWLIGHTSENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.analog_read), "PIN");
    this.setOutput(true, Number);
  }
};

// 阻性传感器
Blockly.Blocks['joint_getResistanceVal'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_RESISTANCESENSOR_VALUE)
		.appendField(new Blockly.FieldDropdown(profile.joint.analog_read), "PIN");
    this.setOutput(true, Number);
  }
};

// 电磁铁
Blockly.Blocks['joint_setElectromagnet'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_ELECTROMAGNET)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 继电器
Blockly.Blocks['joint_setRelay'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RELAY)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 风扇
Blockly.Blocks['joint_setFan'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_FAN)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 马达
Blockly.Blocks['joint_setMotor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_MOTOR)
		.appendField(new Blockly.FieldDropdown(profile.joint.digital), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TURN_ON, "HIGH"], [Blockly.Msg.TURN_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 激活录放模块定时
Blockly.Blocks['joint_setRec'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RECON)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), "PIN")
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

// 激活录放
Blockly.Blocks['joint_setRecOn'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RECON)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), "PIN")
		.appendField(' ')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.PLAY_RECORD, "PLAY"], [Blockly.Msg.START_RECORD, "RECORD"]]), "DIR");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

// 关闭录放
Blockly.Blocks['joint_setRecOff'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_RECOFF)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['joint_getHumTemp'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_HUMTEMPSENSOR_VALUE + "-")
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.HUMILITY, "HUM"],[Blockly.Msg.TEMPERATURE, "TEMP"]]), "DIR");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['joint_getUltrasonic'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_ULTRASONICSENSOR_VALUE);
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['joint_getUltrasonic0'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_ULTRASONICSENSOR_VALUE0)
        .appendField(new Blockly.FieldDropdown(profile.joint.group_all), "PIN");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks['joint_setDigit'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendValueInput("NUM", Number)
		.appendField(Blockly.Msg.JOINT_SET_DIGITON);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['joint_setDigitOff'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_DIGITOFF);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['joint_setMatrix'] = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_MATRIXON);
    this.appendDummyInput()
        .appendField(Blockly.Msg.MATRIX_NAME + ":")
		.appendField(new Blockly.FieldTextInput("Matrix00"), "dotName");
	this.appendValueInput("row0", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow0);
    this.appendValueInput("row1", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow1)
    this.appendValueInput("row2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow2);
    this.appendValueInput("row3", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow3)
    this.appendValueInput("row4", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow4);
    this.appendValueInput("row5", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow5)
    this.appendValueInput("row6", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow6);
    this.appendValueInput("row7", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MatrixRow7)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.DotMatrixRow = {
  init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot0");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot1");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot2");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot3");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot4");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot5");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot6");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot7");
	this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot8");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot9");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot10");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot11");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot12");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot13");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot14");
    this.appendDummyInput("")
    	.appendField("")
        .appendField(new Blockly.FieldLabplusMatrix("#E8E8E8"), "Dot15");
    this.setInputsInline(true);
    this.setOutput(true, String);
    }
}; 

var melodic = [[Blockly.Msg.JOINT_MIDI_PIANO, '1'], [Blockly.Msg.JOINT_Vibraphone, '12'], [Blockly.Msg.JOINT_MIDI_ORGAN, '17'], [Blockly.Msg.JOINT_Acoustic_Guitar, '25'], [Blockly.Msg.JOINT_Electric_Guitar, '31'], [Blockly.Msg.JOINT_Acoustic_Bass, '33'], [Blockly.Msg.JOINT_Violin, '41'], [Blockly.Msg.JOINT_String_Ensemble, '49'], [Blockly.Msg.JOINT_Trumpet, '57'], [Blockly.Msg.JOINT_Sax, '65'], [Blockly.Msg.JOINT_Flute, '74'], [Blockly.Msg.JOINT_Steel_Drums, '115'], [Blockly.Msg.JOINT_Lead, '81'], [Blockly.Msg.JOINT_Pad, '89']];


var percussion = [[Blockly.Msg.JOINT_Bass_Drum, '36'], [Blockly.Msg.JOINT_Snare_Drum, '38'], [Blockly.Msg.JOINT_Closed_Hi_hat, '42'], [Blockly.Msg.JOINT_Open_Hi_hat, '46'], [Blockly.Msg.JOINT_Low_Tom, '43'], [Blockly.Msg.JOINT_High_Tom, '48'], [Blockly.Msg.JOINT_Tambourine, '54'], [Blockly.Msg.JOINT_Crash_Cymbal, '57'], [Blockly.Msg.JOINT_Ride_Cymbal, '59'], [Blockly.Msg.JOINT_Mute_High_Conga, '62'], [Blockly.Msg.JOINT_Low_Conga, '64'], [Blockly.Msg.JOINT_Maracas, '70'], [Blockly.Msg.JOINT_Claves, '75']];

Blockly.Blocks.joint_melodic = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINT_MIDI_PIANO, '1'], [Blockly.Msg.JOINT_Vibraphone, '12'], [Blockly.Msg.JOINT_MIDI_ORGAN, '17'], [Blockly.Msg.JOINT_Acoustic_Guitar, '25'], [Blockly.Msg.JOINT_Electric_Guitar, '31'], [Blockly.Msg.JOINT_Acoustic_Bass, '33'], [Blockly.Msg.JOINT_Violin, '41'], [Blockly.Msg.JOINT_String_Ensemble, '49'], [Blockly.Msg.JOINT_Trumpet, '57'], [Blockly.Msg.JOINT_Sax, '65'], [Blockly.Msg.JOINT_Flute, '74'], [Blockly.Msg.JOINT_Steel_Drums, '115'], [Blockly.Msg.JOINT_Lead, '81'], [Blockly.Msg.JOINT_Pad, '89']]), 'DIR');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_percussion = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('')
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINT_Bass_Drum, '36'], [Blockly.Msg.JOINT_Snare_Drum, '38'], [Blockly.Msg.JOINT_Closed_Hi_hat, '42'], [Blockly.Msg.JOINT_Open_Hi_hat, '46'], [Blockly.Msg.JOINT_Low_Tom, '43'], [Blockly.Msg.JOINT_High_Tom, '48'], [Blockly.Msg.JOINT_Tambourine, '54'], [Blockly.Msg.JOINT_Crash_Cymbal, '57'], [Blockly.Msg.JOINT_Ride_Cymbal, '59'], [Blockly.Msg.JOINT_Mute_High_Conga, '62'], [Blockly.Msg.JOINT_Low_Conga, '64'], [Blockly.Msg.JOINT_Maracas, '70'], [Blockly.Msg.JOINT_Claves, '75']]), 'DIR');
		this.setOutput(true, Number);
	}
};

	
Blockly.Blocks.joint_setMidi1 = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('CHS', Number)
		.appendField(Blockly.Msg.JOINT_SET)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN')
		.appendField(Blockly.Msg.JOINT_SET_MIDI1);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};
	
Blockly.Blocks.joint_setMidi2 = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('CHS', Number)
		.appendField(Blockly.Msg.JOINT_SET)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN')
		.appendField(Blockly.Msg.JOINT_SET_MIDI2);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};


Blockly.Blocks.joint_playNote = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('NOTE', Number)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN')
		.appendField(Blockly.Msg.JOINT_PLAYNOTE);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.joint_playNote1 = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('NOTE', Number)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN')
		.appendField(Blockly.Msg.JOINT_PLAYNOTE);
		this.appendValueInput('VOL', Number)
		.appendField(Blockly.Msg.JOINT_VOLUME);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setInputsInline(true);
	}
};

Blockly.Blocks.joint_stopPlay = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_STOPPLAYMIDI)
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};
	
Blockly.Blocks.joint_getColor = {
	init: function(){
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_GET_COLOR_SENSOR);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.joint_hsvColor = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_RETURN_HSV)
		.appendField(new Blockly.FieldDropdown([['H','h'], ['S', 's'], ['V', 'v']]), 'CHS');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_rgbColor = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_RETURN_RGB)
		.appendField(new Blockly.FieldDropdown([['R','r'], ['G', 'g'], ['B', 'b']]), 'CHS');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_setLcdNum = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('num0', Number)
		.appendField(Blockly.Msg.JOINT_SETLCDNUM);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.joint_setLcdTime = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('hour', Number)
		.appendField(Blockly.Msg.JOINT_SETLCDTIME);
		this.appendValueInput('min', Number)
		.appendField(':');
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.joint_closeLcd = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_COLSELCD);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true, null);
	}
};		

Blockly.Blocks.joint_musiclist = {
	init:function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['all', 'all'], ['1', '1'], ['2', '2'], ['3', '3']]), 'DIR');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_mp3dirlist = {
	init:function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([['root', 'root'], ['1', '1'], ['2', '2'], ['3', '3']]), 'DIR');
		this.setOutput(true, Number);
	}
};
	
Blockly.Blocks.joint_playMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN')
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

	
Blockly.Blocks.joint_loopMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN')
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

Blockly.Blocks.joint_setMp3 = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN')
		.appendField(Blockly.Msg.JOINT_MP3SET)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINT_PAUSE, '2'], [Blockly.Msg.JOINT_STOP, '0'], [Blockly.Msg.JOINT_PLAY, '1'], [Blockly.Msg.JOINT_NEXT, '3'], [Blockly.Msg.JOINT_PREVIOUS, '4']]), 'STAT');
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.joint_setMp3Volume = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('VOL')
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN')
		.appendField(Blockly.Msg.JOINT_MP3SETVOLUME);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.joint_getMp3Stat = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown(profile.joint.group_all), 'PIN')
		.appendField(Blockly.Msg.JOINT_MP3STAT)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINT_PLAY, '1'], [Blockly.Msg.JOINT_PAUSE, '2'], [Blockly.Msg.JOINT_STOP, '0']]), 'STAT');
		this.setOutput(true, Boolean);
		// this.setTooltip(Blockly.Msg.JOINT_MP3STATTIP);
	}
};
		
Blockly.Blocks.joint_defineLightBar= {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('PIN')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_DEFPIN);
		this.appendValueInput('AMOUNT')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_AMOUNT);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};		
		
Blockly.Blocks.joint_setLightBar = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('PIN')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_SETPIN);
		this.appendValueInput('NUMBER')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_NUMBER);
		this.appendValueInput('RED')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_RED);
		this.appendValueInput('GREEN')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_GREEN);
		this.appendValueInput('BLUE')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_BLUE);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};	

Blockly.Blocks.joint_setLightBarPalette = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('PIN')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_SETPIN);
		this.appendValueInput('NUMBER')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_NUMBER);
		this.appendValueInput('COLOR')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_PALETTE);
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};	  

Blockly.Blocks.joint_sendLightBar = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendValueInput('PIN')
		.appendField(Blockly.Msg.JOINT_RGBSTRIP_SEND);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};			
		
	
Blockly.Blocks.colorbar = {
   init: function() {
    this.setColour(Blockly.Blocks.joint.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldColour('#FF0000'), 'COLOR');
    this.setOutput(true, String);
  }
};
			
Blockly.Blocks.joint_setMatrixCoorXY = {
  init: function() {
	this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_MATRIXON)
		.appendField(new Blockly.FieldTextInput('Matrix00'),'dotName');
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_COORDINATE);
	this.appendValueInput('CoorX')
		.appendField('X');
	this.appendValueInput('CoorY')
		.appendField('Y');
	this.appendValueInput('stat')
		.appendField(Blockly.Msg.JOINT_STATUS);
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.joint_setMatrixCursor = {
  init: function() {
	this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SET_MATRIXON)
		.appendField(new Blockly.FieldTextInput("Matrix00"),"dotName")
		.appendField(Blockly.Msg.JOINT_SET_COOROFCHAR);
	this.appendValueInput('CoorX')
		.appendField('X');
	this.appendValueInput('CoorY')
		.appendField('Y');
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.joint_setMatrixChar = {
  init: function() {
	this.setColour(Blockly.Blocks.joint.HUE);
	this.appendValueInput('Char')
		.appendField(Blockly.Msg.JOINT_SET_MATRIXON)
		.appendField(new Blockly.FieldTextInput("Matrix00"),"dotName")
		.appendField(Blockly.Msg.JOINT_DISPLAY_CHAR);
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};	

Blockly.Blocks.joint_clearMatrix = {
  init: function() {
	this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_CLEAR_MATRIX)
		.appendField(new Blockly.FieldTextInput("Matrix00"),"dotName");
	//this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.joint_writeToMatrix = {
  init: function() {
	this.setColour(Blockly.Blocks.joint.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_SEND_MATRIX)
		.appendField(new Blockly.FieldTextInput("Matrix00"),"dotName");
	//this.setInputsInline(true);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};	

var date = new Date();
var year = date.getFullYear() % 100;
var month = date.getMonth() + 1;
var day = date.getDate();
var week_day = date.getDay();
var hour = date.getHours() + "";
var minute = date.getMinutes() + "";
var second = date.getSeconds() + "";


Blockly.Blocks.joint_curYear = {
	init: function () {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('year')
		.appendField(new Blockly.FieldTextInput(year), 'year');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_curMonth = {
	init: function () {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('month')
		.appendField(new Blockly.FieldTextInput(month), 'month');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_curDay = {
	init: function () {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('day')
		.appendField(new Blockly.FieldTextInput(day), 'day');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_weekDay = {
	init: function () {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('week_day')
		.appendField(new Blockly.FieldTextInput(week_day), 'week_day');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_curHour = {
	init: function () {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('hour')
		.appendField(new Blockly.FieldTextInput(hour), 'hour');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_curMinute = {
	init: function () {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('minute')
		.appendField(new Blockly.FieldTextInput(minute), 'minute');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_curSecond = {
	init: function () {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('second')
		.appendField(new Blockly.FieldTextInput(second), 'second');
		this.setOutput(true, Number);
	}
};

Blockly.Blocks.joint_settime = {
	init: function () {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput('')
		.appendField(Blockly.Msg.JOINT_SETTIME);
		this.appendValueInput('hour', 'Number')
		.appendField(Blockly.Msg.JOINT_HOUR);
		this.appendValueInput('minute', 'Number')
		.appendField(Blockly.Msg.JOINT_MINUTE);
		this.appendValueInput('second', 'Number')
		.appendField(Blockly.Msg.JOINT_SECOND);
		this.appendValueInput('week_day', 'Number')
		.appendField(Blockly.Msg.JOINT_WEEK_DAY);
		this.appendValueInput('day', 'Number')
		.appendField(Blockly.Msg.JOINT_DAY);
		this.appendValueInput('month', 'Number')
		.appendField(Blockly.Msg.JOINT_MONTH);
		this.appendValueInput('year', 'Number')
		.appendField(Blockly.Msg.JOINT_YEAR);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
	}
};

Blockly.Blocks.joint_gettime = {
	init: function() {
		this.setColour(Blockly.Blocks.joint.HUE);
		this.appendDummyInput()
		.appendField(Blockly.Msg.JOINT_GETTIME)
		.appendField(new Blockly.FieldDropdown([[Blockly.Msg.JOINT_HOUR, 'joint_hour'], [Blockly.Msg.JOINT_MINUTE, 'joint_minute'], [Blockly.Msg.JOINT_SECOND, 'joint_second'], [Blockly.Msg.JOINT_WEEK_DAY, 'joint_week_day'], [Blockly.Msg.JOINT_DAY, 'joint_day'], [Blockly.Msg.JOINT_MONTH, 'joint_month'], [Blockly.Msg.JOINT_YEAR, 'joint_year']]), 'DIR');
		this.setOutput(true, Number);
	}
};
