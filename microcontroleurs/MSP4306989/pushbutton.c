#include <msp430.h>

#define LED1 0x0001 // P1.0
#define CLEAR 0x00FE // efface P1.0
#define PUSHBUTTON 0x0002 // P1.1
#define DEVELOPMENT 0x5A80 // Stop the watchdog timer
#define ENABLE_PINS 0xFFFE // Required to use inputs and outputs

main()
{
    WDTCTL = DEVELOPMENT; // Stop the watchdog timer
    PM5CTL0 = ENABLE_PINS; // Required to use inputs and outputs

    P1DIR = LED1; // Set P1.0 as an output
    P1OUT = PUSHBUTTON; // Set the P1.1 as an input

    while(1)
    {
        if((P1IN & PUSHBUTTON) != PUSHBUTTON) // If the button is pressed
        {
            P1OUT = P1OUT | LED1; // Turn on the LED
        }
        else
        {
            P1OUT = P1OUT & CLEAR; // Turn off the LED
        }
    }
}