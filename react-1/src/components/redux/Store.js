import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"



let store = {
   _state:  {
   profilePage: {
      posts: [
         { id: 1, message: 'Hi,how are you?', likesCount: ' 10' },
         { id: 2, message: "Hi,i'm good", likesCount: ' 5' },
         { id: 3, message: 'Guys shut up', likesCount: ' 0' },
         { id: 4, message: 'MOTHERFUCKERS', likesCount: ' 55' }
      ],
      newPostText: 'Dick'
   },
   messagesPage: {
      dialogs: [
         { id: 1, name: 'Nastia' },
         { id: 2, name: 'Den4ik' },
         { id: 3, name: 'Ozer' },
         { id: 4, name: 'Sanya' },
         { id: 5, name: 'Olya' },
         { id: 6, name: 'Karina' },
         { id: 7, name: 'Lybovnica' }
      ],
      messages: [
         { id: 1, message: 'Hi' },
         { id: 2, message: 'How are you?' },
         { id: 3, message: 'nah' },
         { id: 4, message: 'Hi' },
         { id: 5, message: 'Hi' },
         { id: 6, message: 'Hey' },
      ],
      newMessageText: 'sss'
   },
   sitebar: {
      friends: [
         { id: 1, name: 'Nastia' },
         { id: 2, name: 'Den4ik' },
         { id: 3, name: 'Ozer' }
      ]
   },
   },
   _callSubscriber() {
      console.log('state was changed')
   },

   getState () {
   return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer; //Наблюдатель
   },

   addPost () {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount: (this.getRandomLikes())
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
   },
   updateNewPostText  (newText)  {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
   },
   getRandomLikes() {
      return Math.random();
   },
   addMes  ()  {
      let newMess = {
         id: 7,
         message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messages.push(newMess);
      this._state.messagesPage.newMessageText = '';
      this._callSubscriber();

   },
   updateNewMessageText  (newText)  {
      this._state.messagesPage.newMessageText = newText;
      this._callSubscriber(this._state);
   },

   dispatch(action) {

      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
      this._state.profilePage = profileReducer(this._state.profilePage, action);
   this._callSubscriber(this._state);
   }
}




window.store = store;

export default store;