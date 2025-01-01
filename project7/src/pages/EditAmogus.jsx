import { supabase } from '../client'
import React, {useEffect, useState} from 'react';
import { use } from 'react';
import { useParams } from 'react-router-dom';

const EditAmogus = () => {
    const {id} = useParams();
    const [prevPost, setPrevPost] = useState({});
    const [post, setPost] = useState({});
    
    useEffect(() => {
        const fetchPost = async () => {
            const {data} = await supabase
                .from('Among us')
                .select()
                .eq('id', id);
            setPrevPost(data[0]);
            setPost(data[0]);
        }
        fetchPost();
    }, [id]);

    const updatePost = async (event) => {
        event.preventDefault();
        
        await supabase
            .from('Among us')
            .update({ name: post.title, role: post.role})
            .eq('id', id);
        
        window.location = "/";
    }
    const deletePost = async (event) => {
        event.preventDefault();
        
        await supabase
            .from('Among us')
            .delete()
            .eq('id', id);
        
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
            <h1>Update Your Crewmate :)</h1>
            <h2> Current Crewmate Info:</h2>
            <h3>Name: {prevPost.name}, Role: {prevPost.role}</h3>
            <form>
                
            </form>
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
                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>

        </div>
    )
}

export default EditAmogus