import Login from '../components/Login'
import EnjOnTv from '../components/EnjOnTv'
import WatchOff from '../components/WatchOff'
import WatchEve from '../components/WatchEve'
import CreateProKids from '../components/CreateProKids'
import FreAskQu from '../components/FreAskQu'
import Footer from '../components/Footer'

const Root =()=>{
    return (
        <div className='overflow-hidden'>
           <Login /> 
           <EnjOnTv />
           <WatchOff />
           <WatchEve />
           <CreateProKids />
           <FreAskQu />
           <Footer />
        </div>
    )
}
export default Root
