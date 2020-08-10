import React, { useState, useEffect } from 'react';
import { bestSellerApi } from './api'

function App() {
  const [items, setItems] = useState([]);

  const getBestSeller = async () => {
    try {
      await bestSellerApi().then(result => {
        const { data: { item } } = result;
        // setItems(item);
        console.log(item)
      });
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getBestSeller();
  });

  return (
    <div className="App">
    </div>
  );
}

export default App;
