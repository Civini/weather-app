import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function TemperatureChart({ hourly }) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        📈 Temperature 
      </h2>

      <div className="max-w-5xl mx-auto bg-white/15 backdrop-blur-xl rounded-3xl p-6 shadow-xl">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={hourly}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />

            <XAxis
              dataKey="time"
              stroke="#fff"
            />

            <YAxis
              stroke="#fff"
              unit="°"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="temp"
              stroke="#874fff"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TemperatureChart;