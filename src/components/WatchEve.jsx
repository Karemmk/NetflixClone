import image3 from '../assets/image3.png'

const WatchEve=()=>{
    return (
      
        <div className='bg-black border-b-[10px] border-[#111111]'>
          <div className='text-white w-full pt-[5rem] pb-[3.5rem] lg:pb-[5rem] grid grid-cols-1 lg:flex  max-w-6xl m-auto'>
            <div className=' text-center lg:text-start l'>
              <h1 className='text-[30px] lg:text-[60px] font-semibold lg:pl-[4rem] lg:pr-[6rem]'>Watch everywhere.</h1>
              <p className='text-[20px] lg:text-[36px] px-[2rem] md:px-[10rem] lg:pl-[4rem] lg:pr-[3rem] '>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
            </div>
            <img src={image3} alt='' className='mt-6 w-[50%] justify-self-center '/>
          </div>
        </div>
        )
        }
export default WatchEve;       
