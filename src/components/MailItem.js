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


class MailItemtest extends Component {

  onClickReaded = () => {
     const { onSetReaded } = this.props;
     const { onSetRight } = this.props;
     onSetReaded();
     onSetRight();
  }
  onClickReadedBack = () => {
     const { onSetReadedBack } = this.props;
     onSetReadedBack(); 
  }
   onClickSpamLocal = () =>{
    this.props.mail.isSpam = true;
    this.props.mail.isTrash = false; 
  }
  onClickTrashLocal = () =>{
    this.props.mail.isTrash = true;  
    this.props.mail.isSpam = false;
  }  
  render() {
     const {mail} =this.props;
     const { i } = this.props;
     const { state }= this.props;
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
                <Link to="#"  className="mainTrash-link"><span onClick={this.onClickTrashLocal}><FaTrash className= "mainIconTrash"/></span></Link>
                <Link to="#" className="mainSpam-link"><FaBug onClick={this.onClickSpamLocal} className="mainIconSpam"/></Link>
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
    onSetTrash: () => dispatch({type: actionTypes.SET_TRASH,index: ownProps.i}),
    onSetSpam: () => dispatch({type: actionTypes.SET_SPAM, index: ownProps.i}),
    onSetReaded: () => dispatch({type: actionTypes.SET_READED, index: ownProps.i}),
    onSetReadedBack: () => dispatch({type: actionTypes.SET_READED_BACK, index: ownProps.i}),
    onSetRight: () => dispatch({type: actionTypes.SET_RIGHT, index: ownProps.i}),
  });
  const MailItem = connect(mapStateToProps, mapDispachToProps)(MailItemtest);

export default MailItem;
