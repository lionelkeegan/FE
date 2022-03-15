import Hello from "./hello";

/**
 * main components 
 * show main contents 
 */
const Main = () =>{
    return(
        <main>
            <Hello name="IRVAN" major="Informatics" age="20"/>
            <Hello name="said" major="Informatics" age="20"/>
            <Hello name="Farhan" major="Informatics" age="20"/>
            <Hello name="Rifki" major="Informatics" age="21"/>
            <Hello name="Fikri" major="Informatics" age="20"/>
        </main>
    )
}

export default Main;