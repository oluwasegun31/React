import { useState } from "react";
import Data from "./Data";
import DataContext from "./DataContext";

function Main(){
    const [users, setUsers] = useState('Oluwasegun')
    const data = {
        name: users,
        id: Math.floor(Math.random() * 100),
        updateName: setUsers
    }
    return(
        <DataContext.Provider value={data}>
            <h2>UseContext Hook</h2>
            <Data />
        </DataContext.Provider>
    )
}

export default Main