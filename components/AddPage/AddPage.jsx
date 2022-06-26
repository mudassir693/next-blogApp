// Add Page Component
import React,{useState,useEffect} from 'react'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import {HiOutlinePlusCircle} from 'react-icons/hi'
// import {useRouter} from 'next-router'
import { CopyBlock, dracula } from "react-code-blocks";
import ReactTerminalCommand from 'react-terminal-command'
import {gql,request} from 'graphql-request'
import {BsTrashFill} from 'react-icons/bs'
import firebase from "../../firebase-config"
import uri from '../../axios/axios'
import { useRouter } from 'next/router'


const db = firebase.storage();
import Image from 'next/image';
import { useCollection } from "react-firebase-hooks/firestore";
// import { useDocument } from "react-firebase-hooks/firestore";
// import firebase from "../firebase/clientApp";
// 

// const db = firebase.firestore();

function AddPage(prop) {

    const router = useRouter()
    const {articleEdit} = router.query

    const [title,setTitle] = useState('')
    const [intro,setIntro] = useState('')
    const [terminalCmds,setTerminalCmds] = useState([])
    const [tCmd,setTCmd] = useState('')
    const [codes,setCodes] = useState([])
    const [code,setCode] = useState('')
    const [peras,setPeras] = useState([])
    const [pera,setPera] = useState('')
    const [endline,setEndline] = useState('')

    const [image,setImage] = useState('')
    const [imageUrl,setImageUrl] = useState('')
    const [bodyArrayId ,setBodyArrayId] = useState([])
    const [bodyArray,setBodyArray] = useState([])
    const [useEffectController,setUseEffectController] = useState(false)

    useEffect(()=>{
        getData()
        
        return ()=>{
            false
        }
    },[])

    const getData = async()=>{
        console.log('addPage: ',articleEdit)

        const query = gql`
            query($_id:String){
                getBlogById(id:$_id){
                    _id
                    TitleImage 
                    Title
                    Introduction
                    TerminalCommands
                    Code
                    Peragraphs
                    FinalLine
                    Views
                    Likes
                    LikeBy
                    createdAt
                }
            }
        `
        if(articleEdit){
            console.log('is it working: ');
            const resp = await request('http://localhost:5000/graphql',query,{_id:articleEdit})
        

            console.log('get by id: ',resp.getBlogById)
            setTitle(resp.getBlogById.Title)
            setIntro(resp.getBlogById.Introduction)
            setTerminalCmds(resp.getBlogById.TerminalCommands)
            setCodes(resp.getBlogById.Code)
            setPeras(resp.getBlogById.Peragraphs)
            setEndline(resp.getBlogById.FinalLine)
            setImageUrl(resp.getBlogById.TitleImage)
        }

    }
    // getData()

    const handleFeilds = (e,arg)=>{
        if(arg=='title'){
            setTitle(e.target.value)
        }else if(arg=='intro'){
            setIntro(e.target.value)
        }else if(arg=='endline'){
            setEndline(e.target.value)
        }else if(arg=='terCmd'){
            setTCmd(e.target.value)
        }else if(arg=='code'){
            setCode(e.target.value)
        }else if(arg=='pera'){
            setPera(e.target.value)
        }else{
            console.log('thanks');
        }
    }

    
    const handleArrays = async(param)=>{ 
        if(param=='codes'){
            const mutation = gql`
                mutation($content: String){
                    addBlock(Type:"Code",Position:"",Content:$content){
                        _id
                        Type
                        Position
                        Content
                    }
                }
            `

            const resp = await request('http://localhost:5000/graphql',mutation,{content:code})

            setBodyArrayId([...bodyArrayId,resp.addBlock._id])
            setBodyArray([...bodyArray,resp.addBlock])
            setCodes([...codes,code])
            setCode('')
        }else if(param=='peras'){

            const mutation = gql`
            mutation($content: String){
                addBlock(Type:"Pera",Position:"",Content:$content){
                    _id
                    Type
                    Position
                    Content
                }
            }
        `

        const resp = await request('http://localhost:5000/graphql',mutation,{content:pera})

        setBodyArrayId([...bodyArrayId,resp.addBlock._id])
        setBodyArray([...bodyArray,resp.addBlock])

            setPeras([...peras,pera])
            setPera('')
        }else if(param=='tCmds'){

            console.log('triggered');

            const mutation = gql`
            mutation($content: String){
                addBlock(Type:"Terminal",Position:"",Content:$content){
                    _id
                    Type
                    Position
                    Content
                }
            }
        `

        const resp = await request('http://localhost:5000/graphql',mutation,{content:tCmd})

        console.log('here i found it: ',resp.addBlock);

        setBodyArrayId([...bodyArrayId,resp.addBlock._id])
        setBodyArray([...bodyArray,resp.addBlock])

            setTerminalCmds([...terminalCmds,tCmd])
            setTCmd('')
        }
    }

    const handleSubmit = async()=>{
        
        if(articleEdit){
            console.log(`the title is: ${title} having intro ${intro} and endline: ${endline} code: ${terminalCmds}`)
            console.log(terminalCmds)
            console.log(codes)
            console.log(peras)

            const mutation = gql`
                mutation($_id:String,$titleImage:String,$title:String,$introduction:String,$terminalCmds:[String],$code:[String],$peragraphs:[String],$finalLine:String){
                    updateBlog(id:$_id,TitleImage:$titleImage, Title:$title, Introduction:$introduction, TerminalCommands:$terminalCmds,Code:$code,Peragraphs:$peragraphs,FinalLine:$finalLine){
                        TitleImage
                        Title
                        Introduction
                        TerminalCommands
                        Code
                        Peragraphs
                        FinalLine
                    }
                }
            `

            const resp = await request('http://localhost:5000/graphql',mutation,{_id:articleEdit,titleImage:imageUrl,title:title,introduction:intro,terminalCmds:terminalCmds,code:codes,peragraphs:peras,finalLine:endline})

            console.log('here is updResp: ',resp.updateBlog)
        }else {

        
            console.log('what is this:');

        const query = gql`
            mutation($titleImg: String,$title: String, $intro: String, $body: [String], $endline:String) {
                    AddBlog(TitleImage:$titleImg,Title:$title, Introduction:$intro, Body: $body, FinalLine:$endline){
                    TitleImage
                    Title
                    Introduction
                    Body
                    FinalLine
                }
            }
        `

        const resp = await request('http://localhost:5000/graphql',query,{titleImg:imageUrl,title: title, intro: intro, body: bodyArrayId, endline:endline})
        console.log(resp)
        }
    }

    // const handleFireBaseUpload = e => {
    //     // e.preventDefault()
    //       console.log('start of upload')
    //   // async magic goes here...

    //   const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
      
    //   }

      const handleImageAsFile = async(e) => {
        console.log('yess')
        const image = e.target.files[0]
        setImage(image)
        console.log(e.target.files[0]);
        // handleFireBaseUpload()

        console.log('start of upload')
        // async magic goes here...
  
        const uploadTask = db.ref(`/images/${e.target.files[0].name}`).put(e.target.files[0])

        // const imageResp =  await db.collection("images").doc(`images-${e.target.files[0].name}`).set(JSON.parse(JSON.stringify({id:image.name,file:image})));

        // console.log('checkmark: ',imageResp);

        uploadTask.on('state_changed', 
            (snapShot) => {
            //takes a snap shot of the process as it is happening
            console.log('snapshot: ',snapShot)
            }, (err) => {
            //catches the errors
            console.log('error: ',err.message_)
            }, () => {
            // gets the functions from storage refences the image storage in firebase by the children
            // gets the download url then sets the image from firebase as the value for the imgUrl key:
            db.ref('images').child(image.name).getDownloadURL()
            .then(fireBaseUrl => {
                console.log('here is url: ', fireBaseUrl);
                setImageUrl(fireBaseUrl)
       })
    })
    }

    const filterArray = (setter,ArrayName,element) => {
        console.log('clikced');
        console.log('Array: ',ArrayName)
        console.log('Element: ',element)

        setter(ArrayName.filter(eachObj=>eachObj !== element))
    }
  return (
    <div className="w-[100%] mx-auto bg-[#061019] text-white py-10">
        <div className="max-w-4xl mx-auto  my-5">
            <div className="text-left text-4xl font-semibold">
                AddPage
            </div>
            <div className="formContainer my-5 w-[90%] md:w-[80%] mx-auto">

            <input 
                type="file"
                onChange={handleImageAsFile}
            />

            {imageUrl && <div className="imageContainerAddForm my-3 h-[10rem] lg:h-[20rem] w-[90%] md:w-[80%] relative mx-auto">
                <Image className='rounded-lg' src={imageUrl} alt='Banner Image'  objectFit="cover" layout='fill'/>
            </div>}

            <div className="eachFeildContainer my-10">
                    <div className="text-white text-xl font-semibold">
                        Title
                    </div>
                    <div className="inputFeildContainer px-3 rounded-lg bg-gray-200 flex justify-start items-center">
                        <input onChange={(e) => handleFeilds(e, 'title')} className="w-[100%] rounded-lg  py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" value={title} />
                    </div>
                </div>

                <div className="eachFeildContainer my-10">
                    <div className="text-white text-xl font-semibold">
                        Introduction
                    </div>
                    <div className="inputFeildContainer px-3 rounded-lg bg-gray-200 flex justify-start items-center">
                        <input onChange={(e) => handleFeilds(e, 'intro')} className="w-[100%] rounded-lg px-3 py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" value={intro} />
                    </div>
                </div>

                {bodyArray.length>0 && bodyArray.map(block=>(

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

                    // <div className="w-[90%] md:w-[100%] mx-auto rounded-lg my-3 relative">
                    //     <ReactTerminalCommand command={eachCmd} />
                    //     <BsTrashFill onClick={()=>filterArray(setTerminalCmds,terminalCmds,eachCmd)} className='absolute right-2 bottom-2 text-red-500' />
                    // </div>

                ))}

                <div className="my-5 flex flex-col justify-end items-end">
                    <div className="w-[100%] eachFeildContainer">
                        <div className="text-white text-xl font-semibold">
                            Terminal
                        </div>
                        <div className="inputFeildContainer rounded-lg bg-gray-200 flex justify-start items-center">
                        <AiOutlineDoubleRight className='text-black mx-2 text-2xl' />
                        <input onChange={(e)=>handleFeilds(e,'terCmd')} className="w-[100%] rounded-lg py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" value={tCmd} />
                        <HiOutlinePlusCircle onClick={()=>handleArrays('tCmds')} className="mx-2 text-3xl text-black cursor-pointer text-[#E21B70] tarnsition duration-200 hover:scale-200 " />
                        </div>
                    </div>
                    {/* <div className="my-3 w-[50%] mx-auto bg-[#E21B70] text-white py-3 rounded-lg">
                    </div> */}
                   

                </div>
                    <div className="my-10">
                    <div className="my-4 w-[100%]">
                        {/* {codes.length>0 && codes.map(eachCode=>(
                            <div className="codeBlock w-[100%] mx-auto rounded-lg my-3 relative">
                                <CopyBlock
                                    text={eachCode}
                                    language='jsx'
                                    showLineNumbers={true}
                                    theme={dracula}
                                    wrapLines={true}
                                    codeBlock
                                />
                                <BsTrashFill onClick={()=>filterArray(setCodes,codes,eachCode)} className='absolute right-2 bottom-2 text-red-500' />
                            </div>
                            ))} */}
                     </div>
                <div className="eachFeildContainer ">
                    <div className="text-white text-xl font-semibold">
                        Code
                    </div>
                    <div className="inputFeildContainer px-3 py-2 rounded-lg bg-gray-200 flex justify-start items-center">
                        <textarea onChange={(e)=>handleFeilds(e,'code')} className="w-[100%] rounded-lg py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" value={code} rows="15" cols="50">
                        </textarea>
                    </div>
                </div>
                <div onClick={()=>handleArrays('codes')} className="my-3 w-[100%] mx-auto bg-gradient-to-r from-[#E21B70] to-[#00B9E8]  cursor-pointer text-white py-3 rounded-lg flex justify-center items-center">
                    <HiOutlinePlusCircle className="mx-2 text-3xl" />
                    <span className="text-white font-light text-2xl ">Add Code</span>
                </div>
                    </div>

                    <div className="my-10">
                    {/* {peras.length>0 && peras.map(eachPera=>(
                    <div className="desc text-white text-xl my-5 relative">
                       <span> {eachPera}</span>
                       <BsTrashFill onClick={()=>filterArray(setPeras,peras,eachPera)} className='absolute right-2 bottom-2 text-red-500' />
                    </div>))} */}
                <div className="eachFeildContainer ">
                    <div className="text-white text-xl font-semibold">
                        Peragraphs
                    </div>
                    <div className="inputFeildContainer rounded-lg bg-gray-200 px-3 py-2 flex justify-start items-center">
                    {/* <AiOutlineDoubleRight className='text-black mx-2 text-2xl' />
                        <input className="w-[100%] rounded-lg py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" /> */}

                        <textarea onChange={(e)=>handleFeilds(e,'pera')} className="w-[100%] rounded-lg py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" value={pera} rows="15" cols="50">
                        </textarea>
                    </div>
                </div>
                <div onClick={()=>handleArrays('peras')} className="my-3 w-[100%] mx-auto bg-gradient-to-r from-[#00B9E8] to-[#E21B70] cursor-pointer text-white py-3 rounded-lg flex justify-center items-center">
                    <HiOutlinePlusCircle  className="mx-2 text-3xl" />
                    <span className="text-white font-light text-2xl ">Add Peragraph</span>
                </div>
                </div>

                <div className="eachFeildContainer my-10">
                    <div className="text-white text-xl font-semibold">
                        Ending
                    </div>
                    <div className="inputFeildContainer px-3 rounded-lg bg-gray-200 flex justify-start items-center">
                        <input onChange={(e) => handleFeilds(e, 'endline')} className="w-[100%] rounded-lg px-3 py-2 px-1 text-[#061019] bg-transparent text-2xl font-medium focus:outline-none" type="text" value={endline} />
                    </div>
                </div>

                <div onClick={handleSubmit} className="my-10 w-[100%] bg-gradient-to-r from-[#E21B70] to-[#00B9E8] py-3 text-center rounded-lg text-2xl transition delay-200 cursor-pointer">
                        {articleEdit?'Update':'Add' }  Post
                </div>

            </div>
        </div>
    </div>
  )
}

export default AddPage