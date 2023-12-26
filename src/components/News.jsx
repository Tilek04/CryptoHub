import { useGetNewsQuery } from "../services/newsApi";
import { Card, Row, Col, Input, Typography } from "antd";

const News = ({ simplifyed }) => {
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplifyed ? 10 : 100
  });

  const { Title } = Typography;

  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoNews?.data?.map((news) => (
          <Col xs={24} sm={12} lg={8} key={news.id}>
            <Card hoverable className="newsBlock">
              <a href={news.url} target="_blank">
                <div className="news-container">
                  <Title className="newsTitle" level={4}>
                    {news.title}
                  </Title>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
