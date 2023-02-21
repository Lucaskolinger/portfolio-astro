import { useStore } from "@nanostores/react";
import { selectedModal } from "../modalStore";
import CloseModalBtn from "./CloseModalBtn";
import ModalTitle from "./ModalTitle";
import ModalMainImage from "./ModalMainImage";
import ModalInfo from "./ModalInfo";

export default function ModalGrid() {
  const $selectedModal = useStore(selectedModal);

  return (
    $selectedModal && (
      <div
        key="modal"
        onClick={() => {
          selectedModal.set(null);
        }}
        className="fixed flex mx-8 justify-center bg-neutral-dark/90 inset-0"
      >
        <div className="custom-grid-modal sm:custom-grid-modal-2 max-w-6xl mt-4 mb-8 w-full">
          <CloseModalBtn />
          <ModalTitle title={$selectedModal.title} />
          <ModalMainImage image={$selectedModal.image} />
          <ModalInfo
            link={$selectedModal.link}
            github={$selectedModal.github}
            description={$selectedModal.description}
          />
        </div>
      </div>
    )
  );
}
