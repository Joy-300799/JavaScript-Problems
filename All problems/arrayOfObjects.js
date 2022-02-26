const arr = [
  { name: "amit" },
  { name: "abhishek" },
  { name: "ABHIshek" },
  { name: "AMIT" },
  { name: "anil" },
];

// Return the unique names.

uniNames = (arr) => {
  let x = arr.map((x) => x.name.toLowerCase());
  console.log(x);
  return [...new Set(x)];
};

console.log(uniNames(arr));
