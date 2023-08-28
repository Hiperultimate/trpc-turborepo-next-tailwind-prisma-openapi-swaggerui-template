import { Button } from "ui";

export default function Home() {
  fetch("http://localhost:3000/api/hello").then((response) =>
    response.json().then((data) => console.log(data))
  );

  return (
    <>
      <div className="flex flex-col">
        <span className="p-5 text-lg font-bold">Web Page</span>
        <div className="mx-4">
          <Button />
        </div>
      </div>
    </>
  );
}
