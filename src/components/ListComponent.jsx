import { listData } from '../data';
import iconList from '../assets/images/icon-list.svg';
import styles from '../styles/ListComponent.module.css';

const ListComponent = () => {
  return (
    <ul className={styles.listItems}>
      {listData.map((list, index) => {
        return (
          <li key={index}>
            <img
              src={iconList}
              alt="icon-list"
              loading="lazy"
              aria-label="Icon List"
            />
            <span>{list}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ListComponent;
