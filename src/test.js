typeof HermesInternal === 'undefined' ? (
  globalThis.print = console.log
) : 0;

print(typeof HermesInternal);
