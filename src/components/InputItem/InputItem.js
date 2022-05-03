import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';
import styles from './InputItem.module.css';

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
    const isError = this.props.error;
    let textField;
    if(isError) {
        textField=<TextField
        error
        id="standard-helperText"
        label="Ввести название урока"
        fullWidth
        variant="standard"
        defaultValue=""
        helperText="Необходимо заполнить поле"
        value={this.state.InputValue}
        onChange={event => this.setState({InputValue: event.target.value})}
      />
    } else {
      textField=<TextField 
        id="standard-helperText"
        label="Ввести название урока"
        margin="dense"
        fullWidth
        value={this.state.InputValue}
        onChange={event => this.setState({InputValue: event.target.value})}
      />
    }
  
  return (<div className={styles.input}>
      {textField}
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