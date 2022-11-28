import PropTypes from 'prop-types' ;
function Profession(props) {
    return (
      <>
        <span style={{color:"green",fontSize:"30px"}}>{props.pro}</span>
      </>
    );
  }
  Profession.propTypes = {

    pro: PropTypes.string,
  }
  Profession.defaultProps = {
    pro:"profession"
  };

  export default Profession;