import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WidgetsForm from './WidgetsForm';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class WidgetsEdit extends React.Component {
  render () {
    const classes = styles;
    const widget = this.props.widget;

    return (
      <React.Fragment>
        <WidgetsForm widget={widget} authenticity={this.props.authenticity_token} />
        <Button href={"/widgets/" + widget.id} className={classes.button}>Show</Button>
        <Button href={"/widgets"} className={classes.button}>Back</Button>
      </React.Fragment>
    );
  }
}

WidgetsEdit.propTypes = {
  widget: PropTypes.object,
  authenticity_token: PropTypes.string
};

export default withStyles(styles)(WidgetsEdit)
