import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
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
    <div className="">
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none "
        onClose={close}
      >
        <div className="fixed inset-10 z-10 overflow-y-auto">
          <div className=" flex min-h-full  items-center justify-center">
            <DialogPanel
              transition
              className="bg-white border-2 border-darkGreen w-full max-w-md rounded-xl p-2 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex">
                <div className="p-2 text-2xl w-full text-center">{day}</div>

                <button
                  className="text-white"
                  onClick={() => setIsMoreInfoOpen(false)}
                >
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="bg-gray-300 text-xl p-2 rounded-full"
                  />
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
                  <div className="text-gray-600">{caloriesPerServing}kcal</div>
                </div>

                <div className="m-4 font-light">{ingredientsDisplay}</div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
