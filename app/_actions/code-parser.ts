"use server";
import { parse, ParserError, visit } from "@solidity-parser/parser";

export async function parseCode(code: string) {
	try {
		const codeFunctions: {
			name: string;
			visibility: string;
			mutability: string;
			type: string;
			isRead: boolean;
		}[] = [];
		const ReadFunctions: { name: string }[] = [];
		const WriteFunctions: { name: string}[] = [];
		const ast = parse(code, {
			loc: true,
		});
		visit(ast, {
			FunctionDefinition(node) {
				if (node.isConstructor) return null;

				codeFunctions.push({
					type:
						node.stateMutability === "view" || node.stateMutability === "pure"
							? "read"
							: "write",
					isRead: node.stateMutability === "view" || node.stateMutability === "pure",
					name: node.name || "(anonymous)",
					visibility: node.visibility || "default",
					mutability: node.stateMutability || "nonpayable",
				});

				if (
					node.stateMutability === "view" ||
					node.stateMutability === "pure"
				) {
					ReadFunctions.push({
						name: node.name || "(anonymous)",
					});
				} else {
					WriteFunctions.push({
						name: node.name || "(anonymous)",
					});
				}
			},
		});
		return {
			codeFunctions,
			ReadFunctions,
			WriteFunctions,
		};
	} catch (error) {
		if (error instanceof ParserError) {
			throw new Error(error.message);
		}
	}
}
