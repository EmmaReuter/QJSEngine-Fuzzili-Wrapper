function main() { 
const v1 = [-2948437113,-2948437113,-2948437113,-2948437113];
const v2 = {};
const v3 = [v1,v2,v2];
v2.__proto__ = v3;
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
