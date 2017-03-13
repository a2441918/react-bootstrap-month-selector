import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import { OverlayTrigger, Button } from "react-bootstrap";
import DatePicker from "../src";
import RangePopover from "../src/RangePopover";
import MonthSelector from "../src/MonthSelector";

storiesOf("Date Picker", module).add("with text", () => <DatePicker />);
storiesOf("Range Popover", module)
  .add("standard view", () => <RangePopover />)
  .add("with trigger", () => {
    return (
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={<RangePopover />}
      >
        <Button>Show Popover</Button>
      </OverlayTrigger>
    );
  })
  .add("with trigger and rootClose", () => {
    return (
      <OverlayTrigger
        rootClose
        trigger="click"
        placement="right"
        overlay={<RangePopover showButtons={false} />}
      >
        <Button>Show Popover</Button>
      </OverlayTrigger>
    );
  });
storiesOf("Month Selector", module).add("with text", () => {
  return (
    <MonthSelector
      month={1}
      year={2016}
      onSelect={result => alert(result.month + "/" + result.year)}
    />
  );
});
