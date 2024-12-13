import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import moment from 'moment';

const { Title, Text } = Typography;
//news api needs premium plan now maybe so demo news for showing
const demoNews = [
  {
    name: 'Bitcoin Breaks $60,000 Again!',
    url: 'https://example.com/news1',
    description: 'Bitcoin surpasses $60,000 for the second time this year.',
    provider: [{ name: 'CryptoNews' }],
    datePublished: '2023-10-10T12:00:00Z',
  },
  {
    name: 'Ethereum Hits All-Time High!',
    url: 'https://example.com/news2',
    description: 'Ethereum reaches a record price as market booms.',
    provider: [{ name: 'CryptoInsider' }],
    datePublished: '2023-10-11T12:00:00Z',
  },
  {
    name: 'Dogecoin Jumps 15% After Elon Musk Tweet!',
    url: 'https://example.com/news3',
    description: 'Dogecoin sees a 15% surge following Elon Musk’s latest tweet.',
    provider: [{ name: 'MemeCoin Times' }],
    datePublished: '2023-10-12T08:00:00Z',
  },
  {
    name: 'Litecoin Adoption Rises Among Merchants',
    url: 'https://example.com/news4',
    description: 'Litecoin sees increased adoption for payments across e-commerce platforms.',
    provider: [{ name: 'CryptoDaily' }],
    datePublished: '2023-10-12T10:00:00Z',
  },
  {
    name: 'Blockchain Tech Revolutionizing Supply Chains',
    url: 'https://example.com/news5',
    description: 'Supply chain management is being transformed by blockchain technology.',
    provider: [{ name: 'TechNews' }],
    datePublished: '2023-10-13T09:30:00Z',
  },
  {
    name: 'Solana Outpaces Ethereum in Transaction Speed',
    url: 'https://example.com/news6',
    description: 'Solana’s lightning-fast transactions attract developers and investors.',
    provider: [{ name: 'CryptoFocus' }],
    datePublished: '2023-10-13T15:00:00Z',
  },
  {
    name: 'Ripple Wins Key Legal Battle Against SEC',
    url: 'https://example.com/news7',
    description: 'Ripple celebrates a major victory in its ongoing lawsuit with the SEC.',
    provider: [{ name: 'FinanceWorld' }],
    datePublished: '2023-10-14T12:00:00Z',
  },
  {
    name: 'Tether Launches New Stablecoin in Asia',
    url: 'https://example.com/news8',
    description: 'Tether introduces a new stablecoin pegged to the Asian market currencies.',
    provider: [{ name: 'Stablecoin Journal' }],
    datePublished: '2023-10-14T14:00:00Z',
  },
  {
    name: 'Cardano’s Smart Contracts Reach 100K Milestone',
    url: 'https://example.com/news9',
    description: 'Cardano celebrates over 100,000 smart contracts deployed on its blockchain.',
    provider: [{ name: 'Blockchain Today' }],
    datePublished: '2023-10-15T09:00:00Z',
  },
  {
    name: 'Crypto Market Sees Largest Single-Day Gain of 2023',
    url: 'https://example.com/news10',
    description: 'The crypto market experiences its biggest one-day surge this year.',
    provider: [{ name: 'MarketWatch' }],
    datePublished: '2023-10-15T11:00:00Z',
  },
  {
    name: 'Regulators Eye Stricter Rules for DeFi Projects',
    url: 'https://example.com/news11',
    description: 'DeFi platforms face scrutiny as regulators propose stricter rules.',
    provider: [{ name: 'CryptoRegulation News' }],
    datePublished: '2023-10-16T08:00:00Z',
  },
  {
    name: 'Polkadot Announces Parachain Upgrade',
    url: 'https://example.com/news12',
    description: 'Polkadot introduces significant upgrades to its parachain ecosystem.',
    provider: [{ name: 'Polkadot Insider' }],
    datePublished: '2023-10-16T14:00:00Z',
  },
  {
    name: 'Bitcoin Mining Energy Debate Heats Up',
    url: 'https://example.com/news13',
    description: 'The environmental impact of Bitcoin mining remains a hot topic.',
    provider: [{ name: 'EcoCrypto News' }],
    datePublished: '2023-10-17T10:00:00Z',
  },
  {
    name: 'NFTs Still Popular Despite Bear Market',
    url: 'https://example.com/news14',
    description: 'NFTs continue to thrive with innovative use cases despite market conditions.',
    provider: [{ name: 'DigitalAssets Journal' }],
    datePublished: '2023-10-17T12:00:00Z',
  },
];

const News = () => {
  return (
    <Row gutter={[24, 24]}>
      {demoNews.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <div className="news-image-container">
              <Title className="news-title" level={4}>
                {news.name}
              </Title>
            </div>
            <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
            <div className="provider-container">
              <div>
                <Text className="provider-name">{news.provider[0]?.name}</Text>
              </div>
              <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
