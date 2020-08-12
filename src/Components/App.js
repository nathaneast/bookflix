import React from 'react';

import Router from './Router';
import Header from './Header';

// import { bestSellerApi } from './api'

function App() {

  // const getBestSeller = async () => {
  //   try {
  //     await bestSellerApi().then(result => {
  //       const { data: { item } } = result;
  //       // setItems(item);
  //       console.log(item)
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   getBestSeller();
  // });

  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
