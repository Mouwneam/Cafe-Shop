

const Carousel = (props) => {
  return (
    <div className="flex justify-center items-center max-md:flex-col">
      <img 
        src={props.info.img} 
        alt=""
        className="max-w-[400px] min-w-[250px]" 
      />
      <div className="p-10 shadow-lg md:w-2/3">
        <h5 className="text-2xl font-bold">
          {props.info.title}
        </h5>
        <p className="font-bold py-3">${props.info.price}</p>
        <p className="py-3">{props.info.description}</p>
        <button className="border py-3 px-4 mt-6 border-black 
        text-black hover:bg-yellow-500 hover:text-white hover:duration-500 hover:border-yellow-500">
          BOOK A TABLE
        </button>
      </div>
    </div>
  )
}

export default Carousel
