import './TrackingDetails.css'

import {TRACKING_NO_TEMPLATE} from '../../constants'
import React, {Component} from 'react';
import {Panel, Button} from 'react-bootstrap';
import IFrame from "../frame/IFrame";

class TrackingDetails extends Component {
    render() {
        let item = this.props.item;

        return (
            <Panel header={this.renderDetailsHeader(item)} className="tracking-details">
                <IFrame src={item.trackingUrl.replace(TRACKING_NO_TEMPLATE, item.trackingNumber)}>
                    Hold tight while we load the tracking information !!!
                </IFrame>
            </Panel>
        );
    }

    renderDetailsHeader(item) {
        return (
            <div className="clearfix">
                <span className="details-heading pull-left">{item.name}</span>
                <Button className="pull-right"
                        bsStyle="success"
                        bsSize="small"
                        onClick={() => this.props.onClose()}>
                    Back
                </Button>
            </div>
        );
    }
}

export default TrackingDetails;