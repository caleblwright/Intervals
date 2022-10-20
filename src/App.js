import './App.css';

function App() {
  return (
    <div className="App">
      <Info> </Info>
      <AddItem> </AddItem>
    </div>
  );
}

function Info (){
  const title = "Interval"
  const showTitle = true


  return(
  <div>
    <h1> {showTitle ? title : ""} </h1>
    <p> Manage your pace while working out!</p>
  </div>
  );
}

function AddItem(){
  return(
  <form>
    <label for="text_form"> Type something: </label> 
    <input type = "text"  id= "text_form"/>
  </form>
  );
}
export default App;
