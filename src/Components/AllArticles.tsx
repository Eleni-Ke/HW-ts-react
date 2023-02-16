import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IArticles } from "../Interfaces/IArticles";
import SingleArticle from "./SingleArticle";

// interface AllArticleProps {}

const AllArticles = () => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles";
  const [articles, setArticles] = useState<IArticles[]>([]);
  const fetchArticles = async () => {
    try {
      let res = await fetch(url);
      if (res.ok) {
        let articlesFromApi = await res.json();
        console.log(articlesFromApi);
        setArticles(articlesFromApi);
      } else {
        console.log("Error!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container className="all-articles-container">
      <h2>All the articles:</h2>
      <Row className="all-articles">
        {articles.map((a) => (
          <Col className="text-dark" key={a.id}>
            <SingleArticle article={a} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllArticles;
