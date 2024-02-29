/*
Compilation :
    g++ hw.cpp -o hw.out
Exécution :
    ./hw.out
*/

#include <iostream> // inclure la librairie iostream pour utiliser cout et endl

using namespace std; // utiliser l'espace de nom std pour éviter d'écrire std::cout et std::endl

int main(int argc, const char * argv[]) {
    cout << string("Hello, World!\n") << argc << endl << (argv[1] ? argv[1] : argv[0]) << endl;
    return 0;
}