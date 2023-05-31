import React, { useEffect } from "react";
import { Link,  } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store/configureStore";
import  { listStock } from "./codeListSlice";
import { fetchCategoryAsync } from "./danhmucSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTableHNXAsync, fetchTableHSXAsync, getDataTable, setProductParams } from "../tableMarketwatch/tableSlice";
// import { fetchDataTableHNXAsync, } from "../tableMarketwatch/tableSlice";

const DanhMuc = () => {
  const dispatch = useAppDispatch();
  const { isLoading, data, status } = useSelector(
    (state: RootState) => state.categories
  );
  
//  console.log({ isLoading, data, status })
 useEffect(() => {
  dispatch(fetchCategoryAsync());
}, [dispatch]);
function handleDispatch(item:string) {
  dispatch(fetchTableHNXAsync(item))
  dispatch(fetchTableHSXAsync(item))
  // Xử lý logic của dispatch

  // Chuyển hướng đến trang chủ
  // navigate('/chung-khoan/danh-muc');
  
}

const handleItemChildClick = async (
  name: string,
  query: string,
  floor: string
) => {
  // setActiveMenuItemChild(name);
  localStorage.setItem("activePriceboardTabMenu", name);
  let data = {
    Floor: floor,
    Query: query,
  };
  await dispatch(getDataTable(data));
};
  return (
    <div className="group list-sub-menu">
    <span className="text-13px">Danh mục</span>
      <ul className="absolute hidden text-black group-hover:block z-40 sub-menu">
      {data && data.Data.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <li className="relative">
              <Link to="" className=" "  onClick={() => handleItemChildClick(item.name,item.List,'danh-muc')}> 
          
                {item.Name}
              </Link>  
              <span id={`btDel${index}`} className="imgDel keep" />
            </li>
          </React.Fragment>
        ))}
         
        <li className="relative">
          <input className="textBox" placeholder="Thêm danh mục"></input>
          <span id="btAdd" className="imgAdd keep">
            <span></span>
          </span>
          
        </li>
      </ul>
  </div>
  
  );
};

export default DanhMuc;