import React,{useEffect,useState} from 'react'
import {request, gql} from 'graphql-request'
import moment from 'moment'

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
    const getReader = await request('https://progress-regularly.herokuapp.com/graphql',readerQuery,{RId:comment.ReaderId}) 

    // setGetComments(getResp.getCommentById)
    setGetReader(getReader.getReaderById)
  }
  return (
    <div className="main my-2 w-[fit-content] cursor-pointer">
        <div className="container">
          <div className="retailerName text-[#E21B70] font-bold">
            {getReader?.Name.split(' ')[0]}
          </div>
          <div className="retailerComment text-[#00B9E8] border-2 border-[#E21B70] py-2 px-3  min-w-[40%] max-w-[100%] overflow-x-hidden rounded-xl">
            {comment.Content}
          </div>
          <div className="dateContainer text-[#00B9E8] text-sm text-right">
            {moment(comment.PublishDate).format('D MMM YYYY, hA')}
          </div>
        </div>
    </div>
  )
}

export default CommentComponent