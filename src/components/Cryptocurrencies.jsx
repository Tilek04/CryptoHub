import React, { useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplifyed }) => {
  const count = simplifyed ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // const cryptos = cryptosList?.data?.coins;
  const [cryptos, setCryptos] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setCryptos(filterData);
  }, [cryptosList, searchTerm]);

  if (!cryptos) {
    return null;
  }
  if (isFetching) return "LOADING...";

  return (
    <>
      <div className="search">
        <Input
          placeholder="Search Cryptocurrency"
          onChange={(e) => setSearchTerm(e.target.value)}></Input>
      </div>
      <Row gutter={[32, 32]} className="crypto-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-img"
                    src={currency.iconUrl}
                    alt={currency.name}
                    style={{ width: "40px" }}
                    hoverable
                  />
                }>
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
