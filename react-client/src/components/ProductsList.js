import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = ({ data, addToCart ,updates}) => {
  console.log(data,"data");
  const navigate = useNavigate()
  const remove = (id) => {
    axios
      .delete(`http://localhost:9000/api/delete/${id}`)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="home">
      {
        data && data.map((e, i) => {
          return (
            <div key={i} className="home-item">
              <div className="home-img"></div>
              <div className="home-text">
                <h1>{e.name}</h1>
                <img src={e.imageUrl} className="one" alt="Product" />
                <h5>{e.description}</h5>
                <h6>{e.price}</h6>
               
                <br />
                <a href="#" className="btn" onClick={() =>  navigate("update",{state:e})
                 }>Update</a>
                <a
                  href="#"
                  className="btn"
                  onClick={() => {
                    remove(e._id);
                  }}
                >
                  Delete


                  
                </a>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default Home;
