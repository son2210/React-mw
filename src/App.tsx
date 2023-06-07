import { Navigate, Route, Routes } from "react-router-dom";
// import AssetReport from "./pages/Report/AssetReport";
import LayoutMarketWatch from "./components/layoutMarketwatch/LayoutMarketWatch";
import AppProvider from "./Context/AppContext";
import SlidesMarketWatch from "./components/indexMarketWatch/SlidesMarketWatch";
import DynamicDashboard from "./components/dynamicDashboard/DynamicDashboard";
import MyLayout from "./components/dynamicDashboard/MyLayout";
import AssetReport from "./components/AssetReport/AssetReport";
import TableMarketWatchTest from "./components/tableMarketwatch/TableMarketWatchTest";
import ParentComponent from "./components/tableMarketwatch/Test";
function App() {
  return (
    <div>
      <AppProvider>
        <Routes>
          <Route path="/" element={<LayoutMarketWatch />} />
          <Route path="/test" element={<TableMarketWatchTest />} />
          <Route
            path="/dynamic-dashboard-test"
            element={<DynamicDashboard />}
          />
          <Route path="/dynamic-dashboard" element={<MyLayout />} />

          <Route
            path="/report/ClientActivityRange"
            element={<ParentComponent />}
          />
          <Route path="/report/AssetReport2" element={<AssetReport />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
