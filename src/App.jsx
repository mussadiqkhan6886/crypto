import React from 'react'
import { Typography, Space, Layout } from 'antd'
import { NavBar, Exchange, Cryptocurrencies, CryptoDetails, News, HomePage} from './components'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <header className="nav">
        <NavBar />
      </header>
      <main className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<HomePage />}  />
              <Route path='/exchange' element={<Exchange />}  />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />}  />
              <Route path='/crypto/:coinId' element={<CryptoDetails />}  />
              <Route path='/news' element={<News />}  />
            </Routes>
          </div>
        </Layout>
      </main>
      <footer className="footer">

      </footer>
    </div>
  )
}

export default App
