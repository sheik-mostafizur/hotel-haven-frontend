import { ReactNode, useState, useRef, useEffect } from "react";
import Button from "../button";

interface ModalProps {
  children: ReactNode;
  button?: {
    label: string;
    className: string;
  };
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ children, button, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const closeOnOutsideClick = (e: any) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", closeOnOutsideClick);
    } else {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      {/* <!-- Modal toggle --> */}
      <Button className={button?.className} onClick={() => setIsOpen(true)}>
        {button?.label || "Toggle modal"}
      </Button>

      {/* <!-- Main modal --> */}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } bg-secondary-500/50 flex items-center justify-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full" ref={modalRef}>
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-secondary-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-secondary-600">
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                {title || "Terms of Service"}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="text-secondary-400 bg-transparent hover:bg-secondary-200 hover:text-secondary-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-secondary-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
