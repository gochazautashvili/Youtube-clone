import { useState } from "react";
import "./Search.scss";

function Search() {
  const [focus, setFocus] = useState(false);

  return (
    <form className="search__form">
      <div className="search">
        <div className={focus ? "search__left focused" : "search__left"}>
          {focus && (
            <div className="search__searched">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                focusable="false"
              >
                <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
              </svg>
            </div>
          )}
          <input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="search__input"
            type="text"
            placeholder="Search"
          />
        </div>
        <button className="search__button" type="submit" title="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
          >
            <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
          </svg>
        </button>
      </div>
      <button type="button" className="search__form_micro">
        <img
          width="23"
          height="23"
          src="https://img.icons8.com/material-rounded/24/microphone.png"
          alt="microphone"
        />
      </button>
    </form>
  );
}

export default Search;
