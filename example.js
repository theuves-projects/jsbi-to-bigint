import JSBI from 'jsbi'

const x = JSBI.BigInt('10000000000000000')
const y = JSBI.BigInt('1')
const result = JSBI.add(x, y)

console.log(result.toString())