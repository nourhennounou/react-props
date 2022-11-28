import "bootstrap/dist/css/bootstrap.min.css";
import FULLNAME from "./fullname";
import Card from 'react-bootstrap/Card';
import Profession from "./profession";
import BIO from "./bio";
import Image from './image.jpg';
import Pi from "./PI";
function Profile(props) {
  const handleclick=(x)=>{
    alert(`hello ${x}`)
  }
  return (
  <div className="row">
    <div className="App">
      <Card style={{ width: '18rem' }}>

      <Card.Body>
        <Card.Title><Pi image={Image} />
          <FULLNAME  handleclick={handleclick} name="Nourhen"/></Card.Title>
        <Card.Text>
         <Profession pro="devlopper"/>
        </Card.Text>
        <BIO bio="js"/>
      </Card.Body>
    </Card>
    </div>
    </div>
    
  ) 
};



export default Profile;