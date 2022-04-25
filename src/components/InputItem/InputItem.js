import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@mui/material/Button';

class InputItem extends React.Component {
  state = {
    InputValue: ''
  };

  onButtonClickClear = () => {
    this.setState({
      InputValue: ''
    });
    this.props.onClickAdd(this.state.InputValue);
  }

  render() {
    const {onClickAdd} = this.props;

    return (<div className={styles.input}>
      <TextField 
        id="standard-helperText"
        label="Ввести название урока"
        margin="dense"
        fullWidth
        value={this.state.InputValue}
        onChange={event => this.setState({InputValue: event.target.value})}
      />
      <Button 
        variant="contained"
        onClick={this.onButtonClickClear}
      >
        Добавить задание
      </Button>
    </div>);
  }
}



export default InputItem;