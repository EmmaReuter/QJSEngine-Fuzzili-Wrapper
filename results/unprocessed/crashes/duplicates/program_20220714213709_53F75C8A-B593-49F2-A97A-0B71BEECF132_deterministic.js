function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = "9007199254740992"[v0];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
