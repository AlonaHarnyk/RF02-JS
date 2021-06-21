// 1
// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// const d = b.join(",").split(",");
// const f = [];
// for (let i of d) {
// 	f.push(Number(i));
// }
// const f = [b[0]].concat(b[1])
// const finalArr = a.concat(c, f);
// console.log(finalArr);
// Result: ["a", "b", "c", 0, 1, 2, 3];
// const w = b[1][0]
// console.log(w)

// 2
// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];
// a.splice(3, 3, "a", "b", "c")
// const b = a.copyWithin(3, 0, 3)
// const b = [...a.slice(0, 3), ...a.slice(0, 3), ...a.slice(-2)];
// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// 3
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const b = [...a.slice(0, 5), 0, 0, 0, ...a.slice(-2)];
// a.splice(5, 3, 0, 0, 0);
// const b = a.fill(0, 5, 8)
// console.log(b)
// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// 4
// const a = [1, 2, [3, 4], [5, 6], 7];
// const b = [];
// for (const i of a) {
// 	if (Array.isArray(i)) {
// 		b.push(i[0])
// 		b.push(i[1])
// 	} else {
// 		b.push(i)
// 	}
// }
// console.log(b)
// const b = a.flat();
// console.log(b);
// Result: [1, 2, 3, 4, 5, 6, 7]
// const b = [1, 2, [3, 4, [5, 6]]];
// console.log(b.flat(2))
// Result: [1, 2, 3, 4, 5, 6]
// const c = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(c.flat(Infinity))
// Result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 5
// const a = 'alona'
// const b = [...a];
// const b = a.split('')
// const b = Array.from(a)
// console.log(b);
// Result: ['a', 'l', 'o', 'n', 'a']

// 6
// const a = ['a', 'l', 'o', 'n', 'a']
// const b = a.join(',');
// const b = a.toString()
// console.log(b)
// Result: 'a,l,o,n,a'

// 7
// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k']
// let b;
// for (let i = 0; i < a.length; i += 1) {
//   if (a[i] === 'n') {
//     b = i;
//   }
// }
// const b = a.lastIndexOf('n')
// console.log(b);
// Result: 5

// 8
// const a = [1, 2, 3, 4, 5, 6, 7]
// const b = [];
// for (let i = a.length - 1; i >= 0; i -= 1) {
//   b.push(a[i]);
// }
// const b = a.reverse()
// console.log(b);
// Result: [7, 6, 5, 4, 3, 2, 1]

// 9
// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321

// function reverseNumber(n) {
//   n = n + "";
//   return Number(n.split("").reverse().join(""));
// }

// function reverseNumber(number) {
// 	let str = "";
// 	number = String(number);

// 	for (let i = number.length - 1; i >= 0; i -= 1) {
// 		str += number[i];
// 	}
// 	return Number(str);
// }

// let str = '';
// function reverseNumber(number) {
//   let counter = 0;
//   if (number < 0) {
//     number *= -1;
//     counter = -1;
//   }
//   number = String(number);

//   for (let i = number.length - 1; i >= 0; i -= 1) {
//     str += number[i];
//   }
//   if (counter === -1) {
//     return counter * Number(str);
//   }
//   return Number(str);
// }

// 10
// Write function, which returns array of keys of an object.

// function getKeys(obj) {
// 	const arr = [];
// 	for (let key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			arr.push(key);
// 		}
// 	}
// 	return arr;
// }
// console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

// 11
// function getValues(obj) {
// 	const arr = [];
// 	for (let key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			arr.push(obj[key]);
// 		}
// 	}
// 	return arr;
// }
// console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }));
