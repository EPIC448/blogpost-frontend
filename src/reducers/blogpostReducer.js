
export default function blogpostReducer(state = { blog_posts: [] }, action) {
        //  Change blog_posts to blogPosts
//     Built Video 4
    switch (action.type) {
        case 'FETCH_BLOGPOSTS':
            // console.log(action.payload)

            return { blog_posts: action.payload }
        
        case 'ADD_BLOGPOST':
            return { ...state, blog_posts: [...state.blog_posts, action.payload] }

        case 'EDIT_BLOGPOST':
            
            //  Change blog_posts to blogPosts line 17#
            let blog_postEdit = state.blog_posts.map(blog_post => {
                
                if (blog_post.id === action.payload.id) {
                    return action.payload
                } else {
                    return blog_post
                }
            })

            return { ...state, blog_posts: blog_postEdit }
        //  Change blog_posts to blogPosts  line 26#
        default:
            return state
        
    
     }
 }
