import React from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
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
console.log(coinId);

  return <div>CryptoDetails {coinId}</div>;
};

export default CryptoDetails;
