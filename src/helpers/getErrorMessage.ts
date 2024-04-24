export default function getErrorMessage(error: unknown) {
  if (error instanceof Error && 'message' in error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }

  return 'Uknown error';
}
