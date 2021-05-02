import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import "regenerator-runtime/runtime";

import ChannelMessages from "../Component/Channel/ChannelMessages";
jest.mock("../Resource/backgroundChannel.jpg");

let container = null;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

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

  console = global.console;
  global.console = console;
});

it("ChannelMessages Test", () => {
  act(() => {
    render(<ChannelMessages role={"consultant"} channelId={35} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <div style=\\"display: block; position: relative;\\">
        <div data-testid=\\"wrapper\\" class=\\"_loading_overlay_wrapper _loading_overlay_wrapper--active css-ft4slc\\">
          <div data-testid=\\"overlay\\" class=\\"_loading_overlay_overlay css-df17o1\\">
            <div class=\\"_loading_overlay_content css-42igfv\\">
              <div class=\\"_loading_overlay_spinner css-50etie\\"><svg viewBox=\\"25 25 50 50\\">
                  <circle cx=\\"50\\" cy=\\"50\\" r=\\"20\\" fill=\\"none\\" stroke-width=\\"2\\" stroke-miterlimit=\\"10\\"></circle>
                </svg></div>
            </div>
          </div>
          <div class=\\"scrollarea makeStyles-mainDiv-1\\">
            <div style=\\"margin-top: 0px; margin-left: 0px;\\" class=\\"scrollarea-content \\" tabindex=\\"1\\">
              <div style=\\"clear: both;\\"></div>
            </div>
          </div>
        </div>
      </div>
      <hr class=\\"MuiDivider-root makeStyles-divider-5\\"><input style=\\"display: none;\\" id=\\"file\\" type=\\"file\\" multiple=\\"\\">
      <div class=\\"MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth\\">
        <div class=\\"MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-fullWidth MuiInput-fullWidth MuiInputBase-formControl MuiInput-formControl MuiInputBase-multiline MuiInput-multiline MuiInputBase-adornedEnd\\" style=\\"font-family: IRANSansWeb;\\"><textarea rows=\\"1\\" aria-invalid=\\"false\\" id=\\"standard-basic\\" placeholder=\\"پیام خود را وارد کنید\\" class=\\"MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline MuiInputBase-inputAdornedEnd\\" style=\\"height: 0px; overflow: hidden;\\"></textarea><textarea aria-hidden=\\"true\\" class=\\"MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline MuiInputBase-inputAdornedEnd\\" readonly=\\"\\" tabindex=\\"-1\\" style=\\"visibility: hidden; position: absolute; overflow: hidden; height: 0px; top: 0px; left: 0px; transform: translateZ(0); width: 100%;\\"></textarea>
          <div class=\\"MuiInputAdornment-root MuiInputAdornment-positionEnd\\"><label for=\\"file\\"><span class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\" aria-label=\\"upload picture\\" style=\\"margin: 2px; padding: 0px; color: rgb(63, 64, 125);\\"><span class=\\"MuiIconButton-label\\"><svg aria-hidden=\\"true\\" focusable=\\"false\\" data-prefix=\\"fas\\" data-icon=\\"file-upload\\" class=\\"svg-inline--fa fa-file-upload fa-w-12 \\" role=\\"img\\" xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 384 512\\" style=\\"color: rgb(63, 64, 125);\\"><path fill=\\"currentColor\\" d=\\"M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></span></label><button class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" type=\\"button\\" style=\\"margin: 2px; padding: 0px; color: rgb(63, 64, 125);\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"font-size: 30px; transform: rotate(-180deg);\\"><path d=\\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
        </div>
      </div>
    </div>"
  `);

  act(() => {
    render(<ChannelMessages role={"nothing"} channelId={35} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div>
      <div style=\\"display: block; position: relative;\\">
        <div data-testid=\\"wrapper\\" class=\\"_loading_overlay_wrapper _loading_overlay_wrapper--active css-ft4slc\\">
          <div data-testid=\\"overlay\\" class=\\"_loading_overlay_overlay css-df17o1\\">
            <div class=\\"_loading_overlay_content css-42igfv\\">
              <div class=\\"_loading_overlay_spinner css-50etie\\"><svg viewBox=\\"25 25 50 50\\">
                  <circle cx=\\"50\\" cy=\\"50\\" r=\\"20\\" fill=\\"none\\" stroke-width=\\"2\\" stroke-miterlimit=\\"10\\"></circle>
                </svg></div>
            </div>
          </div>
          <div class=\\"scrollarea makeStyles-mainDiv-1\\">
            <div style=\\"margin-top: 0px; margin-left: 0px;\\" class=\\"scrollarea-content \\" tabindex=\\"1\\">
              <div style=\\"clear: both;\\"></div>
            </div>
          </div>
        </div>
      </div><input style=\\"display: none;\\" id=\\"file\\" type=\\"file\\" multiple=\\"\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiButton-label\\">پیوستن به کانال<span class=\\"MuiButton-endIcon MuiButton-iconSizeMedium\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\"><path d=\\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\\"></path></svg></span></span><span class=\\"MuiTouchRipple-root\\"></span></button>
    </div>"
  `);
});
