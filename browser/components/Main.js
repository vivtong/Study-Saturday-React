import React from 'react'
import axios from 'axios'

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            students: []
        }
    }
    async componentDidMount() {
        try {
            const response = await axios.get('/student')
            const studentNames = response.data
            this.setState({students: studentNames})
        } catch (err) {
            console.error(err)
        }
    }
    render() {
        return (
            <table>
                <tbody>
                    <tr align='center'><td>Name</td></tr>
                    {this.state.students.map(student => <tr key = {student.id}><td>{student.firstName} {student.lastName}</td></tr>)}
                </tbody>
            </table>
        )
    }
}
