import React from 'react'

const ContactForm = () => {
  return (
    <div className='mt-16'>
        <form action="contactData.php" method='post'
        className='flex flex-col items-center font-montserrat'>
            <h4 className='text-4xl font-semibold mb-20'>
                CONTACT
            </h4>
            <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10 w-3/4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='font-semibold'>
                        YOUR NAME
                    </label>
                    <input type="text" name='name' placeholder='Name'
                    className='border border-black px-6 py-4'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email" className='font-semibold'>
                        YOUR EMAIL
                    </label>
                    <input type="email" name='email' placeholder='Email'
                    className='border border-black px-6 py-4'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name" className='font-semibold'>
                        YOUR PHONE
                    </label>
                    <input type="tel" name='tel' placeholder='096-242-1255'
                    className='border border-black px-6 py-4'
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="subject" className='font-semibold'>
                        SUBJECT
                    </label>
                    <input type="text" name='subject' placeholder='Subject'
                    className='border border-black px-6 py-4'/>
                </div>
            </div>
            <div className='w-3/4 flex flex-col gap-2 mt-10'>
                <label htmlFor="message" className='font-semibold'>
                    YOUR MESSAGE
                </label>
                <textarea name="message" id="" placeholder='Text here' 
                className='w-full border border-black px-6 py-4 
                h-36'/>
            </div>
            <div className='w-3/4 mt-10'>
                <input type="submit" name='submit' value="SEND MESSAGE"
                className='bg-black text-white py-4 px-7 hover:bg-yellow-500 hover:duration-500 cursor-pointer' />
            </div>
            
        </form>
    </div>
  )
}

export default ContactForm
