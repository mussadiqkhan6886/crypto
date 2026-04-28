# CryptoVerse 💹

> A cryptocurrency tracking dashboard built with React, Redux Toolkit, and real-time market data.

**Live Demo:** [cryptoverseredux.netlify.app](https://cryptoverseredux.netlify.app/)

---

## Overview

CryptoVerse is a responsive crypto dashboard that displays real-time prices, market stats, and news for 100+ cryptocurrencies. Built to practice React architecture, Redux Toolkit for global state, and RTK Query for efficient API data fetching.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React |
| **State Management** | Redux Toolkit + RTK Query |
| **UI Library** | Ant Design |
| **APIs** | CoinRanking API · Bing News API |
| **Charts** | Chart.js / react-chartjs-2 |
| **Routing** | React Router v6 |
| **Deployment** | Netlify |

---

## Features

- Live prices and stats for 100+ cryptocurrencies
- Historical price charts per coin
- Global crypto market overview — total market cap, volume, dominance
- Crypto news feed filtered by coin
- Search and filter coins by name
- Fully responsive layout

---

## What I Practised

- **RTK Query** — data fetching, caching, and auto-refetching without manual `useEffect` calls
- **Redux Toolkit** — clean global state with `createSlice` and `configureStore`
- **Component architecture** — reusable components with props-driven rendering
- **API integration** — working with RapidAPI endpoints and handling loading/error states
- **Responsive UI** — Ant Design grid system across mobile and desktop

---

## Run Locally

```bash
git clone https://github.com/mussadiqkhan6886/crypto.git
cd crypto
npm install
```

Create a `.env` file with your RapidAPI keys:

```env
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
REACT_APP_CRYPTO_RAPIDAPI_HOST=coinranking1.p.rapidapi.com
REACT_APP_NEWS_RAPIDAPI_HOST=bing-news-search1.p.rapidapi.com
```

```bash
npm start
```

---

## Note

This project was built as a learning exercise to practice Redux Toolkit and RTK Query patterns. For production client work, see [my portfolio](https://mussadiqkhan.vercel.app/).

---

*Built by [Mussadiq Khan](https://mussadiqkhan.vercel.app/)*
