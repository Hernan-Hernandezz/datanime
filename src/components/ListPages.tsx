"use client";
import { Pagination, PaginationItem, Link } from "@nextui-org/react";

import { pagination } from "../models";
export default function ListPages({ data }: { data: pagination }) {
  const lastPage = data?.last_visible_page;
  const currentPage = data?.current_page;
  return (
    <Pagination
      showControls
      showShadow
      total={lastPage}
      initialPage={currentPage}
      renderItem={(item) => (
        <PaginationItem
          {...item}
          key={item.key}
          href={`/top?page=${item.page}`}
        />
      )}
    />
  );
}
