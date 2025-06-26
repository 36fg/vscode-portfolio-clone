import { TextConteiner, Purple, Blue } from '../../components/index'

const Projects = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col gap-[1vh] justify-start'>
        <TextConteiner>
            <Blue>const</Blue><Purple>projects</Purple><Blue>= {`[`}</Blue>
        </TextConteiner>
        <TextConteiner className={"pl-[4vh]"}>
            <p className='text-[#94A3B8] text-[1.6vh] font-[500]'>// https://github.com/36fg</p>
        </TextConteiner>
        <TextConteiner className={"pl-[4vh]"}>
            <p className='text-[#94A3B8] text-[1.6vh] font-[500]'>// 🚧 Other projects coming soon. Stay tuned!</p>
        </TextConteiner>
        <TextConteiner>
            <Blue>{`]`}</Blue>
        </TextConteiner>
    </div>
  )
}

export default Projects