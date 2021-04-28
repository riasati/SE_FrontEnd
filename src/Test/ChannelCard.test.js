import React from "react";
import { render ,unmountComponentAtNode } from "react-dom";
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

it("renders with or without a name", () => {
    act(() => {
        render(<ChannelCard name="Jenny"/>, container);
        });
     expect(container.textContent).toContain("Jenny");

    //expect(pretty(container.innerHTML)).toMatchInlineSnapshot();

    //expect(container.).toContain("Jenny");
    act(() => {
        render(<ChannelCard name="salam"  />, container);
    });
    expect(container.textContent).toContain("salam");

    //expect(pretty(container.innerHTML)).toMatchInlineSnapshot();

    act(() => {
        render(<ChannelCard description="Margaret" />, container);
    });
     expect(container.textContent).toContain("Margaret");

    //expect(pretty(container.innerHTML)).toMatchInlineSnapshot();

});