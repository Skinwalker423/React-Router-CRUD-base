import React from "react";
import { connect } from "react-redux";
import {showStream} from '../../actions';

class StreamShow extends React.Component {

    componentDidMount(){
        this.props.showStream(this.props.match.params.id)
    }

    render(){

        if(!this.props.stream){
             return(
                 <div>Loading...</div>
             )   
        }

        const {title, description} = this.props.stream;

        return (
            
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
            )
        }
    }

    const mapStateToProps = (state, ownProps) => {
        return {
            auth: state.auth,
            stream: state.streams[ownProps.match.params.id]
        }
    }

export default connect(mapStateToProps, {showStream})(StreamShow);