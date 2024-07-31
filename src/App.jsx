  import { useEffect, useRef, useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import { v4 as uuidv4 } from 'uuid';
  import React from 'react'
  import { MdOutlineEdit } from "react-icons/md";
  import { CiEdit } from "react-icons/ci";
  import { FaEdit } from "react-icons/fa";
  import { MdDelete } from "react-icons/md";




  function App() {
    const [count, setCount] = useState(0)
    const [todo,settodo]=useState("")
    const [todos,settodos]=useState([])
    const [showfinished,setshowfinished]=useState(false);
    const [novalue,setnovalue]=useState("")


    useEffect(() => {
      // Retrieve todos from local storage
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      if (storedTodos) {
        settodos(storedTodos);
      }
    }, []);
  
    useEffect(() => {
      // Save todos to local storage whenever the todos state changes
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    

    
    


    const handleinput=(e)=>{
      settodo(e.target.value)

    }
    const handleadd=()=>{
      
    
      if(todo==""){
        return false
      }

      settodos([...todos,{todo,id:uuidv4(),isComplete:false}]) 

      settodo("")
      
      
      




    }

    const  handlecheckbox=(iden)=>{
      

      let a=iden.target.name;

      
      const result=todos.forEach((item,index)=>{
        if(item.id==a){
          if(item.isComplete){
            item.isComplete=false
            
            setCount(count+1)


            
            
          }
          else{
            
            setCount(count+1)
            item.isComplete=true
          }
          // console.log(item.isComplete)
          return index; 
          
          
        }


        

      })
    
      
    }



  const handledelete=(e,id)=>{
    

    if(window.confirm("Are you Sure to delete?")){

    }
    else{
      return false;
      
    }

    
    
    
    
    let newtodo=todos.filter((item)=>{
      return item.id!=id
      
    })
    
    
    
    
    
    settodos(newtodo)
  
  
  }



  const handleEdit =(e,id)=>{
    
    let testtodo=todos.filter((item)=>{
      return item.id==id;

    })

    settodo(testtodo[0].todo)

  
    let newtodo=todos.filter((item)=>{

      
      return item.id!=id
      
    })
    

    settodos(newtodo)
  

    




  }


  const tooglechecked=()=>{

    setshowfinished(!showfinished)



  }








    return (
      <div className="div w-screen   md:h-screen flex flex-col">
        
      
        <nav className='p-6 bg-stone-400 flex justify-center'>
            <div className="todo text-white">
              <h1 className='font-bold text-2xl tracking-widest'>TODO</h1>
            </div>

        </nav>
      

        <div className="container min-h-96 w-screen md:w-[70%] md:mx-auto md:mt-0 mt-7  rounded-3xl bg-white p-6 flex flex-col items-center border   ">



          <div className="addder flex gap-5 ">

          <input onChange={handleinput} value={todo} type="text" className='bg-transparent w-80 border-2  font-light rounded-xl ' />

          <button onClick={handleadd} className='bg-red-500 rounded-lg p-1 font-bold text-white'>Add</button>
            
          </div>

        
          <div className="div flex gap-3 mt-2 ">
              <input type="checkbox" checked={showfinished} onClick={tooglechecked}  />
              <div className="div">
                showfinished
              </div>

          </div>

      {/* no todos to display */}

      
        {todos.length==0 && <div>
          
            <h1 className='font-bold text-2xl  h-72 flex justify-center items-center opacity-50'>No Todos Found</h1>

          </div>}













          {/* task */}

          {todos.map((e)=>{


          return(showfinished == e.isComplete) &&  (
          
         

          
          <div key={e.id} className="task p-3 border mt-5 w-screen md:w-3/4 flex justify-between rounded-2xl items-center relative">
            


            <input name={e.id} type="checkbox" onChange={handlecheckbox} />
          

            <div className="text flex flex-wrap borde w-1/2 justify-center ">

            <span className={e.isComplete?"line-through":""}>{e.todo}</span>
            
            </div>
            


            <div className="function space-x-4">
            <button className='py-1 bg-blue-300 rounded-2xl px-2' onClick={(item)=>handleEdit(item,e.id)} name={e.todo}> <FaEdit /> </button>
            <button className='py-1 bg-blue-300 rounded-2xl px-2' name={e.id} onClick={(item)=>handledelete(item,e.id)}><MdDelete /></button>
            

            </div>
          </div>

        
          )})}

        </div>
        </div>
    ) 
  }

  export default App
