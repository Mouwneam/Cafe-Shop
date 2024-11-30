import { services } from "../constants"
import ServicesCard from "../components/ServicesCard"

const Services = () => {
  return (
    <div className="w-full py-20 flex justify-center flex-wrap
    max-md:flex-col items-center  lg:gap-10 gap-y-16
    bg-[url('https://img.freepik.com/premium-photo/white-texture-wooden-wall-background-with-light-pattern-natural-copy-space_707519-19669.jpg?w=360')]">
      {services.map((service) => (
        <ServicesCard key={service.title} {...service}/>
      ))}
    </div>
  )
}

export default Services
