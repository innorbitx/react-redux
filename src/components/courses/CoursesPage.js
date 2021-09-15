import React from 'react';
import { connect } from 'react-redux';
import * as courseAction from '../../redux/actions/courseActions';
import PropTypes from 'prop-types';

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
    this.props.dispatch(courseAction.createCourse(this.state.course));
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

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps)(CoursesPage);
