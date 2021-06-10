import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Profile from "../Component/User/Profile/Profile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  const url = "http://localhost:3000/Profile";
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

it("Profile Test", () => {
  act(() => {
    render(
      <Router>
        <Route path="/Profile" component={Profile} />
      </Router>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<main class=\\"MuiContainer-root makeStyles-container-1 MuiContainer-maxWidthLg\\">
      <div dir=\\"rtl\\">
        <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3\\">
          <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
            <div class=\\"MuiGrid-root makeStyles-info-2 MuiGrid-item MuiGrid-grid-xs-12\\">
              <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3\\">
                <div class=\\"MuiGrid-root makeStyles-centerItem-4 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2 MuiGrid-grid-lg-2\\"><img src=\\"\\" class=\\"makeStyles-avatar-3\\"></div>
                <div class=\\"MuiGrid-root makeStyles-centerItem-4 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-3 MuiGrid-grid-lg-3\\">
                  <div>
                    <h2><span></span>&nbsp;<span></span></h2><span>متخصص</span>
                  </div>
                </div>
                <div class=\\"MuiGrid-root makeStyles-centerItem-4 MuiGrid-item MuiGrid-grid-md-5 MuiGrid-grid-lg-5\\"></div>
                <div class=\\"MuiGrid-root makeStyles-centerItem-4 MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-2 MuiGrid-grid-lg-2\\">
                  <div><span><span style=\\"color: rgb(255, 255, 255);\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"star\\" class=\\"svg-inline--fa fa-star fa-w-18 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 576 512\\"><path fill=\\"currentColor\\" d=\\"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z\\"></path></svg></span>۹۹٪ رضایت از ۵۰ نظر</span><br><span>۱۳ سال تجربه کار</span></div>
                </div>
              </div>
            </div><br>
            <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3\\">
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-6\\">
                <div class=\\"MuiPaper-root WithStyles(ForwardRef(Paper))-root-6 WithStyles(ForwardRef(Paper))-root-7 MuiPaper-elevation1 MuiPaper-rounded\\"><span style=\\"color: rgb(63, 64, 125); text-align: ceter;\\"><h3><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"comment-alt\\" class=\\"svg-inline--fa fa-comment-alt fa-w-16 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\"><path fill=\\"currentColor\\" d=\\"M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 9.8 11.2 15.5 19.1 9.7L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z\\"></path></svg>&nbsp;مشاوره آنلاین متنی</h3></span>
                  <hr><br><span style=\\"color: rgb(99, 99, 99); text-align: right;\\">قابلیت ارسال صدا، تصویر و فایل برای مشاور</span><br><br><span><a href=\\"/Direct/\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-text\\" tabindex=\\"0\\" type=\\"button\\" style=\\"background-color: rgb(39, 189, 160); font-family: IRANSansWeb; color: rgb(255, 255, 255);\\"><span class=\\"MuiButton-label\\">ارسال پیام به مشاور</span><span class=\\"MuiTouchRipple-root\\"></span></button></a></span>
                </div>
              </div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-6\\">
                <div class=\\"MuiPaper-root WithStyles(ForwardRef(Paper))-root-6 WithStyles(ForwardRef(Paper))-root-8 MuiPaper-elevation1 MuiPaper-rounded\\"><span style=\\"color: rgb(63, 64, 125); text-align: center;\\"><h3><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"bullhorn\\" class=\\"svg-inline--fa fa-bullhorn fa-w-18 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 576 512\\" style=\\"margin: 0px;\\"><path fill=\\"currentColor\\" d=\\"M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z\\"></path></svg>&nbsp;کانال مشاور</h3></span>
                  <hr><br><span style=\\"color: rgb(99, 99, 99); text-align: right;\\">کانال شخصی مشاور</span><br><br><span><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-text\\" tabindex=\\"0\\" type=\\"button\\" style=\\"background-color: rgb(39, 189, 160); font-family: IRANSansWeb; color: rgb(255, 255, 255);\\"><span class=\\"MuiButton-label\\">رفتن به کانال مشاور</span><span class=\\"MuiTouchRipple-root\\"></span></button></span>
                </div>
              </div>
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-6\\">
                <div class=\\"MuiPaper-root WithStyles(ForwardRef(Paper))-root-6 WithStyles(ForwardRef(Paper))-root-9 MuiPaper-elevation1 MuiPaper-rounded\\"><span style=\\"color: rgb(63, 64, 125); text-align: ceter;\\"><h3><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"calendar-alt\\" class=\\"svg-inline--fa fa-calendar-alt fa-w-14 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 448 512\\" style=\\"margin: 0px;\\"><path fill=\\"currentColor\\" d=\\"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z\\"></path></svg>&nbsp;تقويم مشاوره</h3></span>
                  <hr><br><span style=\\"color: rgb(99, 99, 99); text-align: right;\\">قابلیت رزرو زمان براي مشاوره</span><br><br><span><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-text\\" tabindex=\\"0\\" type=\\"button\\" style=\\"background-color: rgb(39, 189, 160); font-family: IRANSansWeb; color: rgb(255, 255, 255);\\"><span class=\\"MuiButton-label\\">ديدن زمان هاي مشاوره</span><span class=\\"MuiTouchRipple-root\\"></span></button></span>
                </div>
              </div>
            </div>
            <div class=\\"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3\\">
              <div class=\\"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12\\">
                <div class=\\"MuiPaper-root WithStyles(ForwardRef(Paper))-root-6 WithStyles(ForwardRef(Paper))-root-10 MuiPaper-elevation1 MuiPaper-rounded\\">
                  <div style=\\"text-align: right; color: rgb(63, 64, 125);\\">
                    <h3>اطلاعات مشاور</h3>
                  </div>
                  <hr>
                  <div>
                    <div class=\\"MuiPaper-root MuiAccordion-root makeStyles-colorfont-5 Mui-expanded MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded\\">
                      <div class=\\"MuiButtonBase-root MuiAccordionSummary-root Mui-expanded\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\" aria-expanded=\\"true\\" aria-controls=\\"panel1a-content\\" id=\\"panel1a-header\\">
                        <div class=\\"MuiAccordionSummary-content Mui-expanded\\">
                          <p class=\\"MuiTypography-root MuiTypography-body1\\"><span style=\\"font-family: IRANSansWeb; font-weight: 700;\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"info-circle\\" class=\\"svg-inline--fa fa-info-circle fa-w-16 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" style=\\"margin: 0px;\\"><path fill=\\"currentColor\\" d=\\"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z\\"></path></svg>&nbsp;بیوگرافی</span></p>
                        </div>
                        <div class=\\"MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon Mui-expanded MuiIconButton-edgeEnd\\" aria-disabled=\\"false\\" aria-hidden=\\"true\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></div>
                      </div>
                      <div class=\\"MuiCollapse-container MuiCollapse-entered\\" style=\\"min-height: 0px;\\">
                        <div class=\\"MuiCollapse-wrapper\\">
                          <div class=\\"MuiCollapse-wrapperInner\\">
                            <div aria-labelledby=\\"panel1a-header\\" id=\\"panel1a-content\\" role=\\"region\\">
                              <div class=\\"MuiAccordionDetails-root\\">
                                <p class=\\"MuiTypography-root MuiTypography-body1\\"><span style=\\"font-family: IRANSansWeb;\\">اطلاعات به زودی وارد خواهد شد</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"MuiPaper-root MuiAccordion-root makeStyles-colorfont-5 Mui-expanded MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded\\">
                      <div class=\\"MuiButtonBase-root MuiAccordionSummary-root Mui-expanded\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\" aria-expanded=\\"true\\" aria-controls=\\"panel2a-content\\" id=\\"panel2a-header\\">
                        <div class=\\"MuiAccordionSummary-content Mui-expanded\\">
                          <p class=\\"MuiTypography-root MuiTypography-body1\\"><span style=\\"font-family: IRANSansWeb; font-weight: 700;\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"history\\" class=\\"svg-inline--fa fa-history fa-w-16 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" style=\\"margin: 0px;\\"><path fill=\\"currentColor\\" d=\\"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z\\"></path></svg>&nbsp;سوابق</span></p>
                        </div>
                        <div class=\\"MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon Mui-expanded MuiIconButton-edgeEnd\\" aria-disabled=\\"false\\" aria-hidden=\\"true\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></div>
                      </div>
                      <div class=\\"MuiCollapse-container MuiCollapse-entered\\" style=\\"min-height: 0px;\\">
                        <div class=\\"MuiCollapse-wrapper\\">
                          <div class=\\"MuiCollapse-wrapperInner\\">
                            <div aria-labelledby=\\"panel2a-header\\" id=\\"panel2a-content\\" role=\\"region\\">
                              <div class=\\"MuiAccordionDetails-root\\">
                                <p class=\\"MuiTypography-root MuiTypography-body1\\"><span style=\\"font-family: IRANSansWeb;\\">اطلاعات به زودی وارد خواهد شد</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"MuiPaper-root MuiAccordion-root makeStyles-colorfont-5 Mui-expanded MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded\\">
                      <div class=\\"MuiButtonBase-root MuiAccordionSummary-root Mui-expanded\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\" aria-expanded=\\"true\\" aria-controls=\\"panel2a-content\\" id=\\"panel2a-header\\">
                        <div class=\\"MuiAccordionSummary-content Mui-expanded\\">
                          <p class=\\"MuiTypography-root MuiTypography-body1\\"><span style=\\"font-family: IRANSansWeb; font-weight: 700;\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"thumbs-up\\" class=\\"svg-inline--fa fa-thumbs-up fa-w-16 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" style=\\"margin: 0px;\\"><path fill=\\"currentColor\\" d=\\"M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z\\"></path></svg>&nbsp;شبکه های اجتماعی</span></p>
                        </div>
                        <div class=\\"MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon Mui-expanded MuiIconButton-edgeEnd\\" aria-disabled=\\"false\\" aria-hidden=\\"true\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></div>
                      </div>
                      <div class=\\"MuiCollapse-container MuiCollapse-entered\\" style=\\"min-height: 0px;\\">
                        <div class=\\"MuiCollapse-wrapper\\">
                          <div class=\\"MuiCollapse-wrapperInner\\">
                            <div aria-labelledby=\\"panel2a-header\\" id=\\"panel2a-content\\" role=\\"region\\">
                              <div class=\\"MuiAccordionDetails-root\\">
                                <p class=\\"MuiTypography-root MuiTypography-body1\\"><span style=\\"font-family: IRANSansWeb;\\">اطلاعات به زودی وارد خواهد شد</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class=\\"MuiPaper-root MuiAccordion-root makeStyles-colorfont-5 Mui-expanded MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded\\">
                      <div class=\\"MuiButtonBase-root MuiAccordionSummary-root Mui-expanded\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\" aria-expanded=\\"true\\" aria-controls=\\"panel2a-content\\" id=\\"panel2a-header\\">
                        <div class=\\"MuiAccordionSummary-content Mui-expanded\\">
                          <p class=\\"MuiTypography-root MuiTypography-body1\\"><span style=\\"font-family: IRANSansWeb; font-weight: 700;\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"chart-line\\" class=\\"svg-inline--fa fa-chart-line fa-w-16 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\" style=\\"margin: 0px;\\"><path fill=\\"currentColor\\" d=\\"M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z\\"></path></svg>&nbsp;فعالیت ها</span></p>
                        </div>
                        <div class=\\"MuiButtonBase-root MuiIconButton-root MuiAccordionSummary-expandIcon Mui-expanded MuiIconButton-edgeEnd\\" aria-disabled=\\"false\\" aria-hidden=\\"true\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></div>
                      </div>
                      <div class=\\"MuiCollapse-container MuiCollapse-entered\\" style=\\"min-height: 0px;\\">
                        <div class=\\"MuiCollapse-wrapper\\">
                          <div class=\\"MuiCollapse-wrapperInner\\">
                            <div aria-labelledby=\\"panel2a-header\\" id=\\"panel2a-content\\" role=\\"region\\">
                              <div class=\\"MuiAccordionDetails-root\\">
                                <p class=\\"MuiTypography-root MuiTypography-body1\\"><span style=\\"font-family: IRANSansWeb;\\">اطلاعات به زودی وارد خواهد شد</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>"
  `);
});
