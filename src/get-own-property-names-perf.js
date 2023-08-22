typeof HermesInternal === 'undefined' ? (
  globalThis.print = console.log
) : 0;

const start = Date.now();
const obj = { [start]: null };

for (let i = 0; i < 100000; i++) {
  Object.getOwnPropertyNames(obj);
}

/**
 * # Environment
 * 
 * M1 Pro
 * 
 * ## Result
 * 
 * - Hermes: ~600ms
 * - Node.js: ~2ms
 */
print(Date.now() - start);
