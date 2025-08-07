import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const MOOD_COLORS = {
  happy: '#FFCE56',
  sad: '#36A2EB',
  angry: '#FF0000',
  relaxed: '#72ff56ff',
  energetic: '#845EC2',
  melancholic: '#FF6F91',
  unknown: '#CCCCCC', 
};

const MoodPieChart = ({ moodSummaries }) => {
    const tagCounts = moodSummaries.reduce((acc, item) => {
        acc[item.tag] = (acc[item.tag] || 0) + 1;
        return acc;
    }, {});

    const data = Object.entries(tagCounts).map(([tag, count]) => ({
        name: tag,
        value: count
    }));

    return (
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '20px' }}>Mood Tag Distribution</h3>
            <PieChart width={400} height={300}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                    dataKey="value"
                >
                    {data.map((entry) => (
                        <Cell key={`cell-${entry.name}`} fill={MOOD_COLORS[entry.name] || '#999999'} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default MoodPieChart;