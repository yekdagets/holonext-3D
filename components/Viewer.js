import React from "react";
import useScript from "./useScript";

export default function Viewer() {
  const holo = useScript(
    "https://holonext.azurewebsites.net/public/js/hn-sdk-embed-v4.js"
  );

  return (
    <div style={{width:'400px', height:'300px'}}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <holonext-viewer sceneId="61d82bb92e21d40039c73ffc"></holonext-viewer>
      {holo}
    </div>
  );
}
