function main() { 
const v1 = [1000.0,1000.0,1000.0,1000.0];
v1[7] = v1;
const v2 = v1[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
