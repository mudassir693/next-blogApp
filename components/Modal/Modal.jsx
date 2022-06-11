import React from 'react'
import style from './Modal.module.css'
import {BsXLg} from 'react-icons/bs'
function Modal() {
  return (
    <div className={style.Container}>
        <div className="wrapper rounded-xl bg-white w-[90%] h-fit md:w-[80%] md:h-fit lg:w-[28%] lg:h-fit absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <span className="text-2xl px-3">
                <div className="mx-5 text-2xl text-[#061019] font-semibold flex justify-between items-center">
                    <span>
                        Register/Login
                    </span>
                    <BsXLg className='cursor-pointer' />
                </div>
                <div className="formContainer my-5">
                <div className="my-5 mx-5">
                    <div className="label text-xl font-bold">
                        Name
                    </div>
                    <input className=' w-[100%] px-3 border-[#061019] border-2 py-2 text-[#061019] font-light text-2xl rounded-xl' type="text" />
                </div>

                <div className="my-5 mx-5">
                    <div className="label text-xl font-bold">
                        Email
                    </div>
                    <input className='w-[100%] px-3 border-[#061019] border-2 py-2 text-[#061019] font-light text-2xl rounded-xl' type="text" />
                </div>

                <div className="my-5 mx-5">
                    <div className="cursor-pointer bg-[#061019] w-[100%] text-white text-xl text-white py-3 text-center rounded-[20rem]">
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