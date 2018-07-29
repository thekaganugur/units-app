import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { createUnits } from '../actions/index'


class UnitsNew extends Component {
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            < div className={className} >
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div >
        )
    }

    renderComboBox(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            < div className={className} >
                <label>{field.label}</label>
                {field.id === 'unitEchelon' ?
                    <select className="form-control" type="text" {...field.input}>
                        <option></option>
                        <option>ANTIARMOURUNIT</option>
                    </select>
                    :
                    <select className="form-control" type="text" {...field.input}>
                        <option></option>
                        <option>ARMY</option>
                    </select>
                }
                <div className="text-help" >
                    {touched ? error : ''}
                </div>
            </div >
        )
    }

    onSubmit(values) {
        console.log(values);
        this.props.createUnits(values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="URN"
                    name="urn"
                    component={this.renderField}
                />
                <Field
                    label="Code Name"
                    name="codeName"
                    component={this.renderField}
                />
                <Field
                    label="Name"
                    name="name"
                    component={this.renderField}
                />
                <Field
                    label="Unit Type"
                    name="unitType"
                    id="unitType"
                    component={this.renderComboBox}
                />
                <Field
                    label="Unit Echelon"
                    name="unitEchelon"
                    id="unitEchelon"
                    component={this.renderComboBox}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.urn) {
        errors.urn = 'Enter a URN';
    }
    if (!values.codeName) {
        errors.codeName = 'Enter a Code Name'
    }
    if (!values.name) {
        errors.name = 'Enter a Name'
    }
    if (!values.unitType) {
        errors.unitType = 'Select a Unit Type'
    }
    if (!values.unitEchelon) {
        errors.unitEchelon = 'Select a Unit Echelon'
    }
    return errors;
}


    export default reduxForm
    ({ validate, form: 'UnitsAdd' })
    (connect(null, { createUnits })(UnitsNew))