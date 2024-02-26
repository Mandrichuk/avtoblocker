import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { TitleProps } from "../lib/types";

import { toUpperCase } from "../utils/toUpperCase";

function Title({ children }: TitleProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="titleContainer"
      ref={containerRef}
      whileHover={{ color: "#a50808" }}
    >
      <h3 className="title">{toUpperCase(children)}</h3>
      <motion.div
        className="underline"
        initial={{ width: 0 }}
        animate={{ width: isVisible ? "110%" : 0 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
}

export default Title;
