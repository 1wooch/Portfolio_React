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

function Create(props){
 return <article>
  <h2>Create</h2>
  <form onSubmit={event=>{
    event.preventDefault(); //prevent reload after user submit value
    const title = event.target.title.value; // get the title value in textbox
    props.onCreate(title);
  }}>
    <input type='text' id="title" name='title' placeholder='title'></input><br></br>
    <input type='submit' value="Create"></input>
  </form>
 </article>
 
}



function App() { // contain all of the front-end ui for app
  const [topics,setTopics] = useState([ //will replace with JSON
    {id:1,title:"Home",loc:"1"}, //id = uid title = showing name loc = location of file (link)
    {id:2,title:"Contact",loc:"2"},
    {id:3, title:"Skills",loc:"3"}
  ]);
  let content=null;
  const [nextId,setNextId] = useState(4);


  let [mode,setMode]=useState('Read'); // should be let it keep change 
  let [id,setId]=useState(null);

  if (mode==="Welcome"){
    content =  <Article title={mode}></Article>
    mode="Read";
  }else if(mode==="Read"){
    let title=null;
    for (let i=0; i<topics.length; i++){
      if(topics[i].id===id){
        title=topics[i].title;
      }
    }
    content =  <Article title={title}></Article>
     mode="Welcome";
  }else if(mode==="Create"){
    content=<Create onCreate={(_title)=>{
      
      const newTopic={id:nextId, title:_title, loc:nextId}
      const newTopics=[...topics] //copy the topics
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode("Read");
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
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
    <a href='/create' onClick={event=>{
      event.preventDefault();
      setMode("Create"); // change mode
    }}>create</a>
    </div>
  );
}

export default App;
