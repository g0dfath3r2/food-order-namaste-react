import { sum } from "../utils/sum.js"


test('should calculate the sum of two', () => { 
    const result = sum(5,6)
    expect(result).toBe(10)
 })