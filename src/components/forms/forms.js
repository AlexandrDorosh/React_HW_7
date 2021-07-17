import {useState} from "react";
import Info from "../info/info";

export default function Forms({users}){
    const [user, setUser] = useState({});
    const [userInfo, setUserInfo] = useState({});

    const userChoose = (e) => {
        const user_id = e.target.value;
        const findUser = users.find(user => user.id === user_id)
        setUser(findUser);
        const findInfo = users.find(user => user.id === +user_id)
        setUserInfo(findInfo);
    }

    return(
        <div>
            <form onSubmit={userChoose}>
                <select onChange={userChoose} value={user}>
                    {
                        users.map(value => <option key={value.id} value={value.id}>{value.name}</option>)
                    }
                </select>
            </form>
            {
                userInfo ? <Info userInfo={userInfo} /> : null
            }
        </div>
    )
}