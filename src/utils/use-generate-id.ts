import { useId } from 'react'

export const useGenerateId = (id?: string) => {
	const generatedId = useId()

	if (id) {
		return id
	}

	return generatedId
}
