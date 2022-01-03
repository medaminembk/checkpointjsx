import logo from './logo.svg';
import './App.css';
import './style.css';
import imageSrc from './imageInSrc.jpg'
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: '100vw' }}>

        <h1 className="title red">Your name here</h1>



        <img src={imageSrc} alt='myImage2' style={{width:'200px', height:'400px'}} />
<br/>


        <img src="/images/imageInPublic.jpg" alt='myImage' style={{width:'200px', height:'400px'}} />

      </div>

       <video width="320" height="240" controls>

                <source src="myVideo.mp4" type="video/mp4" />

              </video>
    </div>
  );
}

export default App;
