import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import "regenerator-runtime/runtime";

import VerifyEmail from "../Component/User/verifyEmail";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/verifyEmail";
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

it("VerifyEmail Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/verifyEmail" component={VerifyEmail} />
      </Router>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<main class=\\"MuiContainer-root MuiContainer-maxWidthXs\\">
      <div class=\\"MuiGrid-root makeStyles-container-5 MuiGrid-container MuiGrid-spacing-xs-2\\">
        <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
          <div class=\\"makeStyles-paper-6\\">
            <div class=\\"makeStyles-header-3\\">
              <h2 style=\\"color: rgb(63, 64, 125);\\"> تایید ایمیل</h2>
            </div>
            <div></div>
            <div><br>
              <div data-testid=\\"div1\\">کد ۵ رقمی که به ایمیل شما ارسال شده را وارد کنید</div><br>
              <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2\\">
                <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1\\"></div>
                <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2\\">
                  <form novalidate=\\"\\">
                    <div class=\\"MuiFormControl-root MuiTextField-root makeStyles-input-4\\" maxlength=\\"1\\">
                      <div class=\\"MuiInputBase-root MuiOutlinedInput-root Mui-focused Mui-focused MuiInputBase-formControl\\" style=\\"font-family: IRANSansWeb; text-align: center; display: inline-block;\\"><input aria-invalid=\\"false\\" name=\\"ssn-1\\" required=\\"\\" type=\\"text\\" class=\\"MuiInputBase-input MuiOutlinedInput-input\\" value=\\"\\">
                        <fieldset aria-hidden=\\"true\\" style=\\"padding-left: 8px;\\" class=\\"PrivateNotchedOutline-root-7 MuiOutlinedInput-notchedOutline\\">
                          <legend class=\\"PrivateNotchedOutline-legend-8\\" style=\\"width: 0.01px;\\"><span>​</span></legend>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
                <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2\\">
                  <form novalidate=\\"\\">
                    <div class=\\"MuiFormControl-root MuiTextField-root makeStyles-input-4\\" maxlength=\\"1\\">
                      <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl\\" style=\\"font-family: IRANSansWeb; text-align: center; display: inline-block;\\"><input aria-invalid=\\"false\\" name=\\"ssn-2\\" required=\\"\\" type=\\"text\\" class=\\"MuiInputBase-input MuiOutlinedInput-input\\" value=\\"\\">
                        <fieldset aria-hidden=\\"true\\" style=\\"padding-left: 8px;\\" class=\\"PrivateNotchedOutline-root-7 MuiOutlinedInput-notchedOutline\\">
                          <legend class=\\"PrivateNotchedOutline-legend-8\\" style=\\"width: 0.01px;\\"><span>​</span></legend>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
                <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2\\">
                  <form novalidate=\\"\\">
                    <div class=\\"MuiFormControl-root MuiTextField-root makeStyles-input-4\\" data-testid=\\"tf1\\" maxlength=\\"1\\">
                      <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl\\" style=\\"font-family: IRANSansWeb; text-align: center; display: inline-block;\\"><input aria-invalid=\\"false\\" name=\\"ssn-3\\" required=\\"\\" type=\\"text\\" class=\\"MuiInputBase-input MuiOutlinedInput-input\\" value=\\"\\">
                        <fieldset aria-hidden=\\"true\\" style=\\"padding-left: 8px;\\" class=\\"PrivateNotchedOutline-root-7 MuiOutlinedInput-notchedOutline\\">
                          <legend class=\\"PrivateNotchedOutline-legend-8\\" style=\\"width: 0.01px;\\"><span>​</span></legend>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
                <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2\\">
                  <form novalidate=\\"\\">
                    <div class=\\"MuiFormControl-root MuiTextField-root makeStyles-input-4\\" maxlength=\\"1\\">
                      <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl\\" style=\\"font-family: IRANSansWeb; text-align: center; display: inline-block;\\"><input aria-invalid=\\"false\\" name=\\"ssn-4\\" required=\\"\\" type=\\"text\\" class=\\"MuiInputBase-input MuiOutlinedInput-input\\" value=\\"\\">
                        <fieldset aria-hidden=\\"true\\" style=\\"padding-left: 8px;\\" class=\\"PrivateNotchedOutline-root-7 MuiOutlinedInput-notchedOutline\\">
                          <legend class=\\"PrivateNotchedOutline-legend-8\\" style=\\"width: 0.01px;\\"><span>​</span></legend>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
                <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-2\\">
                  <div class=\\"MuiFormControl-root MuiTextField-root makeStyles-input-4 MuiFormControl-fullWidth\\" maxlength=\\"1\\">
                    <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl\\" style=\\"font-family: IRANSansWeb; text-align: center; display: inline-block;\\"><input aria-invalid=\\"false\\" name=\\"ssn-5\\" required=\\"\\" type=\\"text\\" class=\\"MuiInputBase-input MuiOutlinedInput-input\\" value=\\"\\">
                      <fieldset aria-hidden=\\"true\\" style=\\"padding-left: 8px;\\" class=\\"PrivateNotchedOutline-root-7 MuiOutlinedInput-notchedOutline\\">
                        <legend class=\\"PrivateNotchedOutline-legend-8\\" style=\\"width: 0.01px;\\"><span>​</span></legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-1\\"></div>
              </div>
            </div><br>
            <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2\\">
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6\\">
                <div class=\\"MuiGrid-root\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-bottomButton-1 MuiButton-fullWidth\\" tabindex=\\"0\\" type=\\"submit\\"><span class=\\"MuiButton-label\\">تایید</span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
              </div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6\\">
                <div class=\\"MuiGrid-root\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-bottomButton-1 Mui-disabled MuiButton-fullWidth Mui-disabled\\" tabindex=\\"-1\\" type=\\"submit\\" disabled=\\"\\" style=\\"background-color: rgb(80, 115, 237);\\"><span class=\\"MuiButton-label\\"><div style=\\"font-family: IRANSansWeb; color: rgb(255, 255, 255);\\"><p style=\\"margin: 0px;\\">۰۲:۰۰</p></div></span></button></div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>"
  `);
});
