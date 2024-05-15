import type { IDrinkResponse } from "@/models/IDrinkResponse";
import { get } from "./serviceBase";
import type { IOneDrink } from "@/models/IOneDrink";

const BASE_URL =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";

export const getDrinks = async (): Promise<IOneDrink[]> => {
  const response = await get<IDrinkResponse>(BASE_URL);
  return response.drinks;
};
