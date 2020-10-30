import React from 'react'
import './App.css';
import Header from './comps/Header'
import Sidebar from './comps/Sidebar'
import Feed from './comps/Feed'
import Widgets from './comps/Widgets'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />
      </div>
    </div>
  );
}

export default App;