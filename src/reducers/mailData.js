import { mailData } from '../data/mail-data';
import * as actionTypes from '../actions/actionCreators';

const Trash = {isTrash: false};
const Spam = {isSpam: false};
const Right = {showRight: false};
const mail1 = mailData[0];
const mail2 = mailData[1];

const initalState =[{...mail1,...Trash,...Spam,...Right},{...mail2,...Trash,...Spam,...Right}];

export function mailsdata(state = {mails:initalState}, action) {
  switch(action.type) {
    case actionTypes.GET_MAIL:
    return state
   
   case actionTypes.GET_MAIL_NEW:
    return Object.assign({}, state, {
        mails: [
          ...initalState,...state.mails
        ]
      })
  case actionTypes.SET_RIGHT:
     return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (index === action.index) {
        return Object.assign({}, mail, {
          showRight: true
        })
      }
      return mail
    })
  })
   case actionTypes.SET_TRASH:
      return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (index === action.index) {
        return Object.assign({}, mail, {
          isTrash: true,
          showRight: false,

        })
      }
      return mail
    })
  })
   case actionTypes.SET_SPAM:
     return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (index === action.index) {
        return Object.assign({}, mail, {
          isSpam: true,
          showRight: false,
        })
      }
      return mail
    })
  })
   case actionTypes.SET_READED:
    return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (index === action.index) {
        return Object.assign({}, mail, {
          isReaded: true
        })
      }
      return mail
    })
  })
   case actionTypes.SET_READED_BACK:
     return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (index === action.index) {
        return Object.assign({}, mail, {
          isReaded: false
        })
      }
      return mail
    })
  })
      default:
         return state;
  }
}

