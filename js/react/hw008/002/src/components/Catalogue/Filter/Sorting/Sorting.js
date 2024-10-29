import { useDispatch, useSelector } from 'react-redux';
import { addToFilter, deleteFromFilter } from '../../../../redux/slicers/filterSlice';

export const Sorting = () => {
  const { itemsInFilter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChangeCheckedSize = (size) => {
    itemsInFilter.includes(size) ? dispatch(deleteFromFilter(size)) : dispatch(addToFilter(size))
  }

  return (
    <div className="sort">

      <details className="sort__details">
        <summary className="sort__summary">
          <span className="sort__heading">TRENDING NOW</span>
        </summary>
      </details>

      <details className="sort__details">
        <summary className="sort__summary">
          <span className="sort__heading">SIZE</span>
        </summary>

        <div className="sort__box">
          {['S', 'M', 'L', 'X', 'XL', 'XS'].map((size, index) => <label key={index} className="sort__check">
            <input className="sort__check__checkbox" type="checkbox" checked={itemsInFilter.includes(size)} onChange={() => handleChangeCheckedSize(size)} />
            {size}</label>)}
        </div>

      </details>

      <details className="sort__details">
        <summary className="sort__summary">
          <span className="sort__heading">PRICE</span>
        </summary>
      </details>
    </div>
  )
}
