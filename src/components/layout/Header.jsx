import { useEffect, useState } from "react";
import { IoPerson, IoStarOutline } from "react-icons/io5";

const Point = ({color}) => {
    return (
        <div style={{backgroundColor: color}} className={`w-[1.3vh] h-[1.3vh] rounded-[100%]`}></div>
    )
}


const Header = () => {
    const [star, setStar] = useState(0)

    useEffect(() => {
        const fetchStars = async () => {
        try {
            const response = await fetch(`https://api.github.com/repos/36fg/Legacy_Login`);
            const data = await response.json();
            setStar(data.stargazers_count);
        } catch (error) {
            console.error('Errore nel recupero delle stelle:', error);
        }
        };

    fetchStars();
  }, []);

    return (
        <div className='w-[100%] h-[5vh] flex justify-between items-center'>
            <div className='h-[100%] w-auto flex items-center gap-[4vh]'>
                <div className='flex gap-[1vh] pl-[2vh]'>
                    <Point color="#EF4444"></Point>
                    <Point color="#EAB308"></Point>
                    <Point color="#22C55E"></Point>
                </div>
                <div className='flex gap-[1vh] items-center'>
                    <IoPerson className="text-white text-[2.5vh]"></IoPerson>
                    <p className="text-white text-[2vh] font-[600] tracking-[0.2vh]">36fg.dev</p>
                </div>
            </div>
            <p className="pr-[2vh] text-white text-[2vh] font-[400] tracking-[0.2vh] flex items-center gap-[1vh]"><IoStarOutline></IoStarOutline>{star} stars!</p>
        </div>
    )
}

export default Header