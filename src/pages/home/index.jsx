import { TextConteiner, Purple, Blue, Yellow, Red, Green } from '../../components/index'
import SkillCard from './components/SkillCard'
import { skillsData } from '../../data/skilsData'

const Home = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col gap-[1vh] justify-start'>
      <TextConteiner>
        <Purple>Import</Purple><Yellow>{`{`}</Yellow><Red>useState, useEffect</Red><Yellow>{`}`}</Yellow><Purple>from</Purple><Green>'react'</Green>
      </TextConteiner>

      <TextConteiner>
        <Purple>Const</Purple><Yellow>{`[`}</Yellow><Red>dev, setDev</Red><Yellow>{`]`}</Yellow><Blue>= useState</Blue><Purple>{`(`}</Purple><Blue>{`{`}</Blue><Red>name</Red><Yellow>: </Yellow><Green>""</Green><Red>, role</Red><Yellow>: </Yellow><Green>"???"</Green><Red>, skills</Red><Yellow>: </Yellow><Yellow>[]</Yellow><Red>, online</Red><Yellow>: </Yellow><Purple>false</Purple><Blue>{` }`}</Blue><Purple>{`)`}</Purple>
      </TextConteiner>

      <div className='h-[6vh]' />

      <TextConteiner>
        <Blue>useEffect</Blue>
        <Purple>{`(() => `}</Purple>
        <Yellow>{`{`}</Yellow>
      </TextConteiner>

      <TextConteiner className="pl-[2vh]">
        <Yellow>setDev</Yellow>
        <Purple>{`({`}</Purple>
      </TextConteiner>

      <TextConteiner className="pl-[4vh]">
        <Red>name</Red><Yellow>: </Yellow><Green>"36fg.dev"</Green><Yellow>,</Yellow>
      </TextConteiner>

      <TextConteiner className="pl-[4vh]">
        <Red>role</Red><Yellow>: </Yellow><Green>"Mid-level Fullstack Developer"</Green><Yellow>,</Yellow>
      </TextConteiner>

      <TextConteiner className="pl-[4vh]">
        <Red>skills</Red><Yellow>: </Yellow>
        <Yellow>[</Yellow>
      </TextConteiner>

      <div className='ml-[4vh] w-[85vh] h-auto grid grid-cols-4 gap-[1vh]'>
        {
          skillsData.map((data, index) => {
            return <SkillCard key={index} >
              <span className="text-xl">{data.icon}</span>
              <p className='text-white text-[1.6vh]'>{data.name}</p>
            </SkillCard>
          })
        }
      </div>

      <TextConteiner className="pl-[4vh]">
        <Yellow>]</Yellow><Yellow>,</Yellow>
      </TextConteiner>

      <TextConteiner className="pl-[4vh]">
        <Red>online</Red><Yellow>: </Yellow><Purple>true</Purple>
      </TextConteiner>

      <TextConteiner className="pl-[2vh]">
        <Purple>{`})`}</Purple><Yellow>;</Yellow>
      </TextConteiner>

      <TextConteiner>
        <Yellow>{`}, []);`}</Yellow>
      </TextConteiner>

      <TextConteiner>
        <Purple>return</Purple> <Red>dev</Red><Yellow>;</Yellow>
      </TextConteiner>
    </div>
  )
}

export default Home
