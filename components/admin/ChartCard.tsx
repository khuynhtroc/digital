"use client";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", views: 120 },
  { day: "Tue", views: 150 },
  { day: "Wed", views: 180 },
  { day: "Thu", views: 100 },
  { day: "Fri", views: 220 },
  { day: "Sat", views: 300 },
  { day: "Sun", views: 250 },
];

export default function ChartCard() {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-sm text-gray-500 mb-3">Traffic (7 ngày)</h3>
      <LineChart width={500} height={250} data={data}>
        <Line type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={2} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
}
