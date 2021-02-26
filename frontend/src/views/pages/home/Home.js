import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import { Carousel,Button } from "react-bootstrap";
import Footer from "../footer/Footer";
import img11 from "../../../images/img11.jpg";
import img12 from "../../../images/img12.jpg";
import img13 from "../../../images/img13.jpg";
import educ1 from "../../../images/educ1.jpg";

function Home() {
  const users = useSelector((state) => state.authReducer.users);
  const user = useSelector((state) => state.authReducer.user);
  
  if (user) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    )
  }
  return (
    <div className="home">
      <img className="educ-1" src={educ1} />
      <div className="home-container">
        <h1 className="detail-1">Det1</h1>
        <h1 className="detail-2">Det2</h1>
        <h1 className="detail-3">Det3</h1>
      </div>
      <h1 className="detail-4">Details</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img11}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img12}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img13}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 className="detail-5">More details</h1>
      <Footer />
    </div>
  );
}

export default Home;
