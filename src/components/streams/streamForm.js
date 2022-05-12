import React from "react";
import {Field, reduxForm} from 'redux-form';




class StreamForm extends React.Component {


    renderField = ({ input, label, type, meta: {error, touched } }) => (
        <div className={`field ${touched && error && 'error'}`}>
            <label>{label}</label>
            <div>
            <input {...input} placeholder={label} type={type} autoComplete='off' />
            {touched && error && <span className="ui error message">{error}</span>}
            </div>
        </div>
        )

    onSubmit = (formValues) => {
        this.props.actionCreator(formValues);

    }
    
    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" type='text'component={this.renderField} label="Title" />
                <Field name="description" label="Description"  type='text' component={this.renderField} />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = "Please enter a valid title";
    }

    if(!formValues.description){
        errors.description = "Please enter a valid description";
    }

    return errors;
}

// const mapStateToProps = (state) => {
//     return {
//         userId: state.streams.userId
//     }
// }


export default reduxForm({form: 'streamCreate', validate })(StreamForm);