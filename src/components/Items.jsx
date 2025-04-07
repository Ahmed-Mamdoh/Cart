import OneItem from './OneItem'
import emptyCart from '/Empty Cart.svg'
const Items = ({ addedProducts, increment, decrement, remove, reset, empty, total, theme, ToggleTheme, numOfProducts }) => {
  return (
    <>
      <div className={`flex flex-col gap-7 py-8 ${theme ? 'text-white' : 'text-black'}
      ${theme ? 'bg-gray-800' : 'bg-gray-200'}    min-h-screen`}>
        <div className='flex justify-evenly'>
              <button className="btn  btn-warning" onClick={reset}>Reset</button>
              <button className="btn  btn-error" onClick={empty}>Empty</button>
              <button className="btn btn-neutral" onClick={ToggleTheme}>{theme ? '☀' : '🌙'}</button>
            </div>
        {numOfProducts === 0 ?
          <div className={`flex justify-center items-center`}>
            <img src={emptyCart} className='w-lg' />
          </div>
          :
          <>

            
            <div className='flex justify-evenly'>
              <span>id</span>
              <span>name</span>
              <span>price</span>
              <span>count</span>
              <span>add</span>
              <span>remove</span>
              <span>Delete</span>
              <span>total</span>
            </div>
            {
              addedProducts.map((item, index) => {
                return <OneItem key={index} item={item} increment={increment} decrement={decrement} remove={remove} theme={theme}></OneItem>
              })
            }

            <div className='flex items-center justify-center'>
              <span className='text-4xl'>Total: {total()}$</span>
            </div>
          </>

        }
      </div>
    </>
  )
}

export default Items
