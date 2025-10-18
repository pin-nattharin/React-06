import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

function Product({ item, className }) {
  // ถ้า imageURL เป็น URL เต็ม ให้ใช้ตรงๆ, ถ้าเป็นชื่อไฟล์ให้ใช้ require
  let productImage;
  if (item.imageURL.startsWith("http")) {
    productImage = item.imageURL;
  } else {
    try {
      productImage = require(`../../assets/${item.imageURL}`);
    } catch {
      productImage = ""; // หรือ path รูป default
    }
  }

  return (
    <li className={className}>
      <a href={`/update-product/${item.id}`}>
        <img className="Products__image" src={productImage} alt={item.name} />
        <div className="Products__name">{item.name}</div>
        <small className="Products__type">{item.type}</small>
      </a>
    </li>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};

export default styled(Product)`
  padding-right: 12px;
  padding-bottom: 36px;
  padding-left: 12px;
  width: 33%;
  position: relative;

  .Products__name {
    color: #333;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    display: block;
  }

  .Products__type {
    color: #767676;
  }

  .Products__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
`;