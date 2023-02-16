import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { IArticles } from "../Interfaces/IArticles";

interface DisplayArticleDetailsProps {
  currentArticleId: string;
}

const DisplayArticleDetails = (props: DisplayArticleDetailsProps) => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles/";
  const [article, setArticle] = useState<IArticles>();
  const fetchArticleDetail = async () => {
    try {
      let res = await fetch(url + props.currentArticleId);
      if (res.ok) {
        let articleDetails = await res.json();
        console.log(articleDetails);
        setArticle(articleDetails);
      } else {
        console.log("There has been an error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArticleDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="article-details-container">
      <h3>This is the id: {props.currentArticleId}</h3>
      <Card className="article-details-card">
        <Card.Img
          variant="top"
          src={article?.imageUrl}
          style={{ height: "10rem" }}
        />
        <Card.Body>
          <Card.Title>{article?.title}</Card.Title>
          <Card.Text>{article?.summary}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayArticleDetails;
