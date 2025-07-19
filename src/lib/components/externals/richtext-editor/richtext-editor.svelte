<script lang="ts">
	import { Composer, ContentEditable, RichTextPlugin } from 'svelte-lexical';
	import { theme } from 'svelte-lexical/dist/themes/default';
	import Toolbar from './components/toolbar.svelte';
	import './richtext-editor.css';
	import {
		HeadingNode,
		QuoteNode,
		ListNode,
		ListItemNode,
		HorizontalRuleNode,
		ImageNode,
		LinkNode,
		AutoLinkNode,
		CodeNode,
		CodeHighlightNode,
		LayoutContainerNode,
		LayoutItemNode,
		TableNode,
		TableCellNode,
		TableRowNode,
		YouTubeNode,
		TweetNode,
		BlueskyNode
	} from 'svelte-lexical';
	import {
		HistoryPlugin,
		ListPlugin,
		CheckListPlugin,
		HorizontalRulePlugin,
		ImagePlugin,
		AutoLinkPlugin,
		LinkPlugin,
		CodeHighlightPlugin,
		FloatingLinkEditorPlugin,
		CodeActionMenuPlugin,
		MarkdownShortcutPlugin,
		ColumnLayoutPlugin,
		TablePlugin,
		TableHoverActionPlugin,
		TableCellResizerPlugin,
		TableActionMenuPlugin,
		YoutubePlugin,
		TwitterPlugin,
		BlueskyPlugin,
		TabIndentationPlugin,
		ActionBar,
		TreeViewPlugin,
		validateUrl,
		TEXT_FORMAT_TRANSFORMERS,
		ELEMENT_TRANSFORMERS,
		HR,
		IMAGE,
		CHECK_LIST,
		LINK
	} from 'svelte-lexical';

	let isSmallWidthViewport = $state(true);
	let editorDiv: HTMLDivElement | undefined = $state();

	const initialConfig = {
		theme: theme,
		namespace: 'mike-lms',
		nodes: [
			HeadingNode,
			ListNode,
			ListItemNode,
			QuoteNode,
			HorizontalRuleNode,
			ImageNode,
			LinkNode,
			AutoLinkNode,
			CodeNode,
			CodeHighlightNode,
			LayoutContainerNode,
			LayoutItemNode,
			TableNode,
			TableCellNode,
			TableRowNode,
			YouTubeNode,
			TweetNode,
			BlueskyNode
		],
		onError: (error: Error) => {
			throw error;
		}
	};

	let composer = $state<Composer | undefined>(undefined);

	export function getEditor() {
		return composer?.getEditor();
	}
</script>

<div class="lexical-content-renderer">
	<Composer {initialConfig} bind:this={composer}>
		<div class="editor-shell svelte-lexical">
			<Toolbar />
			<div class="editor-container tree-view">
				<div class="editor-scroller">
					<div class="editor" bind:this={editorDiv}>
						<ContentEditable />
					</div>
				</div>
				<RichTextPlugin />
				<HistoryPlugin />
				<ListPlugin />
				<CheckListPlugin />
				<HorizontalRulePlugin />
				<ImagePlugin captionsEnabled={true} />

				<AutoLinkPlugin />
				<LinkPlugin {validateUrl} />
				<CodeHighlightPlugin />
				{#if !isSmallWidthViewport}
					<FloatingLinkEditorPlugin anchorElem={editorDiv} />
					<CodeActionMenuPlugin anchorElem={editorDiv} />
				{/if}
				<MarkdownShortcutPlugin
					transformers={[
						...TEXT_FORMAT_TRANSFORMERS,
						...ELEMENT_TRANSFORMERS,
						HR,
						IMAGE,
						CHECK_LIST,
						LINK
					]}
				/>
				<ColumnLayoutPlugin />
				<TablePlugin hasHorizontalScroll={true} />
				<TableHoverActionPlugin anchorElem={editorDiv} />
				<TableCellResizerPlugin />
				<TableActionMenuPlugin anchorElem={editorDiv} cellMerge={true} />
				<YoutubePlugin />
				<TwitterPlugin />
				<BlueskyPlugin />
				<TabIndentationPlugin />

				<ActionBar />
			</div>
			<!-- <TreeViewPlugin /> -->
		</div>
	</Composer>
</div>
