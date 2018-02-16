import React, { Component } from 'react';
import MailItem from './MailItem';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class SpamList extends Component {
    render() {
      let MailItemssec;
      let mailstest= this.props.mailList;
      if(mailstest) {
         MailItemssec = mailstest.map((mail,i) => {
          if(mail.isTrash === true) {
          return (
          <li className="mail1" id="mailRight" ><MailItem {...this.props} key={i} i={i} mail={mail}/></li>
        )};
      });
    } 
  return  (
      <div className="mailList">
       {MailItemssec}
      </div>
      );
  }
}

export default SpamList;
