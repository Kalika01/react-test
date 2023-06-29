const add_post = "add-post";
const update_new_post_text = "update-new-post-text";
const set_user_profile = "set_user_profile";

let initialState = {
  posts: [
    { id: 1, message: "Hi,how are you?", likesCount: " 10" },
    { id: 2, message: "Hi,i'm good", likesCount: " 5" },
    { id: 3, message: "Guys shut up", likesCount: " 0" },
    { id: 4, message: "MOTHERFUCKERS", likesCount: " 55" },
  ],
  newPostText: "",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_post:
      let body = state.newPostText;
      return {
        ...state,
        newPostText: "",
        posts: [...state.posts, { id: 5, message: body, likesCount: 666 }],
      };
    case update_new_post_text: {
      return {
        ...state,
        newPostText: action.body,
      };
    }
    case set_user_profile: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const setUserProfile = (profile) => ({
  type: set_user_profile,
  profile,
});
export const addPostActionCreator = () => ({ type: add_post });
export const updateNewPostTextActionCreator = (body) => ({
  type: update_new_post_text,
  body: body,
});

export default profileReducer;
