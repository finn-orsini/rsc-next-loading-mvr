import React from "react";
import "../styles/globals.css";
import TopNav from "../components/nav.client";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>RSC Layout Streaming MVR</title>
      </head>

      <body>
        <div>
          <div>
            <TopNav />
          </div>
          <div style={{ padding: "20px 100px" }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
