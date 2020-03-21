import * as React from 'react';
import { Input, AutoComplete } from 'antd';
import 'antd/dist/antd.css'
import './styles.less'

const Search = ({ dataSource, onChange }: any) => {
  return (
    <div className= "certain-category-search-wrapper">
      <AutoComplete
        className="certain-category-search"
        dataSource={dataSource}
        dropdownClassName="certain-category-search-dropdown"
        // dropdownMatchSelectWidth={false}
        dropdownStyle={{width:300}}
        onChange={onChange}
        // optionLabelProp="value"
        size="large"
        style={{width: "100%"}}
      >
        <Input.Search size="large" placeholder="input here" />
      </AutoComplete>
    </div>
    // <div className="main-container">
    //   <div className="main-search-container">
    //     <div className="certain-category-search-wrapper">
    //       <AutoComplete
    //           className="certain-category-search"
    //           dropdownClassName="certain-category-search-dropdown"
    //           style={{ width: "100%" }}
    //           options={dataSource}
    //           onChange={onChange}
    //       >
    //           <Input.Search size="large" placeholder="input here" />
    //       </AutoComplete>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Search;
