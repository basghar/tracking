import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import TrackingItem from "./TrackingItem";
import TrackingDetails from "../details/TrackingDetails";

class TrackingBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items,
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
        let trackingItems = items.map((item, index) => {
            return <TrackingItem key={index}
                                 item={item}
                                 onShowDetails={() => this.selectItem(item)}/>
        });

        return (
            <ListGroup>
                {trackingItems}
            </ListGroup>
        );
    }

    selectItem(item) {
        this.setState({
            selectedItem: item
        });
    }
}

export default TrackingBoard;