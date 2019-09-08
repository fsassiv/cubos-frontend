import React from "react";

const SearchBar = ({ handleSubmit }) => {
  // const handleSubmit = e => {
  //   e.preventDefault();
  // };

  return (
    <form
      className="search__form"
      onSubmit={e => {
        e.preventDefault();
        //Get the input value
        const searchText = e.target.children[0].value;

        handleSubmit(searchText);
      }}
    >
      <input
        className="search__input is-abel"
        type="search"
        placeholder="Digite o nome do filme ou gênero"
      />
    </form>
  );
};

export default SearchBar;
