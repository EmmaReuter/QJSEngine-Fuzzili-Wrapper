function main() { 
const v1 = {};
const v2 = [isNaN,v1,v1,v1,v1];
v1.__proto__ = v2;
const v3 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
