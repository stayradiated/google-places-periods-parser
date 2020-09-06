interface Period {
  close?: {
    day: number,
    time: string,
  },
  open: {
    day: number,
    time: string,
  },
}

const DAYS = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
]

const transformTime = (time: string) => {
  return time.slice(0, 2) + ':' + time.slice(2)
}

const transform = (input: Period[]) => {
  if (
    input.length === 1 &&
    input[0].open.day === 0 &&
    input[0].open.time === '0000' &&
    input[0].close == null
  ) {
    return [
      {
        opens: '00:00',
        closes: '24:00',
      },
    ]
  }

  return input
    .map((period) => {
      const dayOfWeek = DAYS[period.open.day]

      return {
        dayOfWeek: [dayOfWeek],
        opens: transformTime(period.open.time),
        closes: transformTime(period.close.time),
      }
    })
    .reduce((output, period) => {
      const match = output.find((item) => {
        return item.opens === period.opens && item.closes === period.closes
      })

      if (match != null) {
        match.dayOfWeek.push(period.dayOfWeek[0])
      } else {
        output.push(period)
      }

      return output
    }, [])
}

export default transform
