/*
Compilation et exécution :
g++ hw.cpp
./a.out
*/
#include <iostream>
using namespace std;

int main(int argc, const char * argv[]) {
    cout << string("Hello, World!\n") << argc << endl << (argv[1] ? argv[1] : argv[0]) << endl;
    return 0;
}