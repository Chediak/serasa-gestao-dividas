import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Debts = () => {
  const [debts, setDebts] = useState([]);

  useEffect(() => {
    const fetchDebts = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/debts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDebts(response.data);
    };

    fetchDebts();
  }, []);

  return (
    <div>
      <h2>Your Debts</h2>
      <ul>
        {debts.map((debt) => (
          <li key={debt.id}>
            {debt.title} - {debt.amount} ({debt.status})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Debts;
