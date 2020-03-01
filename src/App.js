import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class Course{
    constructor(col, dep, num, sec, prof, key) {
        this.col = col;
        this.dep = dep;
        this.num = num;
        this.sec = sec;
        this.prof = prof;
        this.key = `${col}${dep}${num}${sec}`;
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {courseList:[],myCourse:[]};
        this.onClickGet = this.onClickGet.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickDel = this.onClickDel.bind(this);
    }

    onClickGet(){
        let courseList = [
            new Course('CAS','CS','591','P1','CPK'),
            new Course('CAS','EC','403','-','Hyung'),
            new Course('CAS','EC','436','-','Newman')];
        this.setState({courseList});
    }

    onClickAdd(course){
        this.state.myCourse.push(course);
        // eslint-disable-next-line no-undef
        this.setState({myCourse:this.state.myCourse});
    }

    onClickDel(course){
        const keepCourse = myc => myc.col !== course.col
            || myc.dep !== course.dep
            || myc.num !== course.num
            || myc.sec !== course.sec
            || myc.prof !== course.prof;
        const updatedList = this.state.myCourse.filter(keepCourse);
        this.setState({myCourse:updatedList});
    }

    render() {
        const columns = ['College','Department','Number','Section','Professor'];

        return (
            <div className="App">
          <span><button
              onClick={() => this.onClickGet()}
              type = 'button'>
              Get courses
          </button></span>
                <br/>
                <span>Course List</span>
                <table>
                    <thead>
                    <tr>
                        {columns.map(column =>
                            <th key = {column}>{column}</th>)}
                    </tr>
                    </thead>
                    {this.state.courseList.map(course =>
                        <tbody key = {course.key}>
                        <tr>
                            <td>{course.col}</td>
                            <td>{course.dep}</td>
                            <td>{course.num}</td>
                            <td>{course.sec}</td>
                            <td>{course.prof}</td>
                            <td>
                            <button
                                onClick={() => this.onClickAdd(course)}
                                type = 'button'
                            >
                                Add to my courses
                            </button></td>
                        </tr>
                        </tbody>
                    )}
                </table>
                <br/>
                <span>My Courses</span>
                <table>
                    <thead>
                    <tr>
                        {columns.map(column =>
                            <th key = {column}>{column}</th>)}
                    </tr>
                    </thead>
                    {this.state.myCourse.map(course =>
                        <tbody key = {course.key}>
                        <tr>
                            <td>{course.col}</td>
                            <td>{course.dep}</td>
                            <td>{course.num}</td>
                            <td>{course.sec}</td>
                            <td>{course.prof}</td>
                            <td>
                                <button
                                    onClick={() => this.onClickDel(course)}
                                    type = 'button'
                                >
                                    Delete
                                </button></td>
                        </tr>
                        </tbody>
                    )}
                </table>
            </div>
        );
    }
}

export default App;
