
const ServicesCard = (props) => {
  return (
    <div className="w-[500px] sm:w-[350px] md:w-[230px] lg:w-[300px] sm:min-w-[200px] flex 
    flex-col justify-center items-center px-5 gap-4 ">
      <div>
        <img 
            src={props.icon} 
            alt="" 
            className="w-[75px] h-[75px]"    
        />
    </div>
      <p className="text-2xl font-palanquin text-center">{props.title}</p>
      <p className="text-center">{props.subtext}</p>
    </div>
  )
}

export default ServicesCard
