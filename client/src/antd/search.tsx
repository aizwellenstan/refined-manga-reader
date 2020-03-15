import * as React from 'react';
import { Input, AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import './styles.less'

const renderTitle = (title: string) => {
  return (
    <span>
      {title}
      <a
        style={{ float: 'right' }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );
};

const renderItem = (title: string, count: number) => {
  return {
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </div>
    ),
  };
};

const options = [
  {
    label: renderTitle('Libraries'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
  },
  {
    label: renderTitle('Solutions'),
    options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
  },
  {
    label: renderTitle('Articles'),
    options: [renderItem('AntDesign design language', 100000)],
  },
];

const Search: React.FC = () => {
  return (
    <div className="main-container">
      <div className="main-search-container">
        <div className="certain-category-search-wrapper">
          <AutoComplete
              className="certain-category-search"
              dropdownClassName="certain-category-search-dropdown"
              size="large"
              style={{ width: "100%" }}
              options={options}
          >
              <Input.Search size="large" placeholder="input here" />
          </AutoComplete>
        </div>
      </div>
    </div>
  );
};

export default Search;
