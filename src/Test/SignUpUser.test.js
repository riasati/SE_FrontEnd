import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import SignUpUser from "../Component/User/SignUpUser";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/SignUpUser";
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

it("SignUpUser Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/SignUpUser" component={SignUpUser} />
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
      <main class=\\"MuiContainer-root MuiContainer-maxWidthMd\\">
        <div>
          <div class=\\"makeStyles-paper-4\\">
            <h1 class=\\"MuiTypography-root MuiTypography-h5\\" style=\\"font-family: IRANSansWeb; color: rgb(63, 64, 125); margin-bottom: 20px;\\">ثبت نام</h1><br>
            <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2\\">
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3\\"></div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3\\" style=\\"box-shadow: inset 0px 0px 5px 0px; border-radius: 10px 0px 0px 10px;\\"><a style=\\"color: rgb(63, 64, 125); text-decoration: none;\\" href=\\"/SignUpUser\\"><img src=\\"https://img.icons8.com/plasticine/100/000000/gender-neutral-user--v1.png\\" style=\\"width: 50%;\\">
                  <div>مشاوره می خوام</div>
                </a></div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3\\" style=\\"box-shadow: 0px 0px 10px 0px; border-radius: 0px 10px 10px 0px;\\"><a style=\\"color: rgb(63, 64, 125); text-decoration: none;\\" href=\\"/SignUpConsultant\\"><img src=\\"https://img.icons8.com/plasticine/100/000000/online-support.png\\" style=\\"width: 50%;\\">
                  <div>مشاوره میدم</div>
                </a></div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3\\"></div>
            </div>
            <div dir=\\"rtl\\">
              <form class=\\"makeStyles-form-5\\" novalidate=\\"\\">
                <h6 class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2\\">
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"first_name\\" id=\\"first_name-label\\" style=\\"font-family: IRANSansWeb;\\">نام<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"first_name\\" id=\\"first_name\\" name=\\"first_name\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                              <path d=\\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\\"></path>
                            </svg></div>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-26 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-28\\"><span>نام&nbsp;*</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"last_name\\" id=\\"last_name-label\\" style=\\"font-family: IRANSansWeb;\\">نام خانوادگی<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"last_name\\" id=\\"last_name\\" name=\\"last_name\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                              <path d=\\"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z\\"></path>
                            </svg></div>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-26 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-28\\"><span>نام خانوادگی&nbsp;*</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"username\\" id=\\"username-label\\" style=\\"font-family: IRANSansWeb;\\">نام کاربری<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"username\\" id=\\"username\\" name=\\"username\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                              <path d=\\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\\"></path>
                            </svg></div>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-26 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-28\\"><span>نام کاربری&nbsp;*</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"email\\" id=\\"email-label\\" style=\\"font-family: IRANSansWeb;\\">ایمیل<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"email\\" id=\\"email\\" name=\\"email\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                              <path d=\\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\\"></path>
                            </svg></div>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-26 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-28\\"><span>ایمیل&nbsp;*</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"phone_number\\" id=\\"phone_number-label\\" style=\\"font-family: IRANSansWeb;\\">شماره تلفن<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"phone_number\\" id=\\"phone_number\\" name=\\"phone_number\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                              <path d=\\"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z\\"></path>
                            </svg></div>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-26 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-28\\"><span>شماره تلفن&nbsp;*</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"password\\" id=\\"password-label\\" style=\\"font-family: IRANSansWeb;\\">رمز عبور<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"current-password\\" id=\\"password\\" name=\\"password\\" required=\\"\\" type=\\"password\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionEnd\\"><button class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" type=\\"button\\" style=\\"padding: 0px; color: rgb(42, 179, 113);\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-26 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-28\\"><span>رمز عبور&nbsp;*</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6\\">
                    <div>
                      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"password_repetition\\" id=\\"password_repetition-label\\" style=\\"font-family: IRANSansWeb;\\">تایید رمز عبور<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                        <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"current-password\\" id=\\"password_repetition\\" name=\\"password_repetition\\" required=\\"\\" type=\\"password\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                          <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-1 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                              <path d=\\"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\\"></path>
                            </svg></div>
                          <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-26 MuiOutlinedInput-notchedOutline\\">
                            <legend class=\\"PrivateNotchedOutline-legendLabelled-28\\"><span>تایید رمز عبور&nbsp;*</span></legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </h6><br>
                <div class=\\"MuiGrid-root MuiGrid-container\\">
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                    <div class=\\"MuiGrid-root\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-text makeStyles-topButton-2 MuiButton-fullWidth\\" tabindex=\\"0\\" type=\\"button\\" pendingposition=\\"center\\"><span class=\\"MuiButton-label\\">ثبت نام</span><span class=\\"MuiTouchRipple-root\\"></span></button>
                      <div></div>
                    </div>
                  </div>
                </div><br>
                <div class=\\"MuiGrid-root MuiGrid-container\\">
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                    <div class=\\"MuiGrid-root\\"><a style=\\"color: white; text-decoration: none;\\" href=\\"/signIn\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-bottomButton-3 MuiButton-fullWidth\\" tabindex=\\"0\\" type=\\"submit\\"><span class=\\"MuiButton-label\\"><span class=\\"MuiButton-startIcon MuiButton-iconSizeMedium\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"sign-in-alt\\" class=\\"svg-inline--fa fa-sign-in-alt fa-w-16 fa-2x \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" style=\\"color: white;\\"><path fill=\\"currentColor\\" d=\\"M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z\\"></path></svg></span>ورود</span><span class=\\"MuiTouchRipple-root\\"></span></button></a></div>
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
