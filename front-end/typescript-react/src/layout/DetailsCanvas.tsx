import { Outlet } from "react-router";

function DetailsCanvas() {
  return (
    <article className="grid__col-start_4 grid__col-span_9">
      <Outlet />
    </article>
  );
}

export default DetailsCanvas;
