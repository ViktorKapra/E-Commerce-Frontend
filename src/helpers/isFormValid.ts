const isFormInvalid = (err: object) => {
  return Object.keys(err).length > 0;
};
export default isFormInvalid;
