import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { articles } from 'services/newsService';

const SingleNews = () => {
  // Params
  const params = useParams<{id: string}>();

  // State
  const [article, setArticle] = useState<typeof articles[0]>();
  useEffect(() => {
    setArticle(articles.find((a) => a.id === +params.id));
  }, [params.id]);

  return (
    <div className="container">
      {!article && (
      <h3 className="text-center">
        Article Not Found
      </h3>
      )}

      {article && (
        <>
          <div className="banner banner--article" style={{ backgroundImage: `url(${article.urlToImage})` }} />

          <h2 className="mt-2 text-info">
            {article.title}
          </h2>
          <h5>
            {moment(article.publishedAt).format('MMMM DD, YYYY')}
          </h5>

          <p style={{ whiteSpace: 'break-spaces' }}>
            {article.content}
          </p>
        </>
      )}
    </div>
  );
};
export default SingleNews;
