import "./SizeChart.css"
function SizeItem(props) {
  return (
    <tr className="size-item">
      <td>{props.size.uk}</td>
      <td>{props.size.italy}</td>
      <td>{props.size.other}</td>
    </tr>
  );
}

export default SizeItem;
