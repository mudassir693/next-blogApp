import  {request, gql } from 'graphql-request'
import React,{useEffect,useState} from 'react'
import ReactTerminalCommand from 'react-terminal-command'
import { CopyBlock, dracula } from "react-code-blocks";

function TerminalComp({id}) {
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
    const resp = await request('http://localhost:5000/graphql',anotherQuery,{_id:id})

    setBlock(resp?.getBlockById)
    }
  return (
            <div>

           {block?.Type=='Terminal' && <div className="w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
                <ReactTerminalCommand command={block?.Content} />
            </div>}

            {block?.Type=="Pera" && <div className="w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
                <div className="desc text-white text-xl my-5">
                    {block?.Content}
                </div>
            </div>}

           { block?.Type=="Code" && <div className="w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
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
            </div>}

            </div>

      
  )
}

export default TerminalComp