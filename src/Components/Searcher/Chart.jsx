import React, { useCallback, useEffect, useState } from 'react'
import { PieChart, Pie, Sector } from 'recharts'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
        fontSize={25}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Effectif ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}
const Chart = () => {
  const { t } = useTranslation()
  const [activeIndex, setActiveIndex] = useState(0)
  const state = useSelector((state) => state)
  const [data, setData] = useState([])
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index)
    },
    [setActiveIndex],
  )

  useEffect(() => {
    var tempData = []
    state.ages.map((age) => {
      tempData.push({
        name: age.name,
        value: state.chercheurs.filter((chercheur) => {
          return chercheur.age.id === age.id
        }).length,
      })
    })

    setData(tempData)
  }, [state])
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PieChart width={window.innerWidth * 0.6} height={400}>
        {data.length > 0 && (
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cy={200}
            innerRadius={75}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        )}
      </PieChart>
    </div>
  )
}

export default Chart
