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
    render(<CommentCard user_first_name={"Ali"} user_last_name={"Asadi"} avatar={'../../image/medicalgroup.jpg'} comment={"Hello World"} rate={3} date={""} index={1}/>, container);
  });
  expect(container.querySelector("div").textContent).toBe("AliHello World");
  act(() => {
    render(<CommentCard user_first_name={"Ali"} user_last_name={"Asadi"} avatar={'../../image/lawyergroup.jpg'} comment={"Hello World"} rate={3} date={""} index={1}/>, container);
  });
  expect(container.querySelector("img").src).toContain("http://localhost/image/lawyergroup.jpg");
  
  act(() => {
    render(<CommentCard user_first_name={"Ali"} user_last_name={"Asadi"} avatar={null} comment={"Hello World"} rate={3} date={""} index={1}/>, container);
  });
  expect(container.querySelector("img").src).toContain("http://localhost/image/defaultavatar.jpg");
  
  act(() => {
    render(<CommentCard user_first_name={"Ali"} user_last_name={"Asadi"} avatar={null} comment={"Hello World"} rate={3} date={""} index={1}/>, container);
  });
  expect(container.querySelector("[data-testid='comment']").textContent).toEqual("Hello World");
  
  act(() => {
    render(<CommentCard user_first_name={"Ali"} user_last_name={"Asadi"} avatar={null} comment={"Hello World"} rate={3} date={""} index={1}/>, container);
  });
  expect(container.querySelector("[data-testid='fname']").textContent).toEqual("Ali");
  
  act(() => {
    render(<CommentCard user_first_name={"Ali"} user_last_name={"Asadi"} avatar={null} comment={"Hello World"} rate={3} date={"1639-11-08"} index={1}/>, container);
  });
  expect(container.querySelector("[data-testid='date']").textContent).toEqual("۱۰۱۸/۰۸/۱۷");
  
});