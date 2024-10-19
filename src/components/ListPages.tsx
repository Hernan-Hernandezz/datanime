"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Button = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  return (
    <button
      type="button"
      className={`w-11 rounded-lg bg-content3 p-0 hover:bg-content4 ${className}`}
    >
      <Link className="h-full w-full p-2" href={href}>
        {children}
      </Link>
    </button>
  );
};
import { pagination } from "../models";
export default function ListPages({
  data,
  path,
}: {
  data: pagination;
  path: string;
}) {
  const lastPage = data?.last_visible_page;
  const currentPage = data?.current_page;
  const searchParams = new URLSearchParams(useSearchParams());
  searchParams.delete("page");
  const params = searchParams.toString() ? `&${searchParams.toString()}` : "";
  const NextPage = () => {
    const hasNextPage = data?.has_next_page;
    const reference: string = hasNextPage
      ? `/${path}?page=${currentPage + 1}${params.toString()}`
      : "";
    return (
      <Button className={`${hasNextPage ? "" : "hidden"}`} href={reference}>
        {">"}
      </Button>
    );
  };
  const PreviousPage = () => {
    const hasPreviousPage = currentPage > 1 ? true : false;
    const reference: string = hasPreviousPage
      ? `/${path}?page=${currentPage - 1}${params.toString()}`
      : "";
    return (
      <Button className={`${hasPreviousPage ? "" : "hidden"}`} href={reference}>
        {"<"}
      </Button>
    );
  };
  const LastPage = () => {
    return lastPage !== currentPage ? (
      <Button
        className="w-14"
        href={`/${path}?page=${lastPage}${params.toString()}`}
      >
        {lastPage}
      </Button>
    ) : (
      <></>
    );
  };
  const FirstPage = () => {
    return currentPage !== 1 && currentPage > 5 ? (
      <Button href={`/${path}?page=1&${params.toString()}`}>1</Button>
    ) : (
      <></>
    );
  };
  const Pages = () => {
    const hasNextPage = (length: number) => {
      return currentPage + length < lastPage ? (
        <Button
          href={`/${path}?page=${currentPage + length}${params.toString()}`}
        >
          {currentPage + length}
        </Button>
      ) : (
        false
      );
    };
    const hasPreviousPage = (length: number) => {
      return currentPage - length > 0 ? (
        <Button
          href={`/${path}?page=${currentPage - length}${params.toString()}`}
        >
          {currentPage - length}
        </Button>
      ) : (
        false
      );
    };
    return (
      <>
        {hasPreviousPage(4)}
        {hasPreviousPage(3)}
        {hasPreviousPage(2)}
        {hasPreviousPage(1)}
        <Button className="w-10 bg-primary-300 hover:bg-primary-700" href="">
          {currentPage}
        </Button>
        {hasNextPage(1)}
        {hasNextPage(2)}
        {hasNextPage(3)}
        {hasNextPage(4)}
      </>
    );
  };
  return (
    <div className="flex flex-wrap gap-1 py-3">
      <PreviousPage />
      <FirstPage />
      <Pages />
      <LastPage />
      <NextPage />
    </div>
  );
}
