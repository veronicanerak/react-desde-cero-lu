import React from "react"
import useFetch from "../CustomHooks/useFetch"
import useCounter from "../CustomHooks/useCounter"

const CustomHooksExample = () => {

    const users = useFetch('https://jsonplaceholder.typicode.com/users', [])
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts', [])
    const counterOne = useCounter()
    const counterTwo = useCounter()

    return (
        <div className="data">
            <h2>Dynamic List using Custom Hooks: useFetch</h2>
            <h3>Users List</h3>
            <ul className="users-list">
                {users.loading && <p>Loading...</p>}
                {users.data && users.data.map(user => (
                    <li className="user-row" key={user.id}>{user.name}</li>
                ))}
            </ul>

            <h3>Post List</h3>
            <ul className="post-list">
                {posts.loading && <p>Loading...</p>}
                {posts.data && posts.data.map(post =>(
                    <li className="post-row" key={post.id}>{post.title}</li>
                ))}
            </ul>

            <h3>Counter Custom Hook</h3>
            <div className="counter-data">                
                {counterOne.count}
                <br />
                <button onClick={counterOne.increase}>Add Counter</button>
                <button onClick={counterOne.decrease}>Decrease Counter</button>
                <br />
                <h4>Reusing same hook:</h4>
                {counterTwo.count}
                <br />
                <button onClick={counterTwo.increase}>Add Counter</button>
                <button onClick={counterTwo.decrease}>Decrease Counter</button>
                <br />                
                <br />
                <br />
                <br />
            </div>
        </div>
    )    
}

export default CustomHooksExample