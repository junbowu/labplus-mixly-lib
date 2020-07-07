// 
// 
// 

#include "BU9792.h"

unsigned char TubeTab[17] = {
	0xEB, 0x0A, 0xAD, 0x8F, 0x4E, 0xC7, 0xE7, 0x8A,
	0xEF, 0xCF,	0xEE, 0x67, 0x25, 0x2F, 0xED, 0xE4,
	0x04   //负号
};

void BU9792Class::begin()
{
	Wire.begin();
	delayMicroseconds(100);
	sendCMD(CMD_ICSET);
	sendCMD(CMD_MODE_SET);
	sendCMD(CMD_DISCTL);
}
void BU9792Class::sendCMD(uint8_t cmd)
{
	Wire.beginTransmission(DEVICE_ADDR); // transmit to device #8
	Wire.write(cmd);              // sends one byte
	Wire.endTransmission();    // stop transmitting
}

void BU9792Class::display(uint16_t dat)
{
	uint16_t temp;

	if (temp < 10000)
	{
		temp = dat;
		//clearDisplay();
		charTemp[0] = temp % 10;            //转化成各个位上的数字
		charTemp[1] = (temp / 10) % 10;
		charTemp[2] = (temp / 100) % 10;
		charTemp[3] = (temp / 1000) % 10;

		if (temp >= 10) //消隐最高位的0
		{
			displayNum(charTemp[1], 3);
			if (temp >= 100)
			{
				displayNum(charTemp[2], 2);
				if (temp >= 1000)
					displayNum(charTemp[3], 1);
			}
		}
		displayNum(charTemp[0], 4);
	}
}

void BU9792Class::display(uint8_t dat)
{
	uint16_t temp;

	temp = (uint16_t)dat;
	display(temp);
}

void BU9792Class::display(int dat)
{
	uint16_t temp;
	int temp1;
	int i;
	
	for (i = 0; i < 4; i++)
		charTemp[i] = 0;

	if (dat >= 0)
	{
		temp = (uint16_t)dat;
		display(temp);
	}
	else
	{
		if (dat > -1000)
		{
			temp = abs(dat);
			charTemp[0] = temp % 10;            //转化成各个位上的数字
			charTemp[1] = (temp / 10) % 10;
			charTemp[2] = (temp / 100) % 10;
			//thounsandsPlace = (temp / 1000) % 10;
			if (temp < 10)
			{
				displayNum(16, 3);  //显示负号
				displayNum(charTemp[0], 4);
			}
			else if ((temp >= 10) && (temp<100) )
			{
				displayNum(16, 2);
				displayNum(charTemp[0], 4);
				displayNum(charTemp[1], 3);
			}
			else if ((temp >= 100) && (temp<1000))
			{
				displayNum(16, 1);
				displayNum(charTemp[0], 4);
				displayNum(charTemp[1], 3);
				displayNum(charTemp[2], 2);
			}
		}
	}
}

void BU9792Class::display(float dat)
{
	uint8_t digits = 2;
	int temp;
	if (digits == 0)
	{
		temp = (int)dat;
		display(temp);
	}
	else
	{
		if ((dat > -1) && (dat < 1))
		{
			if (digits == 1)
			{
				temp = (int)(dat * 10);
				display(temp);
				if (dat < 0){
					displayNum(16, 2);
				}
				displayNum(0, 3);
				displayNum(charTemp[0], 4, true);
			}
			else if (digits == 2)
			{
				temp = (int)(dat * 100);
				display(temp);
				if (dat < 0){
					displayNum(16, 1);
				}
				displayNum(0, 2);
				displayNum(charTemp[1], 3, true);
			}
			else if (digits == 3)
			{
				if (dat > 0)
				{
					temp = (int)(dat * 1000);
					display(temp);
					displayNum(0, 1);
					displayNum(charTemp[2], 2, true);
				}
			}
			else
			{
			}
		}
		else
		{
			if (digits == 1)
			{
				if ((dat<1000) && (dat>-100))
				{
					temp = (int)(dat * 10);
					display(temp);
					displayNum(charTemp[0], 4, true);
				}
			}
			else if (digits == 2)
			{
				if ((dat<100) && (dat>-10))
				{
					temp = (int)(dat * 100);
					Serial.println(temp);
					display(temp);
					displayNum(charTemp[1], 3, true);
				}
			}
			else if (digits == 3)
			{
				if ((dat<10) && (dat>-1))
				{
					temp = (int)(dat * 1000);
					Serial.println(temp);
					display(temp);
					displayNum(charTemp[2], 2, true);
				}
			}
			else
			{
			}
		}
	}
  
}

