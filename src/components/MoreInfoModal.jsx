import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
  } from "@headlessui/react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faTimes } from "@fortawesome/free-solid-svg-icons";
  
  export default function MoreInfoModal({
    name,
    id,
    ingredients,
    isOpen,
    setIsMoreInfoOpen,
    image,
    caloriesPerServing,
    day,
  }) {
    const ingredientsDisplay = ingredients.join(", ");
  
    return (
      <Dialog open={isOpen} as="div" className="relative z-10" onClose={() => setIsMoreInfoOpen(false)}>
        <DialogBackdrop className="fixed inset-0 bg-black/30">
          <div className="fixed inset-10 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center">
              <DialogPanel
                className="bg-neutralLight border-2 border-darkGreen w-full max-w-md rounded-xl p-2"
              >
                <div className="flex">
                  <div className="p-2 text-2xl w-full text-center">{day}</div>
                  <button className="text-white" onClick={() => setIsMoreInfoOpen(false)}>
                    <FontAwesomeIcon icon={faTimes} className="bg-gray-300 p-2 rounded-full" />
                  </button>
                </div>
  
                <div
                  className="m-4 rounded-3xl h-[200px] bg-cover"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
  
                <div className="my-6">
                  <div className="m-4 text-lg font-bold flex justify-between">
                    <div>{name}</div>
                    <div className="text-gray-600">{caloriesPerServing} kcal</div>
                  </div>
                  <div className="m-4 font-light">{ingredientsDisplay}</div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </DialogBackdrop>
      </Dialog>
    );
  }
  