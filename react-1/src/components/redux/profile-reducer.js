
let add_post = 'add-post';
let update_new_post_text = 'update-new-post-text';


let initialState ={
   posts: [
      { id: 1, message: 'Hi,how are you?', likesCount: ' 10' },
      { id: 2, message: "Hi,i'm good", likesCount: ' 5' },
      { id: 3, message: 'Guys shut up', likesCount: ' 0' },
      { id: 4, message: 'MOTHERFUCKERS', likesCount: ' 55' }
   ],
      newPostText: ''

};

const profileReducer = (state = initialState, action) => {
   
   switch (action.type) {
      
      case add_post:
         let body = state.newPostText;
         return {
            ...state,
            newPostText : '',
            posts:[...state.posts,{id: 5,message: body, likesCount:666}]
         };
      case update_new_post_text: {
      return{
         ...state,
         newPostText: action.body
         };
      }
      default:
         return state;
   }
};


export const addPostActionCreator = () => ({ type: add_post })
export const updateNewPostTextActionCreator = (body) => ({ type: update_new_post_text, body: body })


export default profileReducer;