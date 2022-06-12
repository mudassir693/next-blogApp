import type { AppProps } from 'next/app'
import ProjectContext from './../projectContext/ProjectContext'

// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';
// import '@fortawesome/fontawesome-free/js/regular';
// import '@fortawesome/fontawesome-free/js/brands';

import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (<ProjectContext>
          <Component {...pageProps} />
        </ProjectContext>)
}

export default MyApp
