import React from 'react'
import { Typography, Space, Layout } from 'antd'
import { NavBar, CryptoFAQ, Cryptocurrencies, CryptoDetails, News, HomePage} from './components'
import { Route, Routes, Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="app">
      <header className="navbar">
        <NavBar />
      </header>
      <main className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path='/' element={<HomePage />}  />
              <Route path='/cryptofaq' element={<CryptoFAQ />}  />
              <Route path='/cryptocurrencies' element={<Cryptocurrencies />}  />
              <Route path='/crypto/:coinId' element={<CryptoDetails />}  />
              <Route path='/news' element={<News />}  />
            </Routes>
          </div>
        </Layout>
      <footer className="footer">
        <Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
          CryptoVerse <br />
          All rights Reserved
        </Typography.Title>
        <Space>
          <Link to={"/"}>Home</Link>
          <Link to={"/cryptofaq"}>Crypto FAQ</Link>
          <Link to={"/news"}>News</Link>
        </Space>
      </footer>
      </main> 
    </div>
  )
}

export default App
