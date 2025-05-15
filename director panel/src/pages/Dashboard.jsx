
import React, { useState } from 'react';


const dailyData = [
  { name: 'Dushanba', revenue: 4000000 },
  { name: 'Seshanba', revenue: 3000000 },
  { name: 'Chorshanba', revenue: 5000000 },
  { name: 'Payshanba', revenue: 2780000 },
  { name: 'Juma', revenue: 1890000 },
  { name: 'Shanba', revenue: 2390000 },
  { name: 'Yakshanba', revenue: 3490000 },
];

const weeklyData = [
  { name: 'Hafta 1', revenue: 3000000 },
  { name: 'Hafta 2', revenue: 45000000 },
  { name: 'Hafta 3', revenue: 42000000 },
  { name: 'Hafta 4', revenue: 2300000 },
];

const monthlyData = [
  { name: 'Yanvar', revenue: 100000000 },
  { name: 'Fevral', revenue: 100000000 },
  { name: 'Mart', revenue: 100000000 },
  { name: 'Aprel', revenue: 100000000 },
  { name: 'May', revenue: 100000000 },
  { name: 'Iyun', revenue: 100000000 },
  { name: 'Iyul', revenue: 100000000 },
  { name: 'Avgust', revenue: 100000000 },
  { name: 'Sentyabr', revenue: 100000000 },
  { name: 'Oktyabr', revenue: 100000000 },
  { name: 'Noyabr', revenue: 100000000 },
  { name: 'Dekabr', revenue: 100000000 },
];

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily'); // Periodni tanlash

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const getData = () => {
    switch (selectedPeriod) {
      case 'daily':
        return dailyData;
      case 'weekly':
        return weeklyData;
      case 'monthly':
        return monthlyData;
      default:
        return dailyData;
    }
  };


  const totalRevenue = getData().reduce((acc, curr) => acc + curr.revenue, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tushumlar</h2>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => handlePeriodChange('daily')}>Kunlik</button>
        <button onClick={() => handlePeriodChange('weekly')}>Haftalik</button>
        <button onClick={() => handlePeriodChange('monthly')}>Oylik</button>
      </div>

      <div>
        <h3>{selectedPeriod === 'daily' ? 'Kunlik' : selectedPeriod === 'weekly' ? 'Haftalik' : 'Oylik'} Tushumlar</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Kun / Hafta / Oy</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Tushum (so‘mda)</th>
            </tr>
          </thead>
          <tbody>
            {getData().map((data, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.revenue.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
    
        <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
          Jami Tushum: {totalRevenue.toLocaleString()} so‘m
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
