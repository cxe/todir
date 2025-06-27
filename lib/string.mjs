export const isIdentifierStartChar = c => {
  const n = c.charCodeAt(0);
  return (
    (n >= 65 && n <= 90) || // A-Z
    (n >= 97 && n <= 122) || // a-z
    n === 36 || // $
    n === 95 // _
  );
};
