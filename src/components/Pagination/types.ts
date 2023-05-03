export interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onChange: (pageNumber: number) => void;
}
