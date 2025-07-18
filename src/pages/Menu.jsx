import { useEffect, useState } from "react"
import { FaHeart, } from "react-icons/fa6";
import { MdDarkMode, MdDelete, MdDownload, MdLightMode, MdRestaurant, MdSetMeal, MdShoppingCart, MdSoupKitchen } from 'react-icons/md';
import '../App.css';

export default
function Menu() {
  const [quantities, setQuantities] = useState({});
  const [liked, setLiked] = useState({});
  const [open, setOpen] = useState(true);
  const [light, setLight]= useState(false);
  const [buOpen, setBuOpen] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const [added, setAdded]= useState({});
  const [hover, setHover] = useState({})
  
  const buttonOpen = cartItems.length > 0;

   

  // Food list
  const Food = [
    {
      emoji: <MdSoupKitchen/>,
      class: 'Hot-Dishes',
      items: [
        {Name:'Spicy Rice', Price:230.5, id:1, tab:1, max:15, group:'Hot-Dishes', img:'/ricely.png'},
        {Name:'Rice and Beans', Price:150.2, id:2, tab:1, max:11, group:'Hot-Dishes', img:'/rice-beans.png'},
        {Name:'Fried Rice', Price:250.4, id:3, tab:1, max:10, group:'Hot-Dishes', img:'/fried.png'},
        {Name:'Coconut Rice', Price:270.1, id:4, tab:1, max:13, group:'Hot-Dishes', img:'/coconut-rice.png'},
        {Name:'White Rice', Price:160.3, id:5, tab:1, max:9, group:'Hot-Dishes', img:'/white-rice.png'},
        {Name:'Jollof Rice', Price:180.4, id:6, tab:1, max:8, group:'Hot-Dishes', img:'wgehfjasajsghckj'},
        {Name:'Chinese Rice', Price:320.4, id:7, tab:1, max:12, group:'Hot-Dishes', img:'wgehfjasajsghckj'},
        {Name:'Mixed Rice', Price:140.4, id:8, tab:1, max:9, group:'Hot-Dishes', img:'wgehfjasajsghckj'},
        {Name:'Yam and Beans', Price:450.1, id:9, tab:1, max:17, group:'Hot-Dishes', img:'wgehfjasajsghckj'},
      ]
    },


    {
      emoji: <MdRestaurant/>,
      class:'Proteins',
      items:[
         {Name:'Fried Meat', Price:1200, id:10, tab:2, max:10, group:'Proteins', img:'sdhgvfagdjfugjkrs'},
         {Name:'Grilled Meat', Price:1100, id:11, tab:2, max:5, group:'Proteins', img:'sdhgvfagdjfugjkrs'},
         {Name:'Fried Chicken', Price:1500, id:12, tab:2, max:7, group:'Proteins', img:'sdhgvfagdjfugjkrs'},
         {Name:'Grilled Meat', Price:1400, id:13, tab:2, max:9, group:'Proteins', img:'sdhgvfagdjfugjkrs'},
         {Name:'Fried Turkey', Price:1600, id:14, tab:2, max:5, group:'Proteins', img:'sdhgvfagdjfugjkrs'},
         {Name:'Fried Fish(Titus)', Price:1900, id:15, tab:2, max:3, group:'Proteins', img:'sdhgvfagdjfugjkrs'},
         {Name:'Peppered Snail', Price:2500, id:16, tab:2, max:8, group:'Proteins', img:'sdhgvfagdjfugjkrs'},
      ]
    },

    {
      emoji: <MdSetMeal/>,
      class: 'Soup',
      extra:'Pack inclusive',
      items: [
        {Name:'Egusi', Price:600, id:17, tab:3, max:5, group:'Soup', img:'/ricely.png'},
        {Name:'Ila-alasepo', Price:800, id:18, tab:3, max:9, group:'Soup', img:'/ricely.png'},
        {Name:'Egbegiri', Price:500, id:19, tab:3, max:8, group:'Soup', img:'/ricely.png'},
        {Name:'Efo-riro', Price:800, id:20, tab:3, max:3, group:'Soup', img:'sfhdakjkjdj,dkjlzcul'},
        {Name:'Ewedu', Price:900, id:21, max:6, tab:3, group:'Soup', img:'sfhdakjkjdj,dkjlzcul'},
        {Name:'Stew', Price:400, id:22, max:4, tab:3, group:'Soup', img:'sfhdakjkjdj,dkjlzcul'},

      ]
    }
  ]


  // 
  const [select, setSelect] = useState(Food[0].class);
  const selectedName = Food.find(foods => foods.class === select)?.items || [];

  // button to open food via emoji
   const handleFoodClass = (item) => {
    setSelect(item);
    setOpen(true);
  };

  const handleToggle = () => setOpen(!open);
  const handleToggle2 = () => setBuOpen(!buOpen);

  // for dark nd light mode
  const handleLight = () => setLight((light => !light));

  const addToCart =(a)=> {
    let quantity = quantities[a.id];
    if (quantity === '' || isNaN(quantity) || quantity < 1) quantity = 1;
    if (quantity > a.max) quantity = a.max;
    setQuantities((b) => ({...b, [a.id]: 1}));
    setCartItems((cartItems) => {
      const show = cartItems.find((t) => t.id === a.id);
      if (show) {
        return cartItems.map((t) =>
        t.id === a.id ? {...t, quantity} : t)
      } else {
        return [...cartItems, {...a, quantity}]
      }
  });
    setAdded((added) => ({...added, [a.id]: true }))
  }

  const removeFromCart = (x) => {
    setCartItems((cartItems) => cartItems.filter((r) => r.id !== x))
    setAdded((added) => ({...added, [x]: false }))
  }
  
  
  //  favorite-Heart
  const handleLiked = (a) => {
  const updatedLiked = {
    ...liked,
    [a]: !liked[a]
  };
  setLiked(updatedLiked);
  if (!liked[a]) {
    alert('Added to Favorites');
  }

};

  // handlehover
  const handleHoverT = (a) => {
    setHover ((b) => ({
      ...b, [a]: true
    }))
  }

   const handleHoverF = (a) => {
    setHover ((b) => ({
      ...b, [a]: false
    }))
  }


  // handleinput
   const handlequantities = (e, i) => {
      let value = e.target.value
      if(value === '') {
        setQuantities((quantities) => ({...quantities, [i] : ''}))
        return;
      }

      value = parseInt(value, 10);
    if (isNaN(value)) value = "";
    setQuantities((quantities) => ({ ...quantities, [i]: value }));
    }

    const handleBurChanges = (i, max) => {
    let value = quantities[i];
    if (value === '' || isNaN(value) || value < 1) value = 1;
    if (value > max) value = max;
    setQuantities((quantities) => ({ ...quantities, [i]: value }));
    }
  return (


      <div className="p-6 ">
        {/* ordered List */}
      <div className="fixed md:mx-18 md:top-8 top-3 right-8 z-50 sm:top-4 sm:right-4 xs:top-2 xs:right-2 max-w-full w-auto" >
        {(buOpen || buttonOpen) && (
          <div>
            <button 
            onClick={handleToggle2}
            className="relative flex items-center  justify-center w-14 h-14 bg-gradient-to-br from-amber-900 to-orange-600 rounded-full shadow-lg hover:scale-105 transition-transform sm:w-12 sm:h-12 xs:w-10 xs:h-10">
              <MdShoppingCart className="size-8 sm:size-6 xs-size-5"/>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 left-0 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartItems.length}
                  </span>
              )}
            </button>
          </div>
        )}
        
        {buOpen  && (
          <div className="w-90 max-h-[70vh] overflow-y-auto hide-scrollbar mt-4 absolute right-0 md:bg-gray-100 bg-transparent rounded-2xl shadow-2xl p-6 space-y-4 border-gray-700 animate-slide-in sm:w-64 xs:w-[90vw] xs:p-3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6h10v7" />
                </svg>
                Your Order
              </h2>
            {cartItems.length === 0 
             ? <p className="text-gray-500 text-center py-8">No items in your cart</p>
        : <div>
           {cartItems.map((item) => (
         <div key={item.id} className="flex justify-between mt-2 items-center border-b pb-2 space-y-2 space-x-2">
                    <span className="text-black font-semibold">
                      <span className="font-extrabold">{item.quantity}</span> {item.Name}
                      <span className="ml-2 font-bold">= ₦{item.quantity * item.Price}</span>
                    </span>
                      <button
                      onClick={() => removeFromCart(item.id)}
                      >
                        <MdDelete className="hover:text-red-600 md:text-black text-red-600  -mt-1 size-5"/>
                      </button>    
          </div>
        ))}

        {cartItems.length > 0  && (
          <div className=" font-bold">
            <span className="">Total : ₦{cartItems.reduce(
              (add, tins) => add + tins.Price * tins.quantity, 0 
              )}</span>
          </div>
        )}
        <button 
         className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold py-2 rounded-lg mt-2 hover:from-blue-700 hover:to-teal-800 transition"
        >
          Checkout
        </button>
          </div>}
          </div>)}
        </div>
  {/* side bar */}
  <div
        className={`md:sticky fixed md:mt-10 mt-20 rounded-2xl max-h-full  md:top-10 left-0  md:w-64 w-45  p-5 z-50 shadow-lg  transition-all duration-2000 ease-in-out -mx-4 ${
          open 
          ? '-translate-x-1/2' 
          : 'translate-x-0' 
        } ${
          light 
          ? 'bg-gray-100' 
          :'dark:bg-amber-500'}`}
      >
        {open 
        ?
        <>
          <div className="flex justify-between items-center mb-6">
            <h2></h2>
            <button
              onClick={handleToggle}
              className="text-red-600 text-xl font-bold"
            >
              {open 
              ? <MdDownload className={`rotate-270 font-bold 
                    ${light 
                    ? 'text-amber-600 ' 
                    :'dark:text-white'}`}/> 
              : ''}
            </button>
          </div>

          <div className="space-y-3  md:mx-30 mx-27 ">
          {Food.map((pick) => (
            <button
              key={pick.class}
              onClick={() => {
                handleFoodClass(pick.class);
                
              }}
              className={`px-3 py-3 md:mx-8 -mx-4 rounded-lg font-medium transition ${
                pick.class === select
                  ? `${light ? 'dark:bg-amber-400 font-bold' : ' bg-gray-100 text-gray-900 font-bold'}`
                  : `${light ? 'dark:text-white dark:bg-gray-600' : 'bg-gray-700 text-white'}`
              }`}
            >
              {pick.emoji}
            </button>
          ))}
        </div>
         <button 
         className={`md:mx-30 mx-22 text-2xl mt-30 transition-all  ease-in-out 
          ${(open && light) 
            ? 'duration-2000 '
            :' transform md:translate-x-18 translate-x-9 duration-2000'
          }`}
         onClick={handleLight}>
           {light 
           ? <MdDarkMode className='text-amber-600 '/> 
           : <MdLightMode className='text-gray-100 '/> }
        </button>
        </>
        
       :
        <>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`md:text-lg text:sm font-bold ${
            light 
            ?'dark:text-amber-600'
            : ''
          }`}>Select a Menu</h2>
          <button
            onClick={handleToggle}
            className="text-red-600 text-xl font-bold"
          >
            {open 
            ? '' 
            : <MdDownload className={`rotate-90 font-bold 
                  ${light 
                  ? 'text-amber-600 ' 
                  :'dark:text-white'}`}/>
            }

          </button>
        </div>

        <div className="space-y-3">
          {Food.map((pick) => (
            <button
              key={pick.class}
              onClick={() => {
                setSelect(pick.class);
                setOpen(false);
              }}
              className={`w-full  text-left text:sm md:text-lg px-4 py-2 rounded-lg font-medium transition ${
                pick.class === select
                  ? `${light ? 'dark:bg-amber-400 font-bold' : ' bg-gray-100 text-gray-900 font-bold'}`
                  : `${light ? 'dark:text-white dark:bg-gray-600' : 'bg-gray-700 text-white'}`
              }`}
            > 
              {pick.class}
            </button>
          ))}
        </div>
         <button
         className={` text-2xl mt-30 transition-all  ease-in-out ${(!open && !light) 
            ? ' md:translate-x-48 translate-x-28  duration-2000 '
            :'duration-2000'
          }`}
          onClick={handleLight}>
           {light ?<MdDarkMode className='text-amber-600'/> : <MdLightMode className='text-gray-100'/> }
        </button>
        </> }
  </div>

  {/* Selected Food Items */}
  {Food.filter((category) => category.class === select).map((category) => (
    <div key={category.class} className="max-w-xl mx-30 md:mx-70 px-4 py-8 pb-8">
      <h2 className="font-extrabold md:text-xl text-lg  mb-2">{category.class}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-50 gap-y-6  -mx-10 md:-mx-2">
        {selectedName.map((sort) => {
          const quantity = quantities[sort.id] ?? 1;
          const isOutOfRange = quantity < 1 || quantity > sort.max;

          return (
            <div
            onMouseEnter={() => handleHoverT(sort.id)}
            onMouseLeave={() => handleHoverF(sort.id)}
              key={sort.id}
              className={`transform transition-all ease-in-out duration-2000 mt-10 border-amber-400 border-2 size-45 py-10  shadow-lg rounded-xl items-center flex flex-col ${
                category.class === 'Soup' ? 'h-72' : 'h-64'
              }${hover[sort.id] ? '' : 'translate-y-0'}`} 
            >
              <img
                src={sort.img}
                alt={sort.Name}
                className="w-24 h-24 -mt-20 object-contain"
              />
              <h1 className="font-bold mt-2 text-lg">{sort.Name}</h1>

              <input
                type="number"
                min={1}
                max={sort.max}
                value={quantity}
                onChange={(e) => handlequantities(e, sort.id)}
                onBlur={() => handleBurChanges(sort.id, sort.max)}
                className="outline-none  [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none mt-3 w-16 text-center bg-gray-100 rounded shadow-inner border border-gray-300"
              />

              {isOutOfRange && (
                <p className="text-blue-600 text-xs font-bold mt-1">
                  Order must be 1 and {sort.max}
                </p>
              )}

              {category.class === 'Soup' && (
                <p className="text-sm mt-1 text-gray-600">{category.extra}</p>
              )}

              <h1 className="mt-2 font-bold">
                ₦{isOutOfRange ? sort.Price : quantity * sort.Price}
              </h1>

              {hover[sort.id] 
              ? 
                <div className= {`transform transition-all ease-in-out duration-2000 ${hover[sort.id] ? 'translate-x-1' : 'transform -translate-x-120 duration-2000'}`}>
                  <button 
                    onClick={() => addToCart(sort)}
                    className={`mt-2 bg-amber-400 px-4 py-1 rounded-full font-semibold 
                    ${added[sort.id]
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                    } ${hover[sort.id]
                  ? ''
                  :""
                }`}
                    disabled={added[sort.id]}>
                      {added[sort.id] ? "Added to 🛒" : 'Add to 🛒'}
                  </button>
                  <div className="mt-2">
                      <FaHeart
                        onClick={() => handleLiked(sort.id)}
                        className={`text-[1.5rem] rounded-full p-1 transform transition-all ease-in-out duration-500 ${
                          liked[sort.id] 
                          ? 'text-red-600' 
                          : 'text-gray-300'
                        }  bg-amber-400`}
                      />
                  </div>
                </div>
              : ''}

              
            </div>
          );
        })}
      </div>
    </div>
  ))}
</div>
      
  )
}