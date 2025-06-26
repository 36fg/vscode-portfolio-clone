import { TextConteiner, Purple, Blue, Yellow, Red, Green } from '../../components/index'
import ExperienceCard from './components/ExperienceCard'
import { experienceData } from '../../data/experienceData'

const About = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col gap-[1vh] justify-start'>
        <TextConteiner>
            <Blue>const</Blue><Purple>introduction</Purple><Blue>=</Blue><Green>"I’m a mid-level fullstack web developer with a background rooted in a passion for gaming. I started in 2022</Green>
        </TextConteiner>
        <TextConteiner>
            <Green>as a developer on FiveM, where I built custom scripts, dynamic UIs, and interactive systems for roleplay servers.</Green>
        </TextConteiner>
        <TextConteiner>
            <Green>After two intense years in the FiveM scene, I expanded my skills toward modern web development. Today, I’m continuing to grow</Green>
        </TextConteiner>
        <TextConteiner>
            <Green>as a developer while attending a two-year Web Development program, with the goal of becoming a Senior Fullstack Developer.</Green>
        </TextConteiner>
        <div className='h-[6vh]'>

        </div>
        <TextConteiner>
            <Blue>const</Blue><Purple>timeLine</Purple><Blue>= {`[`}</Blue>
        </TextConteiner>
        <div className='w-[50%] h-auto flex flex-col gap-[1vh]'>
            {
                experienceData.map((data, index) => {
                    return (
                        <ExperienceCard data={data} key={index}></ExperienceCard>
                    )
                })
            }
        </div>
        <TextConteiner>
            <Blue>{`]`}</Blue>
        </TextConteiner>
    </div>
  )
}

export default About