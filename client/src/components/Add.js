import React from "react";
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Add extends React.Component {

  state = {
    title: '',
    author: '',
    ts: '',
    section: '',
    status: 'edition',
    content: ''
  }

  _onClick = () => {
    if(this.state.title !== ''
        && this.state.author !== ''
        && this.state.ts !== ''
        && this.state.section !== ''
        && this.state.status !== ''
        && this.state.content !== '') {
          fetch('http://localhost:8000', {
              method: 'post',
              body: JSON.stringify(this.state),
              headers: { 'Content-type': 'application/json' }
            }).then((response) => {
              return response.json();
            }).then((data) => {
              console.log(data);
              if(data.success) {
                this.setState({
                  title: '',
                  author: '',
                  ts: '',
                  section: '',
                  status: 'edition',
                  content: ''
                })
                alert('Added to the database');
              } else {
                alert('Error');
              }

            })
    } else {
      alert('One of the field is empty')
    }
  }

  render() {
    return (
      <Paper className={this.props.classes.root} style={{padding: '4%'}}>
        <Typography variant="h5">Add an article</Typography>
        <Grid container spacing={3} direction="column" >
            <Grid item xs={12}>
              <TextField
                id="standard-name"
                label="Title"
                className={this.props.classes.textField}
                margin="normal"
                value={this.state.title}
                onChange={(event) =>{this.setState({title: event.target.value})}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-name"
                label="Author"
                className={this.props.classes.textField}
                margin="normal"
                value={this.state.author}
                onChange={(event) =>{this.setState({author: event.target.value})}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="date"
                label="Date"
                type="date"
                value={this.state.ts}
                onChange={(event) =>{this.setState({ts: event.target.value})}}
                className={this.props.classes.textField}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel htmlFor="age-simple">Section</InputLabel>
                <Select
                  value={this.state.section}
                  onChange={(event) =>{this.setState({section: event.target.value})}}
                  inputProps={{ name: 'section', id: 'section-simple'}}>
                  <MenuItem value={'scifi'}>Sci-Fi</MenuItem>
                  <MenuItem value={'business'}>Business</MenuItem>
                  <MenuItem value={'computing'}>Computing Science</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" className={this.props.classes.formControl}>
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup
                  aria-label="Status"
                  name="status"
                  onChange={(event) =>{this.setState({status: event.target.value})}}
                  className={this.props.classes.group}
                  value={this.state.status}>
                  <FormControlLabel value="edition" control={<Radio />} label="In edition" />
                  <FormControlLabel value="submitted" control={<Radio />} label="Submitted" />
                  <FormControlLabel value="accepted" control={<Radio />} label="Accepted" />
                  <FormControlLabel value="published" control={<Radio />} label="Published" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-helperText"
                label="Text"
                value={this.state.content}
                className={this.props.classes.textField}
                onChange={(event) =>{this.setState({content: event.target.value})}}
                helperText="It is the content of your article"
                margin="normal"
                rows="10"
                multiline
                rowsMax="10"
              />
            </Grid>
            <Grid item xs={12} onClick={this._onClick}>
              <Button className={this.props.classes.button}>Validate</Button>
            </Grid>
        </Grid>
      </Paper>
    )
  }

}

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  textField: {
    width: '70%',
  },
  formControl: {
    width: '70%',
  },
  group: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  button: {
    background: 'linear-gradient(45deg, #3F51B5 30%, #314096 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

export default withStyles(styles)(Add);
