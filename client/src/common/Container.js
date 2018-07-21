import React, { Component } from "react";

export default class Container extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h2 className="mt-4">What We Do</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                deserunt neque tempore recusandae animi soluta quasi? Asperiores
                rem dolore eaque vel, porro, soluta unde debitis aliquam
                laboriosam. Repellat explicabo, maiores!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
                optio neque consectetur consequatur magni in nisi, natus beatae
                quidem quam odit commodi ducimus totam eum, alias, adipisci
                nesciunt voluptate. Voluptatum.
              </p>
              <p>
                <a className="btn btn-primary btn-lg" href="#">
                  Call to Action &raquo;
                </a>
              </p>
            </div>

            <div className="col-sm-4">
              <h2 className="mt-4">Contact Us</h2>
              <address>
                <strong>Start Bootstrap</strong>
                <br />3481 Melrose Place
                <br />Beverly Hills, CA 90210
              </address>
              <address>
                <abbr title="Phone">P:</abbr>
                (123) 456-7890
                <br />
                <abbr title="Email">E:</abbr>
                <a href="mailto:#">name@example.com</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
