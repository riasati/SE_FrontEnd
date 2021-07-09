import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Reservation from "../Component/Reservation/ReservationPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/Reservation";
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

it("ReservationPage Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/Reservation" component={Reservation} />
      </Router>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div data-testid=\\"wrapper\\" class=\\"_loading_overlay_wrapper css-79elbk\\">
      <div data-testid=\\"overlay\\" class=\\"_loading_overlay_overlay css-1r098pj _loading-overlay-transition-exit-active\\">
        <div class=\\"_loading_overlay_content css-42igfv\\">
          <div class=\\"_loading_overlay_spinner css-50etie\\"><svg viewBox=\\"25 25 50 50\\">
              <circle cx=\\"50\\" cy=\\"50\\" r=\\"20\\" fill=\\"none\\" stroke-width=\\"2\\" stroke-miterlimit=\\"10\\"></circle>
            </svg></div>
        </div>
      </div>
      <div class=\\"MuiContainer-root MuiContainer-maxWidthLg\\" style=\\"padding-left: 0px; padding-right: 0px;\\">
        <div></div>
        <div class=\\"MuiPaper-root makeStyles-paper-2 MuiPaper-elevation1 MuiPaper-rounded\\">
          <div>
            <h5 class=\\"MuiTypography-root MuiTypography-h5 MuiTypography-alignLeft\\"><span><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"calendar-alt\\" class=\\"svg-inline--fa fa-calendar-alt fa-w-14 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 448 512\\" style=\\"margin: 0px;\\"><path fill=\\"currentColor\\" d=\\"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z\\"></path></svg>&nbsp;تقویم</span></h5>
            <hr>
          </div>
          <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-xs-space-evenly\\">
            <div class=\\"MuiGrid-root makeStyles-rightSection-4 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6\\">
              <div data-testid=\\"wrapper\\" class=\\"_loading_overlay_wrapper _loading_overlay_wrapper--active css-ft4slc\\">
                <div data-testid=\\"overlay\\" class=\\"_loading_overlay_overlay css-df17o1\\">
                  <div class=\\"_loading_overlay_content css-42igfv\\">
                    <div class=\\"_loading_overlay_spinner css-50etie\\"><svg viewBox=\\"25 25 50 50\\">
                        <circle cx=\\"50\\" cy=\\"50\\" r=\\"20\\" fill=\\"none\\" stroke-width=\\"2\\" stroke-miterlimit=\\"10\\"></circle>
                      </svg></div>
                  </div>
                </div>
                <div class=\\"makeStyles-rowOfSelectedDay-7\\">
                  <h6 class=\\"MuiTypography-root MuiTypography-h6 MuiTypography-alignLeft\\"> رزرو های روز 1400/4/18 </h6><button class=\\"MuiButtonBase-root MuiIconButton-root makeStyles-iconButtonAddStyle-8\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"font-size: 30px;\\"><path d=\\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
                </div>
                <div></div>
                <div style=\\"clear: both;\\"></div>
                <div class=\\"makeStyles-NoReserveSection-6\\">
                  <h6 class=\\"MuiTypography-root MuiTypography-h6 MuiTypography-alignLeft\\" style=\\"text-align: center; align-self: center; margin-left: auto; margin-right: auto;\\"> رزوری وجود ندارد </h6>
                </div>
              </div>
            </div>
            <div class=\\"MuiGrid-root makeStyles-leftSection-5 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6\\">
              <div class=\\"calendarContainer jalaali makeStyles-calender-13\\">
                <div><button type=\\"button\\" class=\\"makeStyles-toggleCalenderButton-10\\">تاریخ شمسی</button>
                  <div class=\\"heading\\"><button class=\\"title\\">تیر ۱۴۰۰</button><button type=\\"button\\" title=\\"ماه قبل\\" class=\\"prev\\"><svg version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\" x=\\"0px\\" y=\\"0px\\" viewBox=\\"0 0 315.5 315.5\\" style=\\"enable-background:new 0 0 315.5 315.5;\\" xml:space=\\"preserve\\">
                        <g>
                          <path class=\\"arrow-icon\\" d=\\"M242,141L109,8c-5-5-12-8-18-8S79,3,74,8c-10,10-10,24,0,34l116,116L74,274c-10,10-10,24,0,34s25,10,35,0l133-133c5-5,7-11,7-17C249,151,247,146,242,141z\\"></path>
                        </g>
                      </svg></button><button type=\\"button\\" title=\\"ماه بعد\\" class=\\"next\\"><svg version=\\"1.1\\" xmlns=\\"http://www.w3.org/2000/svg\\" x=\\"0px\\" y=\\"0px\\" viewBox=\\"0 0 314.5 314.5\\" style=\\"enable-background:new 0 0 314.5 314.5;\\" xml:space=\\"preserve\\">
                        <g>
                          <path class=\\"arrow-icon\\" d=\\"M125,157.5l116-116c10-10,10-24,0-34s-25-10-35,0l-133,133c-5,5-7,10-7,17s2,12,7,17l133,133c5,5,11,7,17,7s13-2,18-7c10-10,10-24,0-34L125,157.5z\\"></path>
                        </g>
                      </svg></button></div>
                  <div class=\\"daysOfWeek\\">
                    <div>ش</div>
                    <div>ی</div>
                    <div>د</div>
                    <div>س</div>
                    <div>چ</div>
                    <div>پ</div>
                    <div>ج</div>
                  </div>
                  <div class=\\"dayPickerContainer\\">
                    <div class=\\"dayWrapper\\"><button type=\\"button\\">۲۹</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper\\"><button type=\\"button\\">۳۰</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper\\"><button type=\\"button\\">۳۱</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۳</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۴</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۵</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۶</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۷</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۸</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۹</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱۰</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱۱</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱۲</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱۳</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱۴</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱۵</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱۶</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱۷</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper selected currentMonth today\\"><button type=\\"button\\">۱۸</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۱۹</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۰</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۱</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۲</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۳</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۴</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۵</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۶</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۷</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۸</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۲۹</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۳۰</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper currentMonth\\"><button type=\\"button\\">۳۱</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                    <div class=\\"dayWrapper\\"><button type=\\"button\\">۱</button>
                      <div class=\\"highLightDot-container\\"></div>
                    </div>
                  </div>
                </div><button type=\\"button\\" class=\\"calendarButton selectToday\\">امروز</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>"
  `);
});
