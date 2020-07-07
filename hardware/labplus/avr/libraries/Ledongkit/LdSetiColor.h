/*************************************
Build for color sensor, LEDONG module set.
Trimmed by Shanbin Zhou, 2017/01/05
*************************************/

#ifndef _LdSetiColor_h
#define _LdSetiColor_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif

#include <Wire.h>

//the I2C address for the color sensor 
#define COLOR_SENSOR_ADDR  0x39 
#define REG_CTL 0x80
#define REG_TIMING 0x81
#define REG_INT 0x82
#define REG_INT_SOURCE 0x83
#define REG_ID 0x84
#define REG_GAIN 0x87
#define REG_LOW_THRESH_LOW_BYTE 0x88
#define REG_LOW_THRESH_HIGH_BYTE 0x89
#define REG_HIGH_THRESH_LOW_BYTE 0x8A
#define REG_HIGH_THRESH_HIGH_BYTE 0x8B
//The REG_BLOCK_READ and REG_GREEN_LOW direction are the same
#define REG_BLOCK_READ 0xD0 
#define REG_GREEN_LOW 0xD0
#define REG_GREEN_HIGH 0xD1
#define REG_RED_LOW 0xD2
#define REG_RED_HIGH 0xD3
#define REG_BLUE_LOW 0xD4
#define REG_BLUE_HIGH 0xD5
#define REG_CLEAR_LOW 0xD6
#define REG_CLEAR_HIGH 0xD7
#define CTL_DAT_INIITIATE 0x03
#define CLR_INT 0xE0

#define GAIN_X_1  1
#define GAIN_X_4  2
#define GAIN_X_16 3
#define GAIN_X_64 4

#define COLOR_LIGHT_PIN 26
#define I2C_COLOR_SENSOR_ADDR 0x39

#define min_f(a, b, c)  (fminf(a, fminf(b, c)))
#define max_f(a, b, c)  (fmaxf(a, fmaxf(b, c)))

typedef struct
{
  int r;
  int g;
  int b;
}COLOR_RGB;

typedef struct
{
  unsigned int h;
  float s;
  float v;
}COLOR_HSV;


// extern uint16_t red, green, blue, clear_;
// extern uint16_t h;
// extern uint8_t  s, v;

// extern double Kr;
// extern double Kg;
// extern double Kb;

	
extern COLOR_RGB color_rgb;
extern COLOR_HSV color_hsv;


void readRGB_(uint16_t *, uint16_t *, uint16_t *, uint16_t *);
void RGB2HSV_(uint16_t, uint16_t, uint16_t, uint16_t, unsigned int&, unsigned char&, unsigned char&);
void HSV2RGB_(uint16_t, float, float, COLOR_RGB *);
void ColorSensor_PowerUp();
void ColorSensor_SetGain(byte);
void getColor_();


#endif