import { Container, Row, Col } from "react-bootstrap";
import UserCard from "./UserCard";
const Home = (props) => {
  return (
    <Container>
      <Row>
        {props.data.map((singleUser, idx) => {
          return (
            <Col md={3} key={idx}>
              <UserCard
                singleUser={singleUser}
                setData={props.setData}
                data={props.data}
                key={props.data?.id}
                setDataUpdated={props.setDataUpdated}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default Home;
