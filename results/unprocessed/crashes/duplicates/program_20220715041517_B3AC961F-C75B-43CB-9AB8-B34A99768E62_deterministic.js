function main() { 
const v1 = [-1000000000000.0];
const v2 = [-1000000000000.0,-1000000000000.0,-1000000000000.0,-1000000000000.0,-1000000000000.0];
const v3 = v2.unshift(v2);
const v4 = v2 > v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
