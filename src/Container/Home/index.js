import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardMoviesComponents from "../../Components/CardMovies";
import PaginationComponent from "../../Components/Pagination";

const HomeContainer = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);
  const API_KEY = "997a76fe9ef0d60e1a15a1104480673b";

  const GetDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`
    );
    setContent(data.results);
    setPaginationno(data.total_pages);
  };

  useEffect(() => {
    console.log("Trending Component did mount");
    GetDataTrending();
    //eslint-disable-next-line
  }, []);

  const handleClick = (number) => {
    setPageno(number);
  };

  useEffect(() => {
    console.log("Trending Component did update mount");
    GetDataTrending();
    //eslint-disable-next-line
  }, [pageno]);

  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending</h1>
            </section>
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <Row>
              {content && content.length > 0 ? (
                content.map((item, index) => {
                  return <CardMoviesComponents key={index} data={item} />;
                })
              ) : (
                <div className="loading">Loading...</div>
              )}
            </Row>
          </Col>
        </Row>
        {paginationno && paginationno > 1 ? (
          <Row className="justify-content-center mt-3">
            <Col xs={12} className="d-flex justify-content-center">
              <PaginationComponent
                maxnum={paginationno}
                activenum={pageno}
                handleClick={handleClick}
                className="pagination-lg" // Add this className to adjust the size
              />
            </Col>
          </Row>
        ) : (
          ""
        )}
      </Container>
    </main>
  );
};

export default HomeContainer;
