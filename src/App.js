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
    this.key = key;
  }
}

class App extends Component {
  render() {
    let courselist = [
        new Course('CAS','CS','591','P1','CPK','0'),
        new Course('CAS','EC','403','-','Hyung','1'),
        new Course('CAS','EC','436','-','Newman','2')];

    return (
        <div className="App">
          <table>
            <thead>
            <tr>
              <th>college</th>
              <th>department</th>
              <th>number</th>
              <th>section</th>
              <th>professor</th>
            </tr>
            </thead>
            {courselist.map(item =>
                <tbody key = {item.key}>
                  <tr>
                    <td>{item.col}</td>
                    <td>{item.dep}</td>
                    <td>{item.num}</td>
                    <td>{item.sec}</td>
                    <td>{item.prof}</td>
                  </tr>
                </tbody>
            )}
          </table>
        </div>
    );
  }
}

export default App;
