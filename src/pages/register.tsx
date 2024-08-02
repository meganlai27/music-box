import { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
        <form 
            // On submit, 
            // onSubmit={async(e) => {
            //     e.preventDefault();
            //     const result = await supabase.from("Ratings").insert({username : username, password : password});
            //     console.log(result);
            // }}
        >

            <div className = "container">

                <label htmlFor = "form-review">Username: </label>
                <input
                    id = "form-review"
                    type = "text"
                    value = {username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    required
                />
                <br />
                <label htmlFor = "form-review">Password: </label>
                <input
                    id = "form-review"
                    type = "text"
                    value = {password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                />
                <br />
            </div>
            <input type = "submit" value = "Submit"/>
        </form>
    </div>
    )
}

export default Register;