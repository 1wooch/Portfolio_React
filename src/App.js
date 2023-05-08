//import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //for state



function Header(props){ //make your own components Name has to start with CAPITAL!
          //console.log('props',props,props.title,props.body); // why print 2 times?
  return <header>
    <h1><a href='/' onClick={function(event){ 
      event.preventDefault();//won't reload by putting 'event' in function
      props.onChangeMode(); // get input function
    }}>{props.title}</a></h1>
  </header>
}
function Article(props){
  return<div>
    <h1>{props.title}</h1>
    <h2>Welcome!</h2>
  <br/><h2>WON's Portfolio</h2>
    </div>
}
function NavBar(props){
  //  <li id="navbarcont"><h1><a href='/'>{props.title}</a></h1></li>
  const lis=[]
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i];
    lis.push(
    <li key={t.id} id="navbarcont">
      <a id={t.id}href={'/read/'+t.loc} 
      onClick={
      event=>{event.preventDefault();
              props.onChangeMode(Number(event.target.id)); //only works when I say id (change name of id will not work)
              }
            }>{t.title}
      </a>
  </li>) //key 
  }
  return <nav>
    
    <ul id="navbar">
    {lis}
    </ul>
  </nav>
}




function App() { // contain all of the front-end ui for app
  const topics = [ //will replace with JSON
    {id:1,title:"Home",loc:"1"}, //id = uid title = showing name loc = location of file (link)
    {id:2,title:"Contact",loc:"2"},
    {id:3, title:"Skills",loc:"3"}
  ]
  let content=null;


  let [mode,setMode]=useState('Read'); // should be let it keep change 
  let [id,setId]=useState(null);

  if (mode==="Welcome"){
    content =  <Article title={mode}></Article>
  }else if(mode==="Read"){
    let title=null;
    for (let i=0; i<topics.length; i++){

      if(topics[i].id===id){
        title=topics[i].title;
        
      }
    }
    content =  <Article title={title}></Article>
     
  }
  return (
    <div>
      <Header title="WONWOO CHOI" onChangeMode={()=>{
        alert('Pika!');//input function
        setMode("Welcome");
      }}></Header>
      <NavBar title="WONWOO CHOI" topics={topics} onChangeMode={(_id)=>{
        setId(_id);
      }}></NavBar>
    {content}
      
    </div>
  );
}

export default App;
