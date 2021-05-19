import React from "react";
import { render, unmountComponentAtNode, } from "react-dom";
import { render as render1, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import ChannelCard from "../Component/GroupingChannel/ChannelCard";

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

it("renders with or without a name", () => {
  act(() => {
    render(<ChannelCard name={"Ali"} consultant_full_name={"Ali Asadi"} invite_link={"alitest"} avatar={'../../image/medicalgroup.jpg'} channelID={"2"}/>, container);
  });
  expect(container.querySelector("h3").textContent).toBe("Ali");
  act(() => {
    render(<ChannelCard name={"Ali"} consultant_full_name={"Ali Asadi"} invite_link={"alitest"} avatar={'../../image/medicalgroup.jpg'} channelID={"2"}/>, container);
  });
  expect(container.querySelector("div").textContent).toBe("AliAli Asadi");
  act(() => {
    render(<ChannelCard name={"Ali"} consultant_full_name={"Ali Asadi"} invite_link={"alitest"} avatar={'../../image/lawyergroup.jpg'} channelID={"2"}/>, container);
  });  
  expect(container.querySelector("img").src).toContain("http://localhost/image/lawyergroup.jpg");
  act(() => {
    render(<ChannelCard name={"Ali"} consultant_full_name={"Ali Asadi"} invite_link={"alitest"} avatar={null} channelID={"2"}/>, container);
  });  
  expect(container.querySelector("img").src).toContain("http://localhost/image/medicalgroup.jpg");
});