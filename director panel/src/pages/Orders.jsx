import React, { useState } from 'react';


const ordersData = [
  { 
    id: 1, 
    tableNumber: 5, 
    time: '2025-05-10 12:30', 
    total: 35000, 
    status: 'Yangi',
    items: ['Osh', 'Shashlik', 'Choy']
  },
  { 
    id: 2, 
    tableNumber: 3, 
    time: '2025-05-10 13:00', 
    total: 45000, 
    status: 'Bajarilgan',
    items: ['Pitsa', 'Gazak', 'Kolbasa']
  },
  { 
    id: 3, 
    tableNumber: 8, 
    time: '2025-05-10 13:15', 
    total: 15000, 
    status: 'Bajarilgan',
    items: ['Shirinlik', 'Salat']
  },
  { 
    id: 4, 
    tableNumber: 2, 
    time: '2025-05-10 13:30', 
    total: 50000, 
    status: 'Yangi',
    items: ['Shashlik', 'Pilaf', 'Kofe']
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);
  const [filter, setFilter] = useState('all');

  const filteredOrders = filter === 'all' ? orders : orders.filter(order => order.status === filter);

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Buyurtmalar</h2>

     
      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => setFilter('all')}>Barchasi</button>
        <button onClick={() => setFilter('Yangi')}>Yangi</button>
        <button onClick={() => setFilter('Bajarilgan')}>Bajarilgan</button>
      </div>

    
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Buyurtma ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Stol Raqami</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Vaqt</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Jami Narx</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Holat</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Zakaz Qilingan Taomlar</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Harakatlar</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.tableNumber}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.time}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.total.toLocaleString()} so‘m</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.status}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{order.items.join(', ')}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button onClick={() => updateStatus(order.id, 'Bajarilgan')}>Bajarilgan</button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
