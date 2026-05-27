import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filter/action";
function Filter() {
  const filters = useSelector((state) => state.filters);
  const { featured } = filters;
  const dispatch = useDispatch();
  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>

      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn  ${featured === "all" && "active-filter"}`}
          id="lws-filterAll"
          onClick={() => handleStatusChange("all")}
        >
          All
        </button>
        <button
          className={`filter-btn ${featured === "featured" && "active-filter"}`}
          id="lws-filterFeatured"
          onClick={() => handleStatusChange("featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
}
export default Filter;
