import React, { useEffect, useRef, useState } from 'react'
import styles from './MyChart.module.css'
import { Line, defaults } from 'react-chartjs-2'

// this is actually needed
import Chart from 'chart.js/auto'

const MyChart = () => {
  // chart ref
  const chartRef = useRef()

  // gradient for chart
  const [gradient, setGradient] = useState('transparent')

  // chart data - needs to be combined with other things to pass into chart
  const rawData = {
    week: [
      { time: '05-03-2002', price: 2953.62 },
      { time: '05-04-2002', price: 2253.52 },
      { time: '05-05-2002', price: 2933.36 },
      { time: '05-06-2002', price: 2456.82 },
      { time: '05-07-2002', price: 2753.73 },
      { time: '05-08-2002', price: 2153.45 },
      { time: '05-09-2002', price: 1955.22 },
      { time: '05-10-2002', price: 2953.62 },
      { time: '05-11-2002', price: 2853.52 },
      { time: '05-12-2002', price: 2533.36 },
      { time: '05-13-2002', price: 2656.82 },
      { time: '05-14-2002', price: 2353.73 },
      { time: '05-15-2002', price: 2253.45 },
      { time: '05-16-2002', price: 5155.22 },
    ],
  }

  let chartData = {
    labels: rawData.week.map((a) => a.time),
    datasets: [
      {
        data: rawData.week.map((a) => a.price),
        fill: true,
        pointBackgroundColor: 'rgba(33, 150, 243, 0)',
        pointBorderColor: 'rgba(33, 150, 243, 0)',
        borderColor: 'rgba(33, 150, 243, 1)',
        lineTension: 0.2,
        borderWidth: 2,
        pointRadius: 3,
        backgroundColor: gradient,
      },
    ],
  }

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(33, 150, 243, 0.8)',
        bodyColor: '#fff',
        titleColor: '#fff',
        displayColors: false,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  }

  // useEffect to set gradient useState
  useEffect(() => {
    const chart = chartRef.current

    // make sure chartRef is loaded fully
    if (chartRef?.current?.ctx) {
      // ctx is canvas rendering context
      const ctx = chartRef?.current?.ctx

      // use height to make it responsive
      const height = ctx.canvas.height

      // this does not set the chart or ctx directly, but update gradient
      var gradient = ctx.createLinearGradient(0, height * 0.3, 0, height * 0.8)
      gradient.addColorStop(0, 'rgba(33, 150, 243, 0.5)')
      gradient.addColorStop(0.35, 'rgba(33, 150, 243, 0.2)')
      gradient.addColorStop(1, 'rgba(33, 150, 243, 0)')

      setGradient(gradient)
    }
  }, [chartRef])

  return (
    <div className={styles.container}>
      <div>$12,453.36</div>
      <Line data={chartData} ref={chartRef} options={chartOptions} />
    </div>
  )
}

export default MyChart
