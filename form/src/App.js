import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <form>
        <div className='inputField'>
          <div class="mb-3">
            <input type="name" class="form-control" id="name" placeholder="name"></input>
          </div>

          <div class="mb-3">
            <input type="email" class="form-control" id="email" placeholder="email"></input>
          </div>

          <div class="mb-3">
            <input type="email" class="form-control" id="description" placeholder="description"></input>
          </div>

          <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          </div>

          <div className='mb-3'>
          <div class="form-check">
            <label class="form-check-label" for="gender">
              Gender:
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="male" checked/>
          </div>
          <div class="form-check">
            <label class="form-check-label" for="male">
              Gender:
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="female" checked/>
          </div>
          <div class="form-check">
            <label class="form-check-label" for="female">
              Gender:
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="other" checked/>
          </div>

          <div className='mb-3'>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
              <label class="form-check-label" for="flexCheckDefault">
                Default checkbox
              </label>
            </div>
          </div>

            
          </div>

        </div>
      </form>
    </div>
  );
}

export default App;
