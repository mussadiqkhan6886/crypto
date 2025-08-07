import React from 'react'
import { useGetCryptoTagsQuery } from '../services/cryptoApi'

const Exchanges = () => {

  const { data, isFetching } = useGetCryptoTagsQuery()
  console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Exchanges
