import React, { Component } from 'react';
import './App.css';
import Plan from './Plan';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends Component {

  state = {
    items: [],
    text: ""
  }

  handelChange = e => {
    this.setState({ text: e.target.value })
    console.log("text", this.text)
  }
  handler = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" })

    }

  }
  hdelete = id => {
    console.log("d", id);
    const Olditem = [...this.state.items]
    const items = Olditem.filter((element, i) => {
      return i !== id
    })
    this.setState({ items: items });
  }
  render() {

    return (
      <div className="container-fluid my-5">

        <div className="row">

          <div className="col-sm-6 mx-auto text-white shadow-lg p-2">

            <h2 className='text-center'>To Do </h2>

            <div className="col-9">

              <input type="text" className='form-control' placeholder='write your plan'
                value={this.state.text} onChange={this.handelChange} />

            </div>

            <div className="col-2">

              <button className="btn btn-warning px-4 font-weigth-bold" onClick={this.handler}>Add </button>

            </div>

            <div className="container-fluid">
              <ul className='list-unstyled row m-5'>

                {
                  this.state.items.map((value, i) => {
                    return <Plan key={i} id={i} value={value} sendData={this.hdelete} />
                  })
                }
              </ul>
            </div>


          </div>
        </div>


      </div>
    );
  }
}

export default App;




































































































































































































































































































































































































