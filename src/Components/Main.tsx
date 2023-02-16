import { useState } from "react";
import AllArticles from "./AllArticles";
import DisplayArticleDetails from "./DisplayArticleDetails";

const Main = () => {
  const [currentArticleId, setCurrentArticleId] = useState({
    id: "18202",
  });
  return (
    <div className="main-container">
      <AllArticles />
      <DisplayArticleDetails currentArticleId={currentArticleId.id} />
    </div>
  );
};

export default Main;
