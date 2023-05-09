
let add_mess = 'ADD-MESSAGE';
let update_New_Message_Text = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
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
      newMessageText: ''
   };


const dialogsReducer = (state = initialState, action) => {
   
   switch (action.type) {
      
      case add_mess: 
         let body = state.newMessageText;
         return {
            ...state,
            newMessageText: '',
            messages: [...state.messages, { id: 6, message: body }]
      };
      case update_New_Message_Text:{ 
         return {
            ...state,
            newMessageText: action.body
         };
      }
         default:
            return state;
   }
};


export const addMessageActionCreator = () => ({ type: add_mess })
export const updateNewMessageTextActionCreator = (body) => ({ type: update_New_Message_Text, body: body })

export default dialogsReducer;