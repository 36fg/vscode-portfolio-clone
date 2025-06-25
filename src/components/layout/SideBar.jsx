import { useState } from 'react'
import { FiHome, FiGithub } from "react-icons/fi";
import { IoStarOutline } from "react-icons/io5";

const SideBar = () => {

    return (
        <div className='w-[8vh] h-[100%] flex flex-col gap-[1vh] items-center'>
            <button  className={`bg-[#484B59] cursor-pointer hover:bg-[#484B5970] h-[5vh] w-[5vh] rounded-[0.7vh] flex justify-center items-center`} ><FiHome className='text-white text-[2.5vh]'></FiHome></button>
            <button  className={` cursor-pointer hover:bg-[#484B5970] h-[5vh] w-[5vh] rounded-[0.7vh] flex justify-center items-center`} ><FiGithub className='text-white text-[2.5vh]'></FiGithub></button>
            <button  className={`cursor-pointer hover:bg-[#484B5970] h-[5vh] w-[5vh] rounded-[0.7vh] flex justify-center items-center`} ><IoStarOutline className='text-white text-[2.5vh]'></IoStarOutline></button>
        </div>
    )
}

export default SideBar
