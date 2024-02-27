import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

import { statisticsText } from "../constants";
import { StatisticsProps } from "../lib/interfaces";

import images from "../constants/index";

const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

function Statistics({ lang }: StatisticsProps) {
  const statisticsTextData = statisticsText[lang] || statisticsText["en"];

  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="statisticsSection">
      <div className="wrapper">
        <div className="statistics">
          {statisticsTextData.statistics.map((statistic, index) => (
            <div key={`statistic-${index}`} className="statistic">
              <h3 className="number">
                {isVideoVisible && (
                  <CountUp
                    start={statistic.number / 2}
                    end={statistic.number}
                    duration={2}
                    easingFn={easeInOutQuad}
                  />
                )}
              </h3>
              <p className="text">{statistic.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wrapper" ref={videoRef}>
        <div className="exampleContainer">
          <div className="exampleDetails">
            <div className="imageContainer">
            <img src={images.arrowdown} alt="example" />
            </div>
            <p className="example">{statisticsTextData.example}</p>
          </div>
          <div className="videoWrapper">
            <iframe
              width="100%"
              height="100%"
              src={statisticsTextData.youtubeUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="subtitle">
        <p>{statisticsTextData.subtitle}</p>
      </div>
    </section>
  );
}

export default Statistics;
