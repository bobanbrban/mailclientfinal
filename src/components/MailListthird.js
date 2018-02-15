import React, { Component } from 'react';
import MailItem from './MailItem';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';

class MailListthird extends Component {
    render() {
      let MailItemsthird;
      let mailstest= this.props.mailList;
      if(mailstest) {
         MailItemsthird = mailstest.map((mail,i) => {
          if(mail.isSpam === true) {
          return (
          <li className="mail1" id="mailRight" ><MailItem key={i} i={i} {...this.props} mail={mail}/></li>
        )};
      });
    } 
  return  (
      <div className="mailList">
       {MailItemsthird}
      </div>
      );
  }
}


export default MailListthird;
