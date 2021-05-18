import SizeItem from "./SizeItem";
import "./SizeChart.css"
function SizeListMan() {
  let sizes = [
    {
      uk: 2,
      italy: 36,
      other: 3,
    },
    {
      uk: 2.5,
      italy: 36.5,
      other: 3.5,
    },
    {
      uk: 3,
      italy: 37,
      other: 4,
    },
    {
      uk: 3.5,
      italy: 37.5,
      other: 4.5,
    },
    {
      uk: 4,
      italy: 38,
      other: 5,
    },
    {
      uk: 4.5,
      italy: 38.5,
      other: 5.5,
    },
    {
      uk: 5,
      italy: 39,
      other: 6.5,
    },
    {
      uk: 5.5,
      italy: 39.5,
      other: 6.5,
    },
    {
      uk: 6,
      italy: 40,
      other: 7,
    },
    {
      uk: 6.5,
      italy: 40.5,
      other: 7.5,
    },
    {
      uk: 7,
      italy: 41,
      other: 8,
    },
    {
      uk: 7.5,
      italy: 41.5,
      other: 8.5,
    },
    {
      uk: 8,
      italy: 42,
      other: 9,
    },
    {
      uk: 8.5,
      italy: 42.5,
      other: 9.5,
    },
    {
      uk: 9,
      italy: 43,
      other: 10,
    },
    {
      uk: 9.5,
      italy: 43.5,
      other: 10.5,
    },
    {
      uk: 10,
      italy: 44,
      other: 11,
    },
    {
      uk: 10.5,
      italy: 44.5,
      other: 11.5,
    },
    {
      uk: 11,
      italy: 45,
      other: 12,
    },
    {
      uk: 11.5,
      italy: 45.5,
      other: 12.5,
    },
    {
      uk: 12,
      italy: 46,
      other: 13,
    },
    {
      uk: 12.5,
      italy: 46,
      other: 13.5,
    },
    {
      uk: 13,
      italy: 47,
      other: 14,
    },
    {
      uk: 13.5,
      italy: 47.5,
      other: 14.5,
    },
    {
      uk: 14,
      italy: 48,
      other: 15,
    },
    {
      uk: 14.5,
      italy: 48.5,
      other: 15.5,
    },
    {
      uk: 15,
      italy: 49,
      other: 16,
    },
    {
      uk: 15.5,
      italy: 49.5,
      other: 16.5,
    },
    {
      uk: 16,
      italy: 50,
      other: 17,
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

export default SizeListMan;
