import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 my-4">
            <div className="card">
              <img
                className="card-img-top"
                src="http://placehold.it/300x200"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque sequi doloribus.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 my-4">
            <div className="card">
              <img
                className="card-img-top"
                src="http://placehold.it/300x200"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque sequi doloribus totam ut
                  praesentium aut.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 my-4">
            <div className="card">
              <img
                className="card-img-top"
                src="http://placehold.it/300x200"
                alt=""
              />
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente esse necessitatibus neque.
                </p>
              </div>
              <div className="card-footer">
                <a href="#" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
