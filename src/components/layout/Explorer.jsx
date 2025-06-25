import { useState } from 'react'
import { FiFolder } from "react-icons/fi";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { FaReact, FaNpm } from "react-icons/fa";
import { GoFile } from "react-icons/go";
import { SiEslint } from "react-icons/si";


const Folder = ({ name, arrow, open, setOpen }) => {
  return (
    <div
      className="w-[100%] h-[3.5vh] cursor-pointer hover:bg-[#484B5970] pl-[1vh] rounded-[0.5vh] flex items-center"
      onClick={() => arrow && setOpen?.(!open)}
    >
      {arrow && (
        <div className="w-[3vh] h-[100%] flex justify-center items-center">
          {open ? (
            <MdKeyboardArrowDown className="text-white text-[1.8vh] mr-[0.5vh]" />
          ) : (
            <MdKeyboardArrowRight className="text-white text-[1.8vh] mr-[0.5vh]" />
          )}
        </div>
      )}
      <FiFolder className="text-white text-[1.8vh] mr-[0.5vh]" />
      <p className="text-white text-[1.8vh] font-[400] tracking-[0.1vh]">{name}</p>
    </div>
  );
};

const File = ({ name}) => {
  return (
    <div className=" pl-[1vh] w-[100%] h-[3.5vh] cursor-pointer hover:bg-[#484B5970] gap-[1vh] rounded-[0.5vh] flex items-center">
        <FaReact className='text-[#5ED3F3] text-[1.8vh]'></FaReact>
        <p className="text-white text-[1.7vh] font-[400] tracking-[0.1vh]">{name}</p>
    </div>
  );
};



const Explorer = () => {
  const [openSrc, setOpenSrc] = useState(false);

  return (
    <div className='w-[30vh] h-[100%] bg-black-bg rounded-[0.7vh] flex flex-col p-[1vh]'>
      <p className='text-white text-[1.5vh] font-[600] tracking-[0.2vh]'>EXPLORER</p>
      <div className='w-[100%] h-auto flex flex-col mt-[1vh]'>
        <Folder name=".vscode" />
        <Folder name="public" />
        <Folder name="src" arrow={true} open={openSrc} setOpen={setOpenSrc} />
        {openSrc && 
            <div className='w-[100%] h-auto flex justify-end'>
                <div className='w-[85%] h-[100%]'>
                    <File name="Home.jsx" ></File>
                    <File name="About.jsx" ></File>
                    <File name="Project.jsx" ></File>
                    <File name="Contact.jsx" ></File>
                    <Folder name="components" />
                </div>
            </div>
        }
        <div className=" pl-[1vh] w-[100%] h-[3.5vh] cursor-pointer hover:bg-[#484B5970] gap-[1vh] rounded-[0.5vh] flex items-center">
            <GoFile className='text-white text-[1.8vh]'></GoFile>
            <p className="text-white text-[1.7vh] font-[400] tracking-[0.1vh]">.gitignore</p>
        </div>
        <div className=" pl-[1vh] w-[100%] h-[3.5vh] cursor-pointer hover:bg-[#484B5970] gap-[1vh] rounded-[0.5vh] flex items-center">
            <SiEslint className='text-[#B860F1] text-[1.8vh]'></SiEslint>
            <p className="text-white text-[1.7vh] font-[400] tracking-[0.1vh]">eslint.config.js</p>
        </div>
        <div className=" pl-[1vh] w-[100%] h-[3.5vh] cursor-pointer hover:bg-[#484B5970] gap-[1vh] rounded-[0.5vh] flex items-center">
            <FaNpm className='text-[#B43434] text-[1.8vh]'></FaNpm>
            <p className="text-white text-[1.7vh] font-[400] tracking-[0.1vh]">package.json</p>
        </div>
      </div>
    </div>
  );
};
export default Explorer