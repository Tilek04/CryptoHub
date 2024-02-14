import "./App.css";
import { Switch, Route, Link, Routes, Router } from "react-router-dom";
import { Layout, Space, Typography } from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  CryptoDetails,
  Cryptocurrencies,
  News,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="nav">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />

              {/* ... другие маршруты */}
            </Routes>
          </div>
        </Layout>
      </div>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "blue", textAlign: "center" }}>
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
}

export default App;
