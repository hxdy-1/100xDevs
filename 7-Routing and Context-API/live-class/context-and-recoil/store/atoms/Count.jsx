import { atom, selector } from "recoil";

export const countAtom = atom({
	key: "countAtom",
	default: 0,
});

export const isEvenSelector = selector({
	key: "isEvenSelector",
	get: ({ get }) => {
		const isEven = get(countAtom);
		return isEven % 2 == 0 && isEven != 0;
	},
});
