const textoPadrao = {
  fontFamily: 'Lato'
};

const styles = (theme: Object) => ({
  textoPadrao: {
    fontFamily: 'Lato',
    color: '#B8B8B8',
    fontSize: 13
  },
  degredeButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    width: 150,
    height: 48,
    padding: '0 30px'
  },
  root: {
    flexGrow: 1
  },
  paper: {
    margin: 'auto',
    maxWidth: 500
  },
  gridCenter: {
    height: '100vh'
  },
  margin: {
    margin: '30px 20px 20px 20px'
  }
});

export default styles;
