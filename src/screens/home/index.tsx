import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { articles } from 'services/newsService';

import { NewsItem } from 'components';
import Banner from './components/banner';

const Home = () => {
  // State
  const [articlesData, setArticlesData] = useState<typeof articles>([]);
  useEffect(() => {
    // If this was an API call, a good idea here is to save the results in a store (redux store or similar)
    // as those results will be used in the all news page
    setArticlesData(articles.slice(0, 8));
  }, []);

  return (
    <>
      <Banner />

      <div className="d-flex justify-content-between my-4">
        <div className="fw-bold">
          Recently Added
        </div>
        <Link to="/news" className="btn btn-light">
          Show All
        </Link>
      </div>

      <div className="row">
        {articlesData.map((article) => (
          <NewsItem key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};
export default Home;
