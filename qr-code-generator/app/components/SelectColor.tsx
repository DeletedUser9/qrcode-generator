

import { ColorPicker, IColor} from "react-color-palette"; 
import "react-color-palette/css";

type SelectColorProps = {
  isBackground: boolean
  color: IColor
  setColor: (color: IColor) => void
}

export default function SelectColor({isBackground, color, setColor}: SelectColorProps ) {
   
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-3">Select {isBackground ? "background": "foreground"} colour</h2>
      <ColorPicker color={color} onChange={setColor} height={150} hideInput={["rgb", "hsv"]} />
    </div>
  );
}