//**********************************************
//Build for Labplus Ledong Set kit
//2016.9.18
//**********************************************
#ifndef LedongTemp_H
#define LedongTemp_H

#include <Arduino.h>
#include <Wire.h>


int *getTempAndHum();
float readLedongTemp(int arduinoPin);


#endif
