import React from "react";
import { storiesOf, action, linkTo } from "@kadira/storybook";
import { OverlayTrigger, Button } from "react-bootstrap";
import RangePopover from "../src/RangePopover";
import MonthSelector from "../src/MonthSelector";

const month = (new Date()).getMonth();
const year = (new Date()).getYear() + 1900;
const start = { month, year };
const end = { month, year };

function alertArgs(...args) {
  console.log(args);
  alert(JSON.stringify(args));
}

storiesOf("Range Popover", module)
  .add("standard view", () => {
    return <RangePopover start={start} end={end} onSave={alertArgs} />;
  })
  .add("with trigger", () => {
    return (
      <OverlayTrigger
        trigger="click"
        placement="right"
        overlay={<RangePopover start={start} end={end} onSave={alertArgs} />}
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
        overlay={<RangePopover start={start} end={end} showButtons={false} onChange={alertArgs}  />}
      >
        <Button>Show Popover</Button>
      </OverlayTrigger>
    );
  });

storiesOf("Month Selector", module).add("with text", () => {
  return <MonthSelector month={1} year={2016} onSelect={alertArgs} />;
});
