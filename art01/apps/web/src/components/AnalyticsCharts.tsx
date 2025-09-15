'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockData = [
  { name: 'Jan', donations: 4000, hours: 2400, score: 2400 },
  { name: 'Feb', donations: 3000, hours: 1398, score: 2210 },
  { name: 'Mar', donations: 2000, hours: 9800, score: 2290 },
  { name: 'Apr', donations: 2780, hours: 3908, score: 2000 },
  { name: 'May', donations: 1890, hours: 4800, score: 2181 },
  { name: 'Jun', donations: 2390, hours: 3800, score: 2500 },
  { name: 'Jul', donations: 3490, hours: 4300, score: 2100 },
];

export default function AnalyticsCharts() {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Donations Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="donations" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      <h3 className="text-xl font-bold mt-8 mb-4">Volunteer Hours vs. Wellbeing Scores</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="hours" stroke="#82ca9d" />
          <Line type="monotone" dataKey="score" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
