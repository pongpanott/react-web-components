import { Form } from 'react-final-form';
import TextField from '../../components/text-field/text-field.component';
import { useViewModel } from './text-field-page.viewmodel';

const TextFieldPage = () => {
  const { validate, onSubmit } = useViewModel();

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              name="simpleText"
              label="simple text field"
              placeholder="simple text field"
            />

            <button type="submit">submit</button>
          </form>
        )}
      />
    </div>
  );
};

export default TextFieldPage;
