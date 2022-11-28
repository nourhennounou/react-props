import PropTypes from 'prop-types' ;
function FULLNAME(props) {
 
    return (
      <> 
        <p style={{color:"red",fontSize:"50px"}}>{props.name}</p>
       <button  onClick={()=>props.handleclick(props.name)}>click me</button>
      </>
    );
  }
   FULLNAME.propTypes = {
   name: PropTypes.string,
  }
   FULLNAME.defaultProps = {
    name:"name"
  };


  export default FULLNAME;
