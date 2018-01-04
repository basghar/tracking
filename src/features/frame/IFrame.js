import './IFrame.css';

import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class IFrame extends Component {
    static propTypes = {
        title: PropTypes.string,
        message: PropTypes.string
    };

    static defaultProps = {
        title: '__iframe',
        message: 'Please wait while loading ...'
    };

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        }
    }

    render() {
        let placeHolderContent = null,
            classes = classNames({
                'iframe-container': true,
                'loaded': this.state.loaded
            });

        if (this.props.children) {
            placeHolderContent = (this.props.children);
        } else {
            placeHolderContent = <span>{this.props.message}</span>;
        }

        return (
            <div className={classes}>
                <iframe title={this.props.title} {...this.props}
                        onLoad={() => this.setState({loaded: true})}>
                </iframe>

                {!this.state.loaded &&
                <div className="iframe-placeholder">
                    {placeHolderContent}
                </div>
                }
            </div>
        );
    }
}

export default IFrame;