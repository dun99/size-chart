import SizeListMan from "./SizeListMan";
import "./SizeChart.css";
function SizeChartMan() {
  return (
    <div>
      <div className="title-size-chart">
        <div>Size Guide</div>
        <div>Men-Shoes</div>
      </div>
      <table className="size-chart">
        <thead>
          <tr>
            <th>UK</th>
            <th>Italy</th>
            <th>
              <select name="country">
                <option value="us">US</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </th>
          </tr>
        </thead>
        <SizeListMan />
      </table>
    </div>
  );
}

export default SizeChartMan;
