"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import css from "./NewIssue.module.css";

const NewIssuePage = () => {
	return (
		<div className={css.container}>
			<TextField.Root>
				<TextField.Input placeholder="Title"></TextField.Input>
			</TextField.Root>
			<TextArea placeholder="Description" />
			<Button>Submit new issue</Button>
		</div>
	);
};

export default NewIssuePage;
