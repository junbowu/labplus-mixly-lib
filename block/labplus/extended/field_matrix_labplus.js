/**
 * @fileoverview Checkbox field.  Checked or not checked.
 * @author 398874273@qq.com
 */
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
