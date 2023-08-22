typeof HermesInternal === 'undefined' ? (
  globalThis.print = console.log
) : 0;

const target = Object.create(null);

for (let i = 0; i < 10; i++) {
  print(i);
  Object.defineProperty(target, i, {
    get: () => i,
  });
}

print('index 0: ' + target[0]);
print('index 5: ' + target[5]);
print('index 9: ' + target[9]);
