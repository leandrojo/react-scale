import React from "react";

import "../src/common/normalize.css";

export function monospace(text) {
  return `<span style="font-family:monospace;background:#f7f7f7">${text}</span>`;
}

function InfoPanel({ text }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        fontColor: "#3c3f40",
        fontSize: 14,
        margin: "8px 0",
        padding: 16
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

export default function Decorator(text) {
  return story => (
    <div style={{ width: "100%" }}>
      <InfoPanel text={text} />
      <div style={{ padding: 16 }}>{story()}</div>
    </div>
  );
}
