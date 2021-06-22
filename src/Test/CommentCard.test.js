import React from "react";
import { render, unmountComponentAtNode, } from "react-dom";
import { render as render1, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import CommentCard from "../Component/User/Profile/Comments/CommentCard";

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

it("CommentCard test", () => {
  act(() => {
    render(<CommentCard name={"TEST"} consultant_first_name={"Ali"} consultant_last_name={"Asadi"} invite_link={"alitest"} avatar={'../../image/medicalgroup.jpg'} channelID={"2"}/>, container);
  });
  expect(container.querySelector("h3").textContent).toBe("TEST");
  
});