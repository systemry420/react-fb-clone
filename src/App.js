import React from 'react'
import './App.css';
import Header from './comps/Header'
import Sidebar from './comps/Sidebar'
import Feed from './comps/Feed'
import Widgets from './comps/Widgets'
import Login from './comps/Login'

function App() {
  const user = null;

  return (
    <div className="app">
      {/* if user not logged in then go to login, else display main content */}

      {!user ? (
        <Login />
      ): (
        <div>
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
      )
      }
    </div>
  );
}

export default App;