import React from 'react'
import FaTrash from 'react-icons/lib/fa/trash';
import FaInbox from 'react-icons/lib/fa/inbox';
import FaBug from 'react-icons/lib/fa/bug';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionCreators';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class Header extends React.Component {
  componentWillMount() {
    const { getMail } = this.props;
    getMail();
    onSetNewID();
  }
  componentDidMount() {
        let { onSetNewData } = this.props;
        let { onSetNewID } = this.props;
         setInterval(() => {
               onSetNewData();
               onSetNewID();
             }, 90000);
 }
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
const mapStateToProps = state =>  ({
 state
});
const mapDispachToProps = dispatch=> ({
 getMail: (index) => dispatch({type: actionTypes.GET_MAIL}),
 onSetNewData: (index) => dispatch({type: actionTypes.GET_MAIL_NEW}),
 onSetNewID: (index) => dispatch({type: actionTypes.GET_NEW_ID}),
});
const mainHeader = connect(mapStateToProps, mapDispachToProps)(Header);

export default mainHeader;
