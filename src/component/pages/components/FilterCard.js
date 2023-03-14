import React from "react";

function FilterCard(props) {
  return (
    <div className="filter-card">
      <div className="filter-title">
        <div className="title">Filter</div>
        <div className="close">
          <button onClick={props.toggleOpenFilter} className="filter-close-btn">
            x
          </button>
        </div>
      </div>
      <div className="filter-checkbox">
        <label className="cb-label">
          <input type="checkbox" name="2dproduct" />
          2D Product
        </label>
        <label className="cb-label">
          <input type="checkbox" name="3dcontent" />
          3D Content
        </label>
        <label className="cb-label">
          <input type="checkbox" name="withicon" />
          With Icon
        </label>
      </div>
      <div className="filter-colors">
        Color
        <div className="colors">
          <input type="color" id="color-picker" value="+" name="color-picker" />
          <div className="color-palete2" />
          <div className="color-palete3" />
          <div className="color-palete4" />
        </div>
      </div>
      <div className="filter-language">
        Language
        <select name="language" id="languages">
          <option value="" disabled selected>
            Chose a Language
          </option>
          <option value="Bahasa Indonesia (Indonesia)">
            Bahasa Indonesia (Indonesia)
          </option>
          <option value="English (India)">English (India)</option>
          <option value="Deutsch (Deutschland)">Deutsch (Deutschland)</option>
          <option value="English (philippines)">English (philippines)</option>
          <option value="English (US)">English (US)</option>
        </select>
      </div>
      <div className="options">
        <div className="typeof-product">
          Type of Product
          <select name="typeof-product" id="typeof-product">
            <option value="Physical">Physical</option>
            <option value="Type 1">Type 2</option>
            <option value="Type 1">Type 3</option>
          </select>
        </div>
        <div className="sections">
          No of Section
          <select>
            <option value="8">8</option>
          </select>
        </div>
      </div>
      <div className="buttons">
        <button className="filter-cancel">Cancel</button>
        <button className="filter-apply">Apply</button>
      </div>
    </div>
  );
}

export default FilterCard;
