const convertDate = (dt) => {
  const date = new Date(dt);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month < +'10') {
    return `${day}/0${month}/${year}`;
  }
  return `${day}/${month}/${year}`;
};

export default convertDate;
