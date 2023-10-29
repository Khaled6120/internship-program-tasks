import React from 'react';

export class Video extends React.Component {
  render() {
    const { videoFile } = this.props;
    return (
      <div>
        <video controls autostart autoPlay muted src={videoFile} />
      </div>
    );
  }
}