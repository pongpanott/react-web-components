import * as yup from "yup";
import useValidationSchema from "../../libs/validation";

export const useViewModel = () => {
	const validationSchema = yup.object({ simpleText: yup.string().required() });

	const validate = useValidationSchema(validationSchema);

	const onSubmit = (values: { [key: string]: string }) => {
		alert(JSON.stringify(values, null, 2));

		return;
	};

	return { validate, onSubmit };
};
