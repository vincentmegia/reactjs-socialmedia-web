import { useContext } from "react";
import { config } from "../app.config";

const DebugRender = () => {    
    const debugElement = () => {
        if (config.debug) {
            return <>render id: {new Date().getMilliseconds()}</>
        }
    }
    return (<>{debugElement()}</>);
}

export default DebugRender;