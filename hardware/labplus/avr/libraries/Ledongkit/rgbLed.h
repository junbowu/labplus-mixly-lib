#include <arduino.h>

#ifndef rgbLed_h
#define rgbLed_h



class RGBLed  {
	
	public:
	
	
	void Send32Zero(int CLK, int DAT)
	{
		digitalWrite(DAT, LOW); 
		for (int i=0; i<32; i++)
		{
			digitalWrite(CLK, LOW); 
			delayMicroseconds(200);
			digitalWrite(CLK, HIGH); 
			delayMicroseconds(200);
		}
	}
	
	void sendByte(int CLK, int DAT, unsigned char b)
	{ 
		for(unsigned char num = 0; num < 8; num++) 
		{
			digitalWrite(CLK, LOW); 
			delayMicroseconds(200);
    
			if ((b & 0x80) != 0) 
			digitalWrite(DAT, HIGH); 
			else 
			digitalWrite(DAT, LOW);  

			digitalWrite(CLK, HIGH); 	
			delayMicroseconds(200);

			b <<= 1;
		}
	}
	
	void sendColor(int CLK, int DAT, unsigned char r, unsigned char g, unsigned char b)
	{ 
		Send32Zero(CLK, DAT);
		setColor(CLK, DAT, r, g, b);
		setColor(CLK, DAT, r, g, b);
		
	}
	
	void setColor(int CLK, int DAT, unsigned char r, unsigned char g, unsigned char b)
	{
		unsigned char prefix = 0b11000000; 
		if ((b & 0x80) == 0)  prefix |= 0b00100000; 
		if ((b & 0x40) == 0)  prefix |= 0b00010000; 
		if ((g & 0x80) == 0)  prefix |= 0b00001000; 
		if ((g & 0x40) == 0)  prefix |= 0b00000100; 
		if ((r & 0x80) == 0)  prefix |= 0b00000010; 
		if ((r & 0x40) == 0)  prefix |= 0b00000001; 
   
		sendByte(CLK, DAT, prefix); 
		sendByte(CLK, DAT, b);
		sendByte(CLK, DAT, g);
		sendByte(CLK, DAT, r); 
	}
	
};

#endif