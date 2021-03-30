import React, { FC } from "react";
import Iframe from 'react-iframe'

interface GalleryProps {
  id: string;
}

const GalleryElement: FC<GalleryProps> = ({ id }) => {
  return (
    <>
    <div className="tiktok-embed" style={{ maxWidth: "505px", minWidth: "325px" }}>
    <Iframe url={`https://www.tiktok.com/embed/v2/${id}?lang=en-US`}
            width="100%"
            height="572px"
                ></Iframe>

    </div>
    </>
  );
};

export default GalleryElement;
