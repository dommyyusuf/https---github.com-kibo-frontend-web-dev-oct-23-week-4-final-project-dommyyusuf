import {BsFillSunFill} from 'react-icons/bs'

const ForecastNextWeek = () => {
    return (
        <div className='forecast'>
        <p>
            <p>Sat</p>
            <BsFillSunFill className='sun-icon'/>
       <p>78° | 54°</p>
        </p>
        <p>
            <p>Sun</p>
            <BsFillSunFill className='sun-icon'/>
       <p>78° | 54°</p>
        </p>
        <p>
            <p>Mon</p>
            <BsFillSunFill className='sun-icon'/>
       <p>78° | 54°</p>
        </p>
        <p>
            <p>Tue</p>
            <BsFillSunFill className='sun-icon'/>
       <p>78° | 54°</p>
        </p>
        <p>
            <p>Wed</p>
            <BsFillSunFill className='sun-icon'/>
       <p>78° | 54°</p>
        </p>
        <p>
            <p>Thu</p>
            <BsFillSunFill className='sun-icon'/>
       <p>78° | 54°</p>
        </p>

        </div>
    )
}

export default ForecastNextWeek;