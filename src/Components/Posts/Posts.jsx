import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../features/posts/postsSlice";

export default function Posts() {
    const {posts, isLoading, isError, error} = useSelector(state=> state.posts);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchPosts())
    },[dispatch])

    // decide what to render
    
    let content;
    if (isLoading){
        content = <h1>Loading Posts....</h1>
    }
    if (!isLoading && isError){
        content = <h1>{error}</h1>
    }
    if (!isLoading && !isError && posts.length === 0){
        content = <h1> No posts Found</h1>
    }
    if (!isLoading && !isError && posts.length > 0){
        content = posts.map(post=> <li key={post.id}>{post.title}</li>)
    } 

  return (
    <div>
      {content}
    </div>
  )
}
