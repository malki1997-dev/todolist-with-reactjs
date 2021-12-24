import React, { Component } from 'react';

export class Todo extends Component
{

constructor()
{
    super();
    this.state={

           text:'',
           list:[]

              }
    
    this.change=this.change.bind(this);
    this.add=this.add.bind(this)
    this.addlist=this.addlist.bind(this)
    this.delete=this.delete.bind(this)
    this.update=this.update.bind(this)


}

change(e)
    {
       this.setState({text:e.target.value})
    }

//******************************* ADD ****************************************

    add(e)
    {
        e.preventDefault();
        this.state.list.push(document.getElementById('inp').value);
    
    }

//******************************* DELETE ****************************************

    delete(e)
    {
        e.preventDefault();
        const x=e.target.id;
       var list=this.state.list.filter(checkAdult);
       function checkAdult(age)
        {
        return age!=x;
        }
        
        this.setState({list:list})
    }

//******************************* UPDATE ****************************************
    update(e)
    {
       e.preventDefault();
       const x=e.target.id;
       var list=this.state.list;
       var y=list.indexOf(x);
       list.splice(y,1,document.getElementById('inp').value);
       this.setState({list:list})
       console.log( this.state.list);
    }

//******************************* AFFICHER MAP ****************************************

    addlist()
    {
     return  this.state.list.map((item)=>
        <li key={item} className="list-group-item" >{item} 
        <div>
        <button id={item} className='btn btn-warning' onClick={this.delete}>Delete</button>
        <button id={item} className='btn btn-dark' onClick={this.update}>Edit </button>
        </div>
        </li>
         )
    }

render()
{

return(

<div className='container' >

      <h1>** TODOLIST **</h1>
      <form className='form-group'>
        <input type="text" id='inp' className='class="form-control"' placeholder='entrer un text'  onChange={this.change} />
        <button onClick={this.add} className='btn btn-primary'>Ajouter</button>
        <div>
            <ul className="list-group">
             {this.addlist()}
             </ul>
        </div>
      </form>
</div>

)

}

} export default Todo