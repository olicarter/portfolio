'use client'

import { useState } from 'react'
import { readableColor } from 'polished'
import { differenceInMinutes, format } from 'date-fns'
import SunCalc, { GetTimesResult } from 'suncalc'

const config: Record<keyof GetTimesResult, { s: number; l: number }> = {
  nadir: { s: 15, l: 15 },
  nightEnd: { s: 25, l: 25 },
  nauticalDawn: { s: 35, l: 35 },
  dawn: { s: 45, l: 45 },
  sunrise: { s: 55, l: 55 },
  sunriseEnd: { s: 65, l: 65 },
  goldenHourEnd: { s: 75, l: 75 },
  solarNoon: { s: 85, l: 85 },
  goldenHour: { s: 75, l: 75 },
  sunsetStart: { s: 65, l: 65 },
  sunset: { s: 55, l: 55 },
  dusk: { s: 45, l: 45 },
  nauticalDusk: { s: 35, l: 35 },
  night: { s: 25, l: 25 },
}

const hue = 210 // Blue
const location = [59.437, 24.7536] // Tallinn, Estonia

// @ts-ignore
const times: {
  name: keyof GetTimesResult
  date: Date
  s: number
  l: number
}[] = Object.entries(SunCalc.getTimes(new Date(), location[0], location[1]))
  .sort(([, a], [, b]) => a.getTime() - b.getTime())
  .map(([name, date]) => ({
    name,
    date,
    s: config[name as keyof GetTimesResult].s,
    l: config[name as keyof GetTimesResult].l,
  }))

const getSLForDate = (date: Date) => {
  const nowIndex = [...times, { name: 'now', date }]
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .findIndex(i => i.name === 'now')
  const prevTime =
    nowIndex === 0 ? times[times.length - 1] : times[nowIndex - 1]
  const nextTime = nowIndex === times.length ? times[0] : times[nowIndex]
  const percent =
    differenceInMinutes(date, prevTime.date) /
    differenceInMinutes(nextTime.date, prevTime.date)
  return {
    s: Math.round(
      config[prevTime.name].s +
        (config[nextTime.name].s - config[prevTime.name].s) * percent,
    ),
    l: Math.round(
      config[prevTime.name].l +
        (config[nextTime.name].l - config[prevTime.name].l) * percent,
    ),
  }
}

export function SolarColorToday() {
  return (
    <ul
      className={`aspect-video bg-neutral-300 flex overflow-hidden rounded-2xl ${
        times ? '' : 'animate-pulse'
      }`}
    >
      <li
        style={{
          backgroundColor: `hsl(${hue}, ${config.night.s}%, ${config.night.l}%)`,
          color: readableColor(
            `hsl(${hue}, ${config.night.s}%, ${config.night.l}%)`,
          ),
          width: `${(Number(format(times[0].date, 'Hmm')) / 2400) * 100}%`,
        }}
      />
      {times.map(({ name, date }, index) => {
        const time = config[name]
        return (
          <li
            key={name}
            style={{
              backgroundColor: `hsl(${hue}, ${time.s}%, ${time.l}%)`,
              color: readableColor(`hsl(${hue}, ${time.s}%, ${time.l}%)`),
              width: `${
                (((index === times.length - 1
                  ? 2400
                  : Number(format(times[index + 1].date, 'Hmm'))) -
                  Number(format(date, 'Hmm'))) /
                  2400) *
                100
              }%`,
              top: `${(Number(format(date, 'Hmm')) / 2400) * 100}%`,
            }}
          />
        )
      })}
    </ul>
  )
}

export function SolarColorForTime({ date }: { date: Date }) {
  const { s: nowS, l: nowL } = getSLForDate(date)

  return (
    <div
      className="aspect-video rounded-2xl"
      style={{ backgroundColor: `hsl(${hue}, ${nowS}%, ${nowL}%)` }}
    />
  )
}
