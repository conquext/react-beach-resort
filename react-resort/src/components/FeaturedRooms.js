import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Title from "./Title";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    if (rooms.length === 0) {
      return (
        <div className="empty-search">
          <h3>There are currently no featured rooms </h3>
        </div>
      );
    }
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />{" "}
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>{" "}
      </section>
    );
  }
}
