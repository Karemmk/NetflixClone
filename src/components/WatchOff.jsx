import watchoff from '../assets/image2.png'

const WatchOff=()=>{
    return (
      
        <div className='bg-black border-b-[10px] border-[#111111]'>
          <div className='text-white  w-full pt-[5rem] pb-[3.5rem] lg:pb-[5rem] grid grid-cols-1 lg:flex max-w-6xl m-auto'>
            <div className=' text-center lg:text-start '>
              <h1 className=' text-[30px] font-semibold  lg:px-[4rem]'>Download your shows to watch offline.</h1>
              <p className='text-[25px] lg:text-[35px] px-[2rem] lg:pl-[4rem] lg:pr-[3rem]'>Save your favorites easily and always have something to watch.</p>
            </div>
            <img src={watchoff} alt='' className='mt-6 lg:mt-0 w-[50%] lg:w-[70%] lg:pl-[4rem] lg:pr-[8rem] justify-self-center lg:-order-1'/>
          </div>
        </div>
        )
        }
export default WatchOff;       
