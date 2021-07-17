import './info.css';

export default function Info({userInfo}){
    const {name, username, email, phone, website} = userInfo;
    return(
        <div className='info'>
            <div><strong>Name:</strong> {name}</div>
            <div><strong>Username:</strong> {username}</div>
            <div><strong>Email:</strong> {email}</div>
            <div><strong>Phone:</strong> {phone}</div>
            <div><strong>Website:</strong> {website}</div>
        </div>
    )
}