export type { ClassValue } from "clsx";

// ── Application Types ──────────────────────────────────────────────────────────
// Extend with your domain-specific types.

/** Standard API response envelope. */
export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  message?: string;
}

/** Paginated list response. */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/** Common timestamp fields for database models. */
export interface Timestamps {
  createdAt: string;
  updatedAt: string;
}