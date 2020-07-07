/*************************************************** 
  This is a library for our I2C LED Backpacks

 ****************************************************/
#ifndef Labplus_LEDBackpack_h
#define Labplus_LEDBackpack_h

#if (ARDUINO >= 100)
 #include "Arduino.h"
#else
 #include "WProgram.h"
#endif

#ifdef __AVR_ATtiny85__
 #include <TinyWireM.h>
#else
 #include <Wire.h>
#endif
#include "Labplus_GFX.h"

#define LED_ON 1
#define LED_OFF 0

#define LED_RED 1
#define LED_YELLOW 2
#define LED_GREEN 3
 


#define HT16K33_BLINK_CMD 0x80
#define HT16K33_BLINK_DISPLAYON 0x01
#define HT16K33_BLINK_OFF 0
#define HT16K33_BLINK_2HZ  1
#define HT16K33_BLINK_1HZ  2
#define HT16K33_BLINK_HALFHZ  3

#define HT16K33_CMD_BRIGHTNESS 0xE0

#define SEVENSEG_DIGITS 5


// this is the raw HT16K33 controller
class Labplus_LEDBackpack {
 public:
  Labplus_LEDBackpack(void);
  void begin(uint8_t _addr);
  void setBrightness(uint8_t b);
  void blinkRate(uint8_t b);
  void writeDisplay(void);
  void clear(void);

  uint16_t displaybuffer[8]; 

  void init(uint8_t a);
 protected:
  uint8_t i2c_addr;
};

class Labplus_AlphaNum4 : public Labplus_LEDBackpack {
 public:
  Labplus_AlphaNum4(void);

  void writeDigitRaw(uint8_t n, uint16_t bitmask);
  void writeDigitAscii(uint8_t n, uint8_t ascii, boolean dot = false);

 private:


};

class Labplus_24bargraph : public Labplus_LEDBackpack {
 public:
  Labplus_24bargraph(void);

  void setBar(uint8_t bar, uint8_t color);

 private:
};


class Labplus_8x16matrix : public Labplus_LEDBackpack, public Labplus_GFX {
 public:
  Labplus_8x16matrix(void);

  void drawPixel(int16_t x, int16_t y, uint16_t color);

 private:
};

class Labplus_8x8matrix : public Labplus_LEDBackpack, public Labplus_GFX {
 public:
  Labplus_8x8matrix(void);

  void drawPixel(int16_t x, int16_t y, uint16_t color);

 private:
};

class Labplus_BicolorMatrix : public Labplus_LEDBackpack, public Labplus_GFX {
 public:
  Labplus_BicolorMatrix(void);

  void drawPixel(int16_t x, int16_t y, uint16_t color);

 private:
};


#define DEC 10
#define HEX 16
#define OCT 8
#define BIN 2
#define BYTE 0

class Labplus_7segment : public Labplus_LEDBackpack {
 public:
  Labplus_7segment(void);
  size_t write(uint8_t c);

  void print(char, int = BYTE);
  void print(unsigned char, int = BYTE);
  void print(int, int = DEC);
  void print(unsigned int, int = DEC);
  void print(long, int = DEC);
  void print(unsigned long, int = DEC);
  void print(double, int = 2);
  void println(char, int = BYTE);
  void println(unsigned char, int = BYTE);
  void println(int, int = DEC);
  void println(unsigned int, int = DEC);
  void println(long, int = DEC);
  void println(unsigned long, int = DEC);
  void println(double, int = 2);
  void println(void);
  
  void writeDigitRaw(uint8_t x, uint8_t bitmask);
  void writeDigitNum(uint8_t x, uint8_t num, boolean dot = false);
  void drawColon(boolean state);
  void printNumber(long, uint8_t = 2);
  void printFloat(double, uint8_t = 2, uint8_t = DEC);
  void printError(void);

  void writeColon(void);
    
 private:
  uint8_t position;
};
#endif // Labplus_LEDBackpack_h

