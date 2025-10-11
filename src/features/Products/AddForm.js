import React, { useState, Fragment } from 'react';

import PropTypes from 'prop-types';

function AddForm({ addProduct }) {
  // สร้าง states ตามที่ระบุ (ค่าเริ่มต้นเป็น empty string)
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [type, setType] = useState('');

  // onSubmit handler — ต้องเรียก preventDefault() เพื่อไม่ให้หน้ารีเฟรช
  function handleSubmit(e) {
    e.preventDefault();

    // เรียก addProduct ตามที่ผู้ใช้กำหนด และส่ง object ตามรูปแบบ
    addProduct({ name, type, imageURL });

    // (optional) รีเซ็ตฟอร์มให้ว่างหลังเพิ่ม
    setName('');
    setImageURL('');
    setType('');
  }

  return (
    <Fragment>
      <h1>Add Product</h1>
      <form id="create-form" onSubmit={handleSubmit}>
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

        <button type="submit">Add product</button>
      </form>
    </Fragment>
  );
}

// ตรวจสอบ prop ด้วย prop-types
AddForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default AddForm;
