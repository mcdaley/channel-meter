//-----------------------------------------------------------------------------
// index.test.js
//-----------------------------------------------------------------------------
import { solution } from './index';

describe('solution', () => {
  it('Calculates the max enjoyment', () => {
    expect(solution([ [1, 2, 3], [5, 1, 2], [9, 8, 6] ], 3)).toBe(16);
  })

  it('Fails to calculate max enjoyment', () => {
    expect(solution([ [1, 2, 3], [5, 1, 2], [9, 4, 3] ], 3)).toBe(13);
  })
})




