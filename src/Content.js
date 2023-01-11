import React from 'react';
import {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';



const Content = () => {

    const[items, setItems]=useState([
      {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
  ]);

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
  setItems(listItems);
  localStorage.setItem('shoppingList', JSON.stringify(listItems));
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  localStorage.setItem('shoppingList', JSON.stringify(listItems));
}

    // const handleChange = ()=>{
    //     const names = ["Ram","kevin","mani"]
    //     const init = Math.floor(Math.random()*3)
    //     setName(names[init])
    //     }

    //     const handleClicked=()=>{
    //       console.log("you clicked it")

    //     }

    //     const handleClicked1 = (name)=>{
    //       console.log(`${name} was clicked`)

    //     }
        
    //     const handleClicked2 = (e)=>{
    //       console.log(e.target.innerText)

    //     }

  return (
    <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}

            {/* <p>
          Hello {name}
        </p>
        <button onClick={handleChange}>Change name</button>
        <button onClick={handleClicked}>Click It</button>
        <button onClick={()=> handleClicked1("Ram")}>Click It</button>
        <button onClick={(e)=> handleClicked2(e)}>Click It</button>  */}



       
    </main>
  )
}

export default Content