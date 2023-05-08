import logo from './logo.svg';
import './App.css';

function Header(props){ //make your own components Name has to start with CAPITAL!
  console.log('props',props); // why print 2 times?
  
  return <header>
    <h1><a href='/'>WON</a></h1>
    <ol>
      <li><a href='/'>First page</a></li>
      <li><a href='/'>Second page</a></li>
      <li><a href='/'>Third page</a></li>
    </ol>
  </header>
}
function Article(){
  return<div>
    <h2>Welcome!</h2>
  <br/><h2>WON's Portfolio</h2>
    </div>
}
function NavBar(){
  return <nav>
    
  </nav>
}




function App() { // contain all of the front-end ui for app
  return (
    <div>
      <Header title="WONWOO CHOI"></Header>
      <NavBar></NavBar>
      <Article></Article>
      
    </div>
  );
}

export default App;
