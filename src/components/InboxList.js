import React, { Component } from 'react';
import InboxMail from './InboxMail';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class InboxList extends Component {
    render() {
      const { onSetReaded } = this.props;
      const { onSetRightInbox } = this.props;
      let MailItems;
      let mailstest= this.props.mailList;
      if(mailstest) {
         MailItems = mailstest.map((mail,i) => {
          if((mail.isTrash === false)&&(mail.isSpam === false)) {
          return (
          <li className="mail1" id="mailRight" ><InboxMail key={i} i={i} mail={mail} onClickReadedList={this.onClickReaded} /></li>
        )};
      });
      }
   return  (
     <div className="mailList">
       {MailItems}
      </div>
       );
   }
}

export default InboxList;
