import { useState } from "react";
import Fade from'./Fade.js';

function Tooltip(props) {
    const [visible, setvisible] = useState(false);

    function toggleVisible() {
        visible ? setvisible(false) : setvisible(true);
    }

    const tooltipClass = `tooltip ${props.position}`;
    
    switch(props.type) {
        case 'link' :
        
            return(
                <div className='tooltip-container' onMouseEnter={toggleVisible} onMouseLeave={toggleVisible} >
                    <Fade visible={visible}>
                        <p className={tooltipClass} style={{width: props.width}}>{props.text}</p>
                    </Fade>
                {props.children}
                </div>
            )
        
        case 'input' :
      
            return(
                <div className='tooltip-container' onFocus={toggleVisible} onBlur={toggleVisible} >
                <Fade visible={visible}> 
                    <p className={tooltipClass} style={{width: props.width}}>{props.text}</p>
                </Fade> 
                {props.children}
                </div>
            )


        case 'button' :
   
            return(
                <div className='tooltip-container' onMouseEnter={toggleVisible} onMouseLeave={toggleVisible} >
                    <Fade visible={visible}>
                        <p className={tooltipClass} style={{width: props.width}}>{props.text}</p>
                    </Fade>
                {props.children}
                </div>
            )
            
        default:
            console.error('MUST PROVIDE TOOLTIP TYPE')
            return <div>{props.children}</div>
    }
};

export default Tooltip;