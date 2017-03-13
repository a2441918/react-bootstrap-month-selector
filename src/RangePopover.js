/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */
import React, { PropTypes } from 'react';
import { Button, Popover, OverlayTrigger } from 'react-bootstrap';
import moment from 'moment';

import MonthSelector from './MonthSelector';

class RangePopover extends React.Component {
  static propTypes = {
    onSave: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  };

  constructor(props) {
    super();

    this.onSetStart = this.onSetStart.bind(this);
    this.onSetEnd = this.onSetEnd.bind(this);
    this.onSave = this.onSave.bind(this);

    this.state = {
      start: { year: 2012, month: 1 },
      end: { year: 2012, month: 2 }
    //  start: dateParts(props.start),
    //  end: dateParts(props.end),
    };
  }

  onSetStart(start) {
    this.setState({ start });
  }

  onSetEnd(end) {
    this.setState({ end });
  }

  onSave() {
    const { start, end } = this.state;
    this.props.onSave({
    //  start: moment().year(start.year).month(start.month - 1).date(1).format(DATE_FORMAT),
    //  end: moment().year(end.year).month(end.month).date(0).format(DATE_FORMAT),
    });
  }

  render() {
    const { start, end } = this.state;

    return (
      <Popover {...this.props}>
        <MonthSelector
          month={start.month}
          year={start.year}
          onSelect={this.onSetStart}
        />
        <MonthSelector
          month={end.month}
          year={end.year}
          onSelect={this.onSetEnd}
        />
        <Button bsStyle="primary" onClick={this.onSave}>Save</Button>
        <Button onClick={this.props.onClose}>Close</Button>
      </Popover>
    );
  }
}

export default RangePopover;
