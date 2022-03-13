import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import { CarouselsAbout } from "./components/Carousels";
import Head from "next/head";
const About = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <main role="main">
        <CarouselsAbout />
        <Head>
          <title>About Us</title>
        </Head>
        {/* <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/fitness.jpg"
              width="100%"
              layout="responsive"
              height="45"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/running.jpg"
              width="100%"
              layout="responsive"
              height="45"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/food.jpg"
              width="100%"
              layout="responsive"
              height="45    "
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
        );
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <Image
                className="rounded-circle"
                src="/hicon.jpg"
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <p>
                {/* <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a> */}
              </p>
            </div>
            <div className="col-lg-4">
              <Image
                className="rounded-circle"
                src="/sicon.png"
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2>Heading</h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Cras mattis consectetur purus
                sit amet fermentum. Fusce dapibus, tellus ac cursus commodo,
                tortor mauris condimentum nibh.
              </p>
              <p>
                {/* <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a> */}
              </p>
            </div>
            <div className="col-lg-4">
              <Image
                className="rounded-circle"
                src="/ficon.jpg"
                alt="Generic placeholder image"
                width="140"
                height="140"
              />
              <h2>Heading</h2>
              <p>
                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                egestas eget quam. Vestibulum id ligula porta felis euismod
                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <p>
                {/* <a className="btn btn-secondary" href="#" role="button">
                  View details &raquo;
                </a> */}
              </p>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                First featurette heading.{" "}
                <span className="text-muted">It&#39;ll blow your mind.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <Image
                className="featurette-image img-fluid mx-auto"
                src="/medicine.png"
                width="500"
                height="500"
                alt="Generic placeholder image"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">
                Oh yeah, it&#39;s that good.{" "}
                <span className="text-muted">See for yourself.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <Image
                className="featurette-image img-fluid mx-auto"
                src="/fitness.jpg"
                width="500"
                height="500"
                alt="Generic placeholder image"
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">
                And lastly, this one.{" "}
                <span className="text-muted">Checkmate.</span>
              </h2>
              <p className="lead">
                Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                id ligula porta felis euismod semper. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus
                ac cursus commodo.
              </p>
            </div>
            <div className="col-md-5">
              <Image
                className="featurette-image img-fluid mx-auto"
                src="/running.jpg"
                width="500"
                height="500"
                alt="Generic placeholder image"
              />
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
      </main>
    </>
  );
};

export default About;
