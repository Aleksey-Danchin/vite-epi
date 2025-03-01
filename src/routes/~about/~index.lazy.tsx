import { createLazyFileRoute } from "@tanstack/react-router";
import { AboutPage } from "./AboutPage";

export const Route = createLazyFileRoute("/about/")({
  component: AboutPage,
});
