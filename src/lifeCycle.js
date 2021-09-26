// import React, { Component } from "react";
// import axios from "axios";

// // Constructor
// // render
// // componentDidMount

// export default class LifeCycle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [],
//       date: new Date()
//     };
//   }

//   fetchPosts = async () => {
//     const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     this.setState({ posts: posts.data });
//     console.log(posts.data.slice(0, 2));
//   };

//   componentDidMount() {
//     this.fetchPosts();
//     this.timer = setInterval(()=>{
//       this.tick()
//     },1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.timer)
//   }

//   tick(){
//     this.setState({date: new Date()})
//   }

//   render() {
//     // const styles = {
//     //   span: {
//     //     fontWeight: "bold",
//     //   },
//     // };
//     const { posts } = this.state;
//     const { date } = this.state;

//     return (
//       <div>
//         <h3>Hello Sand Box</h3>
//         <h4>Start edition to see some magic!!</h4>
//         {posts.map((post) => (
//           <div>
//             <p key={post._title}> {`Post title:${post.title}`} </p>
//             <p key={post._body}> {`Some info: ${post.body}`} </p>
//           </div>
//         ))}
//         <div>the time is {date.toLocaleTimeString()}</div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import axios from "axios";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      date: new Date(),
      users: [],
    };
  }

  fetchData = async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(posts.data.slice(0, 5));
    console.log(users.data.slice(0, 5));
    this.setState({ posts: posts.data });
    this.setState({ users: users.data });
  };

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount = () => {
    this.fetchData();
    setInterval(() => {
      this.tick();
    }, 1000);
  };

  render() {
    const { posts } = this.state;
    const { date } = this.state;
    const { users } = this.state;
    const styles = {
      undr:{
        textDecoration:'underline'
      }
    }
    return (
      <div>
        <h4>Hello Sand Box</h4>
        <h5>Start edition to see some magic happen!</h5>
        {posts.map((post) => (
          <p >
            <h6 key={post._id}> {`Id: ${post.id}`} </h6>
            <h5 key={post._title}> {`Title: ${post.title}`} </h5>
            <h5 key={post._body}> {`Text: ${post.body}`} </h5>
          </p>
        ))}

        <h2>Clock for Milana</h2>
        <h3>What time is it?</h3>
        <h3>It is {date.toLocaleTimeString()} o'clock</h3>
        <div>
          <p>Users</p>
          {users.map((user) => (
            <div>
              <p key={user._id}>
                {" "}
                 <span style={styles.undr}>Name is:</span> {user.name} <span style={styles.undr}>Surname:</span> {user.username}{" "}
              </p>
              <p key={user._phone}> {`Phone:${user.phone}`} </p>
              <p key={user._website}> {`Website:${user.website}`} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
