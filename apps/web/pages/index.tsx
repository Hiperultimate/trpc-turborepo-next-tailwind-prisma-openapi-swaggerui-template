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
  const {
    data: exampleCall,
    isLoading: isExampleCallLoading,
    isError: isExampleCallError,
  } = trpc.example.exampleInput.useQuery({
    id: "someStringId",
  });

  // Database call
  const {
    data: exampleDbCall,
    isLoading: isDbCallLoading,
    isError: dbCallError,
  } = trpc.example.prismaExample.useQuery();

  return (
    <div className="mx-4 ">
      <div className=" flex flex-col">
        <span className="pt-2 text-lg font-bold ">Web Page</span>
        {isExampleCallError ? (
          <div>Something went wrong</div>
        ) : isExampleCallLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col">
            <span className="my-2 font-bold">User Details</span>
            <div>
              ID : <span>{exampleCall?.id}</span>
            </div>
            <div>
              User Session : <span>{exampleCall?.hasSession ? "true" : "false"}</span>
            </div>
          </div>
        )}
      </div>

      <div className=" mt-4 flex flex-col">
        <span className="pt-2 text-lg font-bold ">Database Call</span>
        {dbCallError ? (
          <div>Something is wrong with the database</div>
        ) : isDbCallLoading ? (
          <div>Calling database...</div>
        ) : (
          <div>{JSON.stringify(exampleDbCall)}</div>
        )}
      </div>

      <div className="my-2">
        <Button />
      </div>
    </div>
  );
}
