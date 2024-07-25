// react-image-with-auth.d.ts
declare module "react-image-with-auth" {
  import { FC } from "react";

  interface ImageWithAuthProps {
    imageUrl: string;
    token?: string;
    alt?: string;
    placeholder?: string;
    fallback?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  const ImageWithAuth: FC<ImageWithAuthProps>;
  export default ImageWithAuth;
}
