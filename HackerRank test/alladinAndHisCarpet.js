/* 
Here magic = [2, 4, 5, 2] and dist = [4, 3, 1, 3]. If Aladdin starts at the second magical source, his magic levels are:

magic[1] = 4
4 — dist[1] + magic[2] = 4–3 + 5 = 6
6 — dist[2] + magic[3] = 6–1 + 2 = 7
7 — dist[3] + magic[0] = 7–3 + 2 = 6
6 — dist[0] = 6–4 = 2.

The first point from where Aladdin can start his journey is the 2 magical source. The output should be 1, the index of the 2 location.
*/
let magic = [1, 3, 5, 4];
let dist = [2, 3, 4, 2];

function optimalPoint(magic, dist) {
  let startIndex = 0;
  let remainingMagic = 0;
  let usedMagic = 0;
  let len = magic.length;

  for (let i = 0; i < len; i++) {
    remainingMagic += magic[i] - dist[i];
    if (remainingMagic < 0) {
      startIndex = i + 1;
      usedMagic += remainingMagic;
      remainingMagic = 0;
    }
  }
  return usedMagic + remainingMagic >= 0 ? startIndex : -1;
}

console.log(optimalPoint(magic, dist));
