
import React, { useState } from 'react';

const financialData = {
  revenue: 1500000, 
  expenses: {
    productCost: 500000,
    laborCost: 300000, 
    utilityCost: 100000, 
    otherCost: 50000,
  },
  profit: 600000,
};

const Finance = () => {
  const [data, setData] = useState(financialData);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Moliyaviy Hisobotlar</h2>

     
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '8px', width: '48%' }}>
          <h3>Jami Daromad</h3>
          <p>{data.revenue.toLocaleString()} so‘m</p>
        </div>
        <div style={{ padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '8px', width: '48%' }}>
          <h3>Jami Xarajatlar</h3>
          <p>{(data.expenses.productCost + data.expenses.laborCost + data.expenses.utilityCost + data.expenses.otherCost).toLocaleString()} so‘m</p>
        </div>
      </div>

      
      <div style={{ padding: '10px', backgroundColor: '#e0e0e0', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>Oylik Foyda</h3>
        <p>{data.profit.toLocaleString()} so‘m</p>
      </div>

     
      <div style={{ marginBottom: '20px' }}>
        <h3>Xarajatlar Tahlili</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Kategoriya</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Miqdor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Mahsulot xarajatlari</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.expenses.productCost.toLocaleString()} so‘m</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Xodimlar maoshi</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.expenses.laborCost.toLocaleString()} so‘m</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Kommunal xarajatlar</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.expenses.utilityCost.toLocaleString()} so‘m</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Boshqa xarajatlar</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{data.expenses.otherCost.toLocaleString()} so‘m</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Finance;
