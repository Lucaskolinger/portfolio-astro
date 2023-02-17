import Welcome from "./Welcome";
import Aside from "./Aside";
import Modal from "./Modal";

export default function MainGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-neutral-dark h-screen">
      <Welcome />
      <Aside />
      <Modal />
    </div>
  );
}
