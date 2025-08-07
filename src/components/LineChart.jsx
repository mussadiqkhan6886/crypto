import React from 'react';
import { Col, Row, Typography } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const { Title } = Typography;

const LineChartComponent = ({ coinHistory, currentPrice, coinName }) => {
  const coinChartData = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
  coinChartData.push({
    price: Number(coinHistory.data.history[i].price),
    timestamp: new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString(), 
  });
}



  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart</Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={coinChartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#0071bd" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartComponent;
