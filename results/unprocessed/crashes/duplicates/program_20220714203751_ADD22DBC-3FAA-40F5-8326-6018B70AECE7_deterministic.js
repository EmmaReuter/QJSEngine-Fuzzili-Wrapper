function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v1[8] = v1;
const v2 = v1.toLocaleString();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
