import logo from '../assets/logo.png';
import {GlobeAltIcon} from '@heroicons/react/outline';

const Login=()=>{
   return(
        <div className='bg-black md:bg-none'>
           <div className="md:bg-[url('assets/login.jpg')] w-full grid px-[1rem] md:px-0 xl:h-[150%]">         
           <img className='w-[12rem] lg:mt-[20rem] xl:mb-[30rem]' src={logo} alt='' /> 
           <div className='bg-black md:bg-opacity-80 md:rounded md:justify-self-center md:p-[3rem] md:py-[2rem] w-full md:w-auto  '>
             <div className='text-white font-bold text-[30px] mb-5'>Sign In</div>
             <div className="relative group w-full ">
        <input type="text" id="username"  required className="text-black block h-[3rem] px-4 text-base peer bg-[#333333] outline-none rounded w-[20rem] border-none" />
        <label for="username" className="text-gray-500 font-normal transform transition-all absolute top-0 left-1 h-full flex items-center px-4 text-base group-focus-within:text-sm peer-valid:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[-0px] lg:group-focus-within:-translate-y-[0px] group-focus-within:translate-x-0 lg:group-focus-within:translate-x-0 peer-valid:-translate-y-[0px] lg:peer-valid:-translate-y-[0px] group-focus-within:pl-3 peer-valid:pl-3">Email or phone number</label>
    </div>
     <div className="relative group mt-3 mb-6">
        <input type="text" id="username"  required className="text-black block h-[3rem] px-4 text-base peer bg-[#333333] outline-none rounded w-[20rem] border-none" />
        <label for="username" className="text-gray-500 font-normal transform transition-all absolute top-0 left-1 h-full flex items-center px-4 text-base group-focus-within:text-sm peer-valid:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[-0px] lg:group-focus-within:-translate-y-[0px] group-focus-within:translate-x-0 lg:group-focus-within:translate-x-0 peer-valid:-translate-y-[0px] lg:peer-valid:-translate-y-[0px] group-focus-within:pl-3 peer-valid:pl-3">Password</label>
        
    </div>
          <button className='w-[20rem] w-full bg-[#E50914] rounded text-white font-bold h-[3rem]'>Sign In </button>
           <div className='flex justify-between mt-3'>
              <div>
                <input type='checkbox' id='RM' name='RM' className='mr-1'/>
                <label for='RM' className='text-gray-400 text-sm ml-1'>Remember me</label>
              </div>
              <a href='/' className='text-gray-400 text-sm hover:underline hover:underline-offset-3'>Need help?</a>
           </div>
               <div className='text-gray-400 mt-[4rem]'>
              <div className='mb-[1rem]'> 
                 New to Netflix? <a href='/' className='font-semibold text-white' >Sign up now.</a>
              </div>
              <div className='text-[15px] pb-[5rem]'>
                 This page is protected by Google reCAPTCHA to<br/> ensure you're not a bot. 
              </div>
           </div>
           </div>
           <div className='bg-black bg-opacity-80 text-gray-400 text-[11px] w-full md:mt-12 md:pl-9 pb-[3rem] border-t-2 border-gray-400 md:border-0 lg:mt-[30rem]  xl:mt-[50rem] '>
              <h1 className='mt-6 text-[15px]'>Questions? Contact us.</h1>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-y-3 md:gap-3 mt-3 '>
                <div>FAQ</div>
                 <div>Help Center</div>
                 <div>Terms of Use</div>
                 <div>Privacy</div>
                 <div>Cookie Preferences</div>
                 <div>Corporate Information</div>   
              </div>
               <div>
              <GlobeAltIcon className='text-sm mt-[43px] ml-2  absolute text-gray-600 h-4 w-4 pointer-events-none' />
              <select className='text-sm bg-black bg-opacity-70 text-gray-600 border border-gray-500  w-[8rem] py-[12px] md:mr-7 mt-7 pb-2 pr-4 pl-6 pb-3'>     
                <option >English</option>
                <option>French</option>
                <option>Arabic</option>
              </select>
         </div>
           </div>
           </div>
        </div>
   )
}
export default Login;
