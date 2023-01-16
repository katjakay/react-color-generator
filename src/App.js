import { Box } from '@mui/material';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <h1> Random Color Generator</h1>
      <button>
        onClick=
        {() => {
          setColor(randomColor());
        }}
        > Generate
      </button>

      <div>
        style=
        {{
          marginLeft: '40%',
          marginTop: '60px',
          width: '30%',
          backgroundColor: color,
        }}
        <Box color="white" bgcolor="red" p={10}>
          {color}
        </Box>
      </div>
    </div>
  );
}
