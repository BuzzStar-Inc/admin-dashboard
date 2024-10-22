interface HeaderProps {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (_arg0: boolean) => void;
  }
  
  const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
    return (
      <header className="sticky z-10 top-0 flex w-full bg-white lg:bg-background">
        <div className="flex flex-grow items-center justify-between px-4 py-6 md:px-6 2xl:px-11">
          <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
       
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
              className="flex flex-col justify-center items-center"
            >
              <span
                className={`bg-black block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        sidebarOpen
                          ? 'rotate-45 translate-y-1'
                          : '-translate-y-0.5'
                      }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm my-0.5 ${
                        sidebarOpen ? 'opacity-0' : 'opacity-100'
                      }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out 
                      h-0.5 w-6 rounded-sm ${
                        sidebarOpen
                          ? '-rotate-45 -translate-y-1'
                          : 'translate-y-0.5'
                      }`}
              ></span>
            </button>
      
          </div>
        </div>
      </header>
    );
  };
  
  Header.displayName = 'Header';
  export { Header};
