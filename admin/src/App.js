import "./App.css";
import axios from "axios";
import { addProducts } from "./redux/apiCalls";
import { useState } from "react";
import { useDispatch } from "react-redux";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const dispatch = useDispatch();

  const addProduct = async (e) => {
    e.preventDefault();
    const newUrl = {};
    if (image) {
      const data = new FormData();
      const fileName = Date.now() + image.name;
      data.append("name", fileName);
      data.append("file", image);
      newUrl.image = fileName;
      try {
        await axios.post("/api/upload", data);
        setSuccess("Images uploaded successfully!");
      } catch (error) {
        setError("Image not uploaded");
      }
    }
    try {
      const result = addProducts(dispatch, {
        name,
        description,
        price,
        image: newUrl.image,
      });
      if (result) {
        setSuccess("Product successfully added!");
        console.log(result);
      }
    } catch (error) {
      setError("Error. Product not added!");
    }
  };

  return (
    <>
      <div className="formSign">
        <div className="formSignDiv">
          <form onSubmit={addProduct}>
            <div className="formSignGroups">
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="House Name"
                required
              />

              <input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="House Price"
                required
              />

              <textarea
                name=""
                onChange={(e) => setDescription(e.target.value)}
                id=""
                cols="30"
                rows="10"
                placeholder="Product Description"
              ></textarea>
              <div>
                <label htmlFor="image">
                  <span>Select Image</span>
                </label>
                <input
                  type="file"
                  id="image"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </div>
            </div>
            <button>Add Product</button>
            {error && <span className="error">{error}</span>}
            {success && <span className="success">{success}</span>}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
