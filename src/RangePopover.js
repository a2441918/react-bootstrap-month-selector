import React, { PropTypes } from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
import moment from "moment";

import MonthSelector from "./MonthSelector";

const styles = {
  footer: {
    padding: 0,
    border: "none",
  },
};

class RangePopover extends React.Component {
  static propTypes = {
    onSave: PropTypes.func,
    onClose: PropTypes.func,
    onChange: PropTypes.func,
    showButtons: PropTypes.func.bool,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
  };

  static defaultProps = {
    showButtons: true,
  };

  constructor(props) {
    super();

    this.onSetStart = this.onSetStart.bind(this);
    this.onSetEnd = this.onSetEnd.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      start: { year: 2012, month: 1 },
      end: { year: 2012, month: 2 },
      //  start: dateParts(props.start),
      //  end: dateParts(props.end),
    };
  }

  onSetStart(start) {
    this.setState({ start }, this.onChange);
  }

  onSetEnd(end) {
    this.setState({ end }, this.onChange);
  }

  onClose() {
    this.props.onClose && this.props.onClose();
  }

  onChange() {
    const { start, end } = this.state;
    this.props.onChange &&
      this.props.onChange(
        {
          //  start: moment().year(start.year).month(start.month - 1).date(1).format(DATE_FORMAT),
          //  end: moment().year(end.year).month(end.month).date(0).format(DATE_FORMAT),
        }
      );
  }

  onSave() {
    const { start, end } = this.state;
    this.props.onSave &&
      this.props.onSave(
        {
          //  start: moment().year(start.year).month(start.month - 1).date(1).format(DATE_FORMAT),
          //  end: moment().year(end.year).month(end.month).date(0).format(DATE_FORMAT),
        }
      );
  }

  render() {
    const { start, end } = this.state;
    const { onSave, onClose, onChange, start: _s, end: _e, showButtons, ...props } = this.props;

    return (
      <Popover {...props}>
        <div className="form-group">
          <MonthSelector
            month={start.month}
            year={start.year}
            onSelect={this.onSetStart}
          />
        </div>
        <div className="form-group">
          <MonthSelector
            month={end.month}
            year={end.year}
            onSelect={this.onSetEnd}
          />
        </div>
        {showButtons
          ? <div className="modal-footer" style={styles.footer}>
              <Button onClick={this.onClose}>Close</Button>
              <Button bsStyle="primary" onClick={this.onSave}>Save</Button>
            </div>
          : null}
      </Popover>
    );
  }
}

export default RangePopover;
