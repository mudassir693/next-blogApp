import React,{createContext,useState} from 'react'

export const context = createContext()


function ProjectContext({children}) {
    const [modal,setModal]=useState(true)
    const [test2,setTest2]=useState('hella')
    const [login,setLogin] = useState({})

    const toggleModal = ()=>{
        setModal(!modal)
    }

  return (
    <context.Provider value={{modal,toggleModal,login,setLogin}}>
        {children}
    </context.Provider>
  )
}

export default ProjectContext