import React, { useEffect, useState } from 'react';
import moment from 'moment';

import { articles } from 'services/newsService';

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
          Recentrly Added
        </div>
        <button type="button" className="btn btn-light">
          Show All
        </button>
      </div>

      <div className="row">
        {articlesData.map((article) => (
          <div key={article.id} className="card col-lg-3 col-sm-4 mb-4 border-0">
            <div
              className="card-img-top card-bg-img"
              style={{ backgroundImage: `url(${article.urlToImage})` }} />

            <div className="card-body">
              <h5 className="card-title">
                {article.title.slice(0, 45)}
                {article.title.length > 45 && '...'}
              </h5>
              <small className="card-text text-muted">
                {moment(article.publishedAt).format('MMM DD/YYYY hh:mm a')}
              </small>
            </div>
          </div>

        ))}
      </div>
    </>
  );
};
export default Home;
