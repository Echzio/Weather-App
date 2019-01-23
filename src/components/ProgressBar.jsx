import React from 'react';
import LoadingBar from 'react-top-loading-bar';

class ProgressBar extends React.Component {

    onLoaderFinished = value => {
        this.props.updateData(value);
    }

    render() {
        return (
            <div>
                <LoadingBar
                    progress={this.props.progress}
                    height={5}
                    color="#2581b2"
                    onLoaderFinished={() => this.props.updateData(0)}
                />
            </div>
        )
    }
}

export default ProgressBar;