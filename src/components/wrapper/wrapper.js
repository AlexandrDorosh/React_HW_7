import {useEffect, useState} from "react";
import {getUsers} from "../../services/Api";
import Forms from "../forms/forms";

export default function Wrapper(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]))
    }, [])

    return(
        <div>
                <Forms users={users}/>
        </div>
    )
}