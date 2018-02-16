import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionCreators';
import InboxList from './InboxList';
import * as MailImage from '../assets/mail.svg';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';
           
class Inbox extends React.Component {
  componentWillMount() {
    const { getMail } = this.props;
    getMail();
  }
  componentDidMount() {
        let { onSetNewData } = this.props;
         setInterval(() => {
               onSetNewData();
             }, 90000);       
 }
  render() {
       const { state } = this.props;
      return (
          <div>
            <div id="cloneTest" className="mailsList">
              <InboxList mailList={state.mailsdata.mails}/>
            </div> 
          <img src={MailImage} className="MailPic" width="250px height=250px" alt="logo" />
        </div>
        )    
    }
 }  
  const mapStateToProps = state =>  ({
   state
 });
 const mapDispachToProps = dispatch=> ({
   getMail: () => dispatch({type: actionTypes.GET_MAIL}),
   onSetNewData: () => dispatch({type: actionTypes.GET_MAIL_NEW,}),
 });
const inboxApp = connect(mapStateToProps, mapDispachToProps)(Inbox);

export default inboxApp;
