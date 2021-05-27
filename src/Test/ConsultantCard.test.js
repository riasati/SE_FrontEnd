import React from "react";
import { render, unmountComponentAtNode, } from "react-dom";
import { render as render1, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom';
import ConsultantCard from "../Component/GroupingChannel/ConsultantCard";

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
    render(<ConsultantCard consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={'../../image/medicalgroup.jpg'} />, container);
  });
  expect(container.querySelector("span").textContent).toBe("Ali");
  act(() => {
    render(<ConsultantCard consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={'../../image/medicalgroup.jpg'} />, container);
  });
  expect(container.querySelector("[data-testid='cfn']").textContent).toEqual("Ali");
  act(() => {
    render(<ConsultantCard consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={'../../image/medicalgroup.jpg'} />, container);
  });
  expect(container.querySelector("[data-testid='cln']").textContent).toEqual("Asadi");
  act(() => {
    render(<ConsultantCard consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={'../../image/medicalgroup.jpg'} />, container);
  });
  expect(container.querySelector("a").getAttribute("href")).toBe("/Profile/alitest");
  act(() => {
    render(<ConsultantCard consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={'../../image/lawyergroup.jpg'} />, container);
  });  
  expect(container.querySelector("img").src).toContain("http://localhost/image/lawyergroup.jpg");
  act(() => {
    render(<ConsultantCard consultant_first_name={"Ali"} consultant_last_name={"Asadi"} direct={"alitest"} avatar={null} />, container);
  });  
  expect(container.querySelector("img").src).toContain("http://localhost/image/defaultavatar.jpg");
});