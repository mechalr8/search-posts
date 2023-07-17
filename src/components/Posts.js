import React, {useState, useEffect} from 'react'
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
        var result = []
        console.log(searchText.toLowerCase());
        console.log(filterPosts);
        result = apiPosts.filter((item) => {
            return item.title.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilterPosts(result)
        console.log(filterPosts);
    }
    return (
      <div>
        <input
          placeholder='Type to search...'
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={searchPosts}>Search</button>
        <ul>
          {filterPosts.map((post, id) => (
            <Post post={post} key={id} />
          ))}
        </ul>
      </div>
    );
}

export default Posts
