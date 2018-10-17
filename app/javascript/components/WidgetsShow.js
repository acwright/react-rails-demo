import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

class WidgetsShow extends React.Component {
  render () {
    const classes = styles;
    const widget = this.props.widget;

    return (
      <React.Fragment>
        <Typography variant="body1">Name: {widget.name}</Typography>
        <Button href={"/widgets/" + widget.id + "/edit"} className={classes.button}>Edit</Button>
        <Button href={"/widgets"} className={classes.button}>Back</Button>
      </React.Fragment>
    );
  }
}

WidgetsShow.propTypes = {
  widget: PropTypes.object
};

export default withStyles(styles)(WidgetsShow)
