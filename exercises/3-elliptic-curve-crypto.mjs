import { mod } from '../utils.mjs'
import { FieldElement, Point } from '../ecc.mjs'

/**
 * Exerise 1
 *
 * Evaluate whether these points are on the curve y^2 = x^3 + 7 over F223:
 */
function pointsOnCurve(x, y, a, b, p) {
  return mod(y ** 2, p) === mod(a * x ** 3 + b, p)
}

// (192, 105)
console.log(`(192, 105) on curve: ${pointsOnCurve(192, 105, 1, 7, 223)}`)

// (17, 56)
console.log(`(17, 56) on curve: ${pointsOnCurve(17, 56, 1, 7, 223)}`)

// (200, 119)
console.log(`(200, 119) on curve: ${pointsOnCurve(200, 119, 1, 7, 223)}`)

// (1, 193)
console.log(`(1, 193) on curve: ${pointsOnCurve(1, 193, 1, 7, 223)}`)

// (42, 99)
console.log(`(42, 99) on curve: ${pointsOnCurve(42, 99, 1, 7, 223)}`)

let prime = 223

let x1 = new FieldElement(192, prime)
let y1 = new FieldElement(105, prime)
let x2 = new FieldElement(17, prime)
let y2 = new FieldElement(56, prime)
let a = new FieldElement(0, prime)
let b = new FieldElement(7, prime)
let p1 = new Point(x1, y1, a, b)
let p2 = new Point(x2, y2, a, b)

console.log(`p1: ${p1}`)
console.log(`p2: ${p2}`)

console.log(`p1 + p2 = ${p1.add(p2)}`)

/**
 * Exercise 2
 *
 * For the curve y^2 = x^3 + 7 over F223, find:
 */
// (170, 142) + (60, 139)
x1 = new FieldElement(170, prime)
y1 = new FieldElement(142, prime)
x2 = new FieldElement(60, prime)
y2 = new FieldElement(139, prime)
a = new FieldElement(0, prime)
b = new FieldElement(7, prime)
p1 = new Point(x1, y1, a, b)
p2 = new Point(x2, y2, a, b)

console.log(`${p1} + ${p2} = ${p1.add(p2)}`)

// (47, 71) + (17, 56)
x1 = new FieldElement(47, prime)
y1 = new FieldElement(71, prime)
x2 = new FieldElement(17, prime)
y2 = new FieldElement(56, prime)
a = new FieldElement(0, prime)
b = new FieldElement(7, prime)
p1 = new Point(x1, y1, a, b)
p2 = new Point(x2, y2, a, b)

console.log(`${p1} + ${p2} = ${p1.add(p2)}`)

// (143, 98) + (76, 66)
x1 = new FieldElement(143, prime)
y1 = new FieldElement(98, prime)
x2 = new FieldElement(76, prime)
y2 = new FieldElement(66, prime)
a = new FieldElement(0, prime)
b = new FieldElement(7, prime)
p1 = new Point(x1, y1, a, b)
p2 = new Point(x2, y2, a, b)

console.log(`${p1} + ${p2} = ${p1.add(p2)}`)

/**
 * Exercise 4
 *
 * For the curve y^2 = x^3 + 7, find:
 */
prime = 223

// 2 o (192, 105)
let point = new Point(
  new FieldElement(192, prime),
  new FieldElement(105, 223),
  new FieldElement(0, prime),
  new FieldElement(7, prime)
)
console.log(`2 o (192, 105): ${point.add(point)}`)

// 2 o (143, 98)
point = new Point(
  new FieldElement(143, prime),
  new FieldElement(98, 223),
  new FieldElement(0, prime),
  new FieldElement(7, prime)
)
console.log(`2 o (143, 98): ${point.add(point)}`)

// 2 o (47, 71)
point = new Point(
  new FieldElement(47, prime),
  new FieldElement(71, 223),
  new FieldElement(0, prime),
  new FieldElement(7, prime)
)
console.log(`2 o (47, 71): ${point.add(point)}`)

// 4 o (47, 71)
point = new Point(
  new FieldElement(47, prime),
  new FieldElement(71, 223),
  new FieldElement(0, prime),
  new FieldElement(7, prime)
)
console.log(`4 o (47, 71): ${point.scalarMultiply(4)}`)

// 8 o (47, 71)
point = new Point(
  new FieldElement(47, prime),
  new FieldElement(71, 223),
  new FieldElement(0, prime),
  new FieldElement(7, prime)
)
console.log(`8 o (47, 71): ${point.scalarMultiply(8)}`)

// 21 o (47, 71)
point = new Point(
  new FieldElement(47, prime),
  new FieldElement(71, 223),
  new FieldElement(0, prime),
  new FieldElement(7, prime)
)
console.log(`21 o (47, 71): ${point.scalarMultiply(21)}`)

/**
 * Exercise 5
 *
 * For the curve y^2 = x^3 + 7, find the order of the group generated by (15, 86)
 */
prime = 223
let x = new FieldElement(15, prime)
let y = new FieldElement(86, 223)
a = new FieldElement(0, prime)
b = new FieldElement(7, prime)
let originalPoint = new Point(x, y, a, b)
let product = originalPoint
let order = 1

while (!product.isPointAtInfinity) {
  product = product.add(originalPoint)
  order++
}

console.log('order:', order)

/**
 * Exercise 6
 */