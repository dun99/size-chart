import SizeItem from "./SizeItem";
import "./SizeChart.css";
function SizeListClothingWoman() {
  let sizes = [
    {
      uk: "XXXS",
      italy: 4,
      other: 0,
    },
    {
      uk: "XXX",
      italy: 6,
      other: 2,
    },
    {
      uk: "XS",
      italy: 8,
      other: 4,
    },
    {
      uk: "S",
      italy: 10,
      other: 6,
    },
    {
      uk: "M",
      italy: 12,
      other: 8,
    },
    {
      uk: "L",
      italy: 14,
      other: 10,
    },
    {
      uk: "XL",
      italy: 16,
      other: 12,
    },
    {
      uk: "XXL",
      italy: 18,
      other: 14,
    },
    {
      uk: "XXXL",
      italy: 20,
      other: 16,
    },
    {
      uk: "4XL",
      italy: 22,
      other: 18,
    },
    {
      uk: "5XL",
      italy: 24,
      other: 20,
    },
    {
      uk: "6XL",
      italy: 26,
      other: 22,
    },
    {
      uk: "7XL",
      italy: 28,
      other: 24,
    },
  ];

  let sizeList = sizes.map((size, index) => {
    return <SizeItem key={index} size={size} />;
  });
  return <tbody className="size-list">{sizeList}</tbody>;
}

export default SizeListClothingWoman;
