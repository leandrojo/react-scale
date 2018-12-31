import React from 'react';
import PropTypes from 'prop-types';

import '../src/common/normalize.css';

export function monospace(text) {
  return `<span style="font-family:monospace;background:#f7f7f7">${text}</span>`;
}

const InfoPanel = ({ text }) => (
  <div
    style={{
      backgroundColor: '#fff',
      fontColor: '#3c3f40',
      fontSize: 14,
      margin: '8px 0',
      padding: 16,
    }}
  >
    <span dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

InfoPanel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function Decorator(text) {
  return story => (
    <div style={{ width: '100%' }}>
      <InfoPanel text={text} />
      <div style={{ padding: 16 }}>{story()}</div>
    </div>
  );
}
