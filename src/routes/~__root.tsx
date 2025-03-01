import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 join">
        <Link
          to="/"
          className="[&.active]:btn-secondary btn btn-sm btn-primary join-item"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="[&.active]:btn-secondary btn btn-sm btn-primary join-item"
        >
          About
        </Link>
      </div>
      <hr />

      <Outlet />

      <TanStackRouterDevtools initialIsOpen={false} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  ),
});
