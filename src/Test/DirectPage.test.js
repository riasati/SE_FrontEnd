import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import "regenerator-runtime/runtime";

import Direct from "../Component/Direct/DirectPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/Direct";
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

it("DirectPage Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/Direct" component={Direct} />
      </Router>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div data-testid=\\"wrapper\\" class=\\"_loading_overlay_wrapper css-79elbk\\">
      <div class=\\"MuiContainer-root MuiContainer-maxWidthLg\\" style=\\"padding-left: 0px; padding-right: 0px;\\">
        <div class=\\"MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded\\">
          <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-direction-xs-column MuiGrid-justify-xs-space-between\\" style=\\"flex-wrap: wrap;\\">
            <div class=\\"MuiGrid-root makeStyles-chatlist-1 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-4\\" style=\\"background-color: rgb(243, 247, 250); overflow-y: scroll; height: 100vh; overflow-x: hidden; direction: ltr;\\">
              <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
                <div class=\\"MuiCardHeader-root\\">
                  <div class=\\"MuiCardHeader-avatar\\">
                    <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
                  </div>
                  <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
                </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
              </div>
            </div></span>
          </div>
        </div>
      </div>
      <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
        <div class=\\"MuiCardHeader-root\\">
          <div class=\\"MuiCardHeader-avatar\\">
            <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
          </div>
          <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
        </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
      </div>
    </div></span></div>
    </div>
    </div>
    <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
      <div class=\\"MuiCardHeader-root\\">
        <div class=\\"MuiCardHeader-avatar\\">
          <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
        </div>
        <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
      </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
    </div>
    </div></span></div>
    </div>
    </div>
    <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
      <div class=\\"MuiCardHeader-root\\">
        <div class=\\"MuiCardHeader-avatar\\">
          <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
        </div>
        <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
      </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
    </div>
    </div></span></div>
    </div>
    </div>
    <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
      <div class=\\"MuiCardHeader-root\\">
        <div class=\\"MuiCardHeader-avatar\\">
          <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
        </div>
        <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
      </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
    </div>
    </div></span></div>
    </div>
    </div>
    <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
      <div class=\\"MuiCardHeader-root\\">
        <div class=\\"MuiCardHeader-avatar\\">
          <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
        </div>
        <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
      </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
    </div>
    </div></span></div>
    </div>
    </div>
    <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
      <div class=\\"MuiCardHeader-root\\">
        <div class=\\"MuiCardHeader-avatar\\">
          <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
        </div>
        <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
      </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
    </div>
    </div></span></div>
    </div>
    </div>
    <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
      <div class=\\"MuiCardHeader-root\\">
        <div class=\\"MuiCardHeader-avatar\\">
          <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
        </div>
        <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
      </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
    </div>
    </div></span></div>
    </div>
    </div>
    <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
      <div class=\\"MuiCardHeader-root\\">
        <div class=\\"MuiCardHeader-avatar\\">
          <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
        </div>
        <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
      </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
    </div>
    </div></span></div>
    </div>
    </div>
    <div class=\\"MuiPaper-root MuiCard-root MuiPaper-elevation1 MuiPaper-rounded\\" sx=\\"[object Object]\\" style=\\"margin: 10px 0px; background-color: rgb(243, 247, 250); direction: rtl;\\">
      <div class=\\"MuiCardHeader-root\\">
        <div class=\\"MuiCardHeader-avatar\\">
          <div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-avatar ant-skeleton-avatar-circle\\" style=\\"width: 50px; height: 50px;\\"></span></div>
        </div>
        <div class=\\"MuiCardHeader-content\\"><span class=\\"MuiTypography-root MuiCardHeader-title MuiTypography-body2 MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right; margin: 5px 0px;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 80px; height: 20px; border-radius: 5px;\\"></span></div>
      </div></span><span class=\\"MuiTypography-root MuiCardHeader-subheader MuiTypography-body2 MuiTypography-colorTextSecondary MuiTypography-displayBlock\\"><div style=\\"width: 100%; display: grid; justify-content: right;\\"><div class=\\"ant-skeleton ant-skeleton-element ant-skeleton-active\\"><span class=\\"ant-skeleton-input\\" style=\\"width: 160px; height: 20px; border-radius: 5px;\\"></span>
    </div>
    </div></span></div>
    </div>
    </div>
    </div>
    <hr class=\\"MuiDivider-root\\" style=\\"margin: 0px 8px;\\">
    <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-8\\" style=\\"display: none;\\">
      <div class=\\"makeStyles-mainDiv-2\\">
        <hr class=\\"MuiDivider-root makeStyles-divider-9\\">
        <div style=\\"display: block; position: relative;\\">
          <div style=\\"background-color: rgba(255, 255, 255, 0.8); position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 9999;\\">
            <div style=\\"position: absolute; top: 50%; right: 0px; left: 0px; text-align: center; color: grey; font-size: 36px;\\">
              <div style=\\"font-family: IRANSansWeb;\\">لطفا يك گفت و گو را انتخاب كنيد</div>
            </div>
          </div>
          <div style=\\"display: block; position: relative;\\">
            <div data-testid=\\"wrapper\\" class=\\"_loading_overlay_wrapper css-79elbk\\">
              <div data-testid=\\"overlay\\" class=\\"_loading_overlay_overlay css-1r098pj _loading-overlay-transition-exit-active\\">
                <div class=\\"_loading_overlay_content css-42igfv\\">
                  <div class=\\"_loading_overlay_spinner css-50etie\\"><svg viewBox=\\"25 25 50 50\\">
                      <circle cx=\\"50\\" cy=\\"50\\" r=\\"20\\" fill=\\"none\\" stroke-width=\\"2\\" stroke-miterlimit=\\"10\\"></circle>
                    </svg></div>
                </div>
              </div>
              <div class=\\"scrollarea makeStyles-pictureDiv-3\\">
                <div style=\\"margin-top: 0px; margin-left: 0px;\\" class=\\"scrollarea-content \\" tabindex=\\"1\\">
                  <div style=\\"clear: both;\\"></div>
                </div>
              </div>
            </div>
          </div>
        </div><input style=\\"display: none;\\" id=\\"file\\" type=\\"file\\" multiple=\\"\\">
        <div>
          <hr class=\\"MuiDivider-root makeStyles-divider-9\\">
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>"
  `);
});
