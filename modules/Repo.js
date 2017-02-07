import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>repo: {this.props.params.repoName}</h2>
      </div>
    )
  }
})
