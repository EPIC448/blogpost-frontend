
export function fetchBlogposts(){
    return (disptach) => {
        fetch('http://localhost:3000/blog_posts')
            .then(resp => resp.json())
            .then(blog_posts => dispatch({
                type: 'FETCH_BLOGPOSTS',
                payload: blog_posts
                
        }))
    }
}