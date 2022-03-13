import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import data from "../data";

export const CarouselsAbout = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    // const { pathname } = useLocation();

    // switch (pathname) {
    //   case "/About": {
    //     return "as";
    //   }
    //   case "/about": {
    //     // return ...
    //   }
    //   case "/home":
    //   default: {
    //     // return ...
    //   }
    // }
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
        {data.Abouts.map((about) => (
          <Carousel.Item key={about.id}>
            <Image
              className="d-block w-100"
              src={about.image}
              width="100%"
              layout="responsive"
              height="45"
              alt={about.title}
            />
            <Carousel.Caption>
              <h3>{about.title}</h3>
              <p>{about.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* <Route exact path="/signup" component={SignUp} />
       <Route exact path="/Welcome" component={Welcome} /> */}
    </>
  );
};

// export default Carousels;
