import { Main } from "../Main";

import { screen, render } from "@testing-library/dom";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

test("test if display is flex", () => {
  const tree = TestRenderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("display", "flex");
});

test("test if paddinf exist", () => {
  const tree = TestRenderer.create(<Main />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule("padding", "6vh");
});
