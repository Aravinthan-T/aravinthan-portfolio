import React, { useEffect, useState } from "react";
import CamsOnlineAgGrid from "../../components/CamsOnlineAGGrid/CamsOnlineAgGrid";
import { getAllMF, getLatestNav } from "../../api/mutualFundAPI";

const CamsOnlinePage = () => {
  const [rowData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [allMF, latestNav] = await Promise.all([
          getAllMF(),
          getLatestNav("119551"),
        ]);

        console.log(allMF, latestNav);
      } catch (err) {
        console.error(err);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <div>Navigation</div>

      <CamsOnlineAgGrid rowData={rowData} />
    </div>
  );
};

export default CamsOnlinePage;
