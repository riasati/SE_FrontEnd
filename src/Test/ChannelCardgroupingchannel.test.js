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
    render(<ChannelCard name={"TEST"} consultant_first_name={"Ali"} consultant_last_name={"Asadi"} invite_link={"alitest"} avatar={'../../image/medicalgroup.jpg'} channelID={"2"}/>, container);
  });
  expect(container.querySelector("h3").textContent).toBe("TEST");
  act(() => {
    render(<ChannelCard name={"TEST"} consultant_first_name={"Ali"} consultant_last_name={"Asadi"} invite_link={"alitest"} avatar={'../../image/medicalgroup.jpg'} channelID={"2"}/>, container);
  });
  expect(container.querySelector("span").textContent).toBe("Ali");
  act(() => {
    render(<ChannelCard consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={'../../image/medicalgroup.jpg'} />, container);
  });
  expect(container.querySelector("[data-testid='cfn']").textContent).toEqual("Ali");
  act(() => {
    render(<ChannelCard consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={'../../image/medicalgroup.jpg'} />, container);
  });
  expect(container.querySelector("[data-testid='cln']").textContent).toEqual("Asadi");
  act(() => {
    render(<ChannelCard name={"TeSt test id"} consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={'../../image/medicalgroup.jpg'} />, container);
  });
  expect(container.querySelector("[data-testid='pn']").textContent).toEqual("TeSt test id");
  act(() => {
    render(<ChannelCard consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={'../../image/medicalgroup.jpg'} channelID={"2"}/>, container);
  });
  expect(container.querySelector("a").getAttribute("href")).toBe("/Channel/2");
  act(() => {
    render(<ChannelCard name={"TEST"} consultant_first_name={"Ali"} consultant_last_name={"Asadi"} invite_link={"alitest"} avatar={'../../image/lawyergroup.jpg'} channelID={"2"}/>, container);
  });  
  expect(container.querySelector("img").src).toContain("http://localhost/image/lawyergroup.jpg");
  act(() => {
    render(<ChannelCard name={"TEST"} consultant_first_name={"Ali"} consultant_last_name={"Asadi"} invite_link={"alitest"} avatar={null} channelID={"2"}/>, container);
  });  
  expect(container.querySelector("img").src).toContain("http://localhost/image/defaultavatar.jpg");
});