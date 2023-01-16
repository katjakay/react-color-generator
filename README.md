# React Random Color Generator

A random color generator which will show a random color when a button is clicked:

- A button "Generate" that will generate a color when clicked
- Once the color is generated, the background color of a div will update - which contains the exact text "Generated Color: <background color hex code>

\*\* TODOs

<button
clickHandler={(event) => {
let color = randomColor();
this.setState({
bgColor: color,
});
}} >
Generate
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
