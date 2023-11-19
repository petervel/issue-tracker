import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";

type IssueDetailPageProps = {
	params: { id: string };
};

const IssueDetailPage = async ({ params }: IssueDetailPageProps) => {
	const issue = await prisma.issue.findUnique({
		where: { id: parseInt(params.id) },
	});

	if (!issue) {
		notFound();
	}

	return (
		<div>
			<Heading>{issue.title}</Heading>
			<Flex gap="5" my="2">
				<IssueStatusBadge status={issue.status} />
				<Text>{issue.createdAt.toDateString()}</Text>
			</Flex>
			<Card>
				<p>{issue.description}</p>
			</Card>
		</div>
	);
};

export default IssueDetailPage;
