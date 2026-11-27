import type { PostgrestError } from '@supabase/supabase-js';
import type { AppError } from '@/types/Error';

export type ReportableError = string | PostgrestError | Error;

/** Postgrest code returned by `.single()` when no row matches. */
const NO_ROWS = 'PGRST116';

// Errors returned in Supabase responses are plain objects parsed from JSON,
// so check for the Postgrest fields instead of using `instanceof`.
const isPostgrestError = (error: ReportableError): error is PostgrestError =>
  typeof error === 'object' && 'code' in error && 'details' in error;

/** Normalise any error the app can raise into one `AppError` shape. */
export const toAppError = (error: ReportableError, status = 500): AppError => {
  const base = { status, code: '', hint: '', details: '', isCustom: false };

  if (typeof error === 'string') return { ...base, message: error, isCustom: true };

  if (isPostgrestError(error)) {
    return {
      ...base,
      message: error.message,
      status: error.code === NO_ROWS ? 404 : status,
      code: error.code ?? '',
      hint: error.hint ?? '',
      details: error.details ?? '',
    };
  }

  return { ...base, message: error.message };
};
