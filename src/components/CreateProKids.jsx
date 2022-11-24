import image4 from '../assets/image4.png'

const CreateProKids=()=>{
    return (
      
        <div className='bg-black border-b-[10px] border-[#111111]'>
          <div className='text-white w-full pt-[5rem] pb-[3.5rem] lg:pb-[5rem] grid grid-cols-1 lg:flex  max-w-6xl m-auto'>
            <div className=' text-center lg:text-start'>
              <h1 className='text-[30px] lg:text-[65px] font-semibold lg:pl-[4rem] lg:pr-[8rem]'>Create profiles for kids.</h1>
              <p className='text-[25px] lg:text-[35px] px-[2rem] lg:pl-[4rem] lg:pr-[3rem]'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
            <img src={image4} alt='' className='mt-6 lg:mt-0 w-[50%] lg:w-[110%]  lg:pl-[4rem] lg:pr-[4rem] justify-self-center lg:-order-1'/>
          </div>
        </div>
        )
        }
export default CreateProKids;       
