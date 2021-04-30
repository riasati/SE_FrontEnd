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
          <div class=\\"MuiInputAdornment-root MuiInputAdornment-positionEnd\\"><label for=\\"file\\"><span class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" role=\\"button\\" aria-disabled=\\"false\\" aria-label=\\"upload picture\\" style=\\"padding: 0px; color: rgb(63, 64, 125);\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"font-size: 35px;\\"><path d=\\"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></span></label><button class=\\"MuiButtonBase-root MuiIconButton-root\\" tabindex=\\"0\\" type=\\"button\\" style=\\"padding: 0px; color: rgb(63, 64, 125);\\"><span class=\\"MuiIconButton-label\\"><svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" style=\\"font-size: 35px;\\"><path d=\\"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z\\"></path></svg></span><span class=\\"MuiTouchRipple-root\\"></span></button></div>
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
      </div><input style=\\"display: none;\\" id=\\"file\\" type=\\"file\\" multiple=\\"\\"><button class=\\"MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-fullWidth\\" tabindex=\\"0\\" type=\\"button\\"><span class=\\"MuiButton-label\\">پیوستن به کانال</span><span class=\\"MuiTouchRipple-root\\"></span></button>
    </div>"
  `);
});
