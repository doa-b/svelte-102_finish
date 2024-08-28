import type {DeveloperType} from "./types/developer";
import {writable} from "svelte/store";

const initial: Array<DeveloperType> = [];

const leden = writable(initial);

export default leden;