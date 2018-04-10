import * as home from '../actions/home';

const initState = {
    success: false,
    errorCode: null,
    tutorials: [],
    blogPosts: []
}


export default function (state = initState, action) {
    switch (action.type) {
        case home.homeFetchTutorialsSuccess:
            console.log(action.tutorials)
            return {
                ...state,
                success: true,
                tutorials: action.tutorials
            }
        case home.homeFetchBlogPostsSuccess:
            console.log(action.blogPosts)
            return {
                ...state,
                success: true,
                blogPosts: action.blogPosts
            }
        case home.homeFetchFail:
            return {
                ...state,
                errorCode: action.error
            }
        default:
            return state;
    }
}