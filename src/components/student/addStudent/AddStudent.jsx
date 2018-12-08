import React, { Component } from 'react';
import Nav from '../../../common/nav/Nav';
import Form from './Form';
import { connectWithStore } from '../../../store/index';


import './addStudent.scss';


class AddStudentUI extends Component {
    state = {
        name: '',
        githubUsername: '',
        email: '',
        studentCode: ''
    };

    navigate = (link) => {
        console.log('Link: ', link);
        return this.props.history.push(link);
    }

    handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // Empty input values
        this.setState({
            name: '',
            githubUsername: '',
            email: '',
            studentCode: ''
        });

        this.props.addStudents({
            name: this.state.name,
            githubUsername: this.state.githubUsername,
            email: this.state.email,
            studentCode: this.state.studentCode
        });

        console.log('State: ', this.state);
    };


    render() {
        return (
            <div className="addStudent">
                <Nav navigate={this.navigate} />
                <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    {...this.state}
                />
            </div>
        );
    }
}


const AddStudent = connectWithStore(AddStudentUI);
export default AddStudent;