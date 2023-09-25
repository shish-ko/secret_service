import React from "react";
import { Link } from "react-router-dom";

export const WelcomeBlog: React.FC = () => {
  return (
    <section className="blog">
      <h2 className="blog__title">blog</h2>
      <div className="blog__body-container">
      <div className="blog__body">
        <Link to={'https://www.linkedin.com/in/shishkoandrey/'} className="blog__item blog-record">
          <div className="blog-record__container">
            <p className="blog-record__text">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <div className="blog-record__date">
              10.02.2023
            </div>
          </div>
        </Link>
        <Link to={'#'} className="blog__item blog-record">
          <div className="blog-record__container">
            <p className="blog-record__text">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <div className="blog-record__date">
              10.02.2023
            </div>
          </div>
        </Link>
        <Link to={'#'} className="blog__item blog-record">
          <div className="blog-record__container">
            <p className="blog-record__text">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <div className="blog-record__date">
              10.02.2023
            </div>
          </div>
        </Link>
        <Link to={'#'} className="blog__item blog-record">
          <div className="blog-record__container">
            <p className="blog-record__text">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <div className="blog-record__date">
              10.02.2023
            </div>
          </div>
        </Link>
        <Link to={'#'} className="blog__item blog-record">
          <div className="blog-record__container">
            <p className="blog-record__text">
              Payment methods: Skrill, Neteller, webmoney, Bank transfer
            </p>
            <div className="blog-record__date">
              10.02.2023
            </div>
          </div>
        </Link>

      </div>
      </div>
    </section>
  )
}