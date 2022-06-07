export const addDevToFavorites = (favorites, devToAdd) => {
	const existingDev = favorites.find(
		favorite => favorite._id === devToAdd._id
	);

	if(existingDev) {
		return favorites
	} 

	return [...favorites, devToAdd]
}