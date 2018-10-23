import { expect } from 'chai'
import { helloWorld } from '../src/index'

describe(`The index module`, () => {
  it('should return a hello world message', () => {
    expect(helloWorld('TypeScript')).to.include('TypeScript')
  })
})
