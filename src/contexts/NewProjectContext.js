import { Formik } from "formik";
import { createContext } from "react";

const NewProjectContext = createContext()

export default function NewProjectProvider({ children }) {
	
	return (
		<Formik
			
		>
			{children}
		</Formik>
	)
}
