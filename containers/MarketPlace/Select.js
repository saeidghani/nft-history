import React, { Fragment } from 'react';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { twOverride } from '../../utils';

export default function Select({
  type = 'primary',
  options,
  label,
  labelClass,
  logoClass,
  selectedClass,
  optionsClass,
  placeholder,
  selected,
  onSelect,
  isSwitch,
  ...props
}) {
  const SwitchOption = ({ isSelected, title }) => (
    <>
      <div
        className={`w-4 h-4 rounded-full flex justify-center items-center border border-solid 
      ${isSelected ? 'border-primary' : 'border-lightBlue'}`}
      >
        <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-primary' : 'bg-transparent'}`} />
      </div>
      <div className={`text-white text-12 ${isSelected ? '' : 'text-opacity-40'}`}>{title}</div>
    </>
  );

  const CheckboxOption = ({ isSelected, title }) => (
    <>
      <div
        className={`w-4 h-4 rounded flex justify-center items-center border border-solid 
      ${isSelected ? 'bg-primary border-primary' : 'border-lightBlue'}`}
      >
        {isSelected && (
          <div className={`pb-1 ${isSelected ? '' : 'bg-transparent'}`}>
            <Image src="/icons/tick.svg" width={8} height={6} />
          </div>
        )}
      </div>
      <div className={`text-white text-12 ${isSelected ? '' : 'text-opacity-40'}`}>{title}</div>
    </>
  );

  return (
    <div className="w-38.5 xs:w-40">
      <Listbox placeholder={placeholder} value={selected.value} onChange={onSelect}>
        {({ open }) => (
          <>
            <div className="relative z-10">
              <Listbox.Button
                className="relative w-full text-left cursor-default focus:outline-none
              focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white
               focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2
               focus-visible:border-indigo-500 text-white text-12 2xs:text-14 bg-darkGray rounded-18
               pl-4 h-14 cursor-pointer"
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
                <span
                  className={`absolute top-6 right-2 flex items-center pointer-events-none 
                                  ${open ? 'transform rotate-180' : 'rotate-0'}`}
                >
                  <Image
                    src="/icons/arrowDown.svg"
                    alt="Arrow"
                    aria-hidden="true"
                    width={18}
                    height={9}
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
                  className="absolute top-10 pt-4 w-full overflow-auto focus:outline-none bg-darkGray
                             rounded-b-18"
                >
                  {options.map(
                    (option, optionIdx) =>
                      option.value && (
                        <Listbox.Option
                          key={optionIdx}
                          className={({ active }) =>
                            `${active ? '' : ''}
                          select-none relative py-1 pl-4 pr-4 cursor-pointer mb-4`
                          }
                          value={option}
                        >
                          <div
                            key={option.key}
                            className="flex items-center space-x-2 cursor-pointer"
                            onClick={() => onSelect(option)}
                          >
                            {isSwitch ? (
                              <SwitchOption
                                title={option.title}
                                isSelected={option.key === selected.key}
                              />
                            ) : (
                              <CheckboxOption
                                title={option.title}
                                isSelected={option.key === selected.key}
                              />
                            )}
                          </div>
                        </Listbox.Option>
                      ),
                  )}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}
