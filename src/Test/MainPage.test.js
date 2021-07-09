import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import MainPage from "../Component/MainPage/MainPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/Dashboard";
  location = window.location;
  const mockLocation = new URL(url);
  // mockLocation.replace = jest.fn();
  delete window.location;
  window.location = mockLocation;

  console = global.console;
  global.console = {
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  };
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;

  window.location = location;
  global.console = console;
});

it("MainPage Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/Dashboard" component={MainPage} />
      </Router>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <div dir=\\"rtl\\">
        <div>
          <div class=\\"MuiContainer-root makeStyles-container-2 MuiContainer-maxWidthLg\\">
            <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3\\">
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12\\">
                <div class=\\"makeStyles-title-5\\">
                  <h2><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"balance-scale\\" class=\\"svg-inline--fa fa-balance-scale fa-w-20 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 640 512\\">
                      <path fill=\\"currentColor\\" d=\\"M256 336h-.02c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0C-2.06 328.75.02 320.33.02 336H0c0 44.18 57.31 80 128 80s128-35.82 128-80zM128 176l72 144H56l72-144zm511.98 160c0-16.18 1.34-8.73-85.05-181.51-17.65-35.29-68.19-35.36-85.87 0-87.12 174.26-85.04 165.84-85.04 181.51H384c0 44.18 57.31 80 128 80s128-35.82 128-80h-.02zM440 320l72-144 72 144H440zm88 128H352V153.25c23.51-10.29 41.16-31.48 46.39-57.25H528c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H383.64C369.04 12.68 346.09 0 320 0s-49.04 12.68-63.64 32H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h129.61c5.23 25.76 22.87 46.96 46.39 57.25V448H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z\\"></path>
                    </svg> وکالت </h2>
                </div>
                <div class=\\"MuiPaper-root makeStyles-paper-3 makeStyles-fixedHeight-4 MuiPaper-elevation1 MuiPaper-rounded\\">
                  <div class=\\"sc-jRQAMF gGcoYH rec rec-carousel-wrapper \\" style=\\"color: rgb(39, 189, 160);\\">
                    <div class=\\"sc-eCImvq ixXTzo rec rec-carousel\\" style=\\"height: 0px;\\"><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-left\\" disabled=\\"\\" type=\\"button\\">❮</button>
                      <div class=\\"sc-dkPtyc imakzv rec rec-slider-container\\">
                        <div class=\\"sc-hKwCoD eNbzjJ rec rec-slider\\" style=\\"transition: all 500ms ease; right: 0px;\\">
                          <div class=\\"rec rec-swipable\\" style=\\"display: flex; flex-direction: row;\\">
                            <div class=\\"rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible\\">
                              <div id=\\"0\\" style=\\"width: 0px; padding: 0px 0px 0px 0px;\\" class=\\"sc-gsDJrp SpQeE rec rec-item-wrapper\\">
                                <div class=\\"MuiCircularProgress-root makeStyles-CircularProgress-6 MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate\\" style=\\"width: 40px; height: 40px; color: rgb(14, 145, 140);\\" role=\\"progressbar\\" tabindex=\\"0\\"><svg class=\\"MuiCircularProgress-svg\\" viewBox=\\"22 22 44 44\\">
                                    <circle class=\\"MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate\\" cx=\\"44\\" cy=\\"44\\" r=\\"20.2\\" fill=\\"none\\" stroke-width=\\"3.6\\"></circle>
                                  </svg></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-right\\" disabled=\\"\\" type=\\"button\\">❯</button>
                    </div>
                    <div class=\\"sc-iCfLBT kGrYtS rec rec-pagination\\"><button tabindex=\\"-1\\" class=\\"sc-gKckTs cetQhm rec rec-dot rec rec-dot_active\\" type=\\"button\\"></button></div>
                  </div>
                </div>
              </div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12\\">
                <div class=\\"makeStyles-title-5\\">
                  <h2><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"university\\" class=\\"svg-inline--fa fa-university fa-w-16 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\">
                      <path fill=\\"currentColor\\" d=\\"M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z\\"></path>
                    </svg> تحصیلی </h2>
                </div>
                <div class=\\"MuiPaper-root makeStyles-paper-3 makeStyles-fixedHeight-4 MuiPaper-elevation1 MuiPaper-rounded\\">
                  <div class=\\"sc-jRQAMF gGcoYH rec rec-carousel-wrapper \\">
                    <div class=\\"sc-eCImvq ixXTzo rec rec-carousel\\" style=\\"height: 0px;\\"><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-left\\" disabled=\\"\\" type=\\"button\\">❮</button>
                      <div class=\\"sc-dkPtyc imakzv rec rec-slider-container\\">
                        <div class=\\"sc-hKwCoD eNbzjJ rec rec-slider\\" style=\\"transition: all 500ms ease; right: 0px;\\">
                          <div class=\\"rec rec-swipable\\" style=\\"display: flex; flex-direction: row;\\">
                            <div class=\\"rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible\\">
                              <div id=\\"0\\" style=\\"width: 0px; padding: 0px 0px 0px 0px;\\" class=\\"sc-gsDJrp SpQeE rec rec-item-wrapper\\">
                                <div class=\\"MuiCircularProgress-root makeStyles-CircularProgress-6 MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate\\" style=\\"width: 40px; height: 40px; color: rgb(14, 145, 140);\\" role=\\"progressbar\\" tabindex=\\"0\\"><svg class=\\"MuiCircularProgress-svg\\" viewBox=\\"22 22 44 44\\">
                                    <circle class=\\"MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate\\" cx=\\"44\\" cy=\\"44\\" r=\\"20.2\\" fill=\\"none\\" stroke-width=\\"3.6\\"></circle>
                                  </svg></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-right\\" disabled=\\"\\" type=\\"button\\">❯</button>
                    </div>
                    <div class=\\"sc-iCfLBT kGrYtS rec rec-pagination\\"><button tabindex=\\"-1\\" class=\\"sc-gKckTs cetQhm rec rec-dot rec rec-dot_active\\" type=\\"button\\"></button></div>
                  </div>
                </div>
              </div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12\\">
                <div class=\\"makeStyles-title-5\\">
                  <h2><i class=\\"fas fa-head-side-brain\\"></i> روانشناسی </h2>
                </div>
                <div class=\\"MuiPaper-root makeStyles-paper-3 makeStyles-fixedHeight-4 MuiPaper-elevation1 MuiPaper-rounded\\">
                  <div class=\\"sc-jRQAMF gGcoYH rec rec-carousel-wrapper \\">
                    <div class=\\"sc-eCImvq ixXTzo rec rec-carousel\\" style=\\"height: 0px;\\"><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-left\\" disabled=\\"\\" type=\\"button\\">❮</button>
                      <div class=\\"sc-dkPtyc imakzv rec rec-slider-container\\">
                        <div class=\\"sc-hKwCoD eNbzjJ rec rec-slider\\" style=\\"transition: all 500ms ease; right: 0px;\\">
                          <div class=\\"rec rec-swipable\\" style=\\"display: flex; flex-direction: row;\\">
                            <div class=\\"rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible\\">
                              <div id=\\"0\\" style=\\"width: 0px; padding: 0px 0px 0px 0px;\\" class=\\"sc-gsDJrp SpQeE rec rec-item-wrapper\\">
                                <div class=\\"MuiCircularProgress-root makeStyles-CircularProgress-6 MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate\\" style=\\"width: 40px; height: 40px; color: rgb(14, 145, 140);\\" role=\\"progressbar\\" tabindex=\\"0\\"><svg class=\\"MuiCircularProgress-svg\\" viewBox=\\"22 22 44 44\\">
                                    <circle class=\\"MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate\\" cx=\\"44\\" cy=\\"44\\" r=\\"20.2\\" fill=\\"none\\" stroke-width=\\"3.6\\"></circle>
                                  </svg></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-right\\" disabled=\\"\\" type=\\"button\\">❯</button>
                    </div>
                    <div class=\\"sc-iCfLBT kGrYtS rec rec-pagination\\"><button tabindex=\\"-1\\" class=\\"sc-gKckTs cetQhm rec rec-dot rec rec-dot_active\\" type=\\"button\\"></button></div>
                  </div>
                </div>
              </div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12\\">
                <div class=\\"makeStyles-title-5\\">
                  <h2><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"user-md\\" class=\\"svg-inline--fa fa-user-md fa-w-14 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 448 512\\">
                      <path fill=\\"currentColor\\" d=\\"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z\\"></path>
                    </svg> پزشکی </h2>
                </div>
                <div class=\\"MuiPaper-root makeStyles-paper-3 makeStyles-fixedHeight-4 MuiPaper-elevation1 MuiPaper-rounded\\">
                  <div class=\\"sc-jRQAMF gGcoYH rec rec-carousel-wrapper \\">
                    <div class=\\"sc-eCImvq ixXTzo rec rec-carousel\\" style=\\"height: 0px;\\"><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-left\\" disabled=\\"\\" type=\\"button\\">❮</button>
                      <div class=\\"sc-dkPtyc imakzv rec rec-slider-container\\">
                        <div class=\\"sc-hKwCoD eNbzjJ rec rec-slider\\" style=\\"transition: all 500ms ease; right: 0px;\\">
                          <div class=\\"rec rec-swipable\\" style=\\"display: flex; flex-direction: row;\\">
                            <div class=\\"rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible\\">
                              <div id=\\"0\\" style=\\"width: 0px; padding: 0px 0px 0px 0px;\\" class=\\"sc-gsDJrp SpQeE rec rec-item-wrapper\\">
                                <div class=\\"MuiCircularProgress-root makeStyles-CircularProgress-6 MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate\\" style=\\"width: 40px; height: 40px; color: rgb(14, 145, 140);\\" role=\\"progressbar\\" tabindex=\\"0\\"><svg class=\\"MuiCircularProgress-svg\\" viewBox=\\"22 22 44 44\\">
                                    <circle class=\\"MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate\\" cx=\\"44\\" cy=\\"44\\" r=\\"20.2\\" fill=\\"none\\" stroke-width=\\"3.6\\"></circle>
                                  </svg></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-right\\" disabled=\\"\\" type=\\"button\\">❯</button>
                    </div>
                    <div class=\\"sc-iCfLBT kGrYtS rec rec-pagination\\"><button tabindex=\\"-1\\" class=\\"sc-gKckTs cetQhm rec rec-dot rec rec-dot_active\\" type=\\"button\\"></button></div>
                  </div>
                </div>
              </div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12\\">
                <div class=\\"makeStyles-title-5\\">
                  <h2><i class=\\"far fa-ballot-check\\"></i> کنکور </h2>
                </div>
                <div class=\\"MuiPaper-root makeStyles-paper-3 makeStyles-fixedHeight-4 MuiPaper-elevation1 MuiPaper-rounded\\">
                  <div class=\\"sc-jRQAMF gGcoYH rec rec-carousel-wrapper \\">
                    <div class=\\"sc-eCImvq ixXTzo rec rec-carousel\\" style=\\"height: 0px;\\"><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-left\\" disabled=\\"\\" type=\\"button\\">❮</button>
                      <div class=\\"sc-dkPtyc imakzv rec rec-slider-container\\">
                        <div class=\\"sc-hKwCoD eNbzjJ rec rec-slider\\" style=\\"transition: all 500ms ease; right: 0px;\\">
                          <div class=\\"rec rec-swipable\\" style=\\"display: flex; flex-direction: row;\\">
                            <div class=\\"rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible\\">
                              <div id=\\"0\\" style=\\"width: 0px; padding: 0px 0px 0px 0px;\\" class=\\"sc-gsDJrp SpQeE rec rec-item-wrapper\\">
                                <div class=\\"MuiCircularProgress-root makeStyles-CircularProgress-6 MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate\\" style=\\"width: 40px; height: 40px; color: rgb(14, 145, 140);\\" role=\\"progressbar\\" tabindex=\\"0\\"><svg class=\\"MuiCircularProgress-svg\\" viewBox=\\"22 22 44 44\\">
                                    <circle class=\\"MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate\\" cx=\\"44\\" cy=\\"44\\" r=\\"20.2\\" fill=\\"none\\" stroke-width=\\"3.6\\"></circle>
                                  </svg></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-right\\" disabled=\\"\\" type=\\"button\\">❯</button>
                    </div>
                    <div class=\\"sc-iCfLBT kGrYtS rec rec-pagination\\"><button tabindex=\\"-1\\" class=\\"sc-gKckTs cetQhm rec rec-dot rec rec-dot_active\\" type=\\"button\\"></button></div>
                  </div>
                </div>
              </div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12\\">
                <div class=\\"makeStyles-title-5\\">
                  <h2><i class=\\"fas fa-globe-stand\\"></i> مهاجرت </h2>
                </div>
                <div class=\\"MuiPaper-root makeStyles-paper-3 makeStyles-fixedHeight-4 MuiPaper-elevation1 MuiPaper-rounded\\">
                  <div class=\\"sc-jRQAMF gGcoYH rec rec-carousel-wrapper \\">
                    <div class=\\"sc-eCImvq ixXTzo rec rec-carousel\\" style=\\"height: 0px;\\"><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-left\\" disabled=\\"\\" type=\\"button\\">❮</button>
                      <div class=\\"sc-dkPtyc imakzv rec rec-slider-container\\">
                        <div class=\\"sc-hKwCoD eNbzjJ rec rec-slider\\" style=\\"transition: all 500ms ease; right: 0px;\\">
                          <div class=\\"rec rec-swipable\\" style=\\"display: flex; flex-direction: row;\\">
                            <div class=\\"rec rec-carousel-item rec-carousel-item-0 rec-carousel-item-visible\\">
                              <div id=\\"0\\" style=\\"width: 0px; padding: 0px 0px 0px 0px;\\" class=\\"sc-gsDJrp SpQeE rec rec-item-wrapper\\">
                                <div class=\\"MuiCircularProgress-root makeStyles-CircularProgress-6 MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate\\" style=\\"width: 40px; height: 40px; color: rgb(14, 145, 140);\\" role=\\"progressbar\\" tabindex=\\"0\\"><svg class=\\"MuiCircularProgress-svg\\" viewBox=\\"22 22 44 44\\">
                                    <circle class=\\"MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate\\" cx=\\"44\\" cy=\\"44\\" r=\\"20.2\\" fill=\\"none\\" stroke-width=\\"3.6\\"></circle>
                                  </svg></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div><button tabindex=\\"0\\" class=\\"sc-bdvvaa hSiCVM rec rec-arrow rec rec-arrow-right\\" disabled=\\"\\" type=\\"button\\">❯</button>
                    </div>
                    <div class=\\"sc-iCfLBT kGrYtS rec rec-pagination\\"><button tabindex=\\"-1\\" class=\\"sc-gKckTs cetQhm rec rec-dot rec rec-dot_active\\" type=\\"button\\"></button></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>"
  `);
});
