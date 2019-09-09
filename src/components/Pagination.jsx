import React from "react";

const Pagination = props => {
  const { current, keyword, total } = props;
  const pages = [];

  const handleClick = page => {
    props.handleClick(keyword, page);
  };

  for (var i = 1; i <= total; i++) {
    pages.push(i);
  }

  return (
    <div className="page__wrapper">
      {pages.map(page => (
        <a
          className={current === page ? "page__link active" : "page__link"}
          href={page}
          key={page}
          onClick={e => {
            e.preventDefault();
            handleClick(page);
          }}
        >
          {page}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
