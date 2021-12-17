import {Redirect} from 'react-router-dom';

const Landing = () => {
    return (
        <div className='landing'>
            <Redirect to="/login"/>
        </div>
    )
}

export default Landing