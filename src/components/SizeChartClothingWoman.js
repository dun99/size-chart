
import "./SizeChart.css";
import SizeListClothingWoman from "./SizeListClothingWoman";
function SizeChartClothingWoman() {
  return (
    <div>
      <div className="title-size-chart">
        <div>Size Guide</div>
        <div>Woman-Clothing</div>
      </div>
      <table className="size-chart">
        <thead>
          <tr>
            <th>Standard</th>
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
        <SizeListClothingWoman/>
      </table>
    </div>
  );
}

export default SizeChartClothingWoman;
