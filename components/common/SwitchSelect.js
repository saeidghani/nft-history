import React from 'react';

function SwitchSelect({ wrapperClass, items, activeFilter, onSetActiveFilter, title }) {
  return (
    <div className={wrapperClass}>
      <div className="bg-darkGray py-5 pl-6.5 rounded-20 w-full">
        {title && <div className="text-white mb-4.5">{title}</div>}
        <div className="flex flex-col space-y-5">
          {items.map((i) => (
            <div
              key={i.key}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => onSetActiveFilter(i)}
            >
              <div
                className={`w-4 h-4 rounded-full flex justify-center items-center
                              border border-solid ${
                                i.key === activeFilter.key ? 'border-primary' : 'border-lightBlue'
                              }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    i.key === activeFilter.key ? 'bg-primary' : 'bg-transparent'
                  }`}
                />
              </div>
              <div className="text-white text-opacity-40">{i.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SwitchSelect;
