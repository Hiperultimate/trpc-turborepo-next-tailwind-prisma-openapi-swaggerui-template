import { Button } from "ui";
import { trpc } from "../utils/trpc";

export default function Home() {
  fetch("http://localhost:3000/api/hello").then((response) =>
    response.json().then((data) => console.log(data)),
  );

  const checking = trpc.example.exampleInput.useQuery("SomeString");

  if (!checking.data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex flex-col ">
        <span className="p-5 pt-2 text-lg font-bold ">Web Page</span>
        <div className="mx-4">
          <Button />
        </div>
        <div>{JSON.stringify(checking.data)}</div>
      </div>
    </>
  );
}
