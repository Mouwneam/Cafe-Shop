import bgImg from '../assets/img/offer-img.jpg';
import { bestChoices } from '../constants';

const BestChoice = () => {
  return (
    <section className="max-sm:h-[1200px] h-[920px] relative">
      <img 
        src={bgImg} 
        alt="" 
        className='absolute brightness-[.25] h-screen sm:h-[920px] max-sm:h-[1100px] object-cover w-full'  
      />
      <div className='absolute ml-[150px] my-[120px] w-[40%] max-lg:w-[60%] 
      max-xl:w-[50%] max-md:ml-[60px]'>
        <p className='text-yellow-400 text-md'>
          WHY CHOOSE US
        </p>
        <h4 className='text-4xl text-white font-bold mt-3'>
          THE BEST CHOICE FOR YOUR TASTE
        </h4>
        <p className='text-white my-16'>
          We're convinced that if we listen carefully enough to what you need we can deliver the food experience you want. Your food experience. Our focus. It's what we do. Because we have all the best, fresh ingredients, refined interiors.
        </p>
        <div className='grid grid-cols-2 gap-8 max-sm:grid-cols-1'>
          {bestChoices.map((choice) => (
            <div key={choice.title} 
              className=' text-white'
            >
              <p className='text-lg font-bold text-yellow-500'>
                {choice.title}
              </p>
              <p className='mt-2'>
                {choice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestChoice
