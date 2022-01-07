import { useState } from "react";
export default function App() {
  return (
    <>
      <div>
        <MyComponent />
      </div>
    </>
  );
}

function MyComponent() {
  let studentName = "by Tushar salunke ";
  let studentId = "210940520109";
  let [list, setList] = useState([]);
  let [message, setMessage] = useState("");
  let [validation, setValidation] = useState(false);
  let sendData = function () {
    if (message == "") {
      setValidation(true);
      alert("type something");
    }

    let newList = [message, ...list];
    setList(newList);
    setMessage("");
  };
  function handleMessage(e) {
    setMessage(e.target.value);
  }
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-10 col-sm-12 bg-dark text-light p-3 fs-2 mb-2 flex d-flex">
            MyChatApp
            <span className="fs-5 p-2 textAlign: down">
              {studentName}
              {studentId}
            </span>
          </div>
        </div>
        <div className="row bg-info ">
          <div className="col-10 col-sm-12">
            <div className="flex d-flex">
              <input
                type="text"
                value={message}
                onChange={handleMessage}
                placeholder="Let's chat here"
                className="form form-control w-75 p-3 my-2 ms-0 "
              />
              <div>
                <input
                  type="button"
                  value="send"
                  onClick={sendData}
                  className="btn btn-primary p-3 my-2 mx-3 w-100"
                />
              </div>
            </div>
          </div>
        </div>

        {list.map((item, index) => (
          <div key={index} className=" ">
            <div className="bg-success my-2 ms-0 p-2 border borderRadius:0px">
              {item}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
