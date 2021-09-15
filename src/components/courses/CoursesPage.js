import React from 'react';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: '',
    },
  };

  handleChange = (event) => {
    const course = { ...this.state, title: event.target.value };
    this.setState({ course });
  };

  handlerSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handlerSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input type="text" onChange={this.handleChange} value={this.state.course.title} />

        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
