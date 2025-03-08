#include <iostream>

int main() {
    const char* str = "Hello, world!";
    std::cout << "Address of str: " << static_cast<const void*>(str) << std::endl;
    return 0;
    
}
