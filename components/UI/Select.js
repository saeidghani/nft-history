import React, { Fragment } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { twOverride } from '../../utils';

export default function Select({
  type = 'primary',
  options,
  width = 'w-56',
  label,
  labelClass,
  logoClass,
  selectedClass,
  optionsClass,
  placeholder,
  selected,
  onSelect,
  ...props
}) {
  return (
    <div className={width}>
      <Listbox placeholder="" value={selected.value} onChange={onSelect}>
        {({ open }) => (
          <>
            <div className="relative z-10">
              <Listbox.Button
                className="relative w-full text-left cursor-default focus:outline-none
              focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white
               focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2
               focus-visible:border-indigo-500 bg-transparent"
                {...props}
              >
                <div className="flex items-center space-x-4 py-0.5">
                  {selected?.logo && (
                    <div className={logoClass ? logoClass : ''}>{selected?.logo}</div>
                  )}
                  <div>
                    {label && <div className={labelClass}>{label}</div>}
                    <span className={twOverride('block truncate', selectedClass)}>
                      {selected?.title}
                    </span>
                  </div>
                </div>
                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                  <Image
                    src="/icons/arrowDown.svg"
                    alt="Arrow"
                    aria-hidden="true"
                    width={20}
                    height={12}
                  />
                </span>
              </Listbox.Button>
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className={twOverride(
                    'absolute w-full mt-1 overflow-auto focus:outline-none',
                    optionsClass,
                  )}
                >
                  {options.map((option, optionIdx) => (
                    <Listbox.Option
                      key={optionIdx}
                      className={({ active }) =>
                        `${active ? '' : ''}
                          select-none relative py-1 pl-4 pr-4 cursor-pointer bg-white`
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <div className="flex items-center space-x-2">
                          {option?.logo && (
                            <div className={logoClass ? logoClass : ''}>{option?.logo}</div>
                          )}
                          <span className="block truncate">{option.title}</span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
