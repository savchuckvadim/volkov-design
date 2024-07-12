import React from "react";
import Link from "next/link";

const AboutUs7 = () => {
  return (
    <section className="intro section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h2>From Idea to Reality: We Manage Every Step. Design, Budgeting, and Peace of Mind – All in One Place!</h2>
              <p>
                At our studio, we don&apos;t just create beautiful designs;
                we handle every aspect of your renovation journey.
                From initial concepts to final touches, we&apos;re here to ensure a seamless experience. Our team works closely with you to understand your vision,
                needs, and budget, providing transparent estimates and managing expenses throughout.
                With us, you can relax knowing your project is in capable hands.
              </p>
              <Link href="/about">
                <a className="btn-curve btn-color mt-30">
                  <span>Read More</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="exp">
              <h4>25</h4>
              <h5>Years Of Experience</h5>
              <span>Since 1996</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs7;
