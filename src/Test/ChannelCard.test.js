import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import ChannelCard from "../Component/Channel/ChannelCard";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("ChannelCard Test", () => {
  act(() => {
    render(<ChannelCard name="Jenny" />, container);
  });
  expect(container.textContent).toContain("Jenny");

  //expect(pretty(container.innerHTML)).toMatchInlineSnapshot();

  act(() => {
    render(<ChannelCard name="salam" />, container);
  });
  expect(container.textContent).toContain("salam");

  //expect(pretty(container.innerHTML)).toMatchInlineSnapshot();

  act(() => {
    render(<ChannelCard description="Margaret" />, container);
  });
  expect(container.textContent).toContain("Margaret");

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<a class=\\"MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-divider MuiListItem-button\\" tabindex=\\"0\\" aria-disabled=\\"false\\" href=\\"/Channel/undefined\\">
      <div class=\\"MuiListItemAvatar-root\\">
        <div class=\\"MuiAvatar-root MuiAvatar-circle makeStyles-channelsAvatar-1 MuiAvatar-colorDefault\\"><svg class=\\"MuiSvgIcon-root MuiAvatar-fallback\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\">
            <path d=\\"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\\"></path>
          </svg></div>
      </div>
      <div class=\\"MuiListItemText-root MuiListItemText-dense MuiListItemText-multiline\\">
        <p class=\\"MuiTypography-root MuiTypography-body1 MuiTypography-noWrap MuiTypography-gutterBottom MuiTypography-alignLeft MuiTypography-displayBlock\\" style=\\"font-family: IRANSansWeb;\\"></p>
        <p class=\\"MuiTypography-root MuiTypography-body2 MuiTypography-noWrap MuiTypography-gutterBottom MuiTypography-alignLeft MuiTypography-displayBlock\\" style=\\"font-family: IRANSansWeb; color: rgb(9, 175, 88);\\">Margaret</p>
      </div><span class=\\"MuiTouchRipple-root\\"></span>
    </a>"
  `);
});
