
import "./SizeChart.css";
import SizeListWoman from "./SizeListWoman";
function SizeChartWoman() {
  return (
    <div>
      <div className="title-size-chart">
        <div>Size Guide</div>
        <div>Woman-Shoes</div>
      </div>
      <table className="size-chart">
        <thead>
          <tr>
            <th>Italy</th>
            <th>UK</th>
            <th>
              <select name="country">
                <option value="us">US</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </th>
          </tr>
        </thead>
        <SizeListWoman />
      </table>
    </div>
  );
}

export default SizeChartWoman;
