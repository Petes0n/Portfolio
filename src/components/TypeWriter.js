import React from "react";
import Typewriter from "typewriter-effect";

function GetTypewriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default GetTypewriter;
