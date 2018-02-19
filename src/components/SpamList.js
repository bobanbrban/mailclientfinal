import React, { Component } from 'react';
import SpamMail from './SpamMail';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class SpamList extends Component {
    render() {
      let MailItems;
      let mailstest= this.props.mailList;
      if(mailstest) {
         MailItems = mailstest.map((mail,i) => {
          if(mail.isSpam === true && mail.isTrash === false) {
          return (
          <li className="mail1" id="mailRight"><SpamMail key={i} i={i} mail={mail}/></li>
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
export default SpamList;
