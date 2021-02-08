import React from "react";
import { Form, Input, Button, Layout } from 'antd';
import './accueil.css';

const { Header, Footer, Content } = Layout;
export default class Accueil extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    render() {
        const submitForm = (values)=> {
            // console.log(values);
        }
        //
      return (
          <>
            <Layout>
                <Header>Header</Header>
                <Content>
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