function main() { 
const v0 = {};
const v1 = [v0];
v1[4] = v1;
const v3 = false > v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
