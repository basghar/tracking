import '../../App.css';
import './TrackingItem.css';

import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap'
import {afterShipApi, afterShipSlugs, Status} from '../../apis'

class TrackingItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: props.item.status,
            estimatedDelivery: null,
            lastKnownLocation: null
        };
    }

    static getAfterShipSlug(url) {
        const matchedDomain = Object.keys(afterShipSlugs).find((trackingDomain) => {
            return url.includes(trackingDomain);
        });

        return matchedDomain ? afterShipSlugs[matchedDomain] : null;
    }

    componentWillMount() {
        if (!this.state.status) {
            this.updateStatus(this.props.item);
        }
    }

    render() {
        const
            status = this.state.status,
            estimatedDelivery = this.state.estimatedDelivery,
            lastKnownLocation = this.state.lastKnownLocation,
            item = this.props.item;

        return (
            <div className="list-group-item tracking-item">
                <ButtonGroup className="pull-right">
                    {item.productUrl &&
                    <Button href={item.productUrl} target="_blank" bsStyle="primary" bsSize="small">
                        Info
                    </Button>
                    }
                    {item.trackingUrl &&
                    <Button onClick={() => this.props.onShowDetails()} bsSize="small">
                        Track !
                    </Button>
                    }
                </ButtonGroup>

                <h4 className="list-group-item-heading">
                    {item.name}
                </h4>

                <div className="list-group-item-text">
                    <div className="item-property">
                        <strong className="text-info">Ordered from:</strong> {item.orderedFrom}
                    </div>

                    {status &&
                    <div className="item-property">
                        <strong className="text-info">Status:</strong>
                        <span
                            className={status === Status.Delivered ? 'text-success bold' : ''}> {status}</span>
                    </div>
                    }

                    {estimatedDelivery &&
                    <div className="item-property">
                        <strong className="text-info">Date:</strong>
                        <span> {estimatedDelivery}</span>
                    </div>
                    }


                    {lastKnownLocation &&
                    <div className="item-property">
                        <strong className="text-info">Last location:</strong>
                        <span> {lastKnownLocation}</span>
                    </div>
                    }
                </div>

            </div>
        );
    }

    updateStatus(item) {
        if (item.trackingUrl) {
            const slug = TrackingItem.getAfterShipSlug(item.trackingUrl);

            if (slug) {
                this.setState({status: 'Checking...'});

                afterShipApi.get(`/trackings/${slug}/${item.trackingNumber}`)
                    .then((response) => {
                        const
                            tracking = response.data.data.tracking,
                            [lastCheckPoint] = tracking.checkpoints.slice(-1),
                            lastLocation = lastCheckPoint && lastCheckPoint.location ? lastCheckPoint.location : null;

                        this.setState({
                            status: tracking.tag.replace('Pending', 'Not known to OzPost'),
                            estimatedDelivery: tracking.expected_delivery,
                            lastKnownLocation: tracking.tag === 'Delivered' ? null: lastLocation
                        });

                        this.props.onStatusChanged(item);
                    })
                    .catch((error) => {
                        console.log(error);

                        this.setState({status: 'Could not determine'});
                    });
            }

        }

    }
}

export default TrackingItem;