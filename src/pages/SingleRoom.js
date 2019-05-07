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
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    return (
      <div>
        <Hero hero="roomsHero">
          <Banner title={`${name} room`}>
            <Link to="/" className="btn-primary">
              back to home
            </Link>
          </Banner>
        </Hero>
      </div>
    );
  }
}

export default SingleRoom;
