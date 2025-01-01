import { Link } from 'react-router-dom';
import { supabase } from '../client'
import React, {useState, useEffect} from 'react';

const Gallery = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Among us')
              .select()
              .order('created_at', { ascending: true });          
            setPosts(data)
          }
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Your Crewmate Gallery!</h1>
            {
                posts && posts.length > 0 ?
                posts.map((post) => 
                    <div className="Card" key={post.id}>
                        <h3 className="title">Name: {post.name}</h3>
                        <p className="role"> Role: {post.role}</p>
                        <Link to={'/edit/'+ post.id}><button className="editButton">Edit Crewmate</button></Link>
                    </div>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>
    )
}

export default Gallery