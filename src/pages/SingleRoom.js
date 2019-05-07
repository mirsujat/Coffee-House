import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
    defaultBcg
  };
  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);

    return (
      <div>
        <h1>Hello From Single Room</h1>
        <Hero />
        <Banner />
      </div>
    );
  }
}

export default SingleRoom;
