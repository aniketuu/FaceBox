import React,{Component} from 'react'
import './ImageLinkForm.css'

class ImageLinkForm extends Component {
    render(){
        return(
            <div>
                <p className='f3 tc tex' >
                    {'This application will detect faces in your image.Give it a try.'}
                </p>
                <br/>
                <div className='pa3 br3 shadow-5 center form'
                     style={{width:'50%'}} >
                    <input type='text' className='f4 pa2 w-70 center'  onChange={this.props.onInputChange}/>
                    <button onClick={this.props.onButtonSubmit}
                            className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple' >Detect</button>
                </div>
            </div>
        )
    }
}

export default ImageLinkForm; 