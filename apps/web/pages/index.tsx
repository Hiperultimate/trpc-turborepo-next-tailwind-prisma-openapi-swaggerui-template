import { Button } from "ui";

export default function Home() {
  fetch("http://localhost:3000/api/hello").then((response) =>
    response.json().then((data) => console.log(data))
  );

  return (
    <>
      Hello
      <Button />
    </>
  );
}
