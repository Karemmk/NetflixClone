import {GlobeAltIcon} from '@heroicons/react/outline';
import {BsTriangleFill} from 'react-icons/bs'

const Footer=()=>{
return(
    <div className='bg-black border-b-[10px] border-[#111111] text-[#6B6B6B]'>
      <div className='max-w-3xl m-auto py-[5rem] px-[2rem] md:px-[7rem]'>
        <h1 className='cursor-pointer hover:underline hover:underline-offset-3'>Questions? Contact us.</h1>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-5'>
         <div className='cursor-pointer hover:underline hover:underline-offset-3'>FAQ</div>
          <div className='cursor-pointer hover:underline hover:underline-offset-3'>Help Center</div>
           <div className='cursor-pointer hover:underline hover:underline-offset-3'>Account</div>
            <div className='cursor-pointer hover:underline hover:underline-offset-3'>Media Center</div>
             <div className='cursor-pointer hover:underline hover:underline-offset-3'>Investor Relations</div>
              <div className='cursor-pointer hover:underline hover:underline-offset-3'>Jobs</div>
               <div className='cursor-pointer hover:underline hover:underline-offset-3'>Ways to Watch</div>
                <div className='cursor-pointer hover:underline hover:underline-offset-3'>Terms of Use</div>
                 <div className='cursor-pointer hover:underline hover:underline-offset-3'>Privacy</div>
                  <div className='cursor-pointer hover:underline hover:underline-offset-3'>Cookie Preferences</div>
                   <div className='cursor-pointer hover:underline hover:underline-offset-3'>Corporate Information</div>
                    <div className='cursor-pointer hover:underline hover:underline-offset-3'>Contact Us</div>
                     <div className='cursor-pointer hover:underline hover:underline-offset-3'>Speed Test</div>
                      <div className='cursor-pointer hover:underline hover:underline-offset-3'>Legal Notices</div>
                       <div className='cursor-pointer hover:underline hover:underline-offset-3'>Only on Netflix</div>
        </div>
        <div classaName='flex gape-1'>
              <div className='absolute border border-gray-400 py-[1rem] px-[3.7rem] mt-6 pointer-events-none'></div>
              <GlobeAltIcon className='text-sm mt-[34px] ml-2  absolute text-white h-4 w-4 pointer-events-none' />
              <BsTriangleFill className='absolute text-white text-sm h-[10px] rotate-180 mt-[2.23rem] ml-[6rem] pointer-events-none bg-black' />
              <select className='text-sm bg-black text-white border-[0px] border-gray-400 w-[7rem] py-[4px] md:mr-7 mt-7 pb-2 pr-4 pl-7 pt-1 outline-none'>     
                <option >English</option>
                <option>French</option>
                <option>Arabic</option>
              </select>
         </div>
        </div>
         
    </div>
)
}
export default Footer;
