import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./Pages/slider.css";
import { Button, Typography } from "@mui/material";
import Viewer from "./Viewer";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

export default function Slider() {
  const [showModel, setShowModel] = useState(false);
  return (
    <Swiper navigation={true}>
      <SwiperSlide>
        {({ isActive }) => (
          <div>
            {showModel && isActive ? (
              <Viewer sceneId="61d82b762e21d40039c73fd4" />
            ) : (
              <>
                <Typography>
                  Increase your sales with Web based AR experience. No app
                  download, zero coding.
                </Typography>
                <Button
                  onClick={() => {
                    setShowModel(true);
                  }}
                  className="button"
                >
                  <Typography>Try It</Typography>
                </Button>
              </>
            )}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div>
            {showModel && isActive ? (
              <Viewer sceneId="61d82b762e21d40039c73fd4" />
            ) : (
              <>
                <Typography>
                  Increase your sales with Web based AR experience. No app
                  download, zero coding.
                </Typography>
                <Button
                  className="button"
                  onClick={() => {
                    setShowModel(true);
                  }}
                >
                  <Typography>Try It</Typography>
                </Button>
              </>
            )}
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div>
            {showModel && isActive ? (
              <Viewer sceneId="61d82b762e21d40039c73fd4" />
            ) : (
              <>
                <Typography>
                  Increase your sales with Web based AR experience. No app
                  download, zero coding.
                </Typography>
                <Button
                  className="button"
                  onClick={() => {
                    setShowModel(true);
                  }}
                >
                  <Typography>Try It</Typography>
                </Button>
              </>
            )}
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}
