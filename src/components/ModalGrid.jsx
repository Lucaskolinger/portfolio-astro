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
        className="fixed inset-0 mx-8 flex justify-center bg-neutral-dark/95"
      >
        <div className="custom-grid-modal sm:custom-grid-modal-2 mt-4 mb-8 w-full max-w-6xl">
          <CloseModalBtn />
          <ModalTitle title={$selectedModal.title} />
          <ModalMainImage
            image={$selectedModal.detailedImage || $selectedModal.image}
          />
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