void BU9792Class::display(float dat,  uint8_t digits)
{
	int temp;
	if (digits == 0)
	{
		temp = (int)dat;
		display(temp);
	}
	else
	{
		if ((dat > -1) && (dat < 1))
		{
			if (digits == 1)
			{
				temp = (int)(dat * 10);
				display(temp);
				if (dat < 0){
					displayNum(16, 2);
				}
				displayNum(0, 3);
				displayNum(charTemp[0], 4, true);
			}
			else if (digits == 2)
			{
				temp = (int)(dat * 100);
				display(temp);
				if (dat < 0){
					displayNum(16, 1);
				}
				displayNum(0, 2);
				displayNum(charTemp[1], 3, true);
			}
			else if (digits == 3)
			{
				if (dat > 0)
				{
					temp = (int)(dat * 1000);
					display(temp);
					displayNum(0, 1);
					displayNum(charTemp[2], 2, true);
				}
			}
			else
			{
			}
		}
		else
		{
			if (digits == 1)
			{
				if ((dat<1000) && (dat>-100))
				{
					temp = (int)(dat * 10);
					display(temp);
					displayNum(charTemp[0], 4, true);
				}
			}
			else if (digits == 2)
			{
				if ((dat<100) && (dat>-10))
				{
					temp = (int)(dat * 100);
					Serial.println(temp);
					display(temp);
					displayNum(charTemp[1], 3, true);
				}
			}
			else if (digits == 3)
			{
				if ((dat<10) && (dat>-1))
				{
					temp = (int)(dat * 1000);
					Serial.println(temp);
					display(temp);
					displayNum(charTemp[2], 2, true);
				}
			}
			else
			{
			}
		}
	}
  
}

void BU9792Class::display(double dat, uint8_t digits)
{
	display((float)dat, digits);
}

void BU9792Class::display(double dat)
{
	display((float)dat);
}

void BU9792Class::displayTime(uint8_t hour, uint8_t minute)
{
	uint8_t ihour, iminute, num0, num1, num2, num3;
	ihour = limitNums(hour);
	iminute = limitNums(minute);
	num0 = ihour/10;
	num1 = ihour%10;
	num2 = iminute/10;
	num3 = iminute%10;
	displayNum(num0, 1, true);
	displayNum(num1, 2, false);
	displayNum(num2, 3, false);
	displayNum(num3, 4, false);
}

uint8_t BU9792Class::limitNums(uint8_t num) {
	if(num > 99) return 99;
	if(num < 0) return 0;
	return num;
}

void BU9792Class::displayNum(uint8_t dat, uint8_t num, boolean point)   //按位显示
{
	uint8_t temp;

	Wire.beginTransmission(DEVICE_ADDR);
	Wire.write(CMD_ADSET | (num-1)*2);
	if (point)
		temp = TubeTab[dat] | 0x10;
	else
		temp = TubeTab[dat];
	Wire.write(temp);
	Wire.endTransmission(1);
}

void BU9792Class::clearDisplay(void)
{
	Wire.beginTransmission(DEVICE_ADDR);
	Wire.write(CMD_ADSET | 0x00);
	Wire.write(0x00);
	Wire.write(0x00);
	Wire.write(0x00);
	Wire.write(0x00);
	Wire.endTransmission(1);
}

//BU9792Class BU9792;

