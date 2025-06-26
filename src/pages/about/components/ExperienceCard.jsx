
const ExperienceCard = ({data}) => {
  return (
    <div className="w-[100%] h-[20vh] bg-[#1E293B] rounded-[0.7vh] gap-[1vh] hover:border-[0.1vh] border-white p-[1vh] flex flex-col justify-start">
        <h1 className="text-white font-[500] tracking-[0.1vh] text-[1.8vh]">{data.title}</h1>
        <p className="text-[#94A3B8] text-[1.5vh]">{data.role} | {data.date}</p>
        <p className="text-[#94A3B8] text-[1.5vh]">{data.location}</p>
        <p className="text-white text-[1.5vh]">{data.text}</p>
    </div>
  )
}

export default ExperienceCard