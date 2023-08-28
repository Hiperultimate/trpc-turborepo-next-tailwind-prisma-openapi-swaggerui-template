"use client";

export function Button(): JSX.Element {
  return (
    // eslint-disable-next-line no-alert
    <button className="bg-green-300 p-2" onClick={(): void => alert("booped")} type="button">
      Boop
    </button>
  );
}
