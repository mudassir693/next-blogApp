import React from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'

function AddPage() {
  return (
    <div className="w-[100%] mx-auto bg-[#061019] text-white py-10">
        <div className="max-w-4xl mx-auto  my-5">
            <div className="text-left text-4xl font-semibold">
                AddPage
            </div>
            <div className="formContainer my-5 w-[90%] md:w-[80%] mx-auto">

            <div className="eachFeildContainer my-10">
                    <div className="text-white text-xl font-semibold">
                        Title
                    </div>
                    <div className="inputFeildContainer px-3 rounded-lg bg-gray-200 flex justify-start items-center">
                        <input className="w-[100%] rounded-lg  py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" />
                    </div>
                </div>

                <div className="eachFeildContainer my-10">
                    <div className="text-white text-xl font-semibold">
                        Introduction
                    </div>
                    <div className="inputFeildContainer px-3 rounded-lg bg-gray-200 flex justify-start items-center">
                        <input className="w-[100%] rounded-lg px-3 py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" />
                    </div>
                </div>


                <div className="eachFeildContainer my-10">
                    <div className="text-white text-xl font-semibold">
                        Terminal
                    </div>
                    <div className="inputFeildContainer rounded-lg bg-gray-200 flex justify-start items-center">
                    <AiOutlineDoubleRight className='text-black mx-2 text-2xl' />
                        <input className="w-[100%] rounded-lg py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" />
                    </div>
                </div>

                <div className="eachFeildContainer my-10">
                    <div className="text-white text-xl font-semibold">
                        Code
                    </div>
                    <div className="inputFeildContainer px-3 py-2 rounded-lg bg-gray-200 flex justify-start items-center">
                        <textarea className="w-[100%] rounded-lg py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" id="w3review" name="w3review" rows="15" cols="50">
                            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                        </textarea>
                    </div>
                </div>

                <div className="eachFeildContainer my-10">
                    <div className="text-white text-xl font-semibold">
                        PeraGraphs
                    </div>
                    <div className="inputFeildContainer rounded-lg bg-gray-200 px-3 py-2 flex justify-start items-center">
                    {/* <AiOutlineDoubleRight className='text-black mx-2 text-2xl' />
                        <input className="w-[100%] rounded-lg py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" /> */}

                        <textarea className="w-[100%] rounded-lg py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" id="w3review" name="w3review" rows="15" cols="50">
                            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                        </textarea>
                    </div>
                </div>

                <div className="eachFeildContainer my-10">
                    <div className="text-white text-xl font-semibold">
                        Ending
                    </div>
                    <div className="inputFeildContainer px-3 rounded-lg bg-gray-200 flex justify-start items-center">
                        <input className="w-[100%] rounded-lg px-3 py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AddPage