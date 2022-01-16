// import { useEffect } from "react";

// export default function Scripter(props) {

//     useEffect(() => {
//       const script = document.createElement('script')

//       Object.assign(script, props)
  
//       let { parent='body' } = props
  
//       let parentNode = document.querySelector(parent)
//       parentNode.appendChild(script)
  
//       return () => {
//         parentNode.removeChild(script)
//       }
//     } )
  
//     return null 
//   }


import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
};

export default useScript;