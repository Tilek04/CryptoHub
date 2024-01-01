import { useState } from "react";
import { useGetNewsQuery } from "../services/newsApi";
import { Card, Row, Col, Input, Typography, Select } from "antd";

const News = ({ simplifyed }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { data: cryptoNews } = useGetNewsQuery({ newsCategory, count: simplifyed ? 10 : 100 });
  const { Title } = Typography;

  const filteredNews = cryptoNews?.data?.filter(news =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    news.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Input
        placeholder="Search news"
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: '24px' }}
      />

      <Row gutter={[24, 24]}>
        {filteredNews?.map((news) => (
          <Col xs={24} sm={12} lg={8} key={news.id}>
            <Card hoverable className="newsBlock">
              <a href={news.url} target="_blank" rel="noopener noreferrer">
                <div className="news-container" style={{ display: "flex" }}>
                  <Title className="newsTitle" level={5}>
                    {news.title}
                  </Title>
                  <img
                    src={news.thumbnail}
                    alt={news.title}
                    style={{ width: "50%", height: "50%" }}
                  />
                </div>

                <p>{news.description}</p>
                <p style={{ color: "grey", fontSize: "13px" }}>
                  {news.createdAt}
                </p>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
