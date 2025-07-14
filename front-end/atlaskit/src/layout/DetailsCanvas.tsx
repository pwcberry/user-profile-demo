import { Outlet } from "react-router";

function DetailsCanvas() {
  return (
    <article className="grid__col-start_3 grid__col-span_10">
      <Outlet />
    </article>
  );
}

export default DetailsCanvas;
