import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import DatePicker from "../src";
import RangePopover from "../src/RangePopover";
import MonthSelector from "../src/MonthSelector";

storiesOf("Date Picker", module).add("with text", () => <DatePicker />);
storiesOf("Range Popover", module).add("with text", () => <RangePopover />);
storiesOf("Month Selector", module).add("with text", () => {
  return <MonthSelector month={1} year={2016} onSelect={result => alert(result.month + '/' + result.year)} />
});
