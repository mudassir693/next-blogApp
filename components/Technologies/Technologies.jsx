import React from 'react'
import {FaVuejs} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {IoLogoNodejs} from 'react-icons/io'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiRedux} from 'react-icons/si'
import {GrDocker} from 'react-icons/gr'
import {SiKubernetes} from 'react-icons/si'
import {SiApollographql} from 'react-icons/si'


function Technologies() {
  return (
    <div className="bg-[#0f172a] py-10">
        <div className="technologiesContainer text-white container max-w-4xl mx-auto my-10 w-[90%] md:max-w-4xl">
            <div className="text-2xl font-semibold px-3 lg:px-0">
                Skill
            </div>
            <div className="technoligiesContainerIconSection mt-10 flex justify-between items-center flex-wrap">
                <div className="cursor-pointer hover:text-[#42b883]">
                    <div className="container text-5xl my-3 ">
                    <FaVuejs className="mx-auto"  />
                    </div>
                    <div className="text-white text-xl">
                        Vue.JS
                    </div>
                </div>

                <div className="cursor-pointer hover:text-[#61DBFB]">
                    <div className="container text-5xl my-3 ">
                    <FaReact className="mx-auto" />
                    </div>
                    <div className="text-white text-xl">
                        React.JS
                    </div>
                </div>

                <div className="cursor-pointer hover:text-[#764abc]">
                    <div className="container text-5xl my-3 ">
                    <SiRedux className="mx-auto" />
                    </div>
                    <div className="text-white text-xl">
                        Redux
                    </div>
                </div>

                <div className="cursor-pointer hover:text-[#000000]">
                    <div className="container text-5xl my-3 ">
                    <TbBrandNextjs className="mx-auto"  />
                    </div>
                    <div className="text-white text-xl">
                        NEXT.JS
                    </div>
                </div>

                <div className="cursor-pointer hover:text-[#3c873a]">
                    <div className="container text-5xl my-3 ">
                    <IoLogoNodejs className="mx-auto"  />
                    </div>
                    <div className="text-white text-xl">
                        Node.JS
                    </div>
                </div>

                <div className="cursor-pointer hover:text-[#E21B70]">
                    <div className="container text-5xl my-3 ">
                    <SiApollographql className="mx-auto"  />
                    </div>
                    <div className="text-white text-xl">
                        ApolloGQL
                    </div>
                </div>

                <div className="cursor-pointer hover:text-[#61DBFB]">
                    <div className="container text-5xl my-3 ">
                    <GrDocker className="mx-auto"  />
                    </div>
                    <div className="text-white text-xl">
                        Docker
                    </div>
                </div>

                <div className="cursor-pointer hover:text-[#61DBFB]">
                    <div className="container text-5xl my-3 ">
                    <SiKubernetes className="mx-auto"  />
                    </div>
                    <div className="text-white text-xl">
                        Kubernetes
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Technologies