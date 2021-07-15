import React from 'react';

function Drawer({ children, drawerOpen, closeDrawer }) {
  return (
    <div>
      {drawerOpen && (
        <div
          className="bg-black bg-opacity-10 absolute top-0 bottom-0 left-0 right-0
                     h-full w-full z-30"
          onClick={closeDrawer}
        />
      )}
      <div
        className={`lg:hidden transform ease-in-out transition-all duration-300 
                    z-50 shadow-xl rounded-b-18 absolute left-0 right-0 
                    ${drawerOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Drawer;
