import logo from './logo.svg';
import './App.css';
import './css/main.css';
import NavigationBar from './components/NavigationBar';
import HeaderImages from './components/HeaderImages';
import HeaderButton from './components/HeaderButton';
import ProfilPicture from './components/ProfilPicture';
import AboutMe from './components/AboutMe'
import GetInTouch from './components/GetInTouch';
import MyFooter from './components/MyFooter';
import { useEffect, useState } from 'react';


function App() {
  const [posts, setPosts] = useState([]);
  const getData = () =>{
    var requestOptions ={
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3030/posts", requestOptions)
    .then((response) => response.json())
    .then((result) => setPosts(result))
    .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div>
        <NavigationBar />
      </div>  
      <div className='my-Bg'>
        <div>
            <ProfilPicture />
        </div>
        {posts.map((post) => (
          <div key={post.id}>
            <h1 className='myName'>{post.name}</h1>
          </div>
        ))

        }

        <p className='my-job'>Front-End Developer | Universitas Klabat</p>
        <HeaderButton />
      </div>
      <div className='container'>
        <h3 className='my-title'>Tentang Saya</h3>
        <div>
          {posts.map((post) => (
            <p style={{textAlign:'justify'}}>{post.about}</p>
          ))}
        </div>
      </div>
      <br></br><br></br><br></br>
      <AboutMe />
      <div className='my-gt'>
        <h3 className='my-title'>Kontak Saya.</h3>
        <GetInTouch />
      </div>
      <div>
        <MyFooter />
      </div>
    </div>
  );
}

export default App;
