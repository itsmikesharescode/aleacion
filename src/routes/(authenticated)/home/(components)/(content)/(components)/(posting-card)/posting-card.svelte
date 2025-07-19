<script lang="ts">
	import * as Card from '$lib/components/internals/card/index';
</script>

<Card.Root>
	<Card.Header class="grid grid-cols-[auto_1fr] gap-2">
		<div class="bg-secondary size-10 rounded-full"></div>
		<div class="">
			<div class="flex items-center gap-1">
				<Card.Title>MikeyRue</Card.Title>
				<Card.Description>@mikeyrue</Card.Description>
			</div>
			<Card.Description>9H ago</Card.Description>
		</div>
	</Card.Header>
	<Card.Content class="min-w-0 overflow-hidden">asad</Card.Content>
	<Card.Footer>
		<p class="text-muted-foreground text-xs">
			This card uses custom click handlers (try clicking @mentions and URLs)
		</p>
	</Card.Footer>
</Card.Root>
