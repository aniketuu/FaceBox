import React,{Component} from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import logo from './logo.png'

class Logo extends Component {
    render(){
        return(
            <div className='ma4 mt0'>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                 <div className="Tilt-inner pa3"> 
                    <img style={{paddingLeft:'10px'}} alt='logo' src={logo}/> 
                </div>
                </Tilt>
            </div>
        )
    }
}

export default Logo; 