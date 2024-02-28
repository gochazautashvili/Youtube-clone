import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./NavBar.scss";
import { getVideosCategory } from "../../api/Video";
import { VideoCategoryType } from "../../types/types";

function Navbar({
  setCategoryID,
}: {
  setCategoryID: Dispatch<SetStateAction<string>>;
}) {
  const [slide, setSlide] = useState(0);
  const [category, setCategory] = useState<VideoCategoryType[]>([]);

  useEffect(() => {
    getVideosCategory().then((res) => {
      setCategory(res);
    });
  }, []);

  const prev = () => {
    setSlide((prev) => prev + 1);
  };

  const next = () => {
    setSlide((prev) => prev - 1);
  };

  return (
    <nav className="navbar">
      <button
        title="prev"
        onClick={prev}
        className="navbar__button prev"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"></path>
        </svg>
      </button>
      <div className="navbar__slider">
        <div
          className="navbar__slider_content"
          style={{ transform: `translate(${10 * slide}%)` }}
        >
          {category.map((item, i) => {
            return (
              <p
                onClick={() => setCategoryID(item.id)}
                className="navbar__slider_content_title"
                key={i}
              >
                {item.snippet.title}
              </p>
            );
          })}
        </div>
      </div>
      <button
        title="next"
        onClick={next}
        className="navbar__button next"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"></path>
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
