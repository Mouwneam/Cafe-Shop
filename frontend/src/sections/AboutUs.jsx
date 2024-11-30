import soup from '../assets/img/cayla-unsplash.webp';
import salad from '../assets/img/ella-olsson-unsplashrr.webp';

const AboutUs = () => {
  return (
    <div className="p-4 py-8 m-10 flex flex-row gap-7 max-md:flex-col max-lg:px-8 items-center justify-center">
      <ul className='flex flex-row justify-evenly gap-3 items-center md:w-[50'>
        <li className=''><img src={soup} alt="" /></li>
        <li className=''><img src={salad} alt="" /></li>
      </ul>

      <div className='flex flex-col w-[50%] max-md:w-[100%] px-8 max-lg:px-2
      xl:py-9 xl:w-[30%]'>
        <h6 className='text-slate-500 my-1'>
          OUR STORY
        </h6>
        <h5 className='text-4xl font-bold mb-8 xl:text-4xl'>
          WE SELL FLAVORS
        </h5>
        <p>Ranni De Cafe is one of the luxurios restaurant in the World, which offers traditional specialties which you can enjoyed in the pleasant air conditioned ambience. Blatnice restaurant has a capacity of 500 seats and 250 seats in the summer garden.
        </p>
        <br />
        <p>Ranni De Cafe is the place for a fine dining experience where the tradition is blended with an imaginative and modern</p>
        <br />
        <a href=""
        className='underline hover:text-yellow-500 hover:duration-300'
        >
          READ MORE 
        </a>
      </div>
    </div>
  )
}

export default AboutUs
