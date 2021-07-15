import React, { useEffect, useState } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'

const Keyboard: React.FC = (props) => {
    const [state, setState] = useState('')
    const handler = (event: React.SetStateAction<string>) => {
        // changing the state to the name of the key
        // which is pressed
        setState(event);
        if(event === 'Home'){
                alert(`The sky is your starting point! ${state}`)
          }
        if(event === 'KeyU'){
                alert(`The sky is your starting point! ${state}`)
          }
      };
    
      // useEffect(() => {
      //   apiLocal
      //     .get("/users")
      //     .then((response) => setUser(response.data))
      //     .catch((err) => {
      //       console.error("ops! ocorreu um erro" + err);
      //     });
      // }, []);

      
    return (
        <>
          <KeyboardEventHandler 
          handleKeys={['all']} 
          onKeyEvent={(key, e) => handler(e.code)} />
        </>
    );
};

export default Keyboard;