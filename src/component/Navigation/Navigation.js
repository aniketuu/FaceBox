import React,{Component} from 'react'

class Navigation extends Component {
    render(){
        return(
            <nav style={{display:'flex',justifyContent:'flex-end'}} >
                <p className='f3 dim black underline pa3 pointer' 
                   style={{color:'white',fontFamily:'Courier'}}>
                        <a href='https://www.clarifai.com/' target='_blank' rel="noopener noreferrer"
                            style={{color:'white'}}>Powered by Clarifai</a></p>    
            </nav>
        )
    }
}

export default Navigation; 