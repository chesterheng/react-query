const Person = ({ name, hairColor, eyeColor }) => {
  return (
    <li>
      {name}
      <ul>
        <li>hair: {hairColor}</li>
        <li>eyes: {eyeColor}</li>
      </ul>
    </li>
  );
};

export { Person };
