export const Users = (props) => {
  return (
    <h1 key={props}>
      {props.name}, {props.age}
    </h1>
  );
};
