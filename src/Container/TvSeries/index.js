import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardMoviesComponents from "../../Components/CardMovies";
import PaginationComponent from "../../Components/Pagination";

import LeftListBarComponent from "../../Components/LeftListBar";
import useGenres from "../../Hooks/useGenres";

const TvSeriesContainer = () => {
  const [content, setContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);
  const API_KEY = "997a76fe9ef0d60e1a15a1104480673b";

  const genreforURL = useGenres(selectedGenres);

  const GetDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${pageno}&with_genres=&language=en-US&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setPaginationno(data.total_pages);
  };

  useEffect(() => {
    console.log("Trending Component did mount");
    GetDataTrending();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    GetDataTrending();
    //eslint-disable-next-line
  }, [pageno, genreforURL]);

  const handleClick = (number) => {
    setPageno(number);
  };

  useEffect(() => {
    console.log("Trending Component didupdate mount");
    GetDataTrending();
    //eslint-disable-next-line
  }, [pageno]);

  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col>
            <section>
              <h1 className="txtCenter">Top Trending TV Series</h1>
            </section>
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={2}>
            <LeftListBarComponent
              genres={genres}
              selectedGenres={selectedGenres}
              setSelectedGenres={setSelectedGenres}
              setGenres={setGenres}
              type="tv"
              setPage={setPageno}
            />
          </Col>
          <Col xs={12} lg={10}>
            <div className="d-flex flex-column align-items-center">
              <Row>
                {content && content.length > 0 ? (
                  content.map((item, index) => (
                    <CardMoviesComponents
                      key={index}
                      data={item}
                      mediaType="tv"
                    />
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </Row>
            </div>
          </Col>
        </Row>
        {paginationno && paginationno > 1 && (
          <Row className="justify-content-center mt-3">
            <Col xs={12} className="d-flex justify-content-center">
              <PaginationComponent
                maxnum={paginationno}
                activenum={pageno}
                handleClick={handleClick}
              />
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default TvSeriesContainer;
