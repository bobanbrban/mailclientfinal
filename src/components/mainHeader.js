import React from 'react'
import FaTrash from 'react-icons/lib/fa/trash';
import FaInbox from 'react-icons/lib/fa/inbox';
import FaBug from 'react-icons/lib/fa/bug';
import { NavLink } from 'react-router-dom';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class mainHeader extends React.Component {
   render() {  
       return (
            <div className="mailListHeader">
                <span className="Inbox-link"><NavLink to='/Inbox'  activeStyle={{ color: '#4990E2' }}><FaInbox className= "Icon"/>Inbox</NavLink></span>
                <span className="Trash-link"><NavLink to='/Trash'  activeStyle={{ color: '#4990E2' }}><FaTrash className= "Icon" />Trash</NavLink></span>
                <span className="Spam-link"><NavLink to='/Spam'  activeStyle={{ color: '#4990E2' }}><FaBug className= "Icon" />Spam</NavLink></span>
            </div>
       )
   }
}
export default mainHeader;

