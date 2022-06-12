import { forEach } from "lodash";
import { useMemo } from "react";
import { useField, useFormState } from "react-final-form";

export const useViewModel = ({
	name,
	type,
}: {
	name: string;
	type: string;
}) => {
	const { input, meta } = useField(name, { type });
	const { dirtyFieldsSinceLastSubmit } = useFormState();

	const isDirtySinceLastSubmit = useMemo(() => {
		let isDirty = false;
		forEach(dirtyFieldsSinceLastSubmit, (isFieldDirty) => {
			if (isFieldDirty) {
				isDirty = true;
			}
		});

		return isDirty;
	}, [dirtyFieldsSinceLastSubmit]);

	const isShowError = useMemo(() => {
		if (!meta.error && !meta.submitError) {
			return false;
		}

		return meta.submitFailed && !isDirtySinceLastSubmit;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [meta]);

	const errorMessage = meta.error ?? meta.submitError;

	return { input, isShowError, errorMessage };
};
