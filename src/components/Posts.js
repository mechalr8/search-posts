import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
            <ul>
                {filterPosts.map((post) => {
                    return (
                        <div className='post'>
                            <div className='postTitle'>{post.title}</div>
                            <div>{post.body}</div>
                        </div>
                    )
                })}
            </ul>
        </div>
    );
}

export default Posts
