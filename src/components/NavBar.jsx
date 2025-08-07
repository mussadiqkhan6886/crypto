import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from "../images/cryptocurrency.png"
import { useState, useEffect } from 'react'

const NavBar = () => {

  const [activeMenu, setActiveMenu] = useState(true)
  const [screenSize, setScreenSize] = useState(null)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if(screenSize , 768){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <nav className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size={"large"} />
        <Typography.Title level={2} className='logo'>
            <Link to={"/"}>CryptoVerse</Link>
        </Typography.Title>
        <div className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </div>
      </div>
      {activeMenu && (
        <Menu theme='dark'>
        <Menu.Item key={1} icon={<HomeOutlined />} >
            <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key={2} icon={<FundOutlined />} >
            <Link to={"/cryptocurrencies"}>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item key={3} icon={<MoneyCollectOutlined />} >
            <Link to={"/exchange"}>Exchanges</Link>
        </Menu.Item>
        <Menu.Item key={4} icon={<BulbOutlined />} >
            <Link to={"/news"}>News</Link>
        </Menu.Item>
      </Menu>
      )}
    </nav>
  )
}

export default NavBar
