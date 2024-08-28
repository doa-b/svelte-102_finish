import type {DeveloperType} from "./types/developer";
import {writable} from "svelte/store";

const initial: Array<DeveloperType> = [];

const leden = writable(initial);

const customStore = {
	subscribe: leden.subscribe,
	add: (lid: DeveloperType): void => {
		leden.update((current) => {
			return [...current, lid]
		})
	}
}

export default customStore;