import React, { useEffect, useState } from 'react';

import { articles } from 'services/newsService';

import { NewsItem } from 'components';

const LIMIT = 8;
const AllNews = () => {
  // State
  const [articlesData, setArticlesData] = useState<typeof articles>([]);
  const [nextStart, setNextStart] = useState(8);
  const [nextArticles, setNextArticles] = useState<typeof articles>([]);

  useEffect(() => {
    setArticlesData(articles.slice(0, LIMIT));
  }, []);

  useEffect(() => {
    // Prefetching next articles
    setNextArticles(articles.slice(nextStart, nextStart + LIMIT));
  }, [nextStart]);

  return (
    <>
      <div className="d-flex justify-content-between my-4">
        <div className="fw-bold">
          Recently Added
        </div>
      </div>

      <div className="row">
        {articlesData.map((article) => (
          <NewsItem key={article.id} article={article} />
        ))}
      </div>

      {(nextArticles.length !== 0) && (
      <button
        type="button" className="btn btn-light d-flex me-auto ms-auto"
        onClick={showNextArticles}>
        Show More
      </button>
      )}
    </>
  );

  function showNextArticles() {
    setArticlesData((prev) => [...prev, ...nextArticles]);
    setNextStart((prev) => prev + LIMIT);
  }
};
export default AllNews;
