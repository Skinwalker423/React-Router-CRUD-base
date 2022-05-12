import React from "react";
import { deleteStream, showStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';




class StreamDelete extends React.Component {

    componentDidMount(){
            this.props.showStream(this.props.match.params.id)
    }

    actions = () => {
        return (
        <div>
            <button onClick={() => {
                if(this.props.stream.userId === this.props.auth.userId) {
                    this.props.deleteStream(this.props.match.params.id)
                }   
            }} className="ui approve button primary">Delete</button>
            <Link to={'/'} className="ui cancel button">Cancel</Link>
        </div>
    )
}

    renderMessage = () => {
        if(!this.props.stream || !this.props.auth.userId){
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete this stream: ${this.props.stream.title}?`
    }



    render(){
        if(!this.props.stream){
            return (
                <div>Loading...</div>
            )
        }

        if(this.props.stream.userId === this.props.auth.userId){
            return (
                    <Modal
                        title='Delete a Stream'
                        message={this.renderMessage()}
                        actions={this.actions()}
                        onDismiss={()=>{history.push('/')}}
                    />
            )
        }

        if(!this.props.auth.userId){

            return(
                <div>Not authorized</div>
                )
        }


    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {deleteStream, showStream})(StreamDelete);