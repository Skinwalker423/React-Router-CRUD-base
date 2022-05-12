import React from "react";
import { connect } from "react-redux";
import { getStreams} from "../../actions";
import {Link} from 'react-router-dom';


class StreamList extends React.Component {

    componentDidMount(){
        this.props.getStreams();
    }

    renderAdmin  = (list) => {
        if (list.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link className="ui button primary" to={`/streams/edit/${list.id}`}>Edit</Link> 
                    <Link className="ui button primary" to={`/streams/delete/${list.id}`}>Delete</Link>
                </div>
            )
        } else return (
            <div className="right floated content">
                <Link to={`/streams/${list.id}`} className="ui button primary">Watch</Link>
            </div>
        )
    }

    renderCreateButton = () => {
        if (this.props.isSignedIn) {
            return (
                
                <Link className="ui button red right floated" to='/streams/new'>Create Stream</Link>
            )
        } 
    }


    renderList = () => {
        const list = this.props.streams.map((list) => {
            return(
                <div key={list.id} className="item" >
                    {this.renderAdmin(list)}
                    <Link to={`/streams/${list.id}`} className="header">{list.title}</Link>
                    <p className="description">{list.description}</p>
                    <p className="description">Author: {list.userId}</p>
                </div>
            )
        })
        return list;
    }



    render(){
        
    

        return (
            <div className="ui middle aligned divided list">
            <h1>Streams List</h1>
            {this.renderList()}
            {this.renderCreateButton()}
            </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        currentUserId: state.auth.userId,
        streams: Object.values(state.streams)
    }
}

export default connect(mapStateToProps, {getStreams})(StreamList);