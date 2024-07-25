import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

// Define the props interface
interface ImageComponentProps {
  imageUrl: string;
  token?: string; // Token can be provided via prop or default to cookie
  alt?: string;
  placeholder?: string; // URL for a placeholder image while loading or on error
  fallback?: string; // URL for a fallback image on error
  className?: string; // CSS class for custom styling
  style?: React.CSSProperties; // Inline styles
}

const ImageWithToken: React.FC<ImageComponentProps> = ({
  imageUrl,
  token,
  alt = "Image",
  placeholder,
  fallback,
  className,
  style,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(placeholder || "");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let didCancel = false;
    const accessToken = token || Cookies.get("accessToken");

    if (!accessToken) {
      console.error("No access token provided or found in cookies.");
      return;
    }

    const fetchImage = async () => {
      try {
        const response = await fetch(imageUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch image");
        }
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        if (!didCancel) {
          setImgSrc(url);
        }
      } catch (error) {
        if (!didCancel) {
          console.error("Error fetching image:", error);
          setError(true);
        }
      }
    };

    fetchImage();

    return () => {
      didCancel = true;
      if (imgSrc && imgSrc !== placeholder && imgSrc !== fallback) {
        URL.revokeObjectURL(imgSrc);
      }
    };
  }, [imageUrl, token]);

  return (
    <img
      src={error && fallback ? fallback : imgSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
    />
  );
};

export default React.memo(ImageWithToken);
