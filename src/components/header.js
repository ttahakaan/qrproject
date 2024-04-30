import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function GlobalHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("TR");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  return (
    <div className="h-24 bg-gray-100 flex font-SedanFonts">
      <div className="w-1/3 flex items-center justify-start text-2xl pl-5 font-SedanFonts">
        <div className="">En Güzel Sözlerim</div>
        <div className="text-sm mt-2">.com</div>
      </div>

      <div className="w-1/3  flex items-center justify-center">
        <div>
          <div className="w-full"></div>
          <div className="w-96">
            <div className="relative w-full min-w-[200px] h-10">
              <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                <CiSearch className="" />
              </div>
              <input className=" bg-white peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900" placeholder=" " />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                Konularda arayın...
              </label>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-between pl-2 pr-5 text-lg">
        <div className="cursor-pointer">Ana sayfa</div>
        <div className="cursor-pointer">Popüler Konular</div>
        <div className="cursor-pointer">Hakkımızda</div>
        <div className="cursor-pointer">Öneri ve Şikayet</div>
        <div className="language-selector">
      <div className="selected-language" onClick={toggleDropdown}>
        {selectedLanguage} &#9660;
      </div>
      {isOpen && (
        <div className="options">
          <div className="option" onClick={() => selectLanguage('TR')}>
            TR
          </div>
          <div className="option" onClick={() => selectLanguage('ENG')}>
            ENG
          </div>
        </div>
      )}
      <style jsx>{`
        .language-selector {
          position: relative;
          display: inline-block;
        }
        
        .selected-language {
          padding: 8px;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          cursor: pointer;
          border-radius: 4px;
          user-select: none;
        }

        .options {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: #fff;
          border: 1px solid #ccc;
          border-top: none;
          border-radius: 0 0 4px 4px;
          display: flex;
          flex-direction: column;
          z-index: 1000;
        }

        .option {
          padding: 8px;
          cursor: pointer;
        }

        .option:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
      </div>
    </div>
  );
}
