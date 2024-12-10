

import React from "react";

import "./SpiralCards.css"; // Ensure this file contains the styles below





const SpiralCards = () => {

  return (

    <section className="section-home-service">

      <div className="padding-global">

        <div className="container-large">

          <div className="padding-section-large">

            <div className="spiral-container">

              <div className="spiral-sticky">

                <div className="spiral-wrapper">

                  <div className="spiral-item">

                    <div className="spiral-block first">

                      <div className="spiral-box">

                        <div className="spiral-content-block">

                          <div className="card-content-block">

                            <div className="dot"></div>

                            <div className="service-title">

                              Financial <br /> Planning

                            </div>

                            <p className="card-description">

                              Develop personalized financial plans that align

                              with your long-term goals, covering everything

                              from investment strategies to retirement planning

                              and risk management.

                            </p>

                          </div>

                        </div>

                      </div>

                      <div className="spiral-block">

                        <div className="spiral-box _01">

                          <div className="spiral-content-block">

                            <div className="card-content-block">

                              <div className="dot"></div>

                              <div className="service-title">

                                Investment <br /> Management

                              </div>

                              <p className="card-description">

                                Optimize your portfolio with expert guidance on

                                asset allocation, market analysis, and

                                investment strategies designed to maximize

                                returns and minimize risk.

                              </p>

                            </div>

                          </div>

                        </div>

                        <div className="spiral-block">

                          <div className="spiral-box _02">

                            <div className="spiral-content-block">

                              <div className="card-content-block">

                                <div className="dot"></div>

                                <div className="service-title">

                                  Risk Assessment and Mitigation

                                </div>

                                <p className="card-description">

                                  Identify potential financial risks and create

                                  proactive strategies to safeguard your assets

                                  and ensure business continuity in uncertain

                                  times.

                                </p>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div className="spiral-trigger"></div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};



export default SpiralCards;

