import React from 'react';
import ItemList from './ItemList'



const Content = ({items,handleCheck,handleDelete}) => {

    


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
              <ItemList
              items={items}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              />
                
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