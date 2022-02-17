const formatDate = (date) => {
  const formattedDate = new Date(date);
  return (
    formattedDate.getDate() +
    "-" +
    formattedDate.getMonth() +
    "-" +
    formattedDate.getFullYear()
  );
};

export default formatDate;
