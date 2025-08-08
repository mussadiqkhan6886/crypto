import React from 'react';
import { Collapse, Typography, Card, Col, Row } from 'antd';
import  {cryptoQuestions}  from '../faq';
const { Panel } = Collapse;
const { Title, Paragraph } = Typography;


const CryptoFAQ = () => {
  return (
    <div className='faq'>
    <Col span={24}>
      <Title level={1} style={{textAlign: "center"}}>
        How Does Cryptocurrency Work? A Beginner's Guide
      </Title>
    </Col>
    
    <img style={{maxWidth: "100%"}} src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/1jMs94H5AqoJqUHLFQJK1q/47d2767ef37b5809801541788f846c60/GettyImages-1317105370.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000" alt="image" />

    <p style={{padding: "10px"}}>
      Cryptocurrency is digital currency that doesn’t require a central bank or financial institution to verify transactions. Instead, this virtual currency is verified and recorded with blockchain technology, creating an unchangeable ledger that tracks trades and the purchase of digital assets. Although the first cryptocurrency emerged in 1990, the buzz surrounding cryptocurrency exchange has exploded in recent years. Despite the opportunities, market volatility reminds us to consider the risk involved in cryptocurrency trading. Whether you're interested in virtual currency for your career or to invest, understanding how cryptocurrency works is an essential first step. Learn more about cryptocurrency exchange, the crypto market, environmental impacts, and popular cryptocurrencies in the following article.
    </p>
    <Card style={{width: "100%"}} >
     
      <Collapse accordion>
        {cryptoQuestions.map((item, index) => (
          <Panel style={{fontSize: "17px"}} header={`${item.question}`} key={index}>
            <Paragraph>{item.answer}</Paragraph>
          </Panel>
        ))}
      </Collapse> 
     </Card>
    </div>
  );
};

export default CryptoFAQ;
