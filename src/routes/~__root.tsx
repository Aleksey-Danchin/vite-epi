import { IS_DEVELOPMENT_MODE } from "@src/servicesApiEntities/constants";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="w-screen h-screen overflow-hidden" data-theme="night">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>

        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>

      <hr />

      <Outlet />

      {IS_DEVELOPMENT_MODE && (
        <>
          <TanStackRouterDevtools />
          <ReactQueryDevtools initialIsOpen={false} />
        </>
      )}
    </div>
  );
}
