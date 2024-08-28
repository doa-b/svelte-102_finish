import type {DeveloperType} from "./types/developer";
import {writable} from "svelte/store";

const initial: Array<DeveloperType> = [];

const leden = writable(initial);

function createStore() {
	const {subscribe, update} = writable(initial);

	return {
		subscribe,
		add: (lid: DeveloperType): void => {
			update((current) => {
				return [...current, lid]
			})
		}
	}
}

export default createStore();