// eslint-disable-next-line no-unused-vars
import React from 'react';

const encapsulatingStyles = document.createElement('link');
encapsulatingStyles.setAttribute('href', 'https://unpkg.com/@telekom/scale-components/dist/scale-components/scale-components.css');
encapsulatingStyles.setAttribute('rel', 'stylesheet');
document.head.appendChild(encapsulatingStyles);

const initializeJavascript = document.createElement('script');
initializeJavascript.setAttribute('src', 'https://unpkg.com/@telekom/scale-components/dist/scale-components/scale-components.esm.js');
initializeJavascript.setAttribute('type', 'module');
document.body.appendChild(initializeJavascript);


export default function UXPinWrapper({ children }) {
  return <div style={{display: "inline-block"}}>{children}</div>;
}
