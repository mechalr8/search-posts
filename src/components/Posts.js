import React, {useState, useEffect} from 'react'
import Grid from "@mui/material/Grid";
import axios from 'axios'
import Post from './Post'

const Posts = () => {
    const [apiPosts, setApiPosts] = useState([])
    const [filterPosts, setFilterPosts] = useState([])
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response => {
                setApiPosts(response.data)
                setFilterPosts(response.data)
            }))
    }, [])

    const searchPosts = () => {
        let result = []
        result = apiPosts.filter((item) => item.title.toLowerCase().includes(searchText.toLowerCase()))
        setFilterPosts(result)
    }
    return (
        <div>
            <input
                placeholder='Type to search...'
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button onClick={searchPosts}>Search</button>
            <div>Count: {filterPosts.length}</div>
            <Grid container spacing={1} style={{marginLeft: 20, marginTop: 10}}>
                {filterPosts.map((post, id) => {
                    return <Post post={post} key={id} />;
                })}
            </Grid>
        </div>
    );
}

export default Posts
