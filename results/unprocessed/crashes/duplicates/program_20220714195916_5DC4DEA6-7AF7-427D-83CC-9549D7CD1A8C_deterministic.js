function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v1[6] = v1;
const v2 = v0[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
