import React from 'react';

import Navbar from './Components/Navbar';
import QuoteList from './Components/QuoteList';
import QuoteForm from './Components/QuoteForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteForm />
      <QuoteList />
    </div>
  );
}


export default App;


