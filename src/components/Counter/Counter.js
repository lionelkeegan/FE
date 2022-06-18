/**
 * import use state react
 */
import { useEffect, useState } from "react";
function Counter (){
    let [angka, setAngka] = useState(0);

    function addAngka(){
        setAngka(angka += 1);
        console.log(angka);
    }

    function updateDOM(){
        console.log("Lifecycle: dimount");
        document.title = `Result: ${angka}`;
    }

    useEffect(updateDOM, [angka]);

    console.log("dirender");

    return(
        <div>
            <p>Hasil: {angka}</p>
            <button onClick={ addAngka }>Add</button>
        </div>
    );
}

export default Counter;