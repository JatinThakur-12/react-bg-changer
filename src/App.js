import { useState } from "react";
import Button from "./Button";

function App() {
  const [bgColor, setBgColor] = useState("olive");

  function handleClick(newColor) {
    setBgColor(newColor);
  }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
            <Button color="Pink" click={handleClick} />
            <Button color="Red" click={handleClick} />
            <Button color="Green" click={handleClick} />
            <Button color="Blue" click={handleClick} />
            <Button color="Orange" click={handleClick} />
            <Button color="Lavender" click={handleClick} textColor="Black" />
            <Button color="Black" click={handleClick} />
            <Button color="White" click={handleClick} textColor="Black" />

            {/* <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}} onClick={()=>setBgColor("red")} >
            Red
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Green"}} onClick={()=>setBgColor("Green")}>
            Green
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Blue"}} onClick={()=>setBgColor("Blue")}>
            Blue
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "Orange"}} onClick={()=>setBgColor("Orange")}>
            Orange
          </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
