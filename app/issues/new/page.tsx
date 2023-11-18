"use client";
import { Button, TextField } from "@radix-ui/themes";
import css from "./NewIssue.module.css";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface IssueForm {
	title: string;
	description: string;
}

const NewIssuePage = () => {
	const router = useRouter();
	const { register, control, handleSubmit } = useForm<IssueForm>();

	return (
		<form
			className={css.container}
			onSubmit={handleSubmit(async (data) => {
				const result = await axios.post("/api/issues", data);
				router.push("/issues");
			})}
		>
			<TextField.Root>
				<TextField.Input
					placeholder="Title"
					{...register("title")}
				></TextField.Input>
			</TextField.Root>
			<Controller
				name="description"
				control={control}
				render={({ field }) => (
					<SimpleMDE placeholder="Description" {...field} />
				)}
			/>
			<Button>Submit new issue</Button>
		</form>
	);
};

export default NewIssuePage;
