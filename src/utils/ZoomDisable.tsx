import React, { useEffect } from "react";

const ZoomDisable = () => {
  useEffect(() => {
    const disableZoom = (event: WheelEvent) => {
      if (event.ctrlKey === true) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", disableZoom, { passive: false });

    return () => {
      window.removeEventListener("wheel", disableZoom);
    };
  }, []);

  return null;
};

export default ZoomDisable;
