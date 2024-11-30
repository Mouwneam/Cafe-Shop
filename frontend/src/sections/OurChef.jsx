import { socialMedia } from '../constants';
import chef from '../assets/img/chef-coffee-cook.webp'; 

const OurChef = () => {
  return (
    <section className='pt-24 pb-24 mt-32 flex gap-14 bg-slate-gray items-center 
    justify-center lg:px-32 bg-gray-100 max-md:flex-col md:px-5'>
      <img 
        src={chef} 
        alt="" 
        className='max-w-[500px] min-w-[300px] rounded-md'  
      />

      <div className='w-[60%]'>
        <div className='border-l-4 border-black pl-2 border-spacing-3'>
            <p className='text-black font-palanquin font-bold text-3xl'>
                CHRIS MASSEY
            </p>
            <p className='text-gray-500 text-lg '>Executive Chef</p>
        </div>
        <p className='my-8'>
          Chef Christian is one of the most humble and respectable chefs in the industry today despite winning multiple awards, including the top 5 HAPA Best Executive Chef in Singapore. His strong leadership, leveraging on the importance of teamwork, allows him to head his team for competition, bagging gold and silver medals.
        </p>
        
        <div className="flex flex-row gap-2 ">
            {socialMedia.map((logo) => (
                <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    key={logo.alt} 
                    className="hover:bg-slate-300 rounded-lg p-1 cursor-pointer"/>
            ))}
        </div>
        <button className="border py-3 px-4 mt-6 border-black 
        text-black hover:bg-yellow-500 hover:text-white hover:duration-500 hover:border-yellow-500">
          MEET OUR CHEF
        </button>
      </div>
    </section>
  )
}

export default OurChef
