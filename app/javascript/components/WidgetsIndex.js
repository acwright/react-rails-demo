import React from "react";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%'
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class WidgetsIndex extends React.Component {
  render () {
    const classes = styles;
    const widgets = this.props.widgets;

    return (
      <React.Fragment>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Show</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Destroy</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {widgets.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>
                    <Button href={"/widgets/" + row.id} className={classes.button}>Show</Button>
                  </TableCell>
                  <TableCell>
                    <Button href={"/widgets/" + row.id + "/edit"} className={classes.button}>Edit</Button>
                  </TableCell>
                  <TableCell>
                    <Button href={"/widgets/" + row.id} rel="nofollow" data-method="delete" className={classes.button}>Destroy</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <br />
        <Button href={"/widgets/new"} className={classes.button}>New Widget</Button>
      </React.Fragment>
    );
  }
}

WidgetsIndex.propTypes = {
  widgets: PropTypes.array
};

export default withStyles(styles)(WidgetsIndex)
