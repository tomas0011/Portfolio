import './Item.css';

export const Item = ({ data }) => {
  return (
    <div className="Item">
      <div className='ItemLogo'>
        <img src={data.img} alt="logo"/>
        <div className='VerticalLine'/>
      </div>
      <div>
        <div className='ItemTitle'>
          <h3>{data.title}</h3>
          <div>
            <h5>2 años y 10 meses</h5>
            <h5>10/20 - 07/23</h5>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus enim dolorum totam magni repellendus commodi praesentium quisquam expedita impedit nobis eaque, vel tempora eos architecto dignissimos laboriosam assumenda quaerat quo.</p>
      </div>
    </div>
  );
}

export default Item;
