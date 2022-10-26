import { Inter } from "@next/font/google";

import { type LayoutComponent } from "../types/next-layout";

import "../styles/globals.css";

export const inter = Inter();

const RootLayout: LayoutComponent = ({ children }) => {
  return (
    <html lang="en">
      <head className={inter.className}>
        <title>Create T3 App (Experimental)</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
