import { useEffect } from "react";
import { Button } from "ui";
import { trpc } from "../utils/trpc";

export default function Home() {
  useEffect(() => {
    const asyncFn = async () => {
      // An API call for NextJS Server
      const sendRequest = await fetch("http://localhost:3000/api/hello");
      const data = await sendRequest.json();
      console.log(data);
    };

    asyncFn();
  }, []);

  // API call for apps/api Express tRPC server
  const { data: exampleCall, isLoading } = trpc.example.exampleInput.useQuery({ id: "someStringId" });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="mx-4 flex flex-col">
        <span className="pt-2 text-lg font-bold ">Web Page</span>
        <div className="my-2">
          <Button />
        </div>
        <div className="flex flex-col">
          <span className="my-2 font-bold">User Details</span>
          <div>
            ID : <span>{exampleCall?.id}</span>
          </div>
          <div>
            Name : <span>{exampleCall?.name}</span>
          </div>
          <div>
            User Session : <span>{exampleCall?.hasSession ? "true" : "false"}</span>
          </div>
        </div>
      </div>
    </>
  );
}
