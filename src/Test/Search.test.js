import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import GroupingChannel from "../Component/GroupingChannel/GroupingChannel";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/GroupingChannel";
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

it("GroupingChannel Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/GroupingChannel" component={GroupingChannel} />
      </Router>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <div dir=\\"rtl\\">
        <div class=\\"MuiContainer-root makeStyles-container-3 MuiContainer-maxWidthLg\\">
          <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3\\">
            <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-12\\">
              <div class=\\"MuiPaper-root makeStyles-paper-4 makeStyles-fixedHeight-5 MuiPaper-elevation1 MuiPaper-rounded\\">
                <form novalidate=\\"\\">
                  <h6 class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3\\">
                    <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-md-1\\"></div>
                    <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-2\\">
                      <div class=\\"MuiFormControl-root makeStyles-formControl-8\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-filled\\" data-shrink=\\"true\\" id=\\"searchgroup\\"><span style=\\"font-family: IRANSansWeb;\\">نوع جستوجو</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl\\" required=\\"\\" inputprops=\\"[object Object]\\">
                          <div class=\\"MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input\\" tabindex=\\"0\\" role=\\"button\\" aria-haspopup=\\"listbox\\" aria-labelledby=\\"kindsearch kindsearch\\" id=\\"kindsearch\\"><span class=\\"makeStyles-spanList-2\\">کانال</span></div><input name=\\"kindsearch\\" aria-hidden=\\"true\\" tabindex=\\"-1\\" class=\\"MuiSelect-nativeInput\\" required=\\"\\" value=\\"Channel\\"><svg class=\\"MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                            <path d=\\"M7 10l5 5 5-5z\\"></path>
                          </svg>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-15 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-17 PrivateNotchedOutline-legendNotched-18\\"><span>kindsearch</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-2\\">
                      <div class=\\"MuiFormControl-root makeStyles-formControl-8\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined\\" data-shrink=\\"false\\" id=\\"searchgroup\\"><span style=\\"font-family: IRANSansWeb;\\">حوزه مشاوره</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl\\" required=\\"\\" inputprops=\\"[object Object]\\">
                          <div class=\\"MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input\\" tabindex=\\"0\\" role=\\"button\\" aria-haspopup=\\"listbox\\" aria-labelledby=\\"searchgroup searchgroup\\" id=\\"searchgroup\\"><span>​</span></div><input name=\\"searchgroup\\" aria-hidden=\\"true\\" tabindex=\\"-1\\" class=\\"MuiSelect-nativeInput\\" required=\\"\\" value=\\"\\"><svg class=\\"MuiSvgIcon-root MuiSelect-icon MuiSelect-iconOutlined\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                            <path d=\\"M7 10l5 5 5-5z\\"></path>
                          </svg>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-15 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-17\\"><span>searchgroup</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6\\">
                      <div>
                        <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\">
                          <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"searchword\\" id=\\"searchword\\" name=\\"searchword\\" placeholder=\\"جست و جو\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-bottomButton-6 MuiButton-fullWidth\\" tabindex=\\"0\\" type=\\"submit\\"><span class=\\"MuiButton-label\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"search\\" class=\\"svg-inline--fa fa-search fa-w-16 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" style=\\"color: white;\\"><path fill=\\"currentColor\\" d=\\"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
                            <fieldset aria-hidden=\\"true\\" style=\\"padding-right: 8px;\\" class=\\"PrivateNotchedOutline-root-15 MuiOutlinedInput-notchedOutline\\">
                              <legend class=\\"PrivateNotchedOutline-legend-16\\" style=\\"width: 0.01px;\\"><span>​</span></legend>
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-md-1\\"></div>
                  </h6>
                </form><br>
                <div class=\\"MuiGrid-root makeStyles-container-3 MuiGrid-container MuiGrid-spacing-xs-3\\">
                  <div style=\\"color: rgb(63, 64, 125); width: 100%; text-align: center;\\">
                    <h2>چیزی برای نمایش نیست!</h2>
                  </div>
                </div><br>
                <div>
                  <ul class=\\"makeStyles-containerClassName-13\\">
                    <li class=\\"makeStyles-previousnextbreakClassName-11 disabled\\"><a class=\\"makeStyles-previousnextbreakLinkClassName-12\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"true\\" aria-label=\\"Previous page\\" rel=\\"prev\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"angle-right\\" class=\\"svg-inline--fa fa-angle-right fa-w-8 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 512\\" style=\\"font-size: 15px;\\">
                          <path fill=\\"currentColor\\" d=\\"M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z\\"></path>
                        </svg></a></li>
                    <li class=\\"makeStyles-previousnextbreakClassName-11\\"><a class=\\"makeStyles-previousnextbreakLinkClassName-12\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\" aria-label=\\"Next page\\" rel=\\"next\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"angle-left\\" class=\\"svg-inline--fa fa-angle-left fa-w-8 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 256 512\\" style=\\"font-size: 15px;\\">
                          <path fill=\\"currentColor\\" d=\\"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z\\"></path>
                        </svg></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>"
  `);
});
