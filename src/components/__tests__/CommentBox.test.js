import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {});

it("has a textarea and a button", () => {
  expect(wrapped.find("textarea")).toHaveLength(1);
  expect(wrapped.find("button")).toHaveLength(1);
});
