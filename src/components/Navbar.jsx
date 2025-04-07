const Navbar = ({numOfProducts,total,theme, add}) => {
  return (
    <>
      <div className={`navbar ${theme ? 'bg-gray-700' : 'bg-gray-100'} shadow-sm`}>
        <div className="flex-1 flex gap-52">
          <a className={`btn btn-ghost ${theme ? 'text-white' : 'text-black'} text-xl `}>Cart</a>
          <button className="btn btn-primary" onClick={() => add(1)}>Add Chipsy</button>
          <button className="btn btn-primary" onClick={() => add(2)}>Add Pepsi</button>
          <button className="btn btn-primary" onClick={() => add(3)}>Add Cigartes</button>
          <button className="btn btn-primary" onClick={() => add(4)}>Add Baneh</button>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke={`${theme ? 'white' : 'black'}`}> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                <span className={`badge badge-sm indicator-item ${theme ? 'bg-gray-100' : 'bg-gray-400'}`}>{numOfProducts}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className={`card card-compact dropdown-content ${theme ? 'bg-gray-900' : 'bg-gray-400'} z-1 mt-3 w-52 shadow`}>
              <div className="card-body">
                <span className={`text-lg ${theme ? 'text-white' : 'text-black'} font-bold`}>{numOfProducts} Items</span>
                <span className={`${theme ? 'text-info' : 'text-primary'} text-2xl `}>total: ${total()}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
