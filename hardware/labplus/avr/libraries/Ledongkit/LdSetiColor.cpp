/*************************************
Build for color sensor, LEDONG module set.
Trimmed by Shanbin Zhou, 2017/01/05
*************************************/

#include "LdSetiColor.h"


uint16_t red, green, blue, clear_;
uint16_t h;
uint8_t s, v;

double Kr;
double Kg;
double Kb;

COLOR_RGB color_rgb;
COLOR_HSV color_hsv;


void ColorSensor_PowerUp()
{
  Wire.begin();
  Wire.beginTransmission(COLOR_SENSOR_ADDR);
  Wire.write(REG_CTL);
  Wire.write(0x03);
  Wire.endTransmission();  
}

void ColorSensor_SetGain(byte gain)
{ 
  byte reg;
  Wire.beginTransmission(COLOR_SENSOR_ADDR);
  Wire.write(REG_GAIN);
  switch(gain)
  {
    case GAIN_X_1:
      reg = 0x00;
      break;
    case GAIN_X_4:
      reg = 0x20;
      break;
    case GAIN_X_16:
      reg = 0x40;
      break;
    case GAIN_X_64:
      reg = 0x60;
      break;
  }
  Wire.write(reg);
  Wire.endTransmission();   
}

void readRGB_(uint16_t *r, uint16_t *g, uint16_t *b, uint16_t * c)
{
  byte regs_data[8];
  // 1.Send Block Read Command;
  Wire.beginTransmission(COLOR_SENSOR_ADDR);
  Wire.write(REG_BLOCK_READ);
  Wire.endTransmission();
  
  // 2.Read data register
  Wire.beginTransmission(COLOR_SENSOR_ADDR);
  Wire.requestFrom(COLOR_SENSOR_ADDR, 8);
  // 3.Wait all data readed;
  while(Wire.available() < 8);
  
  for(uint8_t i = 0; i < 8; ++i)
  {
    regs_data[i] = Wire.read();    
  }
  
  //Serial.write(regs_data, 8);
  *g = ((uint16_t)regs_data[1] << 8 & 0xFF00 | (uint16_t)(regs_data[0] & 0x00FF));
  *r = ((uint16_t)regs_data[3] << 8 & 0xFF00 | (uint16_t)(regs_data[2] & 0x00FF));
  *b = ((uint16_t)regs_data[5] << 8 & 0xFF00 | (uint16_t)(regs_data[4] & 0x00FF));
  *c = ((uint16_t)regs_data[7] << 8 & 0xFF00 | (uint16_t)(regs_data[6] & 0x00FF));
  Wire.endTransmission();  
}

void RGB2HSV_(uint16_t raw_r,uint16_t raw_g, uint16_t raw_b, uint16_t raw_c, unsigned int &dst_h, unsigned char &dst_s, unsigned char &dst_v)
{
    float r = raw_r;
    float g = raw_g;
    float b = raw_b;
//
//    Serial.println("------------------------");
//    Serial.print("R: ");
//    Serial.println(r*Kr);
//    Serial.print("G: ");
//    Serial.println(g*Kg);
//    Serial.print("B: ");
//    Serial.println(b*Kb);
    int ref_r = 3500;
	int ref_g = 4500;
	int ref_b = 4500;
	
    r = r / ref_r;
    g = g / ref_g;
    b = b / ref_b;
    
    r = (r > 1.0) ? 1.0:r;
    g = (g > 1.0) ? 1.0:g;
    b = (b > 1.0) ? 1.0:b;

    float h, s, v; // h:0-360.0, s:0.0-1.0, v:0.0-1.0

    float max = max_f(r, g, b);
    float min = min_f(r, g, b);

    v = max;

    if (max == 0.0f) {
        s = 0;
        h = 0;
    }
    else if (max - min == 0.0f) {
        s = 0;
        h = 0;
    }
    else {
        s = (max - min) / max;

        if (max == r) {
            h = 60 * ((g - b) / (max - min)) + 0;
        }
        else if (max == g) {
            h = 60 * ((b - r) / (max - min)) + 120;
        }
        else {
            h = 60 * ((r - g) / (max - min)) + 240;
        }
    }

    if (h < 0) h += 360.0f;

    dst_h = (h);   // dst_h : 0-180
    dst_s = (unsigned char)(s * 255); // dst_s : 0-255
    dst_v = (unsigned char)(v * 255); // dst_v : 0-255
}

void HSV2RGB_(uint16_t h, float s, float v, COLOR_RGB * color)
{
  uint8_t hi;
  float f, p, q, t;
  hi = (uint8_t)(h / 60);
  f = (float)h/60 - hi;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch(hi)
  {
    //0: {r,g,b} = {v,t,p}
  case 0:
    color->r = (uint8_t)(v * 255);
    color->g = (uint8_t)(t * 255);
    color->b = (uint8_t)(p * 255);
    break;
    //1: {r,g,b} = {q,v,p}
  case 1:
    color->r = (uint8_t)(q * 255);
    color->g = (uint8_t)(v * 255);
    color->b = (uint8_t)(p * 255);
    break;
    //2: {r,g,b} = {p,v,t}
  case 2:
    color->r = (uint8_t)(p * 255);
    color->g = (uint8_t)(v * 255);
    color->b = (uint8_t)(t * 255);
    break;
    //3: {r,g,b} = {p,q,v}
  case 3:
    color->r = (uint8_t)(p * 255);
    color->g = (uint8_t)(q * 255);
    color->b = (uint8_t)(v * 255);
    break;
    //4: {r,g,b} = {t,p,v}
  case 4:
    color->r = (uint8_t)(t * 255); 
    color->g = (uint8_t)(p * 255);
    color->b = (uint8_t)(v * 255);
    break;
    //5: {r,g,b} = {v,p,q}
  case 5:
    color->r = (uint8_t)(v * 255);
    color->g = (uint8_t)(p * 255);
    color->b = (uint8_t)(q * 255);
    break;
  default:
    break;
  }
}

/*
void LdSetiColor::getHSVcolor() 
{
	readRGB(&red, &green, &blue, &clear_);
	rgb2hsv(red, green, blue, clear_, h, s, v);
	color_hsv.h = h;
	color_hsv.v = v;
	color_hsv.s = s;
} 
*/

void getColor_() 
{
	readRGB_(&red, &green, &blue, &clear_);
	RGB2HSV_(red, green, blue, clear_, h, s, v);
	color_hsv.h = h;
	color_hsv.s = (float)s / 255;
	color_hsv.v = (float)v / 255;
	s = 1.0;
	v = 1.0;  
	HSV2RGB_(h, s, v, &color_rgb); 
	if(clear_<700)
	{
		color_rgb.r = 0;
		color_rgb.g = 0;
		color_rgb.b = 0;    
	}
}

