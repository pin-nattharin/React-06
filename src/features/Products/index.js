import PropTypes from "prop-types";

function Product({ item }) {
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
    <li className="Products">
      <a href={`/update-product/${item.id}`}>
        <img
          className="Products__image"
          src={productImage}
          alt={item.name}
        />
        <div className="Products__name">{item.name}</div>
        <small className="Products__type">{item.type}</small>
      </a>
    </li>
  );
}

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;