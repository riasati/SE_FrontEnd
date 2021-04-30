import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import CreateChannel from "../Component/Channel/CreateChannel";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/CreateChannel";
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

it("CreateChannel Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/CreateChannel" component={CreateChannel} />
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
      <main class=\\"MuiContainer-root MuiContainer-maxWidthXs\\" color=\\"red\\">
        <div>
          <div class=\\"makeStyles-paper-2\\" color=\\"#9a7574\\">
            <h1 class=\\"MuiTypography-root MuiTypography-h6\\" style=\\"font-family: IRANSansWeb;\\">ساخت کانال<br><span><svg class=\\"MuiSvgIcon-root MuiSvgIcon-fontSizeSmall\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"margin-top: 10px;\\"><path d=\\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z\\"></path></svg></span></h1>
            <div dir=\\"rtl\\">
              <form novalidate=\\"\\">
                <h6 class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2\\">
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"channelName\\" id=\\"channelName-label\\" style=\\"font-family: IRANSansWeb;\\">نام کانال خود را وارد کنید<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"channelName\\" id=\\"channelName\\" name=\\"channelName\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionStart\\"><svg stroke=\\"currentColor\\" fill=\\"currentColor\\" stroke-width=\\"0\\" viewBox=\\"0 0 24 24\\" font-size=\\"small\\" height=\\"1em\\" width=\\"1em\\" xmlns=\\"http://www.w3.org/2000/svg\\">
                              <path d=\\"M20.005 5.995h-1v2h1v8h-1v2h1c1.103 0 2-.897 2-2v-8C22.005 6.893 21.107 5.995 20.005 5.995zM6.005 9.995H15V13.995H6.005z\\"></path>
                              <path d=\\"M17.005,17.995v-12V4H20V2h-8v2h3.005v1.995h-11c-1.103,0-2,0.897-2,2v8c0,1.103,0.897,2,2,2h11V20H12v2h8v-2h-2.995 V17.995z M4.005,15.995v-8h11v8H4.005z\\"></path>
                            </svg></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated\\" data-shrink=\\"false\\" for=\\"channelLink\\" id=\\"channelLink-label\\" style=\\"font-family: IRANSansWeb;\\">لینک کانال</label>
                        <div class=\\"MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"channelLink\\" id=\\"channelLink\\" name=\\"channelLink\\" placeholder=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionStart\\"><svg class=\\"MuiSvgIcon-root MuiSvgIcon-fontSizeSmall\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                              <path d=\\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\\"></path>
                            </svg><text>/p.link</text></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-grid-xs-4\\"><button style=\\"font-family: IRANSansWeb;\\"> یک لینک به من بده</button></div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\"></div>
                </h6><br>
                <div class=\\"MuiGrid-root MuiGrid-container\\">
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                    <div class=\\"MuiGrid-root\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-topButton-3 MuiButton-fullWidth\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiButton-label\\">ساخت کانال</span><span class=\\"MuiTouchRipple-root\\"></span></button>
                      <div></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>"
  `);
});
