import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

function ProjectionChart({ data }) {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            
            <Line
                type="monotone"
                dataKey="withReinvest"
                stroke="#2563eb"
                strokeWidth={3}
                name="With Reinvestment"
            />

            <Line
                type="monotone"
                dataKey="withoutReinvest"
                stroke="#dc2626"
                strokeWidth={3}
                name="Without Reinvestment"
            />
            </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ProjectionChart