import React from 'react'
import Image from 'next/image'
import NextBannerImage from '../../assets/next3.png'
import { CopyBlock, dracula } from "react-code-blocks";
import ReactTerminalCommand from 'react-terminal-command'
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function EachPage() {
  return (
    <div className="bg-[#061019] py-10">
        <div className="max-w-4xl mx-auto text-white my-5">
            <div className="profileImageContainer h-[10rem] lg:h-[20rem] w-[90%] md:w-[80%] relative mx-auto ">
                <Image className="rounded-[2rem]" src={NextBannerImage} objectFit="cover" layout='fill' />
            </div>
            <div className="text-4xl font-semibold text-center my-10">
                Next.JS
            </div>
            <div className="w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
                <ReactTerminalCommand command='yarn install react-terminal-command' />
            </div>
            <div className="codeBlock w-[90%] md:w-[80%] mx-auto rounded-lg my-3">
            {/* <SyntaxHighlighter language="javascript" style={docco}>
                
            </SyntaxHighlighter> */}
                <CopyBlock
                    text={ `
                    import React from 'react'
                    import Image from 'next/image'
                    import NextBannerImage from '../../assets/next3.png'
                    import { CopyBlock, dracula } from "react-code-blocks";
                    // import SyntaxHighlighter from 'react-syntax-highlighter';
                    // import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
                    `}
                    language='jsx'
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            </div>
            <div className="descContainer w-[90%] md:w-[90%] mx-auto">
                <div className="desc text-white text-xl my-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, expedita ab. Pariatur est optio iusto repellendus laboriosam. Harum porro distinctio, id adipisci maxime nihil asperiores eveniet culpa, fugiat modi tenetur!
                </div>
                <div className="desc text-white text-xl my-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, qui modi assumenda animi ducimus et quam est, veniam nisi hic labore! Consequuntur, blanditiis ipsa! Officiis veniam eius magnam perferendis esse architecto voluptatibus recusandae nisi repellendus hic, quod harum aliquam, dolorum ipsum aperiam iusto tenetur libero culpa temporibus quam? Quos temporibus quaerat eius iste saepe iusto repellendus ipsam corrupti excepturi officia, quidem ad culpa facere facilis, sed sit maxime? Architecto natus numquam quisquam iste ullam temporibus rem aliquid consequuntur saepe omnis, modi doloribus nam quae eos voluptatum velit. Eum facilis sed facere cupiditate fugit corrupti officia. Aliquid necessitatibus quos consectetur beatae veritatis quam reiciendis possimus libero minima! Sapiente amet quibusdam neque error cum illo, omnis voluptatibus dolore deleniti ducimus iure cumque dolorum sequi accusantium quis, mollitia quam rem ea non facere, ex vitae necessitatibus nam. Blanditiis, nesciunt sequi cum ipsam iure expedita fugit dolores molestias sunt neque autem qui velit vel animi facilis obcaecati nulla possimus maxime, aspernatur non eaque vitae? Iusto itaque quasi voluptate veritatis at cumque, unde optio provident doloremque neque perferendis culpa sunt reprehenderit aspernatur tenetur harum debitis consectetur officiis? Quo maxime in quod praesentium. Optio, debitis dolore, sit ducimus, nulla magni sed eius maxime dolorem repudiandae nemo!
                </div>
                {/* <CopyBlock
                    text={ `
                    import React from 'react'
                    import Image from 'next/image'
                    import NextBannerImage from '../../assets/next3.png'
                    import { CopyBlock, dracula } from "react-code-blocks";
                    // import SyntaxHighlighter from 'react-syntax-highlighter';
                    // import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
                    `}
                    language='jsx'
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                /> */}
                <div className="desc text-white text-xl my-5">
                    Thanks for reading this.
                </div>
            </div>
        </div>
    </div>
  )
}

export default EachPage