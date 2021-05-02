import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import SignIn from "../Component/User/SignIn";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/signIn";
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

it("SignIn Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/signIn" component={SignIn} />
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
      <main class=\\"MuiContainer-root MuiContainer-maxWidthXs\\">
        <div>
          <div class=\\"makeStyles-paper-2\\">
            <h1 class=\\"MuiTypography-root MuiTypography-h5\\" style=\\"font-family: IRANSansWeb;\\">ورود<br><span><svg class=\\"MuiSvgIcon-root MuiSvgIcon-fontSizeLarge\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"margin-top: 10px;\\"><path d=\\"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z\\"></path></svg></span></h1>
            <div dir=\\"rtl\\">
              <form novalidate=\\"\\">
                <h6 class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2\\">
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"email_username\\" id=\\"email_username-label\\" style=\\"font-family: IRANSansWeb;\\">نام کاربری یا ایمیل<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"email_username\\" id=\\"email_username\\" name=\\"email_username\\" required=\\"\\" type=\\"text\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionStart\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                              <path d=\\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\\"></path>
                            </svg></div>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-24 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-26\\"><span>نام کاربری یا ایمیل&nbsp;*</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-marginNormal MuiFormControl-fullWidth\\" errorstyle=\\"[object Object]\\" errortext=\\"[object Object]\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"password\\" id=\\"password-label\\" style=\\"font-family: IRANSansWeb;\\">رمز عبور<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"current-password\\" id=\\"password\\" name=\\"password\\" required=\\"\\" type=\\"password\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionStart\\"><button class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" type=\\"button\\" style=\\"padding: 0px; color: rgb(42, 179, 113);\\" aria-label=\\"toggle password visibility\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-24 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-26\\"><span>رمز عبور&nbsp;*</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </h6><br>
                <div class=\\"MuiGrid-root MuiGrid-container\\">
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                    <div class=\\"MuiGrid-root\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-text MuiLoadingButton-root makeStyles-topButton-3 MuiButton-fullWidth\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiButton-label\\">ورود</span><span class=\\"MuiTouchRipple-root\\"></span></button>
                      <div></div>
                    </div>
                  </div>
                </div><br>
                <div class=\\"MuiGrid-root MuiGrid-container\\">
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                    <div class=\\"MuiGrid-root\\"><a style=\\"color: white; text-decoration: none; font-family: IRANSansWeb;\\" href=\\"/SignUpUser\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-bottomButton-4 MuiButton-fullWidth\\" tabindex=\\"0\\" type=\\"submit\\"><span class=\\"MuiButton-label\\"><span class=\\"MuiButton-startIcon MuiButton-iconSizeMedium\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"user-plus\\" class=\\"svg-inline--fa fa-user-plus fa-w-20 fa-2x \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 640 512\\" style=\\"color: white;\\"><path fill=\\"currentColor\\" d=\\"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z\\"></path></svg></span>ثبت نام</span><span class=\\"MuiTouchRipple-root\\"></span></button></a></div>
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
