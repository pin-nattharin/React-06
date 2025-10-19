import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateProduct, deleteProduct } from './actions';

function UpdateForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.find((p) => p.id === Number(id))
  );

  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setType(product.type);
      setImageURL(product.imageURL);
    }
  }, [product]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(updateProduct({ id: product.id, name, type, imageURL }));
    navigate('/');
  };

  const onDelete = () => {
    dispatch(deleteProduct({ id: product.id }));
    navigate('/');
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <h1>Update Product</h1>
      <form id="create-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="imageURL">Image URL</label>
          <input
            name="imageURL"
            type="text"
            id="imageURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="type">Type</label>
          <input
            name="type"
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="UpdateForm__delete-button"
          onClick={onDelete}
        >
          Delete restaurant
        </button>
        <button type="submit">Update product</button>
      </form>
    </>
  );
}

export default UpdateForm;
