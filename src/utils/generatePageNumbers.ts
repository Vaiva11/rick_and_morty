export const generatePageNumbers = (totalPages: number) =>
  Array.from({ length: totalPages }, (_, index) => index + 1);
