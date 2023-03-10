import { css } from '@emotion/react';
import { Box } from '@mui/material';
import randomColor from 'randomcolor';
import { useState } from 'react';

const buttonStyles = css`
  background-color: '2d3142';
`;

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <h1>Random Color Generator</h1>
      <Box
        sx={{
          width: 300,
          height: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 2,
          backgroundColor: color,yar
          borderRadius: 4,
        }}
      />

      <div
        style={{
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          margin: 50,
          alignItems: 'center',
          fontFamily: 'Futura',
        }}
      >
        Generated Color: {color}
      </div>

      <button
        css={buttonStyles}
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Generate
      </button>
    </div>
  );
}
