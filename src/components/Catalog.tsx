import React from "react";

import images from "../constants/index";

import Button from "./Button";

import { CatalogProps } from "../lib/interfaces";
import { catalogText } from "../constants/index";

import { useWindowWidth } from "../utils/useWindowWidth";
import { toUpperCase } from "../utils/toUpperCase";

function Catalog({ lang }: CatalogProps) {
  const catalogTextData = catalogText[lang] || catalogText["en"];
  const windowWidth = useWindowWidth();

  return (
    <section className="catalogSection">
      <div className="wrapper">
        <h1 className="title">{toUpperCase(catalogTextData.title)}</h1>

        <div className="fullCatalog">
          <div className="images">
            <div className="allImages">
              <div className="catalogImage">
                <img src={images.robbery} alt="catalogImage" />
              </div>
              <div className="catalogImage">
                <img src={images.robbery} alt="catalogImage" />
              </div>
              <div className="catalogImage">
                <img src={images.robbery} alt="catalogImage" />
              </div>
            </div>
            <div className="currentImage">
              <img src={images.robbery} alt="catalogImage" />
            </div>
          </div>
          <div className="text">
            <div className="name">{catalogTextData.name}</div>
            <div className="subtitle">{catalogTextData.subtitle}</div>
            <div className="article">{catalogTextData.article}</div>
            <div className="benefits">
              {catalogTextData.kit.map((kit, index) => (
                <div key={`kit-${index}`} className="kit">
                  {kit}
                </div>
              ))}
            </div>
            <Button>{catalogTextData.button.name}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
