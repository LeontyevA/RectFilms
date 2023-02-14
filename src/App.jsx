import React from 'react';
import './App.css';
//import Book from './Book';
import Form from './components/Form';
//import {Posts} from './components/Posts';

class App extends React.Component {
  state = {
    };
  render() {
    return(<Form />)
  }
}

// class App extends React.Component {
//   state = 
//     {
//       count: 0,
//       timerId: 0,
//       isWork: false
//     };

//   onTimer = () =>{
//     this.setState({count: this.state.count + 1});
//   }

//   clickStart = () => {
//     if (this.state.isWork)
//       clearInterval(this.state.timerId)
//     else  
//       this.setState({timerId:  setInterval(this.onTimer, 1000)});
//     this.setState({isWork: !this.state.isWork});  
//   }

//   clickReset = () => {
//     this.setState({count: 0})
//   }
  
//   componentDidMount(){
//     let v = +localStorage.getItem('timerValue');
//     if (v != null)
//       this.setState({count: v});
//   }

//   componentDidUpdate(){
//     localStorage.setItem('timerValue', this.state.count);
//   }
  
//   componentWillUnmount(){
//     if (this.state.isWork)
//       clearInterval(this.state.timerId)
//   }

//   render() {
//     return (
//        <div>
//          <h2>React Timer</h2>
//          <h3>{this.state.count}</h3>
//          <button onClick={this.clickStart}>{this.state.isWork ?'Стоп':'Старт'}</button><button onClick={this.clickReset}>Сброс</button>
//        </div>
//     )
//   }
// }


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       posts: [],
//       loading: true,
//       comments: []
//     };
//   }

//   handleClickPlus = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   handleClickMinus = () => {
//     this.setState({ count: this.state.count - 1 });
//   }

//   clickPostDelete = (id) => {
//     this.setState({posts: this.state.posts.filter(post => post.id !== id)});
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(Response => Response.json())
//       .then(data => this.setState({ posts: data, loading: false }))

//     // this.timerId = setInterval(() => {
//     //   fetch('https://jsonplaceholder.typicode.com/comments')
//     //     .then(Response => Response.json())
//     //     .then(data => this.setState({ comments: data, loading: false }))
//     // }, 3000
//     // )
//   }

//   componentWillUnmount() {
//     // clearInterval(this.timerId)
//   }

//   render() {
//     return (
//       <div className='App'>
//         {this.state.loading ? <h3>Загрузка....</h3> : <h3>{this.state.posts.length} было загружено</h3>}
//         {this.state.loading ? <h3>Загрузка....</h3> : <h3>{this.state.comments.length} коссентариев</h3>}
//         <button onClick={this.handleClickPlus}>
//           +
//         </button>
//         <span style={{ margin: '0 1rem', display: 'inline-block' }}>{this.state.count}</span>
//         <button onClick={this.handleClickMinus}>-</button>
//         <Book name='Java Script' year='2004' price='144 р.' />
//         <Book name='продвинутый PHP' year='2004' price='144 р.' />
//         <Book name='продвинутый Python' year='2004' price='144 р.' />

//         {/* {this.state.posts.map(post => (<h2 key={post.id}>{post.title}</h2>))} */
//           <Posts posts={this.state.posts}  clickPostDelete={this.clickPostDelete}></Posts>
//         }
//       </div>)
//   }
// }

// const App = () => {
//   return <div>
//       <Book  name='React для всех'  year='2004' price = '144 р.'/>
//       <Book  name='Java Script'  year='2004' price = '144 р.'/>
//       <Book  name='продвинутый PHP'  year='2004' price = '144 р.'/>
//   </div>
// }

export default App;
