import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import { useState } from "react";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import {
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  console.log(data)

  return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
