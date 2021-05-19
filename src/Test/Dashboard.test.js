import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Dashboard from "../Component/Dashboard/Dashboard";
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

it("Dashboard Test", () => {
  act(() => {
    render(<Dashboard />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div dir=\\"rtl\\">
      <div class=\\"makeStyles-root-1\\">
        <header class=\\"MuiPaper-root MuiAppBar-root MuiAppBar-positionAbsolute MuiAppBar-colorPrimary makeStyles-appBar-4 makeStyles-appBarShift-5 MuiPaper-elevation4\\">
          <div class=\\"MuiToolbar-root MuiToolbar-regular makeStyles-toolbar-2 MuiToolbar-gutters\\"><button class=\\"MuiButtonBase-root MuiIconButton-root makeStyles-menuButton-6 makeStyles-menuButtonHidden-7 MuiIconButton-colorInherit MuiIconButton-edgeStart\\" tabindex=\\"0\\" type=\\"button\\" aria-label=\\"open drawer\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button>
            <h1 class=\\"MuiTypography-root makeStyles-title-8 MuiTypography-h6 MuiTypography-noWrap\\"></h1>
            <div>
              <div><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-text\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiButton-label\\"><img src=\\"\\" class=\\"makeStyles-avatar-16\\"></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
            </div>
          </div>
        </header>
        <div class=\\"MuiDrawer-root MuiDrawer-docked\\">
          <div class=\\"MuiPaper-root MuiDrawer-paper makeStyles-drawerPaper-9 MuiDrawer-paperAnchorRight MuiDrawer-paperAnchorDockedRight MuiPaper-elevation0\\">
            <div class=\\"makeStyles-toolbarIcon-3\\"><button class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiIconButton-label\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"chevron-right\\" class=\\"svg-inline--fa fa-chevron-right fa-w-10 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 320 512\\" style=\\"color: rgb(63, 64, 125); font-size: 25px;\\"><path fill=\\"currentColor\\" d=\\"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
            <hr class=\\"MuiDivider-root\\">
            <ul class=\\"MuiList-root MuiList-padding\\">
              <div><a style=\\"text-decoration: none;\\" href=\\"/Dashboard\\">
                  <div class=\\"MuiButtonBase-root MuiListItem-root makeStyles-ListItem-22 MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                    <div class=\\"MuiListItemIcon-root\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"th-large\\" class=\\"svg-inline--fa fa-th-large fa-w-16 makeStyles-FontIcon-23\\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\">
                        <path fill=\\"currentColor\\" d=\\"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z\\"></path>
                      </svg></div>
                    <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">داشبورد</span></div><span class=\\"MuiTouchRipple-root\\"></span>
                  </div>
                </a><a style=\\"text-decoration: none;\\" href=\\"/GroupingChannel\\">
                  <div class=\\"MuiButtonBase-root MuiListItem-root makeStyles-ListItem-22 MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                    <div class=\\"MuiListItemIcon-root\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"layer-group\\" class=\\"svg-inline--fa fa-layer-group fa-w-16 makeStyles-FontIcon-23\\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 512 512\\">
                        <path fill=\\"currentColor\\" d=\\"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z\\"></path>
                      </svg></div>
                    <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">دسته بندی</span></div><span class=\\"MuiTouchRipple-root\\"></span>
                  </div>
                </a><a style=\\"text-decoration: none;\\" href=\\"/EditProfile\\">
                  <div class=\\"MuiButtonBase-root MuiListItem-root makeStyles-ListItem-22 MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                    <div class=\\"MuiListItemIcon-root\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"user\\" class=\\"svg-inline--fa fa-user fa-w-14 makeStyles-FontIcon-23\\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 448 512\\">
                        <path fill=\\"currentColor\\" d=\\"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z\\"></path>
                      </svg></div>
                    <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\"> ویرایش اطلاعات</span></div><span class=\\"MuiTouchRipple-root\\"></span>
                  </div>
                </a><a style=\\"text-decoration: none;\\" href=\\"/Channels\\">
                  <div class=\\"MuiButtonBase-root MuiListItem-root makeStyles-ListItem-22 MuiListItem-gutters MuiListItem-button\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\">
                    <div class=\\"MuiListItemIcon-root\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"bullhorn\\" class=\\"svg-inline--fa fa-bullhorn fa-w-18 makeStyles-FontIcon-23\\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 576 512\\">
                        <path fill=\\"currentColor\\" d=\\"M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z\\"></path>
                      </svg></div>
                    <div class=\\"MuiListItemText-root\\"><span class=\\"MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock\\">کانال ها</span></div><span class=\\"MuiTouchRipple-root\\"></span>
                  </div>
                </a></div>
            </ul>
            <hr class=\\"MuiDivider-root\\">
            <ul class=\\"MuiList-root MuiList-padding\\">
              <div></div>
            </ul>
          </div>
        </div>
        <main class=\\"makeStyles-content-12\\">
          <div class=\\"makeStyles-appBarSpacer-11\\"></div>
          <div class=\\"MuiContainer-root makeStyles-container-13 MuiContainer-maxWidthLg\\"></div>
        </main>
      </div>
    </div>"
  `);
});
