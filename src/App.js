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
        const searchTerms = {
            number:'',
            college:'',
            department:'',
            section:'',
            professor:''
        }
        this.state = {
            searchTerms,
            courseList:[],
            myCourseList:[]};
        this.onClickGet = this.onClickGet.bind(this);
        this.onClickAdd = this.onClickAdd.bind(this);
        this.onClickDel = this.onClickDel.bind(this);
    }

    onClickGet(){
        let courseList = [
            new Course('CAS','CS','591','P1','CPK'),
            new Course('CAS','EC','403','-','Hyung'),
            new Course('CAS','EC','436','-','Newman'),
            new Course('CAS','CS','112','-','CPK'),
            new Course('CAS','WR','152','-','Stevens'),
            new Course('CAS','PH','100','-','Anderson')];
        this.setState({courseList});
    }

    onClickAdd = (course) => {
        const {myCourseList} = this.state;
        var existed = false;
        for(var i =0; i<myCourseList.length; i++) {
            if (myCourseList[i].key === course.key){
                existed = true;
                break;
            }
        }
        if(!existed)
            myCourseList.push(course);
        // eslint-disable-next-line no-undef
        this.setState({myCourseList});
    }

    onClickDel = (course) => {
        let {myCourseList} = this.state;
        myCourseList = myCourseList.filter(myCourseList => myCourseList.key !== course.key);
        this.setState({myCourseList});
    }

    onColChanged = (event) => {
        const college = event.target.value.toUpperCase();
        const {searchTerms} = this.state;
        searchTerms.college = college;
        this.setState({searchTerms});
    }

    onDptChanged = (event) =>{
        const department = event.target.value.toUpperCase();
        const {searchTerms} = this.state;
        searchTerms.department = department;
        this.setState({searchTerms});
    }

    onNumChanged = (event) =>{
        const number = event.target.value;
        const {searchTerms} = this.state;
        searchTerms.number = number;
        this.setState({searchTerms});
    }

    onSecChanged = (event) =>{
        const section = event.target.value;
        const {searchTerms} = this.state;
        searchTerms.section = section;
        this.setState({searchTerms});
    }

    onProfChanged = (event) =>{
        const professor = event.target.value;
        const {searchTerms} = this.state;
        searchTerms.professor = professor;
        this.setState({searchTerms});
    }

    courseFilter=(course, searchTerms)=>{
        const {number,college,department,section,professor} = searchTerms;
        return ((number ===''||course.num.startsWith(number))&&
            (college ===''||course.col.startsWith(college))&&
            (department ===''||course.dep.startsWith(department))&&
            (section ===''||course.sec.startsWith(section))&&
            (professor ===''||course.prof.toLowerCase().startsWith( professor.toLowerCase())));
    }

    render() {
        const columns = ['College','Department','Number','Section','Professor',''];
        const {searchTerms, courseList, myCourseList} = this.state;

        return <div className="App">
          <span><button
              onClick={() => this.onClickGet()}
              type='button'>
              Get courses
          </button></span>
            <br/>
            <span>Course List</span>
            <table>
                <thead>
                <tr>
                    {columns.map(column =>
                        <th key={column}>{column}</th>)}
                </tr>

                <tr>
                    <th><input type = "text" onChange={this.onColChanged}/></th>
                    <th><input type = "text" onChange={this.onDptChanged}/></th>
                    <th><input type = "text" onChange={this.onNumChanged}/></th>
                    <th><input type = "text" onChange={this.onSecChanged}/></th>
                    <th><input type = "text" onChange={this.onProfChanged}/></th>
                </tr>
                </thead>
                <tbody>
                {courseList
                    .filter(course => this.courseFilter(course,searchTerms))
                    .map(course =>
                    <tr key={course.key}>

                        <td>{course.col}</td>
                        <td>{course.dep}</td>
                        <td>{course.num}</td>
                        <td>{course.sec}</td>
                        <td>{course.prof}</td>
                        <td>
                            <button
                                onClick={() => this.onClickAdd(course)}
                                type='button'
                            >
                                Add to my courses
                            </button>
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            <br/>
            <span>My Courses</span>
            <table>
                <thead>
                <tr>
                    {columns.map(column =>
                        <th key={column}>{column}</th>)}
                </tr>
                </thead>
                {myCourseList.map(course =>
                    <tbody key={course.key}>
                    <tr>
                        <td>{course.col}</td>
                        <td>{course.dep}</td>
                        <td>{course.num}</td>
                        <td>{course.sec}</td>
                        <td>{course.prof}</td>
                        <td>
                            <button
                                onClick={() => this.onClickDel(course)}
                                type='button'
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                )}
            </table>
        </div>;
    }
}

export default App;
