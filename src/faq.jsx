import {Typography} from "antd"

const {Title, Paragraph} = Typography

export const cryptoQuestions = [
  {
    key: '1',
    question: 'What is cryptocurrency?',
    answer: 'Cryptocurrency, or crypto, is a form of digital payment. Unlike traditional currency which represents physical money, cryptocurrencies are purely digital assets. Although people use it primarily for online transactions, you can sometimes use it to purchase physical assets. While traditional payment methods are regulated by central banks and the government, cryptocurrency is decentralized, meaning it isn\'t controlled by one central authority. '
  },
  {
    key: '2',
    question: 'How does cryptocurrency work?',
    answer: "Cryptocurrencies are based on blockchain technology, making them very secure, although it’s still up to investors to choose trustworthy exchanges. Cryptographic techniques (the process of writing and deciphering code) are used to issue, verify, and secure transactions. Through public ledgers, transactions remain traceable and unable to be counterfeited. This peer-to-peer digital asset system makes it fast, easy, and inexpensive to send and receive payments worldwide. There\'s no currency exchange needed, nor are there hefty fees. Transactions using these financial assets are publicly recorded, stored digitally, and transmitted via encryption, with detailed coding required for transmission and storage"
  },
  {
    key: '3',
    question: 'How is cryptocurrency different from traditional currency?',
    answer: 'The government produces traditional currency in paper bills and coins you can carry with you or put in a bank to use for purchases and transactions. You store cryptocurrencies in a digital wallet or, crypto wallet, requiring a private key to access. The government backs traditional currency, while cryptocurrency has no government, bank, or financial institution controls. Banks insure money kept in bank accounts against loss, while crypto has no recourse in the event of a loss. '
  },
  {
    key: '4',
    question: 'How is the price of cryptocurrency determined?',
    answer: 'Cryptocurrencies are fungible, meaning the value remains the same when bought, sold, or traded. It is not the same as non-fungible tokens (NFTs), which have fluctuating values dependent on many variables, such as the digital asset it’s attached to. The market capitalization of crypto depends on the number of coins in circulation. Although the cryptocurrency market is not heavily regulated by the US government, they are taxable assets. You’ll need to file any profit or loss with the Internal Revenue Service (IRS).'
  },
  {
    key: '5',
    question: 'What is cryptocurrency mining?',
    answer: 'Cryptocurrency mining is the term used to describe the creation of cryptocurrency. Crypto transactions need to be validated, and mining performs the validation and creates new cryptocurrency through the use of. specialized hardware and software that adds transactions to the blockchain. Not all cryptocurrency comes from mining. For example, crypto that you can’t spend isn\'t mined. Instead, developers create the new currency through a hard fork, which creates a new chain in the blockchain. One fork follows the new path, and the other follows the old. Crypto assets you can’t mine are typically used for investments rather than purchases.'
  },
  {
    key: '6',
    question: 'Is cryptocurrency a good investment?',
    answer: 'Crypto investing has a lot of hype surrounding it. For novice investors, it can be easy to become overwhelmed and overextended. That’s why it’s essential to have a solid, foundational knowledge of crypto technology before investing. Whether or not cryptocurrency is a good investment depends on your goals. To guide your decision-making process, learn as much as you can about how blockchain technology works and how the crypto market operates first. Key concepts include decentralization, self-custody of crypto assets, and the difference between a centralized exchange (CEX) and a decentralized exchange (DEX). You can also read each cryptocurrency\'s white papers to learn more about the crypto project developers goals and details. It\'s essential to define your goals, weigh the benefits and risks, and understand how the industry works.'
  },
  {
    key: '7',
    question: 'What are the advantages of using cryptocurrency?',
    answer: 'When it comes to cryptocurrency as a medium of exchange, there are some advantages to it versus traditional currency. One advantage being privacy. Although cryptocurrency payments are on public record and anyone can look up transaction information and see the contents of a crypto wallet, you don\'t need to provide any personal information. This mix of privacy and transparency makes it easy to reduce fraudulent activities like identity theft while also proving transactions were carried out correctly. And no matter what happens to the government, your investment is secure. Another advantage of cryptocurrency is that it’s global, so there’s no need to figure or pay foreign exchange rates, although cryptocurrency isn’t legal in some countries. You also don’t need to worry about bank account restrictions, such as ATM withdrawal limits. '
  },
  {
    key: '8',
    question: 'What are the types of cryptocurrency?',
    answer: 'Cryptocurrency is available as coins or tokens. The difference between them is that tokens are assets that exist on a blockchain, while coins can be virtual, digital, or tangible. Coins are more like traditional money; a digital coin has its own blockchain. Conversely, a token is created on an existing blockchain and can be used as currency or to represent asset ownership. The first cryptocurrency introduced was Bitcoin, the most commonly traded one. Ethereum is the second most valuable cryptocurrency and can be used for complex transactions. Other more common cryptocurrencies, called altcoins, include Cardano, Solana, and XRP. '
  },
  {
    key: '9',
    question: 'Can crypto exchanges be centralized?',
    answer: 'In a way, yes. A centralized crypto exchange platform functions as a middleman between buyers and sellers and holds your deposited money, similar to a traditional bank. You can also use these platforms to watch market fluctuations. Once an order is placed, the exchange platform finds a buyer or seller that matches your desired action and coins or tokens. Some exchanges include Robinhood, Gemini, Coinbase, and Webull. Keep in mind that centralized exchanges often charge higher transaction fees than its decentralized counterparts and are more vulnerable to hacking.  '
  },
 {
  key: '10',
  question: 'What are the types of cryptocurrency investments?',
  answer: (
    <>
      <Paragraph>
        People often invest in crypto in a few different ways: as a personal hobby, a wealth-building strategy,
        or as part of their profession. The crypto investment buzz has made hobby-level investing popular,
        particularly among younger investors.
      </Paragraph>

      <Title level={5}>1. Short-term crypto investment (cryptocurrency trading)</Title>
      <Paragraph>
        As 2022's crypto crash demonstrated, the crypto market is volatile and unpredictable.
        Trading is a popular short-term crypto investment strategy that requires you to buy and sell
        based on when you expect prices to increase or decrease.
      </Paragraph>
      <Paragraph>
        Many short-term traders watch average prices over a period to get a feel for how they're trending.
        Having technical analysis skills — using past patterns and prices for the crypto investment
        you're considering — is an essential skill to master.
      </Paragraph>
      <Paragraph>
        Read more:{' '}
        <a href="https://www.coursera.org/articles/how-to-trade-cryptocurrency" target="_blank" rel="noopener noreferrer">
          How to Trade Cryptocurrency: A Practical Guide for Beginners
        </a>
      </Paragraph>

      <Title level={5}>2. Long-term crypto investment</Title>
      <Paragraph>
        If you approach crypto investment as a long-term strategy, the ups and downs will likely be less concerning
        since short-term fluctuations will impact your strategy differently.
      </Paragraph>
      <Paragraph>
        Consider how much Bitcoin has appreciated since launching in 2009 — by approximately 12,000%.
        Ethereum, which hit the market in 2015, has appreciated at an even higher rate, exceeding 92,000%.
      </Paragraph>
      <Paragraph>
        While both values have fluctuated wildly in the short term, investors who approached them
        as long-term investments reaped the rewards.
      </Paragraph>
      <Paragraph>
        Additionally, some experts expect emerging technologies, new regulations, and more widespread adoption
        to fuel the growth of the cryptocurrency industry.
      </Paragraph>
      <Paragraph>
        Read more:{' '}
        <a href="https://www.coursera.org/articles/how-to-buy-cryptocurrency" target="_blank" rel="noopener noreferrer">
          How to Buy Cryptocurrency
        </a>
      </Paragraph>
    </>
  ),
  },
  {
    key: '11',
    question: 'Is cryptocurrency safe?',
    answer: 'Not all cryptocurrencies are created equally, and you\'ll have to do your own research into individual coins and tokens before making investments, especially if they are new. As for the technology itself, popular cryptocurrencies like Bitcoin and Ethereum rely on the blockchain to record and process transactions securely, which is widely regarded as an extremely secure platform. Criticisms of crypto include price instability and environmental concerns. According to a study by Statista, the average level of energy consumption for a single Bitcoin transaction could be the equivalent of hundreds of thousands of VISA card transactions. Familiarizing yourself with blockchain technology can help you build a better understanding of how cryptocurrency works, so you can make the best choices for yourself. Before investing, you might consider enrolling in an online course like Princeton University\'s Bitcoin and Cryptocurrency Technologies.'
  },
  {
    key: '12',
    question: 'How to get started with cryptocurrency?',
    answer: (
      <>
        <Paragraph>
          To get started with cryptocurrency, you’ll need to choose a broker or crypto exchange.
          An exchange is an online platform where you can trade cryptocurrencies. Brokers use
          interfaces that interact with exchanges. An exchange allows you to trade without a third party.
        </Paragraph>
        <Paragraph>
          A broker can do that for you. Here are the first steps you'll need to take:
        </Paragraph>

        <Title level={5}>Step 1: Create and fund your account</Title>
        <Paragraph>
          You’ll want to keep a form of identification nearby since some platforms require it.
          Once you verify your identity, you can fund your account. Depending on your funding method,
          you may need to wait a few days for it to clear.
        </Paragraph>

        <Title level={5}>Step 2: Buy crypto</Title>
        <Paragraph>
          You can make your first cryptocurrency purchase when your account is set up and verified.
          You’ll need to enter the ticker symbol and the amount you wish to purchase.
        </Paragraph>

        <Title level={5}>Step 3: Select a storage method</Title>
        <Paragraph>
          Most often, you’ll store cryptocurrency in a crypto wallet:
        </Paragraph>
        <ul>
          <li><b>Hot wallets:</b> Online access, easy but higher security risk.</li>
          <li><b>Cold wallets:</b> Offline storage like USB, safer but less convenient.</li>
        </ul>
      </>
    )
  },
  {
    key: '13',
    question: '8 Cryptocurrencies to Watch in 2025',
    answer: (
      <>
        <Paragraph>Here are some cryptos with higher market caps and relatively more stability:</Paragraph>
        <ul>
          <li><b>Bitcoin (BTC)</b> – $1.63 trillion: “Digital gold” with blockchain-based security.</li>
          <li><b>Ethereum (ETH)</b> – $215.67 billion: Supports dApps and smart contracts.</li>
          <li><b>Tether (USDT)</b> – $144.17 billion: A stablecoin tied to USD for less volatility.</li>
          <li><b>USD Coin (USDC)</b> – $60.91 billion: Another USD-backed stablecoin on Ethereum.</li>
          <li><b>XRP (XRP)</b> – $119.25 billion: Used on Ripple for payments and trades.</li>
          <li><b>Cardano (ADA)</b> – $22.61 billion: Stakeable coin for investment and transactions.</li>
          <li><b>Solana (SOL)</b> – $59.30 billion: Fast blockchain supporting DeFi and dApps.</li>
          <li><b>Avalanche (AVAX)</b> – $59.30 billion: Ethereum competitor with proof-of-stake.</li>
        </ul>
      </>
    )
  }
]