import {useState} from 'react'
import {PlusIcon,XIcon} from '@heroicons/react/outline'


const FreAskQu=()=>{
const [hiden,setHiden]=useState(false)
const [hidenone,setHidenone]=useState(false)
const [hidentwo,setHidentwo]=useState(false)
const [hidenthree,setHidenthree]=useState(false)
const [hidenfour,setHidenfour]=useState(false)
const [hidenfive,setHidenfive]=useState(false)



    return (
        <div className='bg-black text-white border-b-[10px] border-[#111111] w-full text-center '>
          <div className='text-[26px] font-bold pt-12 pb-5 '>Frequently Asked Questions</div>
          
          <div className=' bg-[#303030] md:w-[80%] text-[20px] md:text-[25px] max-w-xl m-auto'	onClick={()=>{setHiden(!hiden);setHidenone(false);setHidentwo(false);setHidenthree(false);setHidenfour(false);setHidenfive(false);}}>
            <div className='flex justify-between border border-black py-3 cursor-pointer'>
               <h1 className='px-3 md:px-7'>What is Netflix?</h1>
              {hiden? <XIcon className='h-8 px-4'/> : <PlusIcon className='h-8 px-4'/>} 
            </div>
            <p className={hiden? 'px-7 text-start text-[26px] py-6 translation ease-in-out' : 'hidden ' }>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
<br/>
<br/>
You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
          </div>
          
           <div className=' bg-[#303030] md:w-[80%] text-[20px] md:text-[25px] mt-3 max-w-xl m-auto'
           onClick={()=>{setHiden(false);setHidenone(!hidenone);setHidentwo(false);setHidenthree(false);setHidenfour(false);setHidenfive(false);}}
           >
            <div className='flex justify-between border border-black py-3 cursor-pointer'>
               <h1 className='px-3 md:px-7'>How much does Netflix cost?</h1>
               {hidenone? <XIcon className='h-8 px-4'/> : <PlusIcon className='h-8 px-4'/>} 
            </div>
            <p className={hidenone? 'px-7 text-start text-[26px] py-6' : 'hidden' }>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD11.99 a month. No extra costs, no contracts.</p>
          </div>
          
           <div className=' bg-[#303030] md:w-[80%] m-auto text-[20px] md:text-[25px] mt-3 max-w-xl m-auto '
           onClick={()=>{setHiden(false);setHidenone(false);setHidentwo(!hidentwo);setHidenthree(false);setHidenfour(false);setHidenfive(false);}}
           >
            <div className='flex justify-between border border-black py-3 cursor-pointer'>
               <h1 className='px-3 md:px-7'>Where can I watch?</h1>
                {hidentwo? <XIcon className='h-8 px-4'/> : <PlusIcon className='h-8 px-4'/>} 
            </div>
            <p className={hidentwo? 'px-7 text-start text-[26px] py-6' : 'hidden' }>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
<br/>
<br/>
You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
          </div>
          
           <div className=' bg-[#303030] md:w-[80%] m-auto text-[20px] md:text-[25px] mt-3 max-w-xl m-auto' 
           onClick={()=>{setHiden(false);setHidenone(false);setHidentwo(false);setHidenthree(!hidenthree);setHidenfour(false);setHidenfive(false);}}
           >
            <div className='flex justify-between border border-black py-3 cursor-pointer'>
               <h1 className='px-3 md:px-7'>How do I cancel?</h1>
                {hidenthree? <XIcon className='h-8 px-4'/> : <PlusIcon className='h-8 px-4'/>} 
            </div>
            <p className={hidenthree? 'px-7 text-start text-[26px] py-6' : 'hidden' }>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
          </div>
          
           <div className=' bg-[#303030] md:w-[80%] m-auto text-[20px] md:text-[25px] mt-3 max-w-xl m-auto'
           onClick={()=>{setHiden(false);setHidenone(false);setHidentwo(false);setHidenthree(false);setHidenfour(!hidenfour);setHidenfive(false);}}
           >
            <div className='flex justify-between border m-auto border-black py-3 cursor-pointer'>
               <h1 className='px-3 md:px-7'>What canI watch on Netflix?</h1>
                {hidenfour? <XIcon className='h-8 px-4'/> : <PlusIcon className='h-8 px-4'/>} 
            </div>
            <p className={hidenfour? 'px-7 text-start text-[26px] py-6' : 'hidden' }>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
          </div>
          
           <div className=' bg-[#303030] md:w-[80%] m-auto text-[20px] md:text-[25px] mt-3 max-w-xl m-auto'
           onClick={()=>{setHiden(false);setHidenone(false);setHidentwo(false);setHidenthree(false);setHidenfour(false);setHidenfive(!hidenfive);}}
           >
            <div className='flex justify-between border border-black py-3 cursor-pointer'>
               <h1 className='px-3 md:px-7'>Is Netflix good for kids?</h1>
                {hidenfive? <XIcon className='h-8 px-4'/> : <PlusIcon className='h-8 px-4'/>} 
            </div>
            <p className={hidenfive? 'px-7 text-start text-[26px] py-6' : 'hidden' }>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.</p>
          </div>
           <p className='w-full mt-8 md:px-[15rem] md:px-none text-[20px] md:text-[29px] xl:px-[60rem]'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='mt-3 lg:flex m-auto justify-items-center md:pb-[95px]  max-w-2xl'>
            <div className="ml-3 relative group lg:ml-0  w-full">
        <input type="text" id="username"  required className="text-black block w-[90%] lg:w-full h-[2.7rem] md:h-[3.6rem] px-4 text-base peer bg-gray-100 outline-none " />
        <label for="username" className="text-gray-500 font-normal transform transition-all absolute top-0 left-1 h-full flex items-center px-4 text-base group-focus-within:text-sm peer-valid:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[-0px] lg:group-focus-within:-translate-y-[0px] group-focus-within:translate-x-0 lg:group-focus-within:translate-x-0 peer-valid:-translate-y-[0px] lg:peer-valid:-translate-y-[0px] group-focus-within:pl-3 peer-valid:pl-3">Email address</label>
    </div>
          <button className=' bg-[#E50914] lg:text-[23px]  py-3 lg:py-0 px-10 lg:px-0 lg:w-[50%] justify-self-start mt-5 lg:mt-0 mb-10 lg:mb-0'>Get Started ></button>
          </div>
        </div>
        )}
export default FreAskQu;
