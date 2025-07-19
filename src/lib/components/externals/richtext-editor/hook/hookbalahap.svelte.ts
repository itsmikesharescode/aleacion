import type { LexicalEditor } from 'svelte-lexical';
import { $generateNodesFromDOM as generateNodesFromDOM } from '@lexical/html';
import { $generateHtmlFromNodes as generateHtmlFromNodes } from '@lexical/html';
import { $getRoot as getRoot } from 'lexical';

export class RichtextEditorHook {
	constructor(private editor: LexicalEditor) {}

	convertHtmlToMarkdown(htmlContent: string) {
		if (!this.editor) return;

		this.editor.update(() => {
			const parser = new DOMParser();
			const dom = parser.parseFromString(htmlContent, 'text/html');
			const nodes = generateNodesFromDOM(this.editor, dom);
			const selection = getRoot().select();

			const elementNodes = nodes.filter((node) => !node.constructor.name.includes('TextNode'));
			if (elementNodes.length > 0) {
				selection.insertNodes(nodes);
			} else {
				console.log('no element nodes');
			}
		});
	}

	generateHtmlFromEditor() {
		if (!this.editor) return '';

		let html: string | null = null;

		this.editor.read(() => {
			html = generateHtmlFromNodes(this.editor, null);
		});

		return html ?? '';
	}
}
