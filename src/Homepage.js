import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

export const Homepage = ({ data, AddProduct }) => {
  return (
    <div>
      <Container className="my-5">
        <Row>
          {data.map((item) => {
            return (
              <Col md={{ size: 2}}>
                <Card>
                  <CardImg
                  width="100%"
                    top
                    src={item.img}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardText>${item.price}</CardText>
                    <Button color="danger" onClick={() => AddProduct(item.id)}>AddCart</Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
