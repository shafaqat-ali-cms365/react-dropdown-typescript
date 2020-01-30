import React, { useState, useEffect, CSSProperties } from 'react';
import downIcon from './icons/down-chevron.png';
import upIcon from './icons/up-chevron.png';

export interface DropdownProps {
  title: string;
  list: ListItem[];
}
export interface ListItem {
  id: number;
  title: string;
  selected: boolean;
}
const Dropdown: React.FC<DropdownProps> = ({ list }) => {
  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(list[0].title);
  const close = (): void => {
    setListOpen(false);
  };
  useEffect(() => {
    if (listOpen) {
      window.addEventListener('click', close);
    } else {
      window.removeEventListener('click', close);
    }
    return function cleanup(): void {
      window.removeEventListener('click', close);
    };
  }, [listOpen]);
  const selectItem = (title: string): void => {
    setListOpen(false);
    setHeaderTitle(title);
  };
  const toggleList = (): void => {
    setListOpen(!listOpen);
  };
  const rel: 'relative' = 'relative';

  const dropdownWrapper: CSSProperties = {
    position: rel,
    width: '234px',
  };
  const dropdownHeader: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    height: '40px',
    backgroundColor: '#3A982C',
  };
  const dropdownHeaderTitle: CSSProperties = {
    color: '#FFFFFF',
    paddingRight: '10px',
  };
  const dropdownList: CSSProperties = {
    zIndex: 11,
    position: 'absolute',
    border: '1px 1px 0px solid #dfdfdf',
    borderTop: 'none',
    backgroundColor: '#fff',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    marginTop: '8px',
    paddingInlineStart: '0px',
  };
  const dropdownListItem: CSSProperties = {
    textAlign: 'center',
    height: '40px',
    borderBottom: '1px solid #dfdfdf',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const dropdownItemText: CSSProperties = {
    height: '24px',
  };
  const dropdownIcon: CSSProperties = {
    color: '#FFFFFF',
  };
  const selectedDropdownListItem: CSSProperties = {
    backgroundColor: '#3A982C',
    color: 'white',
  };
  return (
    <div style={dropdownWrapper}>
      <div style={dropdownHeader} onClick={(): void => toggleList()}>
        <div style={dropdownHeaderTitle}>{headerTitle}</div>
        {listOpen ? (
          <img style={dropdownIcon} alt="up icon" src={upIcon}></img>
        ) : (
          <img style={dropdownIcon} alt="down icon" src={downIcon}></img>
        )}
      </div>
      {listOpen && (
        <ul style={dropdownList} onClick={(e): void => e.stopPropagation()}>
          {list.map((item: ListItem) => (
            <li
              style={
                item.title === headerTitle ? { ...dropdownListItem, ...selectedDropdownListItem } : dropdownListItem
              }
              key={item.id}
              onClick={(): void => selectItem(item.title)}
            >
              <span style={dropdownItemText}>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
