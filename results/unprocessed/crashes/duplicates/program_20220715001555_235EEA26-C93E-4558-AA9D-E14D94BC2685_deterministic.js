function main() { 
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
const v3 = v1 < 1548768689;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
