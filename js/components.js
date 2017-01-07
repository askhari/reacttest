class StoryBox extends React.Component {
  render() {
    return(
      <div>
        <h3>Stories App</h3>
        <p className="lead">Sample paragraph</p>
      </div>);
  }
}

ReactDOM.render( 
  <StoryBox />, document.getElementById('story-app')
  );
