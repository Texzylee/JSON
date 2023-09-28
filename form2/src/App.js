import './App.css';
import {useState} from 'react'

function App() {

  const [form, setForm] = ({
    name:"",
    email:"",
    description:"",
    country:"",
    gender:"",
    agree: false,
  })

  const onChange = (e) => {
    cont [value, type, checked, name] = e.target
    setForm((state) => ({
      name: type === 'checkbox' ? checked: value
    }))
  }

  const subMit = () => {

  }
  return (
    <div className="wrapper">
      <div className="formImg">

        </div>
      <form>
        <div className='inputField'>
          <h2>REGISTER TO ORDER</h2>
          <div class="mb-3">
            <input type="name" onChange={onChange} class="form-control" id="name" placeholder="name"></input>
          </div>

          <div class="mb-3">
            <input type="email" onChange={onChange} class="form-control" id="email" placeholder="email"></input>
          </div>

          <div class="mb-3">
            <input type="email" onChange={onChange} class="form-control" id="description" placeholder="description"></input>
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>
          <select class="form-select" aria-label="Default select example">
            <option selected>Country</option>
            <option value="canada">Canada</option>
            <option value="brazil">Brazil</option>
            <option value="kenya">Kenya</option>
            <option value="italy">Italy</option>
          </select> <br/>

          <div className='mb-3'>
            <div class="form-check">
              <label class="form-check-label" for="gender">Gender: <br/></label>
            </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="male" value="option1"/>
            <label class="form-check-label" for="male">Male </label> <br/>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="female" value="option1"/>
            <label class="form-check-label" for="female">Female</label>
          </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" value="option1" id="other"/>
              <label class="form-check-label" for="other">Other</label> <br/>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" value="option1" id="agree"/>
              <label class="form-check-label" for="agree">Agree:</label>
            </div>

            
          </div>
            <button onClick={subMit} className="btn btn-sm btn-success">SUBMIT</button>
        </div>
      </form>
    </div>
  );
}

export default App;
