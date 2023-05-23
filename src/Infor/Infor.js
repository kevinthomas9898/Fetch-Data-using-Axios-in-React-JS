import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Infor() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res)
        setData(res.data);
      })
      .catch((error) => setIsError(error.message));
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row d-flex align-items-center justify-content-center">
          {isError != "" && <div className="alert alert-danger">{isError}</div>}
          {data.map((post) => {
            const { id, title, body } = post;
            return (
              <div className="col-xs-1-12 border p-3 w-25 mx-auto" key={id}>
                <h4>{title.slice(0, 15)}</h4>
                <p>{body.slice(1, 80)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Infor;