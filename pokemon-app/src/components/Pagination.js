import React, { useState } from "react";

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const end = begin + itemsPerPage;
};
