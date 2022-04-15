const Translations = ({ word }) => {
  return (
    <tr>
      <td>{word.translations.lt}</td>
      <td>{word.translations.ua}</td>
      <td>{word.translations.en}</td>
      <td>{word.translations.ru}</td>
    </tr>
  );
};

export default Translations;
