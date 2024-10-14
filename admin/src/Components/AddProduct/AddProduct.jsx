import React from 'react';
import upload_area from '../../assets/upload_area.svg';
const AddProduct = () => {
  const [image, SetImage] = React.useState(null);
  const [productDetails, setProductDetails] = React.useState({
    name: "",
    new_price: "",
    category: "men",
    image: "",
  });
  const imageHander = (e) => {
    SetImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image);
    try {
      const uploadResponse = await fetch('http://192.168.1.38:4000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
      responseData = await uploadResponse.json();
      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);
        const addProductResponse = await fetch('http://192.168.1.38:4000/addproduct', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });
        const addProductData = await addProductResponse.json();
        if (addProductData.success) {
          alert("Product Added!");
        } else {
          alert("Failed to add product.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding the product.");
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-2 p-6 bg-white shadow-md rounded-lg lg:max-w-6xl lg:shadow-lg lg:rounded-xl lg:bg-gray-50 lg:p-8">
  <div className="lg:grid lg:grid-cols-2 lg:gap-6">
    <div className="mb-6 lg:mb-0">
      <p className="text-gray-700 font-semibold mb-2">Product Title</p>
      <input
        type="text"
        placeholder="Type Product title"
        value={productDetails.name}
        onChange={changeHandler}
        name="name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
      />
    </div>
    <div className="mb-6 lg:mb-0">
      <p className="text-gray-700 font-semibold mb-2">Price</p>
      <input
        type="text"
        name="new_price"
        value={productDetails.new_price}
        onChange={changeHandler}
        placeholder="Type price"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
      />
    </div>
    <div className="mb-6 lg:mb-0">
      <p className="text-gray-700 font-semibold mb-2">Product Category</p>
      <select
        name="category"
        value={productDetails.category}
        onChange={changeHandler}
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:outline-none"
      >
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
    </div>
    <div className="mb-6 lg:mb-0 lg:flex lg:justify-center lg:items-center">
      <label htmlFor="file-input" className="cursor-pointer lg:text-center">
        <img
          src={image ? URL.createObjectURL(image) : upload_area}
          alt="Upload Area"
          className="w-32 h-32 mx-auto mb-2"
        />
        <p className="text-gray-500">Click to upload product image</p>
      </label>
      <input
        type="file"
        name="image"
        id="file-input"
        onChange={imageHander}
        hidden
      />
    </div>
  </div>
  <div className="mt-6 lg:mt-8">
    <button
      onClick={Add_Product}
      className="w-full lg:w-auto lg:px-8 bg-rose-500 text-white py-3 rounded-lg shadow-lg hover:bg-rose-600 transition duration-300"
    >
      Add Product
    </button>
  </div>
</div>
  );
};
export default AddProduct;
