<script lang="ts">
	import {
		InsertTableDialog,
		DropDownBackColorPicker,
		DropDownTextColorPicker,
		InsertTableDropDownItem
	} from 'svelte-lexical';
	import {
		BlockFormatDropDown,
		ClearFormattingDropDownItem,
		CodeDropDrownItem,
		CodeLanguageDropDown,
		FontSizeEntry,
		InsertLink,
		MoreStylesDropDown,
		StrikethroughDropDownItem,
		SubscriptDropDownItem,
		SuperscriptDropDownItem
	} from 'svelte-lexical';
	import {
		ItalicButton,
		BoldButton,
		Divider,
		RedoButton,
		UndoButton,
		UnderlineButton,
		StrikethroughButton,
		FormatCodeButton,
		DropDownAlign,
		InsertDropDown,
		FontFamilyDropDown,
		ParagraphDropDownItem,
		HeadingDropDownItem,
		BulletDropDrownItem,
		NumberDropDrownItem,
		CheckDropDrownItem,
		QuoteDropDrownItem,
		Toolbar,
		InsertImageDialog,
		InsertHRDropDownItem,
		InsertImageDropDownItem,
		InsertColumnLayoutDropDownItem,
		InsertColumnsDialog,
		ShortcutsPlugin,
		InsertYoutubeDialog,
		InsertYoutubeDropDownItem,
		InsertTweetDialog,
		InsertTweetDropDownItem,
		InsertBlueskyDialog,
		InsertBlueskyDropDownItem
	} from 'svelte-lexical';

	let imageDialog: InsertImageDialog;
	let columnsDialog: InsertColumnsDialog;
	let tableDialog: InsertTableDialog;
	let youtubeDialog: InsertYoutubeDialog;
	let tweetDialog: InsertTweetDialog;
	let blueskyDialog: InsertBlueskyDialog;
</script>

<Toolbar>
	{#snippet children({ editor, activeEditor, blockType })}
		<ShortcutsPlugin />
		<UndoButton />
		<RedoButton />
		<Divider />
		{#if activeEditor === editor}
			<BlockFormatDropDown>
				<ParagraphDropDownItem />
				<HeadingDropDownItem headingSize="h1" />
				<HeadingDropDownItem headingSize="h2" />
				<HeadingDropDownItem headingSize="h3" />
				<BulletDropDrownItem />
				<NumberDropDrownItem />
				<CheckDropDrownItem />
				<QuoteDropDrownItem />
				<CodeDropDrownItem />
			</BlockFormatDropDown>
			<Divider />
		{/if}
		{#if blockType === 'code'}
			<CodeLanguageDropDown />
		{:else}
			<FontFamilyDropDown />
			<FontSizeEntry />
			<Divider />
			<BoldButton />
			<ItalicButton />
			<UnderlineButton />
			<StrikethroughButton />
			<FormatCodeButton />
			<DropDownTextColorPicker />
			<DropDownBackColorPicker />
			<MoreStylesDropDown>
				<StrikethroughDropDownItem />
				<SubscriptDropDownItem />
				<SuperscriptDropDownItem />
				<ClearFormattingDropDownItem />
			</MoreStylesDropDown>
			<Divider />
			<InsertLink />
			<Divider />
			<InsertDropDown>
				<InsertHRDropDownItem />
				<InsertImageDropDownItem onclick={() => imageDialog.open()} />
				<!-- <InsertColumnLayoutDropDownItem onclick={() => columnsDialog.open()} /> -->
				<InsertTableDropDownItem onclick={() => tableDialog.open()} />
				<InsertYoutubeDropDownItem onclick={() => youtubeDialog.open()} />
				<InsertTweetDropDownItem onclick={() => tweetDialog.open()} />
				<InsertBlueskyDropDownItem onclick={() => blueskyDialog.open()} />
			</InsertDropDown>
			<Divider />
		{/if}
		<DropDownAlign />
		<!-- dialogs -->
		<InsertImageDialog bind:this={imageDialog} />
		<InsertColumnsDialog bind:this={columnsDialog} />
		<InsertTableDialog bind:this={tableDialog} />
		<InsertYoutubeDialog bind:this={youtubeDialog} />
		<InsertTweetDialog bind:this={tweetDialog} />
		<InsertBlueskyDialog bind:this={blueskyDialog} />
	{/snippet}
</Toolbar>
