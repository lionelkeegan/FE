/**
 * hello components
 * rendering component for main components
 */
const Hello = ({name, major, age}) =>{

    // const {name, major, age} = props

    return(
        <div className="hello">
            <h2>Hello React</h2>
            <p>I'm {name} - Departement {major} -  {age} Year's old - Frontend Engineer</p>
        </div>
    )
}

export default Hello;
