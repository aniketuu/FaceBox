import React,{Component} from 'react';
import './App.css'
import Particles from 'react-particles-js';
import Navigation from './component/Navigation/Navigation.js';
import Logo from './component/Logo/Logo.js'
import ImageLinkForm from './component/ImageLinkForm/ImageLinkForm.js'
import Clarifai from 'clarifai';
import FaceRecognition from './component/FaceRecognition/FaceRecognition.js'


const particleOption ={
  particles: {
      number: {
        value:45
      },
      size:{
        value:6
      },
      line_linked: {
        shadow: {
          enable:true,
          blur:5,
          color:'#3CA9D1'
        }
      } 
  }
}

const app = new Clarifai.App({
  apiKey: '18acd21028b54e02be88389a2adff1fc'
 });
 



class App extends Component{
  constructor(){
    super()
    this.state={
      input:'',
      imageUrl:'',
      box:{}
    }
  }



  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }




  onInputChange = (event) => {
    this.setState({input:event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }


  render(){
    return (
      <div>
        <Particles  className='particles'
                    params={particleOption} />
        <Navigation />
        <Logo />
        <ImageLinkForm onInputChange={this.onInputChange} 
                       onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/> 
        
      </div>
    )
  }

}


export default App;
