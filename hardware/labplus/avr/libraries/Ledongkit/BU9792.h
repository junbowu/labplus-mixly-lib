// BU9792.h

#ifndef _BU9792_h
#define _BU9792_h

#if defined(ARDUINO) && ARDUINO >= 100
	#include "arduino.h"
#else
	#include "WProgram.h"
#endif
#include <Wire.h>

#define DEVICE_ADDR 0x7c >> 1

/*����壬��������λ������Ӧ���壬����datasheet,���������Ϊȱʡ����*/
#define CMD_ICSET           0xEA      //bit1 0: ��ִ��soft reset 1:ִ��soft reset   bit0 0: ʹ���ڲ�osc 1: ʹ���ⲿʱ��
#define CMD_MODE_SET        0xC8      //bit3 0����λָʾ�Ƿ��RAM������ʾ����: display off(Ĭ�ϣ� 1: display on   bit0 0: 1/3 bias 1��1/2 bias
#define CMD_ADSET           0x00      //Ĭ��Ϊ��ַ0����ַ��Χ��0-10011
#define CMD_DISCTL          0xA2      //bit4 bit3: ʡ��ģʽ���� bit2: �������� bit1 bit0:ʡ��ģʽ���ã� ������ʡ��ģʽ���ÿɶ�ѡ1���ã����ֵ������datasheet��ѡһ������ʱ����һ��ѡĬ��ֵ��
                                      //ͨ������£����鶼ѡĬ��ֵ�Ϳɡ�
#define CMD_BLKCTL          0xF0      //��˸����
#define CMD_APCTL           0xFC      //���е���������

#define DISPLAY_ON          0x08
#define DISPLAY_OFF         0x00
#define BIAS1_3             0x00
#define BIAS1_2             0x04
#define DISPLAY_ON          0x08
#define FR_NOMAL            0x00
#define FR_MODE1            0x08
#define FR_MODE2            0x10
#define FR_MODE3            0x18
#define LINE_MODE           0x00
#define FRAME_MODE          0x04
#define SR_MODE1            0x08
#define SR_MODE2            0x01
#define SR_NOMAL            0x02
#define SR_HIGH_POWER       0x03
#define SOFT_SESET_EN       0x02
#define SOFT_RESET_DIS      0x00
#define OSC_INTNEL          0x00
#define OSC_EXTERN          0x01
#define BLINK_OFF           0x00
#define BLINK_HALF_S        0x01
#define BLINK_1S            0X02
#define BLINK_2S            0x03
#define ALL_PIXEL_ON        0x10
#define ALL_PIXEL_OFF       0x01

class BU9792Class
{
 protected:

 public:
	void begin();
	void display(uint8_t dat);
	void display(uint16_t dat);
	void display(int dat);
	void display(float dat, uint8_t digits);
	void display(double dat, uint8_t digits);
	void display(float dat);
	void display(double dat);
	void displayTime(uint8_t hour, uint8_t minute);
	void displayNum(uint8_t dat, uint8_t num, boolean point = false);   //��λ��ʾ
	void clearDisplay(void);
	void sendCMD(uint8_t cmd);
private:
	uint8_t charTemp[4];
	uint8_t limitNums(uint8_t num);
};

//extern BU9792Class BU9792;

#endif

