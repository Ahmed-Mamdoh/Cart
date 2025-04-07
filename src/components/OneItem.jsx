const OneItem = ({item:{id,name,price,count},increment,decrement,remove, theme}) => {
  return (
    <div className={`flex justify-evenly items-center ${theme ? 'bg-gray-600' : 'bg-gray-400'} py-4`}>
      <span>{id}</span>
      <span>{name}</span>
      <span>${price}</span>
      <span>{count}</span>
      <button className="btn  btn-warning" onClick={() => decrement(id)}>-</button>
      <button className="btn  btn-primary" onClick={()=>increment(id)}>+</button>
      <button className="btn  btn-error" onClick={()=> remove(id)}>Del</button>
      <span>{price*count}$</span>
    </div>
  )
}

export default OneItem
