import type { DispatchOptions } from 'svelte/types/runtime/internal';

export type Animations = () => void;
export type Dispatch = <EventKey extends string>(
	type: EventKey,
	detail?: any,
	options?: DispatchOptions | undefined
) => boolean;
