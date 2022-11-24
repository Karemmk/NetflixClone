import logo from '../assets/logo.png';
import {GlobeAltIcon} from '@heroicons/react/outline';
import {BsTriangleFill} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom'

const Login=()=>{
const navigate= useNavigate();
    return (
      
        <div className=" border-b-[10px] border-[#111111] bg-[url('assets/image.jpg')] pb-10 ">
          <div className='w-full flex justify-between w-full max-w-[2000px] m-auto '>
            <img className='h-[4rem] mt-3 md:mt-0 w-[105px] lg:w-[10%] md:h-[79px] md:ml-8 layout-fill objectfit-contain' src={logo} alt='' /> 
            <div classaName='flex gape-1'>
              <div className='absolute bg-black h-3 w-4 ml-[6.5rem] mt-[2.5rem]'></div>
              <div className='absolute border border-gray-400 py-[1rem] px-[3.7rem] mt-7 pointer-events-none'></div>
              <GlobeAltIcon className='text-sm mt-[37px] ml-2  absolute text-white h-4 w-4 pointer-events-none' />
              <BsTriangleFill className='absolute text-white text-sm h-[10px] rotate-180 mt-[2.43rem] ml-[6rem] pointer-events-none bg-black px z-50' />
              <select className='text-sm bg-black text-white border-0 border-gray-400 w-[7.5rem] py-[8px] md:mr-7 mt-7 pb-2 pr-2 pl-7  outline-none'>     
                <option >English</option>
                <option>French</option>
                <option>Arabic</option>
              </select>
              <button onClick={()=>{navigate('/login')}} className='py-[4px] px-4 ml-3 rounded bg-[#E50914] text-white md:mr-[60px]'>Sign In</button>
            </div>
          </div>
          <div className='w-full text-white text-center p-0 '><div className='text-white font-bold text-[26px]  md:text-[50px] mt-12 md:mt-[110px] '>Unlimited movies, TV </div>
          <div className='w-full text-white font-bold text-[26px] md:text-[50px] '>shows, and more.</div>
          <h3 className='w-full md:text-[30px] mt-5 px-20 md:px-none'>Watch anywhere. Cancel anytime.</h3>
          <p className='w-full mt-6 px-12 md:px-none md:text-[22px]'>Ready to watch? Enter your email to create or restart your membership.</p>
          <div className='mt-3 lg:flex m-auto justify-items-center md:pb-[95px]  max-w-2xl'>
            <div className="ml-3 relative group lg:ml-0  w-full">
        <input type="text" id="username"  required className="text-black block w-[90%] lg:w-full h-[2.7rem] md:h-[3.6rem] px-4 text-base peer bg-gray-100 outline-none " />
        <label for="username" className="text-gray-500 font-normal transform transition-all absolute top-0 left-1 h-full flex items-center px-4 text-base group-focus-within:text-sm peer-valid:text-sm group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[-0px] lg:group-focus-within:-translate-y-[0px] group-focus-within:translate-x-0 lg:group-focus-within:translate-x-0 peer-valid:-translate-y-[0px] lg:peer-valid:-translate-y-[0px] group-focus-within:pl-3 peer-valid:pl-3">Email address</label>
    </div>
          <button className=' bg-[#E50914] lg:text-[23px]  py-3 lg:py-0 px-10 lg:px-0 lg:w-[50%] justify-self-start mt-5 lg:mt-0'>Get Started ></button>
          </div>
          </div>
       </div>
    )
}
export default Login
