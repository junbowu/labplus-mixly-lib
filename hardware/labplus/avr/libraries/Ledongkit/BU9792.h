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

/*命令定义，命令的相关位都有相应定义，参阅datasheet,这里命令定义为缺省设置*/
#define CMD_ICSET           0xEA      //bit1 0: 不执行soft reset 1:执行soft reset   bit0 0: 使用内部osc 1: 使用外部时钟
#define CMD_MODE_SET        0xC8      //bit3 0（这位指示是否把RAM数据显示？）: display off(默认） 1: display on   bit0 0: 1/3 bias 1：1/2 bias
#define CMD_ADSET           0x00      //默认为地址0，地址范围：0-10011
#define CMD_DISCTL          0xA2      //bit4 bit3: 省电模式设置 bit2: 驱动波形 bit1 bit0:省电模式设置， 有两组省电模式设置可二选1设置，两种的区别见datasheet。选一组设置时，另一组选默认值。
                                      //通常情况下，两组都选默认值就可。
#define CMD_BLKCTL          0xF0      //闪烁控制
#define CMD_APCTL           0xFC      //所有点亮来控制

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
	void displayNum(uint8_t dat, uint8_t num, boolean point = false);   //按位显示
	void clearDisplay(void);
	void sendCMD(uint8_t cmd);
private:
	uint8_t charTemp[4];
	uint8_t limitNums(uint8_t num);
};

//extern BU9792Class BU9792;

#endif

