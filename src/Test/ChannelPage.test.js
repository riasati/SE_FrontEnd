import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import "regenerator-runtime/runtime";

import Channel from "../Component/Channel/ChannelPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/channel/35";
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

it("ChannelPage Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/Channel/:channelId" component={Channel} />
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
        <div>
          <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-justify-xs-space-evenly\\">
            <div></div>
            <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-sm-12\\">
              <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-justify-xs-space-evenly\\">
                <div class=\\"MuiGrid-root makeStyles-rightSection-10 MuiGrid-item MuiGrid-grid-xs-12\\">
                  <div class=\\"MuiPaper-root makeStyles-paper-9 MuiPaper-elevation1 MuiPaper-rounded\\" style=\\"display: none;\\">
                    <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column MuiGrid-justify-xs-space-evenly\\">
                      <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                        <nav class=\\"MuiList-root MuiList-dense MuiList-padding MuiList-subheader\\">
                          <li class=\\"MuiListSubheader-root MuiListSubheader-sticky\\">
                            <div style=\\"display: flex; flex-direction: row; justify-content: space-between; align-items: stretch; align-content: center;\\">
                              <h6 class=\\"MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom MuiTypography-alignLeft\\">كانال هاي من</h6><button class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" type=\\"button\\" style=\\"padding: 0px; color: rgb(63, 64, 125);\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"font-size: 35px;\\"><path d=\\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
                            </div>
                          </li>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=\\"MuiGrid-root makeStyles-centerSection-11 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8\\">
                  <div class=\\"MuiPaper-root makeStyles-paper-9 MuiPaper-elevation1 MuiPaper-rounded\\" style=\\"display: block;\\">
                    <div style=\\"display: flex; flex-direction: row-reverse; justify-content: space-between; align-items: stretch; align-content: center;\\"><button class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" type=\\"button\\" style=\\"padding: 0px; color: rgb(63, 64, 125);\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"font-size: 35px;\\"><path d=\\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
                      <h6 class=\\"MuiTypography-root MuiTypography-h6\\" style=\\"align-self: center;\\"></h6><button class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" type=\\"button\\" style=\\"padding: 0px; color: rgb(63, 64, 125);\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"font-size: 35px;\\"><path d=\\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
                    </div>
                    <hr class=\\"MuiDivider-root makeStyles-divider-16\\">
                    <div>
                      <div style=\\"display: block; position: relative;\\">
                        <div data-testid=\\"wrapper\\" class=\\"_loading_overlay_wrapper _loading_overlay_wrapper--active css-ft4slc\\">
                          <div data-testid=\\"overlay\\" class=\\"_loading_overlay_overlay css-df17o1\\">
                            <div class=\\"_loading_overlay_content css-42igfv\\">
                              <div class=\\"_loading_overlay_spinner css-50etie\\"><svg viewBox=\\"25 25 50 50\\">
                                  <circle cx=\\"50\\" cy=\\"50\\" r=\\"20\\" fill=\\"none\\" stroke-width=\\"2\\" stroke-miterlimit=\\"10\\"></circle>
                                </svg></div>
                            </div>
                          </div>
                          <div class=\\"scrollarea makeStyles-mainDiv-32\\">
                            <div style=\\"margin-top: 0px; margin-left: 0px;\\" class=\\"scrollarea-content \\" tabindex=\\"1\\">
                              <div style=\\"clear: both;\\"></div>
                            </div>
                          </div>
                        </div>
                      </div><input style=\\"display: none;\\" id=\\"file\\" type=\\"file\\" multiple=\\"\\">
                    </div>
                  </div>
                </div>
                <div class=\\"MuiGrid-root makeStyles-leftSection-12 MuiGrid-item MuiGrid-grid-xs-12\\">
                  <div class=\\"MuiPaper-root makeStyles-paper-9 MuiPaper-elevation1 MuiPaper-rounded\\" style=\\"display: none;\\">
                    <div style=\\"display: flex; flex-direction: row; margin-bottom: 5px; justify-content: space-between;\\"><button class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" type=\\"button\\" style=\\"padding: 0px; color: rgb(63, 64, 125);\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"font-size: 35px;\\"><path d=\\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
                      <h6 class=\\"MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom MuiTypography-alignLeft\\">مشخصات كانال</h6>&nbsp;&nbsp;
                    </div>
                    <div class=\\"MuiPaper-root MuiCard-root makeStyles-paperShowChannelInfo-6 MuiPaper-elevation1 MuiPaper-rounded\\"><img class=\\"MuiCardMedia-root makeStyles-mediaChannel-5 MuiCardMedia-media MuiCardMedia-img\\">
                      <div class=\\"MuiCardContent-root\\">
                        <div class=\\"MuiGrid-root MuiGrid-grid-xs-12\\"><text color=\\"#725b53\\"></text>
                          <div class=\\"MuiGrid-root MuiGrid-grid-xs-12\\"><text color=\\"#725b53\\"></text></div>
                          <div class=\\"MuiGrid-root MuiGrid-grid-xs-12\\"><text color=\\"#725b53\\"></text></div>
                        </div>
                      </div>
                    </div>
                    <ul></ul><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-text\\" tabindex=\\"0\\" type=\\"button\\" style=\\"color: rgb(63, 64, 125); align-self: baseline; margin-top: 5px;\\"><span class=\\"MuiButton-label\\"><p class=\\"MuiTypography-root MuiTypography-body2 MuiTypography-alignLeft\\" style=\\"align-self: baseline;\\">ترک کانال</p></span><span class=\\"MuiTouchRipple-root\\"></span></button><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-text\\" tabindex=\\"0\\" type=\\"button\\" style=\\"color: rgb(63, 64, 125); align-self: baseline; margin-top: 5px;\\"><span class=\\"MuiButton-label\\"><p class=\\"MuiTypography-root MuiTypography-body2 MuiTypography-alignLeft\\" style=\\"align-self: baseline;\\">گزارش تخلف کانال</p></span><span class=\\"MuiTouchRipple-root\\"></span></button>
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
