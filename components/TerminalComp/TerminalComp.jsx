import  {request, gql } from 'graphql-request'
import React,{useEffect,useState} from 'react'
import ReactTerminalCommand from 'react-terminal-command'
import { CopyBlock, dracula } from "react-code-blocks";
import {BsTrashFill} from 'react-icons/bs'

function TerminalComp({id, edit, bodyIds,setBodyIds,toggler,setToggler}) {
    const [block,setBlock] = useState({Type:'',Position:'',Content:''})

    useEffect(()=>{
        getBlock(block);
        return ()=>{
            true
        }
    },[])


    const getBlock = async()=>{
        const anotherQuery = gql`
        query($_id: String){
            getBlockById(id:$_id){
                _id
                Type
                Position
                Content
            }
        }
    `
    const resp = await request('https://progress-regularly.herokuapp.com/graphql',anotherQuery,{_id:id})

    setBlock(resp?.getBlockById)
    }

    const deleteObj = async(id)=>{
        const query = gql`
            mutation($id: String){
                deleteBlock(id: $id){
                    Type
                    Position 
                    Content
                }
            }
        ` 

        const resp = await request('https://progress-regularly.herokuapp.com/graphql',query,{id:id})

        console.log('block deleted sucessfully')
        console.log('bodyIds: ', bodyIds);

        setBodyIds(bodyIds.filter(eachItem => eachItem !== id))
        setToggler(!toggler)

    }
  return (
            <div>

           {block?.Type=='Terminal' && <div className="relative w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
                <ReactTerminalCommand command={block?.Content} />
                {edit && <div className="absolute bottom-1 right-1"> <BsTrashFill onClick={()=>deleteObj(id)} className="cursor-pointer text-red-400" /> </div>}
            </div>}

            {block?.Type=="Pera" && <div className="w-[90%] md:w-[80%] mx-auto rounded-lg my-3 relative">
                <div className="desc text-white text-xl my-5">
                    {block?.Content}
                </div>
                {edit && <div className="absolute bottom-1 right-1"> <BsTrashFill onClick={()=>deleteObj(id)} className="cursor-pointer text-red-400" /> </div>}
            </div>}

           { block?.Type=="Code" && <div className="w-[90%] md:w-[80%] mx-auto rounded-lg my-3 relative">
                <div className="desc text-white text-xl my-5">
                    <CopyBlock
                        text={block?.Content}
                        language='jsx'
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock
                    />
                </div>
                {edit && <div className="absolute bottom-1 right-1"> <BsTrashFill onClick={()=>deleteObj(id)} className="cursor-pointer text-red-400" /> </div>}
            </div>}

            </div>

      
  )
}

export default TerminalComp