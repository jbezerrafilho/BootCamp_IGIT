function eighteen(number) {
  if ((number/2 +1 ) % 2 === 0) {
    return 'Par'
  } else { return 'Ímpar'}
}

console.log ('1.' + eighteen(16))

var a = 10
var b = a
a = 15


console.log(a, b)

var a = { id: 2}
var b = a 

a.id = 4

console.log(b, a )

function nineteen(number) {
  var x = 0
  for (var i = 1; i <= number; i++) {
    x += i
  }
  return x

}

console.log(nineteen(5))

function example(n1, n2 = 20) {
  return n1 + n2 / 4 
}

console.log(example(10))

const array = [1, 2, 3, 4, 5, 6]

function f3() {
  return array.map(item => item * 2).filter(item => item % 3 === 0).reduce((acc, current) => acc + current, 0)
}

console.log(f3())

let array1 = [1, 2, 3, 4, 5, 6, 7, 8]

function f5() {
  return [...array1, 9, 10]
}

console.log(f5())

const object = {
  id: 1,
  name: 'Jonas',
  instrument: 'Drums',
  age: 67,
  band: 'Rush'
}

const {id , name, instrumet, age, band} = object

console.log(object.name)

const array2 = [1, '2', '3', 4, 5]

function f2() {
  return array2.filter(item => typeof item === 'string')
}

console.log(f2())


const array3 = [1, 2, 3,4,5,6,7,8,9,10]


function f7() {
  return array3.map(item => item ** 2)
}

console.log(f7())


function p4() {
  let interval = null
  let i = 0
  let array = []

  interval = setInterval(() => {
    if (i === 5) {
      clearInterval(interval)
      return console.log(array)
    } else { array.push(i++) }



  }, 1000);
  
}


console.log(p4())