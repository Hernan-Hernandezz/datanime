export interface pagination {
  last_visible_page: number;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
  has_next_page: boolean;
}
