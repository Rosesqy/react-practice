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
  render() {
    let courselist = [
        new Course('CAS','CS','591','P1','CPK'),
        new Course('CAS','EC','403','-','Hyung'),
        new Course('CAS','EC','436','-','Newman')];

    const columns = ['College','Department','Number','Section','Professor'];

    return (
        <div className="App">
          <table>
            <thead>
            <tr>
                {columns.map(column =>
                    <th key = {column}>{column}</th>)}
            </tr>
            </thead>
            {courselist.map(course =>
                <tbody key = {course.key}>
                  <tr>
                    <td>{course.col}</td>
                    <td>{course.dep}</td>
                    <td>{course.num}</td>
                    <td>{course.sec}</td>
                    <td>{course.prof}</td>
                  </tr>
                </tbody>
            )}
          </table>
        </div>
    );
  }
}

export default App;
