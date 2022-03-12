import React from 'react';
import ReactDOM from 'react-dom';
import {Button,Form,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

//ToDo App
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className='container'>
        <div className='col-6'>
          <h3>Tareas pendientes</h3>
            <TodoList items={this.state.items} />
              <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col>
                    <Form.Control id="new-todo" 
                      placeholder="¿Que se necesita hacer?"
                      onChange={this.handleChange}
                      value={this.state.text} 
                    />
                  </Col>
                  <Col>
                    <Button variant='outline-primary' type='submit'>
                      Añadir# {this.state.items.length + 1 }
                    </Button>
                  </Col>
                </Row>
              </Form>
        </div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });   
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  
  }
}

class TodoList extends React.Component {
  render() {
    return (
        
      <ul>
      {this.props.items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>

    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

