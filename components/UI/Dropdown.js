import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { twOverride } from '../../utils';

export default function Dropdown({
  selected,
  onSelect = () => {},
  width = 'w-56',
  title,
  items,
  menuButtonWrapperClass,
  menuButtonClass,
  menuItemsClass,
  menuItemClass,
  selectedItemClass,
  unselectedItemClass,
  displaySelected,
}) {
  return (
    <div className={`relative text-center z-30 ${width}`}>
      <Menu as="div" className=" inline-block text-left w-full">
        {({ open }) => (
          <>
            <div className={`absolute right-0 left-0 z-30 ${menuButtonWrapperClass || 'top-0'}`}>
              <Menu.Button
                className={twOverride(
                  'inline-flex items-center w-full focus:outline-none justify-center',
                  menuButtonClass,
                )}
              >
                <div>{displaySelected && selected?.title ? selected?.title : title}</div>
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className={twOverride(
                  'absolute focus:outline-none -right-8 w-56 rounded-18 bg-gray',
                  menuItemsClass,
                )}
              >
                {items.map((i) => (
                  <div key={i?.key} className="w-full">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${twOverride(
                            'group flex justify-center items-center focus:outline-none' +
                              'rounded-md px-2 py-2 text-18 text-center w-full',
                            menuItemClass,
                          )} ${
                            i?.key === selected?.key
                              ? selectedItemClass || 'text-primary'
                              : unselectedItemClass || 'text-gray'
                          }`}
                          onClick={() => {
                            onSelect(i);
                            i?.onClick ? i?.onClick() : {};
                          }}
                        >
                          {i.title}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
