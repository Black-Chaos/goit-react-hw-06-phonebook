import { useDispatch, useSelector } from "react-redux";
import { SearchBox } from "./Filter.styled";
import { getFilter } from "redux/selectors";

export function Filter() {
  const filterValue = useSelector(getFilter());
  const dispatch = useDispatch();
  
    return (
      <SearchBox>
        <label>
          <span>Find contacts by name</span>
          <input
            type="text"
            value={filterValue}
            onChange={e => dispatch(e.target.value.toLowerCase())}
          />
        </label>
      </SearchBox>
    );
}