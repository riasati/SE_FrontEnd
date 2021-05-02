import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import ChannelCardList from "../Component/Channel/ChannelCardList";

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

it("ChannelCardList Test", () => {
  act(() => {
    render(<ChannelCardList title="Hello" />, container);
  });
  //expect(container.textContent).toContain("Jenny");

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<ul class=\\"MuiList-root MuiList-dense MuiList-padding MuiList-subheader\\">
      <li class=\\"MuiListSubheader-root MuiListSubheader-sticky\\">
        <h6 class=\\"MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom MuiTypography-alignLeft\\">Hello</h6>
      </li>
    </ul>"
  `);
});
