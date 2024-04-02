const Label = (props) => {
  console.log(props);
  return (
    <label
      htmlFor={props.htmlFor}
      //   htmlFor="htmlFor"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {props.children}
      {/* name */}
    </label>
  );
};
export default Label;
