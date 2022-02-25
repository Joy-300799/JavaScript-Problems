let a = [1, 2];
let b = [3, 4];

for (let i = 0; i < a.length, i < b.length; i++) {
   console.log(a[i]);
   setTimeout(() => {
       console.log(b[i])
   })
}

