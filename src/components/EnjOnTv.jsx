import enjontv from '../assets/enjontv.png'

const EnjOnTv=()=>{
    return (
      
        <div className='bg-black border-b-[10px] border-[#111111]'>
          <div className='text-white w-full pt-[5rem] pb-[3.5rem] lg:pb-[5rem] grid grid-cols-1 lg:flex  max-w-6xl m-auto'>
            <div className=' text-center lg:text-start '>
              <h1 className='text-[30px] lg:text-[60px] font-semibold lg:px-[4rem]'>Enjoy on your TV.</h1>
              <p className='text-[20px] lg:text-[33px] px-[2rem] md:px-[10rem] lg:pl-[4rem] lg:pr-[3rem]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <img src={enjontv} alt='' className='mt-6 justify-self-center'/>
          </div>
        </div>
        )
        }
export default EnjOnTv;       
