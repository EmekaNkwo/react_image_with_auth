"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_cookie_1 = __importDefault(require("js-cookie"));
const react_1 = __importStar(require("react"));
const ImageWithToken = ({ imageUrl, token, headers, alt = "Image", placeholder, fallback, className, style, }) => {
    const [imgSrc, setImgSrc] = (0, react_1.useState)(placeholder || "");
    const [error, setError] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        let didCancel = false;
        const accessToken = token || js_cookie_1.default.get("accessToken");
        const fetchImage = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const headersObj = new Headers(headers);
                if (token && !headersObj.has("Authorization")) {
                    headersObj.append("Authorization", `Bearer ${accessToken}`);
                }
                const response = yield fetch(imageUrl, { headers: headersObj });
                if (!response.ok) {
                    throw new Error("Failed to fetch image");
                }
                const blob = yield response.blob();
                const url = URL.createObjectURL(blob);
                if (!didCancel) {
                    setImgSrc(url);
                }
            }
            catch (error) {
                if (!didCancel) {
                    console.error("Error fetching image:", error);
                    setError(true);
                }
            }
        });
        fetchImage();
        return () => {
            didCancel = true;
            if (imgSrc && imgSrc !== placeholder && imgSrc !== fallback) {
                URL.revokeObjectURL(imgSrc);
            }
        };
    }, [imageUrl, token]);
    return (react_1.default.createElement("img", { src: error && fallback ? fallback : imgSrc, alt: alt, className: className, style: style, onError: () => setError(true) }));
};
exports.default = react_1.default.memo(ImageWithToken);
