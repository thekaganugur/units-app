import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { fetchUnit, modifyUnit } from '../actions/index'


class UnitsShow extends Component {
    componentDidMount() {
        const { urn } = this.props.match.params;
        this.props.fetchUnit(urn);
    }

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        let condReadOnly = false;
        { field.label === 'URN' ? condReadOnly = true : condReadOnly = false }

        return (
            < div className={className} >
                <label>{field.label}</label>
                <input
                    readOnly={condReadOnly}
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
        values.urn = this.props.unit.urn

        if (!values) {
            return <div>loading</div>
        }

        this.props.modifyUnit(values, () => {
            this.props.history.push('/');
        }   );
    }

    render() {
        const { handleSubmit, unit } = this.props;

        if (!unit) {
            return <div>Loading</div>
        }

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="URN"
                        name="urn"
                        component={this.renderField}
                    />
                    <Field
                        label={`Code Name`}
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
            </div>

        )
    }
}

function validate(values) {
    const errors = {};

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

function mapStateToProps({ units }, ownProps) {
    return {
        unit: units[ownProps.match.params.urn],
        initialValues: units[ownProps.match.params.urn]
    }
}


const InitializeFromStateForm = reduxForm({ validate, form: 'modifyUnit', enableReinitialize: true })(UnitsShow);
const ConnectedInitializeFromStateForm = connect(mapStateToProps, { fetchUnit, modifyUnit })(InitializeFromStateForm)
export default ConnectedInitializeFromStateForm;

{/* export default reduxForm
    ({ validate, form: 'modifyUnit', enableReinitialize: true })
    (connect(mapStateToProps, { fetchUnit, modifyUnit })(UnitsShow)) */}