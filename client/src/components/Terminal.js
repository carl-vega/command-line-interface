import React, { useRef, useEffect, useState } from "react";
import { XTerm } from "xterm-for-react";

export default function Terminal() {
  const xtermRef = useRef(null);
  const [command, setCommand] = useState([]);
  const [argument, setArgument] = useState("");

  useEffect(() => {
    // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
    xtermRef.current.terminal.writeln(`carl-vega-macbook~`);
    xtermRef.current.terminal.write(`$`);
  }, []);

  return (
    // Create a new terminal and set it's ref.
    <>
      <XTerm
        ref={xtermRef}
        onData={(data) => {
          xtermRef.current.terminal.write(data);
          setArgument(argument + data);
          const code = data.charCodeAt(0);
          console.log(code);
          if (code === 32) {
            setCommand([...command, argument]);
            setArgument("");
          }
          // if(argument === "node") {
          // }
          if (code === 13) {
            xtermRef.current.terminal.writeln("");
            xtermRef.current.terminal.write(`$`);
            setCommand([]);
          }
          // console.log(xtermRef.current);
          console.log(argument);
          console.log(command);
        }}
      />
      <pre>{JSON.stringify(command)}</pre>
    </>
  );
}

/* 
TODO~~~~~~~~~~~~~~~~~~~~~~
- new variable for arguments
- spaces processed
- 
*/
