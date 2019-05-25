import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Home extends React.Component {

  state = {
    data: []
  }

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount() {
    fetch('http://localhost:8000', {
        method: 'get'
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data);
        if(data.success) {
          this.setState({data: data.data});
        }
      });
  }

  render() {
    return (
        <div className={this.props.classes.div}>
        {
          this.state.data.length === 0
          ?
          <Typography variant="h5" noWrap>The table is empty, please add element</Typography>
          :
          <Paper className={this.props.classes.root}>
            <Table className={this.props.classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="right">Author</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Section</TableCell>
                  <TableCell align="right">Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.data.map((value, key) => (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">{value.title}</TableCell>
                    <TableCell align="right">{value.author}</TableCell>
                    <TableCell align="right">{value.status}</TableCell>
                    <TableCell align="right">{value.section}</TableCell>
                    <TableCell align="right">{value.ts}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        }
        </div>
    );
  }

}

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default withStyles(styles)(Home);
