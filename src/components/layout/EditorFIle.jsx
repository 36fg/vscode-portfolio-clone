import React from 'react'
import { FaReact } from "react-icons/fa";
import { useLocation, useNavigate  } from "react-router-dom";

const EditorFile = () => {
    const location = useLocation();
    const navigate = useNavigate()

    return (
        <div className='w-[100%] h-[7vh] flex justify-start items-center'>
            <button onClick={() => navigate('/')} className={` ${location.pathname === "/" ? "bg-[#484B5970]" : ""} cursor-pointer hover:bg-[#484B59] w-[20vh] h-[4.5vh] ml-[1vh] gap-[1vh] rounded-[0.7vh] flex items-center justify-center`}>
                <FaReact className='text-[#5ED3F3] text-[1.8vh]'></FaReact>
                <p className="text-white text-[1.8vh] font-[600] tracking-[0.1vh]">home.jsx</p>
            </button>
            <button onClick={() => navigate('/about')} className={` ${location.pathname === "/about" ? "bg-[#484B5970]" : ""} cursor-pointer hover:bg-[#484B59] w-[20vh] h-[4.5vh] ml-[1vh] gap-[1vh] rounded-[0.7vh] flex items-center justify-center`}>
                <FaReact className='text-[#5ED3F3] text-[1.8vh]'></FaReact>
                <p className="text-white text-[1.8vh] font-[600] tracking-[0.1vh]">about.jsx</p>
            </button>
            <button onClick={() => navigate('/projects')} className={` ${location.pathname === "/projects" ? "bg-[#484B5970]" : ""} cursor-pointer hover:bg-[#484B59] w-[20vh] h-[4.5vh] ml-[1vh] gap-[1vh] rounded-[0.7vh] flex items-center justify-center`}>
                <FaReact className='text-[#5ED3F3] text-[1.8vh]'></FaReact>
                <p className="text-white text-[1.8vh] font-[600] tracking-[0.1vh]">projects.jsx</p>
            </button>
            <button onClick={() => navigate('/contact')} className={` ${location.pathname === "/contact" ? "bg-[#484B5970]" : ""} cursor-pointer hover:bg-[#484B59] w-[20vh] h-[4.5vh] ml-[1vh] gap-[1vh] rounded-[0.7vh] flex items-center justify-center`}>
                <FaReact className='text-[#5ED3F3] text-[1.8vh]'></FaReact>
                <p className="text-white text-[1.8vh] font-[600] tracking-[0.1vh]">contact.jsx</p>
            </button>
        </div>
    )
}

export default EditorFile