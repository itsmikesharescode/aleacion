<script lang="ts">
	import * as Select from '$lib/components/internals/select';

	interface Props {
		selected: string;
	}

	let { selected = $bindable() }: Props = $props();

	const selectedDate = $state({
		month: undefined,
		day: undefined,
		year: undefined
	});

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const days = $derived.by(() => {
		// For birthday picker: use selected month immediately, with a reasonable default year
		const selectedMonth = selectedDate.month;
		const selectedYear = selectedDate.year;

		if (!selectedMonth) {
			// If no month selected, show 31 days as a reasonable default
			return Array.from({ length: 31 }, (_, i) => i + 1);
		}

		// Use selected year or default to a non-leap year for calculation
		const yearForCalculation = selectedYear ? parseInt(selectedYear) : 2023;
		const monthIndex = months.indexOf(selectedMonth);

		// Calculate days for the selected month
		const daysInMonth = new Date(yearForCalculation, monthIndex + 1, 0).getDate();
		return Array.from({ length: daysInMonth }, (_, i) => i + 1);
	});
	const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

	const convertToTimestamp = (month: string, day: string, year: string) => {
		if (!month || !day || !year) return '';

		const monthIndex = months.indexOf(month);
		const birthdateTimestamp = new Date(parseInt(year), monthIndex, parseInt(day)).toISOString();
		return birthdateTimestamp;
	};

	const onChange = (open: boolean) => {
		if (!open) {
			selected = convertToTimestamp(
				selectedDate.month || '',
				selectedDate.day || '',
				selectedDate.year || ''
			);
		}
	};
</script>

<!--@component
@params bind:selectedDate as string
-->

<div class="grid w-full grid-cols-[1fr_auto_auto] gap-2">
	<Select.Root onOpenChange={onChange} type="single" bind:value={selectedDate.month} allowDeselect>
		<Select.Trigger class="bg-background w-full">
			{selectedDate.month || 'Month'}
		</Select.Trigger>
		<Select.Content>
			{#each months as month}
				<Select.Item value={month}>{month}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	<Select.Root onOpenChange={onChange} type="single" bind:value={selectedDate.day} allowDeselect>
		<Select.Trigger class="bg-background w-20">
			{selectedDate.day || 'Day'}
		</Select.Trigger>
		<Select.Content>
			{#each days as day}
				<Select.Item value={day.toString()}>{day}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	<Select.Root onOpenChange={onChange} type="single" bind:value={selectedDate.year} allowDeselect>
		<Select.Trigger class="bg-background w-25">
			{selectedDate.year || 'Year'}
		</Select.Trigger>
		<Select.Content>
			{#each years as year}
				<Select.Item value={year.toString()}>{year}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
