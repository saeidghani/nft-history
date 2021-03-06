import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useRef } from 'react';
import { twOverride } from '../../utils';

export default function Modal({
  open,
  title,
  content,
  onCloseModal,
  afterCloseModal = () => {},
  maxWidth,
  containerClass,
  contentClass,
}) {
  const cancelButtonRef = useRef();

  function closeModal() {
    onCloseModal();
    afterCloseModal();
  }

  return (
    <div className="relative">
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={twOverride(
                  'bg-darkGray3 inline-block w-full my-8  text-left ' +
                    'align-middle transition-all transform shadow-xl rounded-20',
                  containerClass,
                )}
                style={{ maxWidth: maxWidth || 528 }}
              >
                <Dialog.Title as="h3">{title}</Dialog.Title>
                <div className={contentClass}>{content}</div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
