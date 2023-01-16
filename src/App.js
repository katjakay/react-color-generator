// import { Box } from '@mui/material';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <h1>Random Color Generator</h1>

      <div
        style={{
          width: '300px',
          height: '300px',
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
      <button
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
    </div>
  );
}
