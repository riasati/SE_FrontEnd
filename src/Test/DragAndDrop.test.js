import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import DragAndDrop from "../Component/Channel/DragAndDrop";

let container = null;
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

it("DragAndDrop Test", () => {
  act(() => {
    render(<DragAndDrop enable={true} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div style=\\"display: block; position: relative;\\"></div>"`
  );

  act(() => {
    render(<DragAndDrop enable={false} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div style=\\"display: block; position: relative;\\"></div>"`
  );
});
