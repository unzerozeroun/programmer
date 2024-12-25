#include <msp430.h>

#define LED1 0x0001 // P1.0
#define PUSHBUTTON 0x0002 // P1.1
#define DEVELOPMENT 0x5A80 // Stop the watchdog timer
#define ENABLE_PINS 0xFFFE // Required to use inputs and outputs

main()
{
    WDTCTL = DEVELOPMENT; // Stop the watchdog timer
    PM5CTL0 = ENABLE_PINS; // Required to use inputs and outputs

    P1DIR |= LED1; // Set P1.0 as an output
    P1OUT &= ~LED1; // Ensure LED is off initially

    P1DIR &= ~PUSHBUTTON; // Set P1.1 as an input
    P1REN |= PUSHBUTTON; // Enable pull-up/down resistor for P1.1
    P1OUT |= PUSHBUTTON; // Configure pull-up resistor for P1.1

    while(1)
    {
        if((P1IN & PUSHBUTTON) == 0) // If the button is pressed
        {
            P1OUT |= LED1; // Turn on the LED
        }
        else
        {
            P1OUT &= ~LED1; // Turn off the LED
        }
    }
}
