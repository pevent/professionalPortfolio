// App.js

import React from 'react';
import './App.css';
import AppRouter from './routes/AppRouter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <AppRouter /> {/* Use the renamed AppRouter component */
      <Footer />}
    </div>
  );
}

export default App;