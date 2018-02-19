import React, { Component } from 'react';
import FaCircle from 'react-icons/lib/fa/circle';
import FaUser from 'react-icons/lib/fa/user';
import FaTrash from 'react-icons/lib/fa/trash';
import FaBug from 'react-icons/lib/fa/bug';
import { Link } from 'react-router-dom';
import '../stylesheets/mailList.css';
import '../stylesheets/mailListHeader.css';
import '../stylesheets/mailListItem.css';
import '../stylesheets/mailBody.css';
import '../stylesheets/mediaQueries.css';
import { connect } from 'react-redux';
import * as actionTypes from '../actions/actionCreators';

class Mail extends Component {
  onClickReaded = () => {
     const { onSetReaded } = this.props;
     const { onSetRightInbox } = this.props;
     onSetReaded();
     onSetRightInbox();
  }
  onClickReadedBack = () => {
     const { onSetReadedBack } = this.props;
     onSetReadedBack();
  }
   onClickSpam = () =>{
     const { onSetSpam } = this.props;
     onSetSpam();
  }
  onClickTrash = () =>{
    const { onSetTrash } = this.props;
    onSetTrash();
  }
  render() {
     const { mail , i , state } =this.props;
     if (mail.id !== i) {mail.id = i
     } else {mail}
    return (
        <div className="mailItems" id="mailRight" key={i}>
           <div className="leftSection" onClick={this.onClickReaded}>
               <span className="Sender"><FaUser className="User" /><span className="senderName">{mail.from}</span></span><span className="Date">{mail.date}</span><br/>
               <span className="Title">{!this.props.mail.isReaded &&<FaCircle id="Circle" className="Circle"/>}<span className="margintitle">{mail.title}</span></span><br/>
               <span className="mailBodyList">{mail.body}</span><br/>
               <span className="Subject">{mail.subject}</span><br/>
               <span className="To">{mail.to}</span><br/>
               <span className="Tag">{mail.tag}</span><br/>
          </div>
      {mail.showRight && <div id="rightHidden" className="rightSide">
        <h5 className="subjectMain">{mail.subject}
             <span className="mainIcons">
                <Link to="#" className="mainInbox-link" ><FaCircle onClick={this.onClickReadedBack} className="mainIconCircle" /></Link>
                <Link to="#"  className="mainTrash-link"><span onClick={this.onClickTrash}><FaTrash className= "mainIconTrash"/></span></Link>
                <Link to="#" className="mainSpam-link"><FaBug onClick={this.onClickSpam} className="mainIconSpam"/></Link>
             </span>
          </h5>
            <div className="mailRight">
             <h5><span className="titleMain">{mail.title}</span><span className="fromMain"><a href="mailto:mhallatt@agavelab.com?Subject=Agave-Lab-Test" target="_top" className="mailLink">{mail.from}</a></span><span className="dateMain">{mail.dateFull}</span></h5><br/>
               <span className="mailBodyList1">{mail.body}</span><br/>
               <span className="Subject1">{mail.subject}</span><br/>
               <span className="To1">{mail.to}</span><br/>
               <span className="Tag1">{mail.tag}</span><br/>
            </div>
         </div>}
      </div>
    );
  }
  }
  const mapStateToProps = state =>  ({
    state
    });
  const mapDispachToProps = (dispatch,ownProps)=> ({
    onSetTrash: () => dispatch({type: actionTypes.SET_TRASH,id: ownProps.mail.id}),
    onSetSpam: () => dispatch({type: actionTypes.SET_SPAM, id: ownProps.mail.id}),
    onSetReaded: () => dispatch({type: actionTypes.SET_READED, id: ownProps.mail.id}),
    onSetReadedBack: () => dispatch({type: actionTypes.SET_READED_BACK, id: ownProps.mail.id}),
    onSetRightInbox: () => dispatch({type: actionTypes.SET_RIGHT_INBOX, id: ownProps.mail.id}),
  });
  const InboxMail = connect(mapStateToProps, mapDispachToProps)(Mail);

export default InboxMail;
