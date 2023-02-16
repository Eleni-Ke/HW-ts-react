import { Button, Card } from "react-bootstrap";
import { IArticles } from "../Interfaces/IArticles";

interface SingleArticleProps {
  article: IArticles;
}

const SingleArticle = (props: SingleArticleProps) => {
  return (
    <Card className="article-card">
      <Card.Img
        variant="top"
        src={props.article.imageUrl}
        className="article-card-image"
      />
      <Card.Body>
        <Card.Title>{props.article.title}</Card.Title>
        <Card.Text>{props.article.featured}</Card.Text>
        <Button>More...</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;
