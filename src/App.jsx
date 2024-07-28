import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { v4 as uuidv4 } from 'uuid';






function App() {
  const [count, setCount] = useState(0)
  const [todo,settodo]=useState("")
  const [todos,settodos]=useState([])







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

  

}









  return (
    <div className="div  h-screen flex flex-col">
      
    
      <nav className='p-6 bg-stone-400 flex justify-center'>
          <div className="todo text-white">
            <h1 className='font-bold text-2xl tracking-widest'>TODO</h1>
          </div>

      </nav>
     

      <div className="container min-h-96 w-[70%] mx-auto mt-7  rounded-3xl bg-white p-6 flex flex-col items-center">



        <div className="addder flex gap-5 ">

        <input onChange={handleinput} value={todo} type="text" className='bg-transparent w-80 border-2  font-light rounded-xl ' />

        <button onClick={handleadd} className='bg-red-500 rounded-lg p-1 font-bold text-white'>Add</button>
          
        </div>



        {/* task */}

        {todos.map((e)=>{

        return <div key={e.id} className="task p-3 border mt-5 w-3/4 flex justify-between rounded-2xl">
          <input name={e.id} type="checkbox" onChange={handlecheckbox} />
          <span className={e.isComplete?"line-through":""}>{e.todo}</span>
          


          <div className="function space-x-4">
          <button className='py-1 bg-blue-300 rounded-2xl px-2'>Edit</button>
          <button className='py-1 bg-blue-300 rounded-2xl px-2' name={e.id} onClick={(item)=>handledelete(item,e.id)}>Delete</button>

          </div>
        </div>

        })}

      </div>
      </div>
  )
}

export default App
