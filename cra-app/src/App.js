

import React, { Component } from 'react';
import ProfileCard from './Components/ProfileCard.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: {
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Kajal Patel",
        email: "kajal@example.com",
        phone: "1548796587",
        location: "Mumbai",
        role: "Frontend Dev",
  
      },
      user2: {
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        name: "Ranvir Singh",
        email: "ranvir123@example.com",
        phone: "7894561239",
        location: "Ahmedabad",
        role: "Backend Dev",
      
      },
      user3: {
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        name: "Priya shah",
        email: "priya@example.com",
        phone: "1236547897",
        location: "Delhi",
        role: "Fullstack Dev",
      
      },
      user4: {
        image: "https://randomuser.me/api/portraits/men/42.jpg",
        name: "viraj Joshi",
        email: "karan@example.com",
        phone: "456987123",
        location: "Pune",
        role: "UI/UX Designer",
        
      },
      user5: {
        image: "https://randomuser.me/api/portraits/women/46.jpg",
        name: "Sneha Mehta",
        email: "sneha@example.com",
        phone: "222-333-4444",
        location: "Bangalore",
        role: "QA Engineer",
       
      },
      user6: {
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        name: "Amit Desai",
        email: "amit@example.com",
        phone: "444-555-6666",
        location: "Hyderabad",
        role: "DevOps Engineer",
    
      }
    };
  }

  render() {
    return (
      <div className="container">
        <ProfileCard {...this.state.user1} />
        <ProfileCard {...this.state.user2} />
        <ProfileCard {...this.state.user3} />
        <ProfileCard {...this.state.user4} />
        <ProfileCard {...this.state.user5} />
        <ProfileCard {...this.state.user6} />
      </div>
    );
  }
}

export default App;


