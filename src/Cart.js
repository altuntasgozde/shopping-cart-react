import React from "react";
import { Button, Col, Container, Row, Table } from "reactstrap";

export const Cart = ({ array, DeleteProduct }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Table className="table mt-5">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {array.map((item) => {
                  return (
                    <tr>
                      <th className="th" scope="row">{item.count}</th>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td><Button onClick={() => DeleteProduct(item.id)}>Delete</Button></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
