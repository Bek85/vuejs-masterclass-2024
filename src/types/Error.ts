/**
 * The single shape every error is turned into before it reaches the error page.
 * Callers can pass a string, a native Error or a Supabase (Postgrest) error;
 * `toAppError` in `@/utils/appError` does the conversion.
 */
export interface AppError {
  message: string;
  /** HTTP-like status shown to users (e.g. 404, 500). */
  status: number;
  /** Postgrest error code such as `PGRST116`; empty for non-database errors. */
  code: string;
  hint: string;
  details: string;
  /** True for errors raised on purpose with a string message (e.g. "Page not found"). */
  isCustom: boolean;
}
