import React, {Component} from 'react';
import _ from 'lodash';
import {ListGroup} from 'react-bootstrap';
import TrackingItem from "./TrackingItem";
import TrackingDetails from "../details/TrackingDetails";

class TrackingBoard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: _.sortBy(props.items, (i) => i.status),
            selectedItem: null
        };
    }

    render() {
        let selectedItem = this.state.selectedItem;

        return (
            <div>
                {selectedItem === null ?
                    this.renderList(this.state.items) :
                    <TrackingDetails item={selectedItem}
                                     onClose={() => this.selectItem(null)}/>
                }
            </div>
        );
    }

    renderList(items) {
        let trackingItems =
            _.sortBy(items, (i) => i.status)
                .map((item, index) => {
                    return <TrackingItem key={index}
                                         item={item}
                                         onStatusChanged={(item) => this.resort(item)}
                                         onShowDetails={() => this.selectItem(item)}/>
                });

        return (
            <ListGroup>
                {trackingItems}
            </ListGroup>
        );
    }

    resort() {
        this.setState({
            items: _.sortBy(this.state.items, (i) => i.status)
        })
    }

    selectItem(item) {
        this.setState({
            selectedItem: item
        });
    }
}

export default TrackingBoard;