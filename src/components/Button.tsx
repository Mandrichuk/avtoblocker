import React from "react";
import { motion } from "framer-motion";

import { ButtonProps } from "../lib/interfaces";

import { toUpperCase } from "../utils/toUpperCase";

function Button({ children, link }: ButtonProps) {
  return (
    <a href={link}>
      <button className={`button accent`}>
        <motion.div whileHover={{ scale: 1.1 }} className="text">
          {toUpperCase(children)}
        </motion.div>
      </button>
    </a>
  );
}

export default Button;
