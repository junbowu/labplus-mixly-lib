//**********************************************
//Build for Labplus Ledong Set kit
//2016.9.18
//**********************************************

#include <Arduino.h>
#include "LDTempHum.h"
#include <stdlib.h>
#include "math.h"

#define NTC_B		3935
#define NTC_R25		10000
#define NTC_K0		273.15
#define NTC_K25		298.15
#define NTC_KB		NTC_B*NTC_K25

unsigned long time_out2;
int flag = 0;
int *result = new int[2] ;

int *getTempAndHum(){
	
	int temp = 0;
	int hm = 0;
	int cnt = 0;
	//int flag = 0;
	//int *result = new int[2] ;
	
  if(millis()-time_out2>=500){
	  Wire.requestFrom(1, 4);      // request 4 bytes from slave device #1
  while (Wire.available())     // slave may send less than requested
  {
    cnt++;
    if(cnt > 4) cnt = 0;
    switch(cnt)
    {
      case 1:
        hm = Wire.read();  //读取湿度高字节
        hm <<= 8;
        break;
      case 2:
        hm |= Wire.read();  //读取湿度低字节
        hm /= 10;
        //Serial.print("HM = ");         // print the character
        //Serial.print(hm);         // print the character
        break;
      case 3:
        temp = Wire.read();  //读取温度高字节
        temp <<= 8;
        break;
      case 4:
        temp |= Wire.read();  //读取温度低字节
        temp /= 10;
            
        flag = 1; //信息读取标志
        //Serial.print("  ");         // print the character
        //Serial.print("TEMP = ");    // print the character
        //Serial.println(temp);       // print the character
        break;
      default:
        break;
    }
  }
  if(flag = 1) {
  result[0] = temp;
  result[1] = hm;
  } 
  delay(1);
  time_out2 = millis(); 
  flag = 0;
  }
  return result;
}


int cmp ( const void *a , const void *b){
        return *(int *)a - *(int *)b;
}

float readLedongTemp(int arduinoPin)
{
    unsigned char i;
    float Rt;
	unsigned int val;
	float temperature;
	int sampleVal[5];
	
	for(i =0; i < 5; i++)
	{ //作5次采样，取中间值
       sampleVal[i] = 1024-analogRead(arduinoPin);
	}
	//BubbleShort(sampleVal, 5);
	qsort(sampleVal, 5, sizeof(sampleVal[0]), cmp);
	val = sampleVal[2];
	Rt = ((float)val/(1024-(float)val))*10000;
	// Rt = (((float)(1024-val))/val)*10000; 
    // Rt = (((1024*4.43)-5*val)/(5*val))*10000;
	// Rt = 10000; //测试，此值下温度为25度
	temperature =(NTC_K0 + 25)*NTC_B/((NTC_K0 + 25)*log(Rt/NTC_R25) + 3935) - NTC_K0;
	return temperature; 
} 