import React,{useEffect,useState} from 'react'
import {request, gql} from 'graphql-request'

function CommentComponent({comment}) {
  const [getComments, setGetComments] = useState()
  const [getReader, setGetReader] = useState()
  const [display, setDisplay] = useState()

  useEffect(()=>{
    setDisplay(false)
    getCommentFn()
    setDisplay(true)
  },[])

  const getCommentFn = async()=>{
  

    const readerQuery = gql`
      query($RId:String) {
          getReaderById(id:$RId){
          _id
          Name
          Email
          createdAt
        } 
      }
    ` 
    const getReader = await request('http://localhost:5000/graphql',readerQuery,{RId:comment.ReaderId}) 

    // setGetComments(getResp.getCommentById)
    setGetReader(getReader.getReaderById)
  }
  return (
    <div className="main my-2">
        <div className="container">
          <div className="retailerName text-[#E21B70] font-bold">
            {getReader?.Name}
          </div>
          <div className="retailerComment text-[#00B9E8] border-2 border-[#E21B70] py-2 px-3 w-[fit-content] max-w-[100%] flow-hidden rounded-xl">
            {comment.Content}
          </div>
        </div>
    </div>
  )
}

export default CommentComponent