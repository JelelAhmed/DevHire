import { createSelector } from "reselect";

const selectDeveloper = state => state.developer;

export const selectDevs = createSelector(
	[selectDeveloper],
	(developer) => developer.devs
);