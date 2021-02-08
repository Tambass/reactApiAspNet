import React from "react";
import { Form, Input, Button, Layout } from 'antd';
import './accueil.css';
import Axios from 'axios';

const { Header, Footer, Content } = Layout;
export default class Accueil extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          product: {}
      }
    }
    render() {
        const submitForm = (values)=> {
            // console.log(values);
            Axios.post('/api/products', values)
              .then(function (response) {
                console.log(response.data);
              })
              .catch( (error)=> {
                  this.setState({product: values})
                console.log(error);
              });
        }
        //
      return (
          <>
            <Layout>
                <Header>Header</Header>
                <Content>
                    {this.state.product && <h1>{this.state.product.name}</h1>}
                    <Form onFinish={submitForm}>
                    {/* produit */}
                    <Form.Item
                    label="Produit"
                    name="name"
                    >
                    <Input />
                    </Form.Item>
                    {/* prix */}
                    <Form.Item
                    label="Prix"
                    name="price"
                    >
                    <Input />
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                    Enregistrer
                    </Button>

                </Form>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
            
          </>
      ) // Code HTML
    }
}