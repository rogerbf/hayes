import Hayes from './hayes'

test(`Hayes is a function`, () => {
  expect(typeof (Hayes)).toBe(`function`)
})

test(`inspect`, () => {
  expect(Hayes({ k: `value` }).inspect()).toEqual({ k: `value` })
})
