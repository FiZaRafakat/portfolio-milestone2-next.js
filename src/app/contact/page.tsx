"use client"
import Card from '@/components/Card'
import React, { useState, useRef } from 'react';
import Toast from '@/components/toast';
import emailjs from 'emailjs-com';
import { Button } from '@/components/ui/moving-border';
import { FaPaperPlane } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';


const contacts =[
  {
    icon : <FaPhone className='lg:size-16 size-11 text-emerald-300 bg-gray-700 px-1 py-1 rounded-md '/>,
    title : "Phone",
    Ans : "(+92) 30675 02568"
  },{
    icon : <FaEnvelope className='lg:size-16 size-11 text-emerald-300 bg-gray-700 px-1 py-1 rounded-md '/>,
    title : "Email",
    Ans : "fizarafakat@gmail.com"
  },{
    icon : <MdLocationOn className='lg:size-16 size-11 text-emerald-300 bg-gray-700 px-1 py-1 rounded-md '/>,
    title : "Address",
    Ans : "Shah latif town , Karachi , Pakistan"
  }
]
function Page() {

  useEffect(()=>{
    AOS.init({
       easing : "ease-out-back",
       duration : 1200,
       delay : 100 ,
       mirror : true ,
       anchorPlacement : "bottom-bottom",
       offset : 160,
    }) ;
    AOS.refresh()
    },[])
 
  const form = useRef<HTMLFormElement | null>(null);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_ie8og09', 'template_3xrsesh', form.current!, '-DMHEO9fz1SGE-B8f')
    .then((result) => {
      console.log('Message sent:', result.text);
      setToastMessage('Message sent successfully!');
      setShowToast(true);
      form.current?.reset();
    })
    .catch((error) => {
      console.error('Error:', error.text);
      setToastMessage('Failed to send the message. Please try again later.');
      setShowToast(true);
    });
  };

  const closeToast = () => {
    setShowToast(false);
  };


  return (
    <div className='overflow-hidden'>
        <div className='mt-24 sm:mt-36 lg:mx-24 flex md:flex-row flex-col mb-16 md:mb-0 '>

          <div className='md:w-1/2' data-aos="fade-right">
          <div className='flex justify-center flex-col px-4 py-3'>
          <div className='flex'>
          <h2 className='clip-text lg:text-4xl md:text-3xl text-2xl lg:my-4 my-2'>Let&apos;s Work together</h2>
          </div>
           <p className='p max-w-[28rem]'>I&apos;d love to hear form you. Please fill out the form and I&apos;ll get back to you as soon as possible.</p>
           </div>

           <div className='flex flex-col pl-5 md:gap-4 gap-2'>
           { contacts.map((contact)=>(
                    <div key={contact.title} className='flex gap-5' >
                         <div className=''> 
                          {contact.icon}
                        </div>
                        <div className=''>
                        <span className='md:text-base text-sm  border-b-2 border-emerald-300 p-1 px-2'>{contact.title}</span> 
                        <p className='text-white/70 md:mt-4 mt-2 md:text-sm text-xs'>{contact.Ans}</p> 
                        </div> 
                   </div>  ))}
           </div>

          </div>


         <div className='md:w-1/2 mt-3 md:mt-0 w-[300px] mx-auto' data-aos="fade-left">
         <Card className='max-w-[35rem] sm:mx-auto md:mx-0  mx-2 px-4 lg:px-8'>
           <form ref={form} onSubmit={handleSubmit} className="pb-5">
      <div className="flex flex-col gap-3 lg:gap-6 mt-5">
        <div className="flex md:flex-row flex-col gap-3 justify-between w-full">
          <input type="text" name="first_name" placeholder="First Name" className="input" required />
          <input type="text" name="last_name" placeholder="Last Name" className="input" required />
        </div>
        <div className="flex md:flex-row flex-col gap-3 justify-between w-full">
          <input type="email" name="user_email" placeholder="Email address" className="input" required />
          <input type="text" name="phone_number" placeholder="Phone number" className="input" required />
        </div>
        <div>
          <textarea name="message" placeholder="Type a message here :)" rows={7} className="input w-full md:text-base text-sm p-2 px-3 md:tracking-wider" required></textarea>
        </div>
      </div>
      <div className='mt-5 flex justify-center items-center'>
      <Button type="submit" className='inline-flex gap-4' containerClassName='w-28' > 
         <span>Submit</span>
         <FaPaperPlane className='size-4 '/>
         </Button>
      </div>

      <div id="toastBox" className="fixed bottom-5 right-5 flex z-50 flex-col items-end space-y-4">
        {showToast && <Toast msg={toastMessage} onClose={closeToast} />}
      </div>

    </form>

          </Card>
         </div>
        </div>
        
    </div>
  )
}

export default Page