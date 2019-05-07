import React, { Component } from "react";
import { RoomContext } from "../../context";
import Title from "../Title/Title";
import Room from "../Room/Room";
import Loading from "../Loading/Loading";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  state = {};
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="featured room" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
