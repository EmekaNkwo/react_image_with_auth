# React-Image-With-Auth

A React component for displaying images with an authorization token in the request headers. This component is designed to be flexible and adaptable to various use cases, allowing the token to be provided via props or cookies.

## Features

- **Authorization Token**: Securely fetch images using an authorization token.
- **Placeholder and Fallback Images**: Display a placeholder while loading and a fallback image on error.
- **Error Handling**: Provides error state handling to manage image load failures.
- **Customization**: Supports custom alt text, styling, and class names.
- **Accessibility**: Ensures better accessibility with alt text and supports additional attributes.

## Installation

To install the component, use npm or yarn:

```bash
npm install react-image-with-auth
```

Or with yarn:

```bash
yarn add react-image-with-auth
```

## Usage

Basic Usage with Token from Cookie

This example demonstrates fetching an image using a token stored in cookies.

```tsx
import React from "react";
import ImageWithToken from "react-image-with-auth";

const App = () => {
  const imageUrl = "https://example.com/secure-image.jpg";

  return (
    <div>
      <ImageWithToken
        imageUrl={imageUrl}
        alt="Secure Image"
        placeholder="https://example.com/placeholder.jpg"
        fallback="https://example.com/fallback.jpg"
        className="custom-class"
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />
    </div>
  );
};

export default App;
```

Using Custom Headers

You can also provide custom headers, which will be merged with the Authorization token if present.

```tsx
import React from "react";
import ImageWithToken from "react-image-with-auth";

const App = () => {
  const imageUrl = "https://example.com/secure-image.jpg";
  const headers = {
    "Custom-Header": "custom-value",
  };

  return (
    <div>
      <ImageWithToken
        imageUrl={imageUrl}
        headers={headers}
        alt="Secure Image with Custom Headers"
        placeholder="https://example.com/placeholder.jpg"
        fallback="https://example.com/fallback.jpg"
        className="custom-class"
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />
    </div>
  );
};

export default App;
```

Using Token via Props

If the token is not available in cookies or you want to provide it directly, you can pass it via props.

```tsx
import React from "react";
import ImageWithToken from "react-image-with-auth";

const App = () => {
  const imageUrl = "https://example.com/secure-image.jpg";
  const token = "your-access-token-here";

  return (
    <div>
      <ImageWithToken
        imageUrl={imageUrl}
        token={token}
        alt="Secure Image with Prop Token"
        placeholder="https://example.com/placeholder.jpg"
        fallback="https://example.com/fallback.jpg"
        className="custom-class"
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />
    </div>
  );
};

export default App;
```

### Props

- `imageUrl` (string, required): The URL of the image to display.
- `token` (string, optional): Authorization token to include in the request headers. If not provided, the component will try to use a token from cookies.
- `headers` (HeadersInit, optional): Custom headers object, array of tuples, or Headers instance.
- `alt` (string, optional): Alt text for the image. Defaults to "Image".
- `placeholder` (string, optional): URL of a placeholder image to display while loading.
- `fallback` (string, optional): URL of a fallback image to display on error.
- `className` (string, optional): CSS class for custom styling.
- `style` (React.CSSProperties, optional): Inline styles for the image.

## Development

### Prerequisites

- Node.js
- npm or yarn

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/EmekaNkwo/react_image_with_auth.git
   cd react_image_with_auth
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Building

To build the project, run:

```bash
npm run build
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [js-cookie](https://github.com/js-cookie/js-cookie)
- [rimraf](https://github.com/isaacs/rimraf)

---

## Thank you for using React-Image-With-Auth!
