import React from "react";
interface ImageComponentProps {
    imageUrl: string;
    headers?: HeadersInit;
    token?: string;
    alt?: string;
    placeholder?: string;
    fallback?: string;
    className?: string;
    style?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<ImageComponentProps>;
export default _default;
