
import "./SizeChart.css";
import SizeListClothingMan from "./SizeListClothingMan";
function SizeChartClothingMan() {
  return (
    <div>
      <div className="title-size-chart">
        <div>Size Guide</div>
        <div>Men-Clothing</div>
      </div>
      <table className="size-chart">
        <thead>
          <tr>
            <th>Standard</th>
            <th>Italy/France</th>
            <th>
              <select name="country">
                <option value="us">UK/US</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
            </th>
          </tr>
        </thead>
        <SizeListClothingMan/>
      </table>
    </div>
  );
}

export default SizeChartClothingMan;
