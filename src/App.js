import { useRef, useEffect, useState } from "react";
import "./App.css";
import workout from "./workout.svg";
import greensocklogo from "./greensocklogo.svg";
import happy from "./happy.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  console.log("nav", showNavbar);
  const words1 = [
    "With",
    "its",
    "smart",
    "lighting",
    "and",
    "the",
    "patent",
    "pending",
    "auto",
    "watering",
    "system,",
    "Plantone",
    "is",
    "a",
    "one",
    "product",
    "solution",
    "for",
    "anyone",
    "to",
    "easily",
    "grow",
    "herbs",
    "and",
    "flowers",
    "indoors.",
    "<>",
    "Plantone",
    "Diversity",
    "provides",
    "the",
    "light",
    "that",
    "is",
    "essential",
    "for",
    "growing",
    "your",
    "plants.",
    "<>",
    "Better",
    "light",
    "means",
    "better",
    "photosynthesis,",
    "which",
    "leads",
    "to",
    "faster",
    "growth",
    "and",
    "healthy",
    "plants.",
    "The",
    "Plantone",
    "mobile",
    "app",
    "lets",
    "you",
    "create",
    "custom",
    "light",
    "schedules",
    "and",
    "adjust",
    "the",
    "lights",
    "remotely.",
  ];

  const wordRefs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    gsap.utils.toArray("span").map((span) => {
      ScrollTrigger.create({
        trigger: span,
        start: "top center",
        end: "bottom end",
        toggleClass: "active",
        // markers: true,
      });
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;

      wordRefs.current.forEach((wordRef, index) => {
        if (wordRef === "<br/>") {
          wordRef.style.display = "block";
          wordRef.style.visibilty = "none";
        }
        if (wordRef && wordRef.offsetTop < scrollPosition) {
          const opacity = Math.max(
            0,
            Math.min(
              1,
              (scrollPosition - wordRef.offsetTop) / window.innerHeight
            )
          );
          wordRef.style.opacity = opacity.toString();
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

    // const element = ref.current;
    // ScrollTrigger.create({
    //   trigger: element.querySelector(".first-paragraph"),
    //   start: "top top",
    //   end: "bottom 150px",
    //   pin: true,
    //   id: "yazı",
    //   pinSpacing: false,
    //   markers: true,
    //   duration: 1,
    // });
    // gsap.fromTo(
    //   element.querySelector(".first-paragraph"),
    //   {
    //     // opacity: 0,
    //     y: 0,
    //   },
    //   {
    //     // opacity: 1,
    //     y: -100,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: element.querySelector(".first"),
    //       start: "top top",
    //       end: "bottom center",
    //       scrub: true,
    //     },
    //   }
    // );
  }, []);
  useEffect(() => {
    const element = ref.current;
    // const tl = gsap.timeline();
    // tl.from("#video", { yPercent: -200 });
    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: element.querySelector("#video"),
    //   start: "top center",
    //   end: "bottom top",
    //   scrub: true,
    //   pin: true,
    //   anticipatePin: 1,
    // });

    gsap.fromTo(
      element.querySelector("#video"),
      {
        opacity: 0,
        scale: 0.5,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: element.querySelector(".first"),
          start: "top top",
          end: "bottom 250px",
          id: "video",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const element = ref.current;
    // gsap.fromTo(
    //   element.querySelectorAll("#navbar"),
    //   { opacity: 0, y: -20, scale: 2 },
    //   { opacity: 1, y: 0, scale: 1, duration: 1.2 }
    // );
    // gsap.fromTo(
    //   element.querySelector(".side-bottom"),
    //   {
    //     y: 100,
    //   },
    //   { y: 0 }
    // );

    if (showNavbar) {
      gsap.fromTo(
        document.querySelector(".side"),
        {
          y: -200,
        },
        { y: 0, duration: 1 }
      );
      gsap.fromTo(
        element.querySelector("#home"),
        { opacity: 0, scale: 2 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.2 }
      );
      gsap.fromTo(
        element.querySelector("#about"),
        { opacity: 0, scale: 2 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.4 }
      );
      gsap.fromTo(
        element.querySelector("#products"),
        { opacity: 0, scale: 2 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.6 }
      );
      gsap.fromTo(
        element.querySelector("#customer"),
        { opacity: 0, scale: 2 },
        { opacity: 1, scale: 1, duration: 0.5, delay: 0.8 }
      );

      gsap.fromTo(
        element.querySelector(".side-bottom"),
        {
          y: 300,
        },
        { y: 0, duration: 1 }
      );
    }
    if (!showNavbar) {
      gsap.fromTo(
        document.querySelector(".side"),
        {
          y: 0,
        },
        { y: -1000, duration: 1.5 }
      );
      gsap.fromTo(
        document.querySelector(".first-paragraph"),
        {
          y: 100,
        },
        {
          y: 0,
          duration: 1,
        }
      );
      gsap.fromTo(
        document.querySelector(".pre-button"),
        {
          y: -150,
        },
        { y: 0 }
      );
    }

    // if (!showNavbar) {
    //   gsap.fromTo(
    //     document.querySelector(".side"),
    //     {
    //       y: 0,
    //     },
    //     { y: -200, duration: 1.5 }
    //   );
    //   gsap.fromTo(
    //     document.querySelector(".first-paragraph"),
    //     {
    //       y: 100,
    //     },
    //     {
    //       y: 0,
    //       duration: 1,
    //     }
    //   );
    // }
  }, [showNavbar]);

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.from(element.querySelector(".line"), {
  //     scale: 0,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: element.querySelector(".third"),
  //       scrub: true,
  //       start: "top bottom",
  //       end: "top top",
  //     },
  //   });
  // }, []);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
    document.body.classList.toggle("scroll-lock");
  };

  return (
    <div
      ref={ref}
      style={{
        // backgroundColor: "#011B1A",
        color: "white",
        position: "relative",
      }}
    >
      <div>
        {/* <header className="header_header__3o0p0">
          <nav className="header_nav__7l0n_ header_isWhite__zuPyk header_isActive__lo9JC">
            <span style={{ display: "none" }}></span>
            <div className="header_left__5mUUH">
              <button
                className="button_button__SRc2Y header_burger__jiZM1"
                aria-label="Toggle menu"
              >
                <span className="header_line__BL49D" />
                <span className="header_line__BL49D" />
                <span className="header_line__BL49D" />
              </button>
              <a className="button_button__SRc2Y header_logo___eW3r" href="/">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 220 63"
                  style={{ enableBackground: "new 0 0 220 63" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t.st0{clip-path:url(#SVGID_2_);fill:#FFFFFF;}\n\t.st1{fill:#FFFFFF;}\n\t.st2{clip-path:url(#SVGID_4_);fill:#FFFFFF;}\n\t.st3{clip-path:url(#SVGID_4_);fill:#F58020;}\n\t.st4{clip-path:url(#SVGID_4_);fill:#279F48;}\n\t.st5{clip-path:url(#SVGID_4_);fill:#327BBF;}\n\t.st6{clip-path:url(#SVGID_4_);fill:#6C3895;}\n\t.st7{clip-path:url(#SVGID_4_);fill:#EE2A24;}\n",
                    }}
                  />
                  <g>
                    <defs>
                      <rect
                        id="SVGID_1_"
                        x="1.7"
                        y="13.1"
                        width="202.6"
                        height="38.1"
                      />
                    </defs>
                    <clipPath id="SVGID_2_">
                      <use
                        xlinkHref="#SVGID_1_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <path
                      className="st0"
                      d="M8.8,30.4h4.8c0.9,0,1.7,0,2.5-0.1c0.7-0.1,1.4-0.2,2.1-0.5c0.7-0.2,1.2-0.6,1.7-1c0.4-0.4,0.8-0.9,1.1-1.6
		c0.3-0.7,0.4-1.5,0.4-2.4c0-1.1-0.2-2.1-0.5-2.8c-0.3-0.8-0.8-1.4-1.3-1.8s-1.1-0.7-1.9-1c-0.8-0.2-1.5-0.4-2.2-0.4
		c-0.6-0.1-1.4-0.1-2.4-0.1H8.8V30.4z M1.7,47.9V13.1h11.6c1.2,0,2.2,0,3.1,0.1c0.9,0.1,1.9,0.2,3,0.4s2,0.4,2.9,0.8
		c0.8,0.3,1.6,0.8,2.4,1.4c0.8,0.6,1.5,1.3,2,2.1c0.5,0.8,0.9,1.8,1.3,3c0.3,1.2,0.5,2.5,0.5,4c0,1.8-0.3,3.3-0.8,4.6
		c-0.5,1.3-1.2,2.4-2.1,3.2c-0.9,0.8-2,1.5-3.3,2c-1.3,0.5-2.7,0.9-4.1,1.1s-3,0.3-4.7,0.3H8.8v11.8H1.7z"
                    />
                  </g>
                  <rect
                    x="31.7"
                    y="13.1"
                    className="st1"
                    width="6.7"
                    height="34.8"
                  />
                  <g>
                    <defs>
                      <rect
                        id="SVGID_3_"
                        x="1.7"
                        y="13.1"
                        width="202.6"
                        height="38.1"
                      />
                    </defs>
                    <clipPath id="SVGID_4_">
                      <use
                        xlinkHref="#SVGID_3_"
                        style={{ overflow: "visible" }}
                      />
                    </clipPath>
                    <path
                      className="st2"
                      d="M49.8,40.1c0,1,0.4,1.8,1.1,2.5c0.7,0.7,1.7,1,3,1c1.7,0,3.2-0.5,4.4-1.6c1.2-1,1.7-2.5,1.7-4.5v-1.6l-4.5,0.5
		c-2,0.2-3.4,0.6-4.3,1.2C50.2,38.3,49.8,39.1,49.8,40.1 M43,40.2c0-2.3,0.8-4.1,2.4-5.4c1-0.8,2.3-1.4,3.9-1.9
		c1.6-0.5,3.5-0.8,5.8-1l4.7-0.5v-0.9c0-1.4-0.4-2.5-1.2-3.1c-0.8-0.6-1.9-0.9-3.5-0.9c-1.5,0-2.7,0.3-3.6,1S50.1,29,50,30.3
		l-6.2-0.2c0.2-2.6,1.3-4.6,3.3-6.2c2-1.6,4.7-2.4,8.3-2.4c3.8,0,6.6,0.8,8.4,2.4c1.7,1.6,2.6,4,2.6,7.2v0.3c0,0.4,0,1.5-0.1,3.6
		c-0.1,2-0.1,3.5-0.1,4.4c0,2.9,0.2,5.7,0.5,8.5h-6.2l-0.2-2.8c-0.9,1.2-1.9,2.1-3.2,2.6c-1.3,0.5-2.9,0.8-4.9,0.8
		c-2.8,0-5.1-0.8-6.8-2.5C43.8,44.4,43,42.5,43,40.2"
                    />
                    <path
                      className="st2"
                      d="M71.9,47.9V22.2h6.7v2.9c0.7-1.1,1.8-2,3.1-2.6c1.3-0.6,2.8-0.9,4.5-0.9c3.3,0,5.7,1,7.2,3
		c1.2,1.6,1.8,4,1.8,7.3v16h-6.7V33.4c0-2.3-0.3-3.9-0.9-4.8c-0.8-1-2-1.6-3.6-1.6c-1.1,0-2,0.2-2.7,0.6c-0.7,0.4-1.3,1-1.7,1.7
		c-0.4,0.8-0.7,1.6-0.8,2.4c-0.2,0.9-0.2,1.9-0.2,3v13.1H71.9z"
                    />
                    <path
                      className="st2"
                      d="M98.1,27.2v-5h3.7v-7.6h6.7v7.6h5.4v5h-5.4v12.3c0,1.3,0.2,2.1,0.7,2.6c0.5,0.4,1.3,0.6,2.6,0.6h2v5.1H109
		c-1.5,0-2.7-0.1-3.6-0.3c-0.9-0.2-1.6-0.6-2.2-1.2c-0.5-0.6-0.9-1.3-1-2.1c-0.2-0.8-0.3-1.9-0.3-3.3V27.2H98.1z"
                    />
                    <path
                      className="st2"
                      d="M151.3,47.9V22.2h6.7v2.9c0.7-1.1,1.8-2,3.1-2.6c1.3-0.6,2.8-0.9,4.5-0.9c3.3,0,5.7,1,7.2,3
		c1.2,1.6,1.8,4,1.8,7.3v16h-6.7V33.4c0-2.3-0.3-3.9-0.9-4.8c-0.8-1-2-1.6-3.6-1.6c-1.1,0-2,0.2-2.7,0.6c-0.7,0.4-1.3,1-1.7,1.7
		c-0.4,0.8-0.7,1.6-0.8,2.4c-0.2,0.9-0.2,1.9-0.2,3v13.1H151.3z"
                    />
                    <path
                      className="st2"
                      d="M185.2,32.5h12.4c0-1-0.2-1.9-0.6-2.7c-0.4-0.8-0.9-1.4-1.5-1.9c-0.6-0.5-1.3-0.8-2-1
		c-0.7-0.2-1.4-0.3-2.2-0.3c-1.6,0-3,0.5-4.2,1.5C186,29,185.4,30.5,185.2,32.5 M178.5,35.1c0-4,1.2-7.2,3.6-9.7
		c2.4-2.5,5.5-3.7,9.5-3.7c4.2,0,7.4,1.4,9.7,4.2c2.1,2.6,3.1,5.9,3.1,10.1c0,0.4,0,0.8,0,1.2h-19.1c0.1,1.9,0.7,3.4,1.9,4.6
		c1.2,1.2,2.7,1.7,4.5,1.7c1.6,0,2.9-0.3,3.9-1s1.7-1.6,2.1-2.7l6.2,0.8c-0.3,0.8-0.6,1.5-1,2.2c-0.4,0.7-1,1.4-1.7,2.2
		c-0.7,0.7-1.5,1.4-2.4,1.9c-0.9,0.5-1.9,1-3.2,1.3c-1.2,0.3-2.5,0.5-3.9,0.5c-2.8,0-5.2-0.6-7.3-1.8c-2-1.2-3.5-2.8-4.5-4.8
		C179,39.9,178.5,37.6,178.5,35.1"
                    />
                    <path
                      className="st3"
                      d="M124.7,17c-2.9,1.2-4.4,4.6-3.1,7.6l0-0.1c0.3,0.7,0.7,1.2,1.2,1.7c2.6,3.1,8.2,5.9,8.2,5.9l0,0
		c0,0,2-5.9,1.7-10c0-0.7-0.1-1.4-0.4-2C131,17.2,127.6,15.8,124.7,17"
                    />
                    <path
                      className="st4"
                      d="M145.4,22.2c-2-2.4-5.7-2.8-8.2-0.7l0.1-0.1c-0.5,0.5-1,1-1.3,1.6c-2.2,3.4-3.2,9.6-3.2,9.6l0,0
		c0,0,6.3,0.1,10.1-1.4c0.7-0.2,1.3-0.5,1.8-0.9C147.1,28.3,147.5,24.6,145.4,22.2"
                    />
                    <path
                      className="st5"
                      d="M146.6,43.7c1.8-2.7,1-6.3-1.6-8l0.1,0.1c-0.6-0.4-1.3-0.6-1.9-0.8c-3.9-1.1-10.1-0.3-10.1-0.3l0,0
		c0,0,1.7,6,4.2,9.2c0.4,0.6,0.9,1.1,1.4,1.4C141.2,47.1,144.8,46.4,146.6,43.7"
                    />
                    <path
                      className="st6"
                      d="M126.3,51c3.1,0.9,6.3-0.8,7.2-3.9l0,0.1c0.2-0.7,0.2-1.4,0.2-2.1c-0.1-4.1-2.6-9.8-2.6-9.8l0,0
		c0,0-5.3,3.4-7.6,6.7c-0.4,0.5-0.8,1.1-1,1.8C121.5,46.9,123.2,50.1,126.3,51"
                    />
                    <path
                      className="st7"
                      d="M113.5,34.2c0.1,3.2,2.8,5.7,6,5.6l-0.1,0c0.7,0,1.4-0.2,2-0.5c3.8-1.4,8.4-5.6,8.4-5.6l0,0
		c0,0-4.9-3.9-8.8-5.1c-0.6-0.2-1.3-0.4-2-0.4C115.9,28.4,113.3,31,113.5,34.2"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div className="header_ctaWrapper__FCKmV">
              <button className="button_button__SRc2Y button_primary__V6ee0 p-12 header_cta__4ItgJ">
                <span style={{ display: "none" }}>button_dark__Yl_k6 </span>
                Pre-order Plantone
              </button>
              <button className="button_button__SRc2Y button_primary__V6ee0 p-10 header_button__4RTji">
                <span style={{ display: "none" }}>button_dark__Yl_k6 </span>
                Pre-order Plantone
              </button>
            </div>
          </nav>
        </header> */}
        <div>
          <header className="header_header">
            <nav className="header_nav">
              <div className="header_left">
                <div className="menu-icon" onClick={toggleNavbar}>
                  {showNavbar ? (
                    <i class="fa-solid fa-xmark fa-lg"></i>
                  ) : (
                    <i className="fa-solid fa-bars" />
                  )}
                </div>
                <a className="svg" href="/">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 220 63"
                    style={{ enableBackground: "new 0 0 220 63" }}
                    xmlSpace="preserve"
                  >
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                            .st0 {\n                                clip-path: url(#SVGID_2_);\n                                fill: #FFFFFF;\n                            }\n\n                            .st1 {\n                                fill: #FFFFFF;\n                            }\n\n                            .st2 {\n                                clip-path: url(#SVGID_4_);\n                                fill: #FFFFFF;\n                            }\n\n                            .st3 {\n                                clip-path: url(#SVGID_4_);\n                                fill: #F58020;\n                            }\n\n                            .st4 {\n                                clip-path: url(#SVGID_4_);\n                                fill: #279F48;\n                            }\n\n                            .st5 {\n                                clip-path: url(#SVGID_4_);\n                                fill: #327BBF;\n                            }\n\n                            .st6 {\n                                clip-path: url(#SVGID_4_);\n                                fill: #6C3895;\n                            }\n\n                            .st7 {\n                                clip-path: url(#SVGID_4_);\n                                fill: #EE2A24;\n                            }\n                        ",
                      }}
                    />
                    <g>
                      <defs>
                        <rect
                          id="SVGID_1_"
                          x="1.7"
                          y="13.1"
                          width="202.6"
                          height="38.1"
                        />
                      </defs>
                      <clipPath id="SVGID_2_">
                        <use
                          xlinkHref="#SVGID_1_"
                          style={{ overflow: "visible" }}
                        />
                      </clipPath>
                      <path
                        className="st0"
                        d="M8.8,30.4h4.8c0.9,0,1.7,0,2.5-0.1c0.7-0.1,1.4-0.2,2.1-0.5c0.7-0.2,1.2-0.6,1.7-1c0.4-0.4,0.8-0.9,1.1-1.6
                   c0.3-0.7,0.4-1.5,0.4-2.4c0-1.1-0.2-2.1-0.5-2.8c-0.3-0.8-0.8-1.4-1.3-1.8s-1.1-0.7-1.9-1c-0.8-0.2-1.5-0.4-2.2-0.4
                   c-0.6-0.1-1.4-0.1-2.4-0.1H8.8V30.4z M1.7,47.9V13.1h11.6c1.2,0,2.2,0,3.1,0.1c0.9,0.1,1.9,0.2,3,0.4s2,0.4,2.9,0.8
                   c0.8,0.3,1.6,0.8,2.4,1.4c0.8,0.6,1.5,1.3,2,2.1c0.5,0.8,0.9,1.8,1.3,3c0.3,1.2,0.5,2.5,0.5,4c0,1.8-0.3,3.3-0.8,4.6
                   c-0.5,1.3-1.2,2.4-2.1,3.2c-0.9,0.8-2,1.5-3.3,2c-1.3,0.5-2.7,0.9-4.1,1.1s-3,0.3-4.7,0.3H8.8v11.8H1.7z"
                      />
                    </g>
                    <rect
                      x="31.7"
                      y="13.1"
                      className="st1"
                      width="6.7"
                      height="34.8"
                    />
                    <g>
                      <defs>
                        <rect
                          id="SVGID_3_"
                          x="1.7"
                          y="13.1"
                          width="202.6"
                          height="38.1"
                        />
                      </defs>
                      <clipPath id="SVGID_4_">
                        <use
                          xlinkHref="#SVGID_3_"
                          style={{ overflow: "visible" }}
                        />
                      </clipPath>
                      <path
                        className="st2"
                        d="M49.8,40.1c0,1,0.4,1.8,1.1,2.5c0.7,0.7,1.7,1,3,1c1.7,0,3.2-0.5,4.4-1.6c1.2-1,1.7-2.5,1.7-4.5v-1.6l-4.5,0.5
                   c-2,0.2-3.4,0.6-4.3,1.2C50.2,38.3,49.8,39.1,49.8,40.1 M43,40.2c0-2.3,0.8-4.1,2.4-5.4c1-0.8,2.3-1.4,3.9-1.9
                   c1.6-0.5,3.5-0.8,5.8-1l4.7-0.5v-0.9c0-1.4-0.4-2.5-1.2-3.1c-0.8-0.6-1.9-0.9-3.5-0.9c-1.5,0-2.7,0.3-3.6,1S50.1,29,50,30.3
                   l-6.2-0.2c0.2-2.6,1.3-4.6,3.3-6.2c2-1.6,4.7-2.4,8.3-2.4c3.8,0,6.6,0.8,8.4,2.4c1.7,1.6,2.6,4,2.6,7.2v0.3c0,0.4,0,1.5-0.1,3.6
                   c-0.1,2-0.1,3.5-0.1,4.4c0,2.9,0.2,5.7,0.5,8.5h-6.2l-0.2-2.8c-0.9,1.2-1.9,2.1-3.2,2.6c-1.3,0.5-2.9,0.8-4.9,0.8
                   c-2.8,0-5.1-0.8-6.8-2.5C43.8,44.4,43,42.5,43,40.2"
                      />
                      <path
                        className="st2"
                        d="M71.9,47.9V22.2h6.7v2.9c0.7-1.1,1.8-2,3.1-2.6c1.3-0.6,2.8-0.9,4.5-0.9c3.3,0,5.7,1,7.2,3
                   c1.2,1.6,1.8,4,1.8,7.3v16h-6.7V33.4c0-2.3-0.3-3.9-0.9-4.8c-0.8-1-2-1.6-3.6-1.6c-1.1,0-2,0.2-2.7,0.6c-0.7,0.4-1.3,1-1.7,1.7
                   c-0.4,0.8-0.7,1.6-0.8,2.4c-0.2,0.9-0.2,1.9-0.2,3v13.1H71.9z"
                      />
                      <path
                        className="st2"
                        d="M98.1,27.2v-5h3.7v-7.6h6.7v7.6h5.4v5h-5.4v12.3c0,1.3,0.2,2.1,0.7,2.6c0.5,0.4,1.3,0.6,2.6,0.6h2v5.1H109
                   c-1.5,0-2.7-0.1-3.6-0.3c-0.9-0.2-1.6-0.6-2.2-1.2c-0.5-0.6-0.9-1.3-1-2.1c-0.2-0.8-0.3-1.9-0.3-3.3V27.2H98.1z"
                      />
                      <path
                        className="st2"
                        d="M151.3,47.9V22.2h6.7v2.9c0.7-1.1,1.8-2,3.1-2.6c1.3-0.6,2.8-0.9,4.5-0.9c3.3,0,5.7,1,7.2,3
                   c1.2,1.6,1.8,4,1.8,7.3v16h-6.7V33.4c0-2.3-0.3-3.9-0.9-4.8c-0.8-1-2-1.6-3.6-1.6c-1.1,0-2,0.2-2.7,0.6c-0.7,0.4-1.3,1-1.7,1.7
                   c-0.4,0.8-0.7,1.6-0.8,2.4c-0.2,0.9-0.2,1.9-0.2,3v13.1H151.3z"
                      />
                      <path
                        className="st2"
                        d="M185.2,32.5h12.4c0-1-0.2-1.9-0.6-2.7c-0.4-0.8-0.9-1.4-1.5-1.9c-0.6-0.5-1.3-0.8-2-1
                   c-0.7-0.2-1.4-0.3-2.2-0.3c-1.6,0-3,0.5-4.2,1.5C186,29,185.4,30.5,185.2,32.5 M178.5,35.1c0-4,1.2-7.2,3.6-9.7
                   c2.4-2.5,5.5-3.7,9.5-3.7c4.2,0,7.4,1.4,9.7,4.2c2.1,2.6,3.1,5.9,3.1,10.1c0,0.4,0,0.8,0,1.2h-19.1c0.1,1.9,0.7,3.4,1.9,4.6
                   c1.2,1.2,2.7,1.7,4.5,1.7c1.6,0,2.9-0.3,3.9-1s1.7-1.6,2.1-2.7l6.2,0.8c-0.3,0.8-0.6,1.5-1,2.2c-0.4,0.7-1,1.4-1.7,2.2
                   c-0.7,0.7-1.5,1.4-2.4,1.9c-0.9,0.5-1.9,1-3.2,1.3c-1.2,0.3-2.5,0.5-3.9,0.5c-2.8,0-5.2-0.6-7.3-1.8c-2-1.2-3.5-2.8-4.5-4.8
                   C179,39.9,178.5,37.6,178.5,35.1"
                      />
                      <path
                        className="st3"
                        d="M124.7,17c-2.9,1.2-4.4,4.6-3.1,7.6l0-0.1c0.3,0.7,0.7,1.2,1.2,1.7c2.6,3.1,8.2,5.9,8.2,5.9l0,0
                   c0,0,2-5.9,1.7-10c0-0.7-0.1-1.4-0.4-2C131,17.2,127.6,15.8,124.7,17"
                      />
                      <path
                        className="st4"
                        d="M145.4,22.2c-2-2.4-5.7-2.8-8.2-0.7l0.1-0.1c-0.5,0.5-1,1-1.3,1.6c-2.2,3.4-3.2,9.6-3.2,9.6l0,0
                   c0,0,6.3,0.1,10.1-1.4c0.7-0.2,1.3-0.5,1.8-0.9C147.1,28.3,147.5,24.6,145.4,22.2"
                      />
                      <path
                        className="st5"
                        d="M146.6,43.7c1.8-2.7,1-6.3-1.6-8l0.1,0.1c-0.6-0.4-1.3-0.6-1.9-0.8c-3.9-1.1-10.1-0.3-10.1-0.3l0,0
                   c0,0,1.7,6,4.2,9.2c0.4,0.6,0.9,1.1,1.4,1.4C141.2,47.1,144.8,46.4,146.6,43.7"
                      />
                      <path
                        className="st6"
                        d="M126.3,51c3.1,0.9,6.3-0.8,7.2-3.9l0,0.1c0.2-0.7,0.2-1.4,0.2-2.1c-0.1-4.1-2.6-9.8-2.6-9.8l0,0
                   c0,0-5.3,3.4-7.6,6.7c-0.4,0.5-0.8,1.1-1,1.8C121.5,46.9,123.2,50.1,126.3,51"
                      />
                      <path
                        className="st7"
                        d="M113.5,34.2c0.1,3.2,2.8,5.7,6,5.6l-0.1,0c0.7,0,1.4-0.2,2-0.5c3.8-1.4,8.4-5.6,8.4-5.6l0,0
                   c0,0-4.9-3.9-8.8-5.1c-0.6-0.2-1.3-0.4-2-0.4C115.9,28.4,113.3,31,113.5,34.2"
                      />
                    </g>
                  </svg>
                </a>
              </div>
              <div className="pre-button">Pre-order Plantone</div>
            </nav>
          </header>
          {showNavbar && (
            <div className="side" style={{ position: "fixed" }}>
              <div className="sidenav">
                <div href="#" className="nav-item" id="home">
                  Home
                </div>
                <div href="#" className="nav-item" id="about">
                  About
                </div>
                <div href="#" className="nav-item" id="products">
                  Products
                </div>
                <div href="#" className="nav-item" id="customer">
                  Customer Supports
                </div>
              </div>
              <div className="side-bottom">
                <a
                  href="https://web.facebook.com/getplantone/"
                  target="_blank"
                  className="social"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/getplantone/"
                  target="_blank"
                  className="social"
                >
                  Instagram
                </a>
              </div>
            </div>
          )}{" "}
        </div>
      </div>
      <div></div>
      <div
        className="first"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: "120px",
            textTransform: "uppercase",
            textAlign: "center",
          }}
          className="first-paragraph"
        >
          <span style={{ color: "#C7FFCA" }}>This</span>
          <br />
          <span style={{ color: "#C7FFCA" }}>is</span>
          <br />
          <span
            style={{
              border: "1px solid #C7FFCA",
            }}
          >
            PLANTONE
          </span>
          {/* <span
            style={{
              border: "1px solid #C7FFCA",
              textShadow:
                "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15)",
            }}
          >
            {" "}
            PLANTONE
          </span> */}
        </h1>
        <div className="bottom-arrow">
          <a href="#second">
            <i class="fa-solid fa-arrow-down fa-xxl"></i>
          </a>
        </div>
      </div>
      <div className="second" id="second">
        <div className="logo-main">
          {showVideo ? (
            <video
              className="video p-0 lazy"
              id="video"
              controls
              style={{
                border: "none",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <source
                src=" http://www.getplantone.com/wp-content/themes/plantone_2018/This_is_plantone.mp4"
                type="video/mp4"
                style={{ border: "none" }}
              />
            </video>
          ) : (
            <video
              className="video p-0 lazy"
              id="video"
              autoPlay
              muted
              playsInline
              style={{
                border: "none",
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <source
                src=" http://www.getplantone.com/wp-content/themes/plantone_2018/This_is_plantone.mp4"
                type="video/mp4"
                style={{ border: "none" }}
              />
            </video>
          )}
          <div className={showVideo ? "click-btn-active" : "click-btn"}>
            <span style={{ color: "#C7FFCA" }}>Click Here</span>
            <i
              className="fa-solid fa-circle-play fa-lg"
              style={{ color: "#C7FFCA", cursor: "pointer" }}
              onClick={() => setShowVideo(!showVideo)}
            ></i>
          </div>
        </div>
      </div>
      {/* <div className="third">
        <p>
          <span className="line" />
        </p>
        <div className="logo-main">
          <img src={happy} id="happy-logo" alt="happy" />
        </div>
      </div> */}

      {/* <div
        style={{
          margin: "5rem auto 0 ",
          fontSize: "50px",
          width: "700px",
          textAlign: "center",
        }}
      >
        <span>With</span>
        <span> </span>
        <span>its</span>
        <span> </span>
        <span>smart</span>
        <span> </span>
        <span>lighting</span>
        <span> </span>
        <span> and</span>
        <span> </span>
        <span> the</span>
        <span> </span>
        <span> patent</span>
        <span> </span>
        <span> pending</span>
        <span> </span>
        <span> auto</span>
        <span> </span>
        <span> watering</span>
        <span> </span>
        <span> system,</span>
        <span> </span>
        <span> Plantone</span>
        <span> </span>
        <span>is</span>
        <span> </span>
        <span>a</span>
        <span> </span>
        <span> one</span>
        <span> </span>
        <span> product</span>
        <span> </span>
        <span> solution</span>
        <span> </span>
        <span> for</span>
        <span> </span>
        <span> anyone</span>
        <span> </span>
        <span> to</span>
        <span> </span>
        <span> easily</span>
        <span> </span>
        <span> grow</span>
        <span> </span>
        <span> herbs</span>
        <span> </span>
        <span> and</span>
        <span> </span>
        <span> flowers</span>
        <span> </span>
        <span> Plantone</span>
        <span> </span>
        <span> indoors.</span>
        <span> </span>
        <br />
      </div> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          width: "700px",
          margin: "2rem auto",
          fontSize: "60px",
          textAlign: "center",
        }}
      >
        {words1.map((word, i) =>
          word === "<>" ? (
            <div key={i} style={{ marginTop: "7rem" }}></div>
          ) : (
            <p
              ref={(el) => (wordRefs.current[i] = el)}
              key={i}
              style={{
                display: "inline-block",
                marginRight: "1rem",
                fontWeight: "bolder",
              }}
            >
              {word}
            </p>
          )
        )}
      </div>
      {/* <div
        style={{
          width: "700px",
          margin: "2rem auto 0",
          fontSize: "60px",
          textAlign: "center",
        }}
      >
        {words2.map((word, index) => (
          <p
            ref={(el) => (wordRefs.current[index] = el)}
            key={index}
            style={{
              // fontSize: "50px",
              display: "inline-block",
              marginRight: "1rem",
              fontWeight: "bolder",
              // color: "blue",
            }}
          >
            {word}
          </p>
        ))}
      </div> */}
      {/* <div style={{ height: "100vh" }} className="last"></div> */}
      <div className="img-container-parent">
        <div
          style={{
            fontSize: "55px",
            margin: "2.5rem auto",
            color: "#c7ffca",
          }}
        >
          Seed Collection
        </div>
        <div className="img-container">
          <img
            src="http://www.getplantone.com/wp-content/uploads/2018/08/7cb3d4a92c0316b0a922b4cd78393070_original.jpg"
            alt=""
          />
          <img
            src="http://www.getplantone.com/wp-content/uploads/2018/08/4687d8815a7d37269a2dbec39c0ae018_original.jpg"
            alt=""
          />
          <img
            src="http://www.getplantone.com/wp-content/uploads/2018/08/cb5c1a434266309cfe51c1be8f8df2da_original.jpg"
            alt=""
          />

          <img
            src="http://www.getplantone.com/wp-content/uploads/2018/08/marigold.jpg"
            alt=""
          />
          <img
            src="http://www.getplantone.com/wp-content/uploads/2018/08/milk_tree.jpg"
            alt=""
          />
          <img
            src="http://www.getplantone.com/wp-content/uploads/2018/08/e643e4b89d11b2df3ae0f16fa5fb18e1_original.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="contact-form">
        <div style={{ width: "65%", height: "100vh" }}>
          <img
            src="http://www.getplantone.com/wp-content/themes/plantone_2018/images/plantone.jpg"
            alt=""
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="form">
          {" "}
          <h1>Contact us</h1>
          <p>
            If you have any questions you can e-mail us at{" "}
            <a href="mailto:info@getplantone.com">info@getplantone.com</a> or
            fill the form below.
          </p>
          <form action="">
            <input type="text" placeholder="Name*" required />
            <input type="text" placeholder="Email*" required />
            <input type="text" placeholder="Subject*" required />
            <textarea
              name=""
              id=""
              cols="10"
              rows="3"
              placeholder="Message*"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
