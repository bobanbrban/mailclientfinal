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
 
const inboxApp = connect(mapStateToProps)(Inbox);

export default inboxApp;
