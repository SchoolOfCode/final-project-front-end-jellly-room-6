import "css-doodle";

export default function Bean() {
  return (
    <css-doodle>
      {`
:doodle {
@grid: 7 / 8em;
@shape: bean;
}

@even {
background: blue;
;
transform: rotate(120deg);    

}
`}
    </css-doodle>
  );
}
