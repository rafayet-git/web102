import React, { useState, useEffect } from 'react';
import { supabase } from '../client'
import Card from '../components/Card';

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
              .from('Posts')
              .select()
              .order('created_at', { ascending: true });
          
            // set state of posts
            setPosts(data)
          }
    
        //setPosts(props.data);
        fetchPosts();
    }, [props]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} author={post.author} description={post.description} betCount={post.betCount}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts;