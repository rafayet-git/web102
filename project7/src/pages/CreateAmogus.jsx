import { supabase } from '../client'
import React, {useState} from 'react';
const CreateAmongus = () => {
    const [post, setPost] = useState({name: "", role: ""})
    const createPost = async (event) => {
        event.preventDefault();
        
        await supabase
            .from('Among us')
            .insert({name: post.name, role: post.role})
            .select();
        
        window.location = "/";
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    return (
        <div>
            <h1>Create a New Crewmate</h1>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>
                <label htmlFor="role">Role</label><br />
                <select id="role" name="role" onChange={handleChange}>
                    <option value="Crewmate">Crewmate</option>
                    <option value="Imposter">Imposter</option>
                    <option value="Scientist">Scientist</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Guardian Angel">Guardian Angel</option>
                    <option value="Shapeshifter">Shapeshifter</option>
                    <option value="Noisemaker">Noisemaker</option>
                    <option value="Tracker">Tracker</option>
                    <option value="Phantom">Phantom</option>
                </select><br />
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreateAmongus