class Button extends React.Component {
  componentDidMount() {
    // this.props.theme - текущее значение контекста
  }

  componentDidUpdate(prevProps, prevState) {
    // prevProps.theme - предыдущее значение контекста
    // this.props.theme - новое значение контекста
  }

  render() {
    const {theme, children} = this.props;
    return (
      <button className={theme ? 'dark' : 'light'}>
        {children}
      </button>
    );
  }
}

export default props => (
  <ThemeContext.Consumer>
    {theme => <Button {...props} theme={theme} />}
  </ThemeContext.Consumer>
);
