import React,{Component} from'react';
import './App.css';


export class App extends Component{

  state={input:"",items:[]};

  handleChange=(event)=>{
    this.setState({input:event.target.value });
  };
  
  storeItems=(event)=>{
      event.preventDefault();
      const {input}=this.state;
      this.setState({items:[...this.state.items,input],input:""});
  };

  deleteItem=(index)=>{
        const allItems=this.state.items;
        allItems.splice(index,1);
        this.setState({items:allItems})
         

  }

  render(){

    const{input,items}=this.state;
    console.log(items);

    return(
      <div className="todo-container">

        <h1>Todo List</h1>

        <form className="input-section" onSubmit={this.storeItems}>
          <input type="text" value={input}  onChange={this.handleChange}placeholder="Enter Items..."/>
        </form>

        <ul>
            {items.map((data,index)=>(
              <li key={index}>{data}
              <i class="fa-solid fa-pen-to-square"></i><i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
            ))}
            
        </ul>
              
      </div>

  );}

}

export default App;