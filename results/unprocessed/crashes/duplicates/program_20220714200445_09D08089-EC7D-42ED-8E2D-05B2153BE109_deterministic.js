function main() { 
const v0 = {};
const v1 = {};
const v2 = [v1,v0];
v2[4] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
