section .data
    msg db "Hello from macOS!", 0

section .text
    extern _printf
    global _main

_main:
    mov rdi, msg
    xor eax, eax
    call _printf
    ret
