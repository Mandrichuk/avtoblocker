import React, { useState } from "react";

import Title from "./Title";

import Button from "./Button";

import { CatalogProps } from "../lib/interfaces";
import { catalogText } from "../constants/index";
import { navigationsText } from "../constants";

import { useWindowWidth } from "../utils/useWindowWidth";
import { toUpperCase } from "../utils/toUpperCase";

function Catalog({ lang }: CatalogProps) {
  const catalogTextData = catalogText[lang] || catalogText["en"];
  const windowWidth = useWindowWidth();
  const [currentImage, setCurrentImage] = useState(1);

  return (
    <section className="catalogSection" id={navigationsText.catalog.id}>
      <div className="wrapper">
        <Title>{toUpperCase(catalogTextData.title)}</Title>

        <div className="fullCatalog">
          <div className="images">
            {catalogText.imagesGallery.map((imageGallery, index) =>
              imageGallery.id === currentImage ? (
                <div key={index} className="currentImage">
                  <img src={imageGallery.image} alt="catalogImage" />
                </div>
              ) : null
            )}
          </div>
          <div className="text">
            <div className="name">{catalogTextData.name}</div>
            <div className="subtitle">{catalogTextData.subtitle}</div>
            <div className="article">{catalogTextData.article}</div>
            <div className="benefits">
              {catalogTextData.kit.map((kit, index) => (
                <li key={`kit-${index}`} className="kit">
                  {kit}
                </li>
              ))}
            </div>
            <Button link={`#${navigationsText.order.id}`}>
              {catalogTextData.button.name}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
