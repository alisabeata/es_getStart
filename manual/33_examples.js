// examples

// — числа под главной диагональю матрицы
const arr = [
  [1,2,3,4],
  [5,6,7,8],
  [9,0,0,2],
  [3,4,5,8]
]

arr.forEach((cur, ind) => {
	cur.forEach((num, i) => {
  	if (i < ind) console.log(num)
  })
})

// or 

for (let i = 1; i < arr.length; i++) {
	for (let j = 0; j < i; j++) {
  	console.log(arr[ i ][ j ]);
  }
}


// - map и parseInt

[2, 2, 2, 2].map(parseInt)
// >>> [2, NaN, NaN, 2]

