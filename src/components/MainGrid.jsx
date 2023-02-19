import Welcome from "./Welcome";
import Aside from "./Aside";
import Modal from "./Modal";

export default function MainGrid() {
  return (
    <div className="grid grid-cols-1 bg-neutral-dark lg:grid-cols-2 lg:h-screen justify-items-center">
      <Welcome />
      <Aside />
      <Modal />
    </div>
  );
}
