import ProductCard from '../ProductCard/ProductCard'
import './Products.scss'
import img1 from './image/img-1.jpg'
import img2 from './image/img-2.png'
import img3 from './image/img-3.png'
import img4 from './image/img-4.png'
import img5 from './image/img-5.png'
import img6 from './image/img-6.png'
import img7 from './image/img-7.png'
import img8 from './image/img-8.png'

const Products = () => {
  return (
    <div className="products">
      <h2 className="products__title">
        Our Trendy <span>Products</span>
      </h2>
      <div className="category">
        <a href="#">All</a>
        <a className="active" href="#">
          Newarrivals
        </a>
        <a href="#">Best Seller</a>
        <a href="#">Top Ratings</a>
      </div>

      <div className="product-cards">
        <ProductCard
          imgUrl={img1}
          category={'Dress'}
          title={'Cropped Faux Lether Jacket'}
          price={29}
        />
        <ProductCard
          imgUrl={img2}
          category={'Dress'}
          title={'Calvin Shorts'}
          price={62}
        />
        <ProductCard
          imgUrl={img3}
          category={'Dress'}
          title={'Kirby T-Shirt'}
          price={17}
        />
        <ProductCard
          imgUrl={img4}
          category={'Dress'}
          title={'Cableknit Shawl'}
          price={99}
        />
        <ProductCard
          imgUrl={img5}
          category={'Dress'}
          title={'Colourful jacket'}
          price={29}
        />
        <ProductCard
          imgUrl={img6}
          category={'Dress'}
          title={'SEDDEM Shirt'}
          price={100}
        />
        <ProductCard
          imgUrl={img7}
          category={'Dress'}
          title={'Tingting design'}
          price={100}
        />
        <ProductCard
          imgUrl={img8}
          category={'Dress'}
          title={'Kirby Polo'}
          price={20}
        />
      </div>
    </div>
  )
}

export default Products
