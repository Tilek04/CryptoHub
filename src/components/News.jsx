import { useGetNewsQuery } from "../services/newsApi";
import { Card, Row, Col, Input, Typography } from "antd";

const News = ({ simplifyed }) => {
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplifyed ? 10 : 100,
  });

  const { Title } = Typography;

  return (
    <>
      <Row gutter={[24, 24]}>
        {cryptoNews?.data?.map((news) => (
          <Col xs={24} sm={12} lg={8} key={news.id}>
            <Card hoverable className="newsBlock">
              <a href={news.url} target="_blank">
                <div className="news-container" style={{display: 'flex'}}>
                  <Title className="newsTitle" level={5}>
                    {news.title}
                  </Title>
                  <img src={news.thumbnail} style={{ width: "50%", height: '50%' }} />
                
                </div>
             
                <p>{news.description}</p>
                <p style={{color: 'grey', fontSize: '13px'}}>{news.createdAt}</p>
            
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
