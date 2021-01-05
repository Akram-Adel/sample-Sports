import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { articles } from 'services/newsService';

const NewsItem = ({ article }: {article: typeof articles[0]}) => (
  <div className="card col-lg-3 col-sm-4 mb-4 border-0">
    <div
      className="card-img-top card__bg-img"
      style={{ backgroundImage: `url(${article.urlToImage})` }} />

    <div className="card-body">
      <Link className="card-title stretched-link fs-5 card__link" to={`/news/${article.id}`}>
        {article.title.slice(0, 40)}
        {article.title.length > 40 && '...'}
      </Link>
      <small className="card-text text-muted">
        {moment(article.publishedAt).format('MMM DD/YYYY hh:mm a')}
      </small>
    </div>
  </div>
);
export default NewsItem;
