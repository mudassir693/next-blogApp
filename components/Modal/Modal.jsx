import React,{useContext,useState} from 'react'
import style from './Modal.module.css'
import {BsXLg} from 'react-icons/bs'
import {context} from './../../projectContext/ProjectContext'
import {gql,request} from 'graphql-request'
function Modal() {
    const {toggleModal,setLogin} = useContext(context)

    const [formData,setFormData] = useState({Name:'',Email:''})

    const handleFormData = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const submitFormData = async(e)=>{
        console.log('hereisData: ',formData)

        const addMutation = gql`
            mutation($name:String,$email:String,$admin:Boolean){
                addReader(Name:$name,Email:$email,Admin:$admin){
                    _id
                    Name
                    Email
                    Admin
                    createdAt
                  }
            }
        `
        const resp = await request('http://localhost:5000/graphql',addMutation,{name:formData.Name,email:formData.Email,admin:false})
        console.log(resp.addReader)
        setLogin(resp.addReader)
        toggleModal()


    }
  return (
    <div className={style.Container}>
        <div className="wrapper rounded-xl bg-white w-[90%] h-fit md:w-[80%] md:h-fit lg:w-[28%] lg:h-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <span className="text-2xl px-3">
                <div className="mx-5 text-2xl text-[#061019] font-semibold flex justify-between items-center">
                    <span>
                        Register/Login
                    </span>
                    <BsXLg onClick={toggleModal} className='cursor-pointer' />
                </div>
                <div className="formContainer my-5">
                <div className="my-5 mx-5">
                    <div className="label text-xl font-bold">
                        Name
                    </div>
                    <input className=' w-[100%] px-3 border-[#061019] border-2 py-2 text-[#061019] font-light text-2xl rounded-xl' onChange={handleFormData} type="text" name="Name" />
                </div>

                <div className="my-5 mx-5">
                    <div className="label text-xl font-bold">
                        Email
                    </div>
                    <input className='w-[100%] px-3 border-[#061019] border-2 py-2 text-[#061019] font-light text-2xl rounded-xl' onChange={handleFormData} type="text" name="Email" />
                </div>

                <div className="my-5 mx-5">
                    <div onClick={submitFormData} className="cursor-pointer bg-[#061019] w-[100%] text-white text-xl text-white py-3 text-center rounded-[20rem]">
                        Submit
                    </div>
                </div>
                </div>
            </span>
        </div>
    </div>
  )
}

export default Modal