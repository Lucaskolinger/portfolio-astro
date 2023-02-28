import Welcome from "./Welcome";
import Aside from "./Aside";
import ModalGrid from "./ModalGrid";

export default function MainGrid() {
  return (
    <div className="grid grid-cols-1 justify-items-center bg-neutral-dark lg:h-screen lg:grid-cols-5">
      <Welcome />
      <Aside />
      <ModalGrid />
    </div>
  );
}
