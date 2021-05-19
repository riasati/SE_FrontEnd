import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import EditProfile from "../Component/User/Profile/EditProfile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

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
  global.console = console;
});

it("EditProfile Test", () => {
  act(() => {
    render(<EditProfile />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <main class=\\"MuiContainer-root makeStyles-container-1 MuiContainer-maxWidthLg\\">
        <div>
          <div data-testid=\\"wrapper\\" class=\\"_loading_overlay_wrapper css-79elbk\\">
            <div class=\\"makeStyles-paper-2\\">
              <div dir=\\"rtl\\">
                <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1\\">
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6\\">
                    <div class=\\"MuiGrid-root\\">
                      <div class=\\"MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded\\" style=\\"background-color: rgb(243, 247, 250);\\">
                        <div class=\\"MuiGrid-root\\">
                          <div><img src=\\"\\" class=\\"makeStyles-avatar-7\\" alt=\\"avatar\\" title=\\"avatar\\"></div>
                        </div><span style=\\"color: rgb(63, 64, 125);\\">افزودن عکس</span><br><input style=\\"display: none;\\" id=\\"file\\" type=\\"file\\">
                        <div><label for=\\"file\\"><span class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\" aria-label=\\"upload picture\\" style=\\"font-family: IRANSansWeb;\\"><span class=\\"MuiIconButton-label\\"><i class=\\"fas fa-camera-alt\\" style=\\"color: rgb(42, 179, 113);\\"></i></span><span class=\\"MuiTouchRipple-root\\"></span></span></label><br></div>
                        <div>
                          <form novalidate=\\"\\" style=\\"padding: 4%;\\">
                            <h6 class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3\\">
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6\\">
                                <div>
                                  <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"firstName\\" id=\\"firstName-label\\" style=\\"font-family: IRANSansWeb;\\">نام<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                                    <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"firstName\\" id=\\"firstName\\" name=\\"firstName\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                                      <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-5 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                                          <path d=\\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\\"></path>
                                        </svg></div>
                                      <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-9 MuiOutlinedInput-notchedOutline\\">
                                        <legend class=\\"PrivateNotchedOutline-legendLabelled-11\\"><span>نام&nbsp;*</span></legend>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6\\">
                                <div>
                                  <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"lastName\\" id=\\"lastName-label\\" style=\\"font-family: IRANSansWeb;\\">نام خانوادگی<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                                    <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"lastName\\" id=\\"lastName\\" name=\\"lastName\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                                      <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-5 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                                          <path d=\\"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z\\"></path>
                                        </svg></div>
                                      <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-9 MuiOutlinedInput-notchedOutline\\">
                                        <legend class=\\"PrivateNotchedOutline-legendLabelled-11\\"><span>نام خانوادگی&nbsp;*</span></legend>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6\\">
                                <div>
                                  <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"phoneNumber\\" id=\\"phoneNumber-label\\" style=\\"font-family: IRANSansWeb;\\">شماره تلفن<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                                    <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"phoneNumber\\" id=\\"phoneNumber\\" name=\\"phoneNumber\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                                      <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-5 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                                          <path d=\\"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z\\"></path>
                                        </svg></div>
                                      <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-9 MuiOutlinedInput-notchedOutline\\">
                                        <legend class=\\"PrivateNotchedOutline-legendLabelled-11\\"><span>شماره تلفن&nbsp;*</span></legend>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6\\">
                                <div>
                                  <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"userName\\" id=\\"userName-label\\" style=\\"font-family: IRANSansWeb;\\">نام کاربری<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                                    <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"userName\\" id=\\"userName\\" name=\\"userName\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                                      <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-5 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                                          <path d=\\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\\"></path>
                                        </svg></div>
                                      <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-9 MuiOutlinedInput-notchedOutline\\">
                                        <legend class=\\"PrivateNotchedOutline-legendLabelled-11\\"><span>نام کاربری&nbsp;*</span></legend>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-2\\"></div>
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-8\\">
                                <div>
                                  <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\"><label class=\\"MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined Mui-required Mui-required\\" data-shrink=\\"false\\" for=\\"email\\" id=\\"email-label\\" style=\\"font-family: IRANSansWeb;\\">ایمیل<span aria-hidden=\\"true\\" class=\\"MuiFormLabel-asterisk MuiInputLabel-asterisk\\"> *</span></label>
                                    <div class=\\"MuiInputBase-root MuiOutlinedInput-root MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><input aria-invalid=\\"false\\" autocomplete=\\"email\\" id=\\"email\\" name=\\"email\\" required=\\"\\" type=\\"string\\" class=\\"MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd\\" value=\\"\\">
                                      <div class=\\"MuiInputAdornment-root makeStyles-InputAdornment-5 MuiInputAdornment-positionEnd\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
                                          <path d=\\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\\"></path>
                                        </svg></div>
                                      <fieldset aria-hidden=\\"true\\" class=\\"PrivateNotchedOutline-root-9 MuiOutlinedInput-notchedOutline\\">
                                        <legend class=\\"PrivateNotchedOutline-legendLabelled-11\\"><span>ایمیل&nbsp;*</span></legend>
                                      </fieldset>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-2\\"></div>
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3\\"></div>
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3\\"></div>
                              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-text MuiLoadingButton-root makeStyles-topButton-8 Mui-disabled MuiButton-fullWidth Mui-disabled\\" tabindex=\\"-1\\" type=\\"button\\" disabled=\\"\\" pendingposition=\\"center\\"><span class=\\"MuiButton-label\\"><span class=\\"MuiButton-startIcon MuiButton-iconSizeMedium\\"><i class=\\"fas fa-edit\\"></i></span>اعمال تغییرات</span></button></div>
                            </h6>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-6\\">
                    <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                      <div class=\\"MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded\\" style=\\"font-family: IRANSansWeb; background-color: rgb(153, 153, 250);\\"><text style=\\"font-family: IRANSansWeb; color: rgb(243, 247, 250);\\">درخواست ها</text></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>"
  `);
});
