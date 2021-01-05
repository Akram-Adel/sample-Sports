import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoFootball } from 'react-icons/io5';
import { BsBell, BsSearch } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';

import { articles } from 'services/newsService';

const Header = () => (
  <div className="header">
    <div className="header__items-container header__items-container--primary">
      <GiHamburgerMenu />

      <IoFootball />

      <Link to="/" className="header__item">
        SportsLive
      </Link>
    </div>

    <div className="header__items-container">
      <BsBell />

      <Search />

      <FaRegUserCircle />
    </div>
  </div>
);

const Search = () => {
  // State -- InputField
  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    (searchActive && inputRef.current)
      && inputRef.current.focus();
  }, [searchActive]);

  // State -- Search Results
  const [results, setResults] = useState<typeof articles>([]);
  useEffect(() => {
    (!!searchTerm)
    && setResults(articles.filter((a) => a.title.toLocaleLowerCase().match(searchTerm.toLocaleLowerCase())));
  }, [searchTerm]);

  return (
    <div className="search">
      <input
        ref={inputRef}
        type="text" className={`form-control search__input ${!searchActive && 'search__input--inactive'}`}
        onBlur={() => setTimeout(() => setSearchActive(false), 100)} // timeout to allow link action
        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <BsSearch onClick={() => setSearchActive((prev) => !prev)} />

      {(searchActive && results.length > 0) && (
      <div className="search__results-container">
        {results.map((a) => (
          <Link
            to={`/news/${a.id}`}
            key={a.id} className="search__result">
            {a.title}
          </Link>
        ))}
      </div>
      )}
    </div>
  );
};
export default Header;
