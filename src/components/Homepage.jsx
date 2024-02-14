import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";
import "./styles/home.css";

const { Title } = Typography;
function Homepage() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data);

  if (isFetching) return "Loading";

  return (
    <div className="main-container">
      <Title level={2} className="heading" style={{ color: "white" }}>
        Global Crypto Stats
      </Title>
      <Row className="table">
        <Col span={12}>
          <Statistic
            style={{ display: "flex", paddingLeft: '40px', paddingTop: '15px' }}
            title={
              <span style={{ color: "#09eab4", fontSize: "25px" }}>
                Total Cryptocurrencies:
              </span>
            }
            value={globalStats.total}
            valueStyle={{ color: "white", paddingLeft: "20px" }}
          />{" "}
        </Col>
        <Col span={12}>
          <Statistic
            style={{ display: "flex", paddingLeft: '40px', paddingTop: '15px' }}
            valueStyle={{ color: "white", paddingLeft: "20px" }}
            title={
              <span style={{ color: "#09eab4", fontSize: "25px" }}>
                Total Exchanges:
              </span>
            }
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            style={{ display: "flex", paddingLeft: '40px', paddingTop: '15px' }}
            valueStyle={{ color: "white", paddingLeft: "20px" }}
            title={
              <span style={{ color: "#09eab4", fontSize: "25px" }}>
                Total Market Cap:
              </span>
            }
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            style={{ display: "flex", paddingLeft: '40px', paddingTop: '15px' }}
            valueStyle={{ color: "white", paddingLeft: "20px" }}
            title={<span style={{ color: '#09eab4', fontSize: '25px' }}>Total 24h Volume:</span>}

            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            style={{ display: "flex", paddingLeft: '40px', paddingTop: '15px' }}
            valueStyle={{ color: "white", paddingLeft: "20px"  }}
            title={<span style={{ color: '#09eab4', fontSize: '25px' }}>Total Markets:</span>}

            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-container">
        <Title level={1} className="home-title"  style={{color: 'white'}}>
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies" >Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplifyed />
    </div>
  );
}

export default Homepage;
