import { useEffect } from "react";

const ImagePreloader = () => {
  useEffect(() => {
    const imageUrls = [
      "lung with bulb.webp",
      "MedExpert.webp",
      "bg2.webp",
      "emailsig.webp",
      "endocrine-system.webp",
      "favicon3.webp",
      "heart.webp",
      "heart(red).webp",
      "newBG8T.webp",
    ];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return null;
};

export default ImagePreloader;
