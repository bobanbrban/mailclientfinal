import { mailData } from '../data/mail-data';
import * as actionTypes from '../actions/actionCreators';
import uuid from 'uuid';

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
    case actionTypes.GET_NEW_ID:
     return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (mail.id !== action.id) {
        return Object.assign({}, mail, {
          id: action.id
        })
        }
      return mail
    })
  })
  case actionTypes.SET_RIGHT_INBOX:
     return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (mail.id === action.id) {
        return Object.assign({}, mail, {
          showRight: true
        })
      }
      if (mail.id !== action.id && mail.isTrash === false && mail.isSpam === false) {
        return Object.assign({}, mail, {
          showRight: false
        })
      }
      return mail
    })
  })
  case actionTypes.SET_RIGHT_TRASH:
     return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (mail.id === action.id) {
        return Object.assign({}, mail, {
          showRight: true
        })
      }
      if (mail.id !== action.id && mail.isTrash === true) {
        return Object.assign({}, mail, {
          showRight: false
        })
      }
      return mail
    })
  })
  case actionTypes.SET_RIGHT_SPAM:
     return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (mail.id === action.id) {
        return Object.assign({}, mail, {
          showRight: true
        })
      }
      if (mail.id !== action.id && mail.isSpam === true) {
        return Object.assign({}, mail, {
          showRight: false
        })
      }
      return mail
    })
  })
   case actionTypes.SET_TRASH:
      return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (mail.id === action.id && mail.isTrash === true) {
        return Object.assign({}, mail, {
          isTrash: true,
          isSpam: false,
          showRight: true,
        })
      }
      if (mail.id === action.id && mail.isTrash !== true) {
        return Object.assign({}, mail, {
          isTrash: true,
          isSpam: false,
       })
     }
      return mail
    })
  })
   case actionTypes.SET_SPAM:
     return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (mail.id === action.id && mail.isSpam === true) {
        return Object.assign({}, mail, {
          isSpam: true,
          isTrash: false,
          showRight: true,
        })
      }
       if (mail.id === action.id && mail.isSpam !== true) {
         return Object.assign({}, mail, {
           isSpam: true,
           isTrash: false,
        })
      }
      return mail
    })
  })
   case actionTypes.SET_READED:
    return Object.assign({}, state, {
    mails: state.mails.map((mail, index) => {
      if (mail.id === action.id) {
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
      if (mail.id === action.id) {
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
