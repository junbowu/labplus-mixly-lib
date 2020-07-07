'use strict';

goog.provide('Blockly.Arduino.jointlite');

goog.require('Blockly.Arduino');

Blockly.Arduino.jointlite_digitalRead = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_digitalWrite = Blockly.Arduino.joint_digitalWrite;
Blockly.Arduino.jointlite_analogRead = Blockly.Arduino.joint_analogRead;
Blockly.Arduino.jointlite_analogWrite = Blockly.Arduino.joint_analogWrite;

Blockly.Arduino.jointlite_getButtonVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getSoundVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getTiltSwitchVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getInfraredVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getSildeSwitchVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getMotionTriggerVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getSoundTriggerVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getTouchButtonVal = Blockly.Arduino.joint_digitalRead;
//Blockly.Arduino.jointlite_getIrDistanceTriggerVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getMagneticSwitchVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getFlameSensorVal = Blockly.Arduino.joint_digitalRead;
Blockly.Arduino.jointlite_getLimitSwitchVal = Blockly.Arduino.joint_digitalRead;

Blockly.Arduino.jointlite_getLightVal = Blockly.Arduino.joint_analogRead;
Blockly.Arduino.jointlite_getSlideVal = Blockly.Arduino.joint_analogRead;
Blockly.Arduino.jointlite_getRotateVal = Blockly.Arduino.joint_analogRead;
//Blockly.Arduino.jointlite_getTemperatureVal = Blockly.Arduino.joint_analogRead;
Blockly.Arduino.jointlite_getWaterVal = Blockly.Arduino.joint_analogRead;
Blockly.Arduino.jointlite_getResistanceVal = Blockly.Arduino.joint_analogRead;
Blockly.Arduino.jointlite_getLowLightVal = Blockly.Arduino.joint_analogRead;

Blockly.Arduino.jointlite_getTemperatureVal = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.definitions_['joint_include_wire'] = '#include <Wire.h>\n';
  Blockly.Arduino.definitions_['joint_include_temperature'] = '#include "LDTempHum.h"\n';
  var code = 'readLedongTemp(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.jointlite_setBuzzer = Blockly.Arduino.joint_digitalWrite;
Blockly.Arduino.jointlite_setLed = Blockly.Arduino.joint_digitalWrite;
Blockly.Arduino.jointlite_setStripLed = Blockly.Arduino.joint_digitalWrite;
Blockly.Arduino.jointlite_setVibrationMotor = Blockly.Arduino.joint_digitalWrite;
Blockly.Arduino.jointlite_setElectromagnet = Blockly.Arduino.joint_digitalWrite;
Blockly.Arduino.jointlite_setRelay = Blockly.Arduino.joint_digitalWrite;
Blockly.Arduino.jointlite_setFan = Blockly.Arduino.joint_digitalWrite;
Blockly.Arduino.jointlite_setMotor = Blockly.Arduino.joint_digitalWrite;


Blockly.Arduino.jointlite_setMotorDC = Blockly.Arduino.joint_setMotorDC;
Blockly.Arduino.jointlite_setRGBLED = Blockly.Arduino.joint_setRGBLED;
Blockly.Arduino.jointlite_setRec = Blockly.Arduino.joint_setRec;
Blockly.Arduino.jointlite_setRecOn = Blockly.Arduino.joint_setRecOn;
Blockly.Arduino.jointlite_setRecOff = Blockly.Arduino.joint_setRecOff;

Blockly.Arduino.jointlite_setMidi1 = Blockly.Arduino.joint_setMidi1;
Blockly.Arduino.jointlite_setMidi2 = Blockly.Arduino.joint_setMidi2;
Blockly.Arduino.jointlite_playNote = Blockly.Arduino.joint_playNote;
Blockly.Arduino.jointlite_playNote1 = Blockly.Arduino.joint_playNote1;
Blockly.Arduino.jointlite_stopPlay = Blockly.Arduino.joint_stopPlay;

Blockly.Arduino.jointlite_playMp3 = Blockly.Arduino.joint_playMp3;
Blockly.Arduino.jointlite_loopMp3 = Blockly.Arduino.joint_loopMp3;
Blockly.Arduino.jointlite_setMp3 = Blockly.Arduino.joint_setMp3;
Blockly.Arduino.jointlite_setMp3Volume = Blockly.Arduino.joint_setMp3Volume;
Blockly.Arduino.jointlite_getMp3Stat = Blockly.Arduino.joint_getMp3Stat;
Blockly.Arduino.jointlite_getUltrasonic = Blockly.Arduino.joint_getUltrasonic0;
