import React, { Component } from "react";
import List from "./components/List";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    };

    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true });

    // get all the comments
    fetch("http://localhost:1337/comments")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {

    <header className="App-header">
   
    <h1 className="App-title">
      React Comments

    </h1>
   
  </header>
   
    return (
      <div className="App container bg-light shadow">
        

        <div className="row">
          <div className="col-4  pt-3 border-right">
            <h6>Speak your truth</h6>
            <Form addComment={this.addComment} />
          </div>
          <div className="col-8  pt-3 bg-white">
            <List
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;