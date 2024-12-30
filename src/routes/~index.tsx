import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [value, setValue] = useState(0);

  const inc = () => setValue((value) => value + 1);

  return (
    <button className="btn btn-lg btn-outline" onClick={inc}>
      {value}
    </button>
  );
}
