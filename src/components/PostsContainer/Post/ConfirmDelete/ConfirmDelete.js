import React from 'react';
import { Link, withRouter } from "react-router-dom";

class confirmDelete extends React.Component {
  state = {
    id: this.props.postData._id,

  }
  render() {
    return (
      <div className="container">
        <form onSubmit={(event) => this.props.deletePost(event, this.state)}>
          <button type="submit" className="btn btn-primary m-l">Yes</button>
          <button 
            type="button" 
            className="btn btn-primary m-l"                
            data-dismiss="modal"
            aria-label="Close">No</button>
        </form>
      </div>
    )
  }
}

export default confirmDelete;