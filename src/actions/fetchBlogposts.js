
export function fetchBlogposts(){
    return (dispatch) => {
        fetch('http://localhost:3000/blog_posts')
            .then(resp => resp.json())
            .then(blog_posts => dispatch({
                type: 'FETCH_BLOGPOSTS',
                payload: blog_posts
                
            }))
        console.log("Fetch is not working")
    }
}

//  WE call dispatch from here because thunk let us do so.



// .catch React 