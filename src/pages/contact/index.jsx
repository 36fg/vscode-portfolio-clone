import { TextConteiner, Purple, Blue, Yellow, Red, Green } from '../../components/index'
import { infoData } from '../../data/infoData'
import InfoCards from './components/InfoCards'

const Contact = () => {
  return (
    <div className='w-[100%] h-[100%] flex flex-col gap-[1vh] justify-start'>
        <TextConteiner>
            <Blue>const</Blue><Purple>info</Purple><Blue>= {`{`}</Blue>
        </TextConteiner>
        {
            infoData.map((data, index) => {
                return <InfoCards key={index} data={data}></InfoCards>
            })
        }
        <TextConteiner>
            <Blue>{`}`}</Blue>
        </TextConteiner>
    </div>
  )
}

export default Contact