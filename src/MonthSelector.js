import React, { PropTypes } from "react";
import { Glyphicon, Button } from "react-bootstrap";
import moment from "moment";

const styles = {
  yearNav: {
    display: "flex",
    alignItems: "center",
    margin: "0 1px 5px",
  },

  yearButton: {
    flex: "1",
    textAlign: "center",
    margin: "0 2px",
  },

  yearButtonText: {
    verticalAlign: "middle",
    fontWeight: "bold",
  },

  monthContainer: {
    display: "inline-block",
    padding: "1px",
    width: "25%",
    boxSizing: "border-box",
  },

  monthButton: {
    lineHeight: "3em",
    textAlign: "center",
    width: "100%",
  },
};

class MonthSelector extends React.Component {
  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
  };

  constructor(props) {
    super();

    this.onNextYear = this.onNextYear.bind(this);
    this.onPrevYear = this.onPrevYear.bind(this);
    this.onResetYear = this.onResetYear.bind(this);

    this.state = {
      year: props.year,
    };
  }

  onPrevYear() {
    this.setState({ year: this.state.year - 1 });
  }

  onNextYear() {
    this.setState({ year: this.state.year + 1 });
  }

  onSelect(month) {
    this.props.onSelect({
      month,
      year: this.state.year,
    });
  }

  onResetYear() {
    this.setState({ year: this.props.year });
  }

  renderMonth(month) {
    const selected = this.props.month === month &&
      this.props.year === this.state.year;

    return (
      <div style={styles.monthContainer} key={month}>
        <Button
          bsStyle={selected ? "complete" : "transparent"}
          style={styles.monthButton}
          onClick={() => this.onSelect(month)}
        >
          {moment().month(month).format("MMM")}
        </Button>
      </div>
    );
  }

  render() {
    const months = [];
    for (var i = 0; i < 12; i++) {
      months.push(this.renderMonth(i));
    }

    return (
      <div style={styles.root}>
        <div style={styles.yearNav}>
          <Button bsSize="small" onClick={this.onPrevYear}>
            <Glyphicon glyph="chevron-left" />
          </Button>
          <Button
            bsSize="small"
            bsStyle="transparent"
            onClick={this.onResetYear}
            style={styles.yearButton}
          >
            <span style={styles.yearButtonText} className="block-header">
              {this.state.year}
            </span>
          </Button>
          <Button bsSize="small" onClick={this.onNextYear}>
            <Glyphicon glyph="chevron-right" />
          </Button>
        </div>
        <div style={styles.months}>
          {months}
        </div>
      </div>
    );
  }
}

export default MonthSelector;
