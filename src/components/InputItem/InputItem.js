import React from 'react';
import styles from './InputItem.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
  state = {
    inputValue: ''
  };

  onButtonClick = () => {
    if (this.state.inputValue) {
      this.setState({
        inputValue: ''
      });
      this.props.onClickAdd(this.state.inputValue);
    };
  }

  render() {
    const { onClickAdd } = this.props;
    return (<div>
      <TextField
        id="outlined-basic"
        label="Добавить задание"
        variant="outlined"
        value={this.state.inputValue}
        onChange={event => this.setState({ inputValue: event.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={this.onButtonClick}
      >
        Добавить
      </Button>
    </div>);
  }
}

export default InputItem;
