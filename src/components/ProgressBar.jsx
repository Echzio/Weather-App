import React from 'react';
import LoadingBar from 'react-top-loading-bar';

const ProgressBar = props => {
    return (
        <div>
            <LoadingBar
                progress={props.progress}
                height={5}
                color="#2581b2"
                onLoaderFinished={() => props.updateData(0)}
            />
        </div>
    );
};

export default ProgressBar;
