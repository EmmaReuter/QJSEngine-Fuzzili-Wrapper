function main() { 
const v1 = [-1073741824,-1073741824];
v1[0] = v1;
const v3 = Object.isExtensible();
const v4 = v3 & v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
