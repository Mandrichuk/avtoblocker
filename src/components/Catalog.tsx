import React, { useState } from "react";

import images from "../constants/index";

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
        <h1 className="title">{toUpperCase(catalogTextData.title)}</h1>

        <div className="fullCatalog">
          <div className="images">
            <div className="allImages">
              <div className="imagesGallery">
                {catalogText.imagesGallery.map((imageGallery, index) => (
                  <div onClick={() => setCurrentImage(imageGallery.id)} key={`image-${index}`} className="catalogImage">
                    <img src={imageGallery.image} alt="catalogImage" />
                  </div>
                ))}
              </div>
              {catalogText.imagesGallery.map((imageGallery, index) =>
                imageGallery.id === currentImage ? (
                  <div key={index} className="currentImage">
                    <img src={imageGallery.image} alt="catalogImage" />
                  </div>
                ) : null
              )}
            </div>
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
