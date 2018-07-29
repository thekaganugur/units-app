import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  deleteUnit } from '../actions';


class UnitsDelete extends Component {
    componentDidMount() {
        const { urn } = this.props.match.params;
        console.log(urn);
        this.props.deleteUnit(urn, () => {
            this.props.history.push('/');
        });
    }

    render() {
        return (
            <div>Deleting</div>
        )
    }

}

export default connect(null,{deleteUnit})(UnitsDelete)