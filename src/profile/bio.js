import PropTypes from 'prop-types' ;
function BIO(props) {
    return (
      <div className="">
        <p style={{fontSize:"25px"}}>{props.bio}</p>
      </div>
    );
  }
 BIO.propTypes = {

    bio: PropTypes.string,
  }

  export default BIO;