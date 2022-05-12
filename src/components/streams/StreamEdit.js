import React from "react";
import {connect} from 'react-redux';
import { updateStream, showStream } from "../../actions";
import StreamForm from "./streamForm";
import _ from 'lodash';



class StreamEdit extends React.Component {


    componentDidMount(){
        this.props.showStream(this.props.match.params.id)
    }

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.updateStream(this.props.match.params.id,formValues);
    }


    render(){
        
        if(!this.props.stream){
            return <div>Loading...</div>
        }

        return (
            <div>
                <h1>Edit Stream</h1>
                <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} actionCreator={this.onSubmit} />
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

export default connect(mapStateToProps, {showStream, updateStream})(StreamEdit);