/**
 * import use state react
 */

import { useState } from "react";
function Counter (){
    /**
     * make state with use state and set first point 0
     * usesate callback 2 point:
     * -value current : result.
     * -function update result: set result.
     * destructing array from usestate
     */

    const [result, setResult] = useState(0);

    function handleClick(){
        /**
         * update result with function setresult
         */
        setResult(result +1);
    }
    
    return (
        <div>
            <p>Result : {result} </p>
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default Counter;