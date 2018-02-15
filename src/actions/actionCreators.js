
// export const GET_MAIL = 'GET_MAIL';
// export const GET_MAIL_NEW = 'GET_MAIL_NEW';
// export const SET_READED = 'SET_READED' ;
// export const SET_READED_BACK = 'SET_READED_BACK' ;
// export const SET_TRASH = 'SET_TRASH' ;
// export const SET_SPAM = 'SET_SPAM' ;
// export const SET_INBOX = 'SET_INBOX' ;
// export const SET_RIGHT = 'SET_RIGHT' ;

export function GET_MAIL(index) {
  return {
    type: 'GET_MAIL',
    index
  }
}

export function GET_MAIL_NEW(index) {
  return {
    type: 'GET_MAIL_NEW',
    index
  }
}

export function SET_READED(index) {
  return {
    type: 'SET_READED',
    index
  }
}

export function SET_READED_BACK(index) {
  return {
    type: 'SET_READED_BACK',
    index
  }
}

export function SET_TRASH(index) {
  return {
    type: 'SET_TRASH',
    index
  }
}

export function SET_SPAM(index) {
  return {
    type: 'SET_SPAM',
    index
  }
}

export function SET_INBOX(index) {
  return {
    type: 'SET_INBOX',
    index
  }
}

export function SET_RIGHT(index) {
  return {
    type: 'SET_RIGHT',
    index
  }
}