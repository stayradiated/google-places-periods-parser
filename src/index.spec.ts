import test from 'ava'

import transform from './index'

test('capers', (t) => {
  const input = [
    {
      close: {
        day: 0,
        time: '1900',
      },
      open: {
        day: 0,
        time: '0700',
      },
    },
    {
      close: {
        day: 1,
        time: '1900',
      },
      open: {
        day: 1,
        time: '0700',
      },
    },
    {
      close: {
        day: 2,
        time: '1900',
      },
      open: {
        day: 2,
        time: '0700',
      },
    },
    {
      close: {
        day: 3,
        time: '1900',
      },
      open: {
        day: 3,
        time: '0700',
      },
    },
    {
      close: {
        day: 4,
        time: '1900',
      },
      open: {
        day: 4,
        time: '0700',
      },
    },
    {
      close: {
        day: 5,
        time: '1900',
      },
      open: {
        day: 5,
        time: '0700',
      },
    },
    {
      close: {
        day: 6,
        time: '1900',
      },
      open: {
        day: 6,
        time: '0700',
      },
    },
  ]

  const expected = [
    {
      dayOfWeek: [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ],
      opens: '07:00',
      closes: '19:00',
    },
  ]

  const actual = transform(input)
  t.deepEqual(actual, expected)
})

test('geyser', (t) => {
  const input = [
    {
      close: {
        day: 0,
        time: '1400',
      },
      open: {
        day: 0,
        time: '1000',
      },
    },
    {
      close: {
        day: 1,
        time: '1400',
      },
      open: {
        day: 1,
        time: '1000',
      },
    },
    {
      close: {
        day: 2,
        time: '1400',
      },
      open: {
        day: 2,
        time: '1000',
      },
    },
    {
      close: {
        day: 6,
        time: '1400',
      },
      open: {
        day: 6,
        time: '1000',
      },
    },
  ]

  const expected = [
    {
      dayOfWeek: ['sunday', 'monday', 'tuesday', 'saturday'],
      opens: '10:00',
      closes: '14:00',
    },
  ]

  const actual = transform(input)
  t.deepEqual(actual, expected)
})

test('interval', (t) => {
  const input = [
    {
      close: {
        day: 0,
        time: '1430',
      },
      open: {
        day: 0,
        time: '0730',
      },
    },
    {
      close: {
        day: 1,
        time: '1500',
      },
      open: {
        day: 1,
        time: '0730',
      },
    },
    {
      close: {
        day: 2,
        time: '1500',
      },
      open: {
        day: 2,
        time: '0730',
      },
    },
    {
      close: {
        day: 3,
        time: '1500',
      },
      open: {
        day: 3,
        time: '0730',
      },
    },
    {
      close: {
        day: 4,
        time: '1500',
      },
      open: {
        day: 4,
        time: '0730',
      },
    },
    {
      close: {
        day: 5,
        time: '1500',
      },
      open: {
        day: 5,
        time: '0730',
      },
    },
  ]

  const expected = [
    {
      dayOfWeek: ['sunday'],
      opens: '07:30',
      closes: '14:30',
    },
    {
      dayOfWeek: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      opens: '07:30',
      closes: '15:00',
    },
  ]

  const actual = transform(input)
  t.deepEqual(actual, expected)
})

test('epiphany', (t) => {
  const input = [
    {
      close: {
        day: 0,
        time: '1800',
      },
      open: {
        day: 0,
        time: '0800',
      },
    },
    {
      close: {
        day: 1,
        time: '1700',
      },
      open: {
        day: 1,
        time: '0800',
      },
    },
    {
      close: {
        day: 2,
        time: '1700',
      },
      open: {
        day: 2,
        time: '0800',
      },
    },
    {
      close: {
        day: 3,
        time: '1800',
      },
      open: {
        day: 3,
        time: '0800',
      },
    },
    {
      close: {
        day: 4,
        time: '1900',
      },
      open: {
        day: 4,
        time: '0800',
      },
    },
    {
      close: {
        day: 5,
        time: '1900',
      },
      open: {
        day: 5,
        time: '0800',
      },
    },
    {
      close: {
        day: 6,
        time: '1900',
      },
      open: {
        day: 6,
        time: '0800',
      },
    },
  ]

  const expected = [
    {
      dayOfWeek: ['sunday', 'wednesday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      dayOfWeek: ['monday', 'tuesday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      dayOfWeek: ['thursday', 'friday', 'saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  ]

  const actual = transform(input)
  t.deepEqual(actual, expected)
})

test('bp', (t) => {
  const input = [
    {
      open: {
        day: 0,
        time: '0000',
      },
    },
  ]

  const expected = [
    {
      opens: '00:00',
      closes: '24:00',
    },
  ]

  const actual = transform(input)
  t.deepEqual(actual, expected)
})
