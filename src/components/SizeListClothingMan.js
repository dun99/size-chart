import SizeItem from "./SizeItem";
import "./SizeChart.css"
function SizeListClothingMan() {
  let sizes = [
    {
      uk: "XXXS",
      italy: 40,
      other: 30,
    },
    {
      uk: "XXX",
      italy: 42,
      other: 30,
    },
    {
      uk: "XS",
      italy: 44,
      other: 34,
    },
    {
      uk: "S",
      italy: 46,
      other: 36,
    },
    {
      uk: "M",
      italy: 48,
      other: 38,
    },
    {
      uk: "L",
      italy: 50,
      other: 40,
    },
    {
      uk: "XL",
      italy: 52,
      other: 42,
    },
    {
      uk: "XXL",
      italy: 54,
      other: 44,
    },
    {
      uk: "XXXL",
      italy: 56,
      other: 46,
    },
    {
      uk: "4XL",
      italy: 58,
      other: 48,
    },
    {
      uk: "5XL",
      italy: 60,
      other: 50,
    },
    {
      uk: "6XL",
      italy: 62,
      other: 52,
    },
    {
      uk: "7XL",
      italy: 64,
      other: 54,
    },
    {
      uk: "8XL",
      italy: 66,
      other: 56,
    },
   
  ];

  let sizeList = sizes.map((size, index) => {
    return(
        <SizeItem key={index} size = {size}/>
    )
  });
  return (
    <tbody className="size-list">
      {sizeList}
    </tbody>
  );
}

export default SizeListClothingMan;
