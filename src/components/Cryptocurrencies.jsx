import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Row, Card, Col, Input } from 'antd'
import { useGetCryptoQuery } from '../services/cryptoApi'
import Loader from './Loader'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100
  const {data: cryptosList, isFetching} = useGetCryptoQuery(count)
  const [cryptos, setCryptos] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {

    const filtered = cryptosList?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchInput.toLowerCase()))

    setCryptos(filtered)

  }, [cryptosList, searchInput])


  if(isFetching) return <Loader />

  return (
    <>
    {!simplified && (
      <div className="search-crypto">
        <Input placeholder='Search Cryptocurrency' onChange={e => setSearchInput(e.target.value)} />
      </div>
    )}
      <Row gutter={[28,28]} className='crypto-card-container'>
        {cryptos?.map(currency => (
          <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card 
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl} />} 
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row> 
    </>
  )
}

export default Cryptocurrencies
