"use client";
import { Button, TextField } from "@radix-ui/themes";
import css from "./NewIssue.module.css";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
	return (
		<div className={css.container}>
			<TextField.Root>
				<TextField.Input placeholder="Title"></TextField.Input>
			</TextField.Root>
			<SimpleMDE placeholder="Description" />
			<Button>Submit new issue</Button>
		</div>
	);
};

export default NewIssuePage;
