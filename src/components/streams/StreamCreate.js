import React from "react";
import { connect } from "react-redux";
import { createStreams } from "../../actions";
import StreamForm from "./streamForm";

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStreams(formValues);

    }
    
    render(){
        return (
            <div>
                <h1>Create a Stream</h1>
                <StreamForm actionCreator={this.onSubmit} />
            </div>
        )
    }
}



export default connect(null, {createStreams})(StreamCreate)





