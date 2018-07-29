import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import { fetchUnits } from '../actions/index';
import Table from './table';

class UnitsIndex extends Component {
    componentDidMount() {   //Compenent render olduğu anda çalışır.
        this.props.fetchUnits();    //Trigers action
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link type="button" className="btn btn-primary" to="/new">New Units</Link>
                </div>
                <Table {...this.props.units} />
            </div >
        )
    }

}

function mapStateToProps(state) {   //Store'dan State snapshot aldık.
    return { units: state.units }   //State'ten ihtiyacımız olanı props'a pass ettik.
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUnits: bindActionCreators(fetchUnits, dispatch)
        //dispatch: basicly means call a function, dispatch is the only way to trigger a state change.
        //bindActionCreators: when you want to pass some action creators down 
        //to a component that isn't aware of Redux
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnitsIndex)
