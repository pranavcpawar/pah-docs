"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { parseCode } from "./_actions/code-parser";

type CodeFunction = {
	name: string;
	type: string;
	visibility: string;
	mutability: string;
	isRead: boolean;
};
export default function Home() {
	const [codeFunctions, setCodeFunctions] = useState<CodeFunction[]>([]);
	const [readFunctions, setReadFunctions] = useState<{ name: string }[]>([]);
	const [writeFunctions, setWriteFunctions] = useState<{ name: string }[]>([]);
	const schema = z.object({
		code: z.string().min(1, "Code is required"),
	});
	type Schema = z.infer<typeof schema>;
	const form = useForm<Schema>({
		resolver: zodResolver(schema),
		defaultValues: {
			code: "",
		},
	});
	async function onSubmit(data: Schema) {
		try {
			const response = await parseCode(data.code);
			if (response) {
				setCodeFunctions(response.codeFunctions);
				setReadFunctions(response.ReadFunctions);
				setWriteFunctions(response.WriteFunctions);
			}
			form.reset();
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<div className="flex h-full w-full md:flex-row flex-col items-start justify-center gap-2 p-2">
			<div className="flex flex-col items-center justify-center gap-2 md:w-1/2 w-full h-full rounded-xl p-3">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="w-full h-full flex flex-col gap-2 items-start justify-center"
					>
						<FormField
							control={form.control}
							name="code"
							render={({ field }) => (
								<FormItem className="w-full h-full border-2 p-2 border-border rounded-xl">
									<FormLabel className="font-work-sans h-4 text-sm font-medium tracking-tight text-info">
										Code
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Paste your code here"
											{...field}
											className="w-full md:max-h-[512px] max-h-[240px] md:h-[512px] h-[240px] border-1 border-input rounded-xl p-2 outline-none bg-input/30 resize-none overflow-y-scroll"
											cols={20}
										/>
									</FormControl>
									<FormMessage className="font-work-sans h-4 text-sm font-medium tracking-tight" />
								</FormItem>
							)}
						/>
						<Button
							className="w-full h-10 bg-[#0e76a8] text-white rounded-2xl hover:bg-[#0e76a8]/80 font-manrope text-base font-bold tracking-tight"
							type="submit"
						>
							Submit
						</Button>
					</form>
				</Form>
			</div>
			<div className="flex flex-col items-center justify-center gap-2 md:w-1/2 w-full h-full p-3">
				<div className="flex flex-col items-start justify-center gap-2 border-2 w-full h-full rounded-xl p-2">
					<h1 className="font-unbounded text-xl font-bold tracking-tight">
						Stats
					</h1>
					<div className="flex flex-col items-start justify-center gap-2 w-full h-full">
						<div className="flex flex-row items-start justify-center gap-2">
							<p className="font-work-sans h-4 text-sm font-medium tracking-tight">
								Number of functions used:
							</p>
							<p className="font-work-sans h-4 text-sm font-medium tracking-tight text-tertiary">
								{codeFunctions.length ? codeFunctions.length : "null"}
							</p>
						</div>
						<div className="flex flex-row items-start justify-center gap-2">
							<p className="font-work-sans h-4 text-sm font-medium tracking-tight">
								Number of read functions used:
							</p>
							<p className="font-work-sans h-4 text-sm font-medium tracking-tight text-secondary">
								{readFunctions.length ? readFunctions.length : "null"}
							</p>
						</div>
						<div className="flex flex-row items-start justify-center gap-2">
							<p className="font-work-sans h-4 text-sm font-medium tracking-tight">
								Number of write functions used:
							</p>
							<p className="font-work-sans h-4 text-sm font-medium tracking-tight text-primary">
								{writeFunctions.length ? writeFunctions.length : "null"}
							</p>
						</div>
					</div>
				</div>
        <div className="rounded-xl border-2 border-border w-full h-full">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Function</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Visibility</TableHead>
                <TableHead className="text-right">Mutability</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {codeFunctions.map((codeFunction) => (
                <TableRow key={codeFunction.name}>
                  <TableCell className="font-medium">
                    {codeFunction.name}
                  </TableCell>
                  <TableCell>{codeFunction.isRead ? "read" : "write"}</TableCell>
                  <TableCell>{codeFunction.visibility}</TableCell>
                  <TableCell className="text-right">
                    {codeFunction.mutability}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
			</div>
		</div>
	);
}
