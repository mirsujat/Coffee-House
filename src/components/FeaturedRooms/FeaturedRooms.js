import React, { Component } from "react";
import { RoomContext } from "../../context";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  state = {};
  render() {
    // console.log(name);
    return (
      <div>
        <h3>From Featured Rooms</h3>
      </div>
    );
  }
}

export default FeaturedRooms;
