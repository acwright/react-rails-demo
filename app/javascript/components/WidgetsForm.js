import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import $ from "jquery";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
});

class WidgetsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.props.authenticity);

    $.ajax({
      url: '/widgets',
      dataType: 'json',
      type: 'POST',
      data: {widget: {name: this.state.name}, authenticity_token: this.props.authenticity},
      success: function(data) {
        window.location.assign('/widgets/' + data.id);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render () {
    const classes = styles;
    const widget = this.props.widget;

    return (
      <React.Fragment>
        <form className={classes.container} onSubmit={this.handleSubmit} autoComplete="off">
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            required
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Widget
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

WidgetsForm.propTypes = {
  widget: PropTypes.object,
  authenticity: PropTypes.string
};

export default withStyles(styles)(WidgetsForm)
