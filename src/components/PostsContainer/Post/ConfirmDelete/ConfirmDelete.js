import React from 'react';
import { Link, withRouter } from "react-router-dom";

class confirmDelete extends React.Component {
  render(){
    return (
      <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Are you sure you want to delete this post?</label>
            </div>
            <button className="btn btn-primary float-right" type="submit">Yes</button>
            <button className="btn btn-primary float-right" type="submit">No</button>
          </form>
        </div>
      </div>
    </div>
      );
  }
}

export default withRouter(confirmDelete);