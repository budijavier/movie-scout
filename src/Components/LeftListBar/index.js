import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";
import axios from "axios";
import { BsFillXCircleFill } from "react-icons/bs";

const LeftListBarComponent = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage
}) => {
  const API_KEY = "997a76fe9ef0d60e1a15a1104480673b";

  const fetchData = async () => {
    const {
      data: { genres }
    } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${API_KEY}&language=en-US`
    );
    setGenres(genres);
  };

  useEffect(() => {
    fetchData();
    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  return (
    <aside className="asideBar">
      <h3>Filter By:</h3>
      <ListGroup>
        {selectedGenres.map((item) => (
          <div
            className={`list-group-item selected ${
              selectedGenres.length === 1 ? "single-selected" : ""
            }`}
            onClick={() => handleRemove(item)}
            key={`${item.id}newtag`}
          >
            <span>{item.name}</span>
            <BsFillXCircleFill className="remove-icon" />
          </div>
        ))}
        {genres.length > 0 ? (
          genres.map((item) => (
            <div
              className={`list-group-item ${
                selectedGenres.find((g) => g.id === item.id) ? "selected" : ""
              }`}
              key={item.id}
              onClick={() => handleAdd(item)}
            >
              <span>{item.name}</span>
            </div>
          ))
        ) : (
          <div className="list-group-item loading">Loading content...</div>
        )}
      </ListGroup>
    </aside>
  );
};

export default LeftListBarComponent;
