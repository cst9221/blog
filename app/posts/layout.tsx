import React from "react"
import Input from "../_components/common/Input"
import Icon from "../_components/common/Icon"
import Shortcut from "../_components/common/Shortcut"

const DefaultLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <header className="sticky top-0 h-[80px] border-b-[1px] bg-white z-50">
        <div className="flex items-center max-w-[1400px] h-full py-[20px] mx-auto ">
          <div className="pl-[8px]">최승태</div>

          <div className="flex-1" />

          <div className="flex justify-between items-center w-[150px] bg-gray-200 py-[5px] pl-[10px] pr-[8px] mr-[8px] rounded-sm select-none transition-all hover:cursor-text">
            <div className="flex">
              <Icon name="search" viewBox="0 0 24 24" width={18} height={18} />
              <span className="text-xs">search</span>
            </div>

            <div className="flex gap-[4px]">
              <Shortcut>⌘</Shortcut>
              <Shortcut>F</Shortcut>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="relative flex max-w-[1400px] mx-auto">
          <div className="sticky top-[80px] h-[calc(100vh-80px)] border-r-[1px]">
            <div className="w-[250px] ">
              <div className="flex flex-col gap-[8px] m-[8px]">
                <div className="flex rounded-md px-[8px] py-[4px] bg-gray-200 text-sm">
                  <div className="flex items-center mr-[8px]">
                    <Icon name="nodejs-icon" width="1.2em" height="1.2em" />
                  </div>
                  NODE
                </div>

                <div className="flex rounded-md px-[8px] py-[4px] text-sm">
                  <div className="flex items-center mr-[8px]">
                    <Icon name="web" width="1.2em" height="1.2em" />
                  </div>
                  WEB
                </div>

                <div className="flex rounded-md px-[8px] py-[4px] text-sm">
                  <div className="flex items-center mr-[8px]">
                    <Icon name="javascript-icon" width="1.2em" height="1.2em" />
                  </div>
                  JAVASCRIPT
                </div>

                <div className="flex rounded-md px-[8px] py-[4px] text-sm">
                  <div className="flex items-center mr-[8px]">
                    <Icon name="typescript-icon" width="1.2em" height="1.2em" />
                  </div>
                  TYPESCRIPT
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1">{children}</div>
        </div>
      </main>

      {/* <footer className="h-[80px] border-t-[1px]">
        <div className="flex max-w-[1200px] mx-auto">footer</div>
      </footer> */}
    </div>
  )
}

export default DefaultLayout
