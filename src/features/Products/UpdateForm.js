import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function UpdateForm() {
  // ใช้ useParams hook เพื่อดึงค่า 'id' จาก URL path
  const { id } = useParams();
  console.log(id); // จะแสดง id ของสินค้าใน console

  // สร้าง state สำหรับเก็บข้อมูลในแต่ละ input field
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [type, setType] = useState('');

  return (
    <>
      <h1>Update Product</h1>
      <form id="create-form">
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

        <button type="button" className="UpdateForm__delete-button">
          Delete restaurant
        </button>
        <button type="submit">Update product</button>
      </form>
    </>
  );
}

export default UpdateForm;
