import { useViewModel } from "./text-field.viewmodel";

type TextFieldProps = {
	name: string;
	type?: "text" | "email" | "password" | "search";
	placeholder?: string;
};

const TextField = ({
	name,
	type = "text",
	placeholder = "placeholder",
}: TextFieldProps) => {
	const { input, errorMessage, isShowError } = useViewModel({
		name,
		type,
	});

	return (
		<>
			<input placeholder={placeholder} {...input} />
			{isShowError && errorMessage}
		</>
	);
};

export default TextField;
