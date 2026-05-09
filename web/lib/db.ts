import Dexie, { type Table } from "dexie";
import { GearItem, Trip, TripItem, Category } from "@/types";

export class BackpackPalDB extends Dexie {
    gear_items!: Table<GearItem>;
    trips!: Table<Trip>;
    trip_items!: Table<TripItem>;
    categories!: Table<Category>;

    constructor() {
        super('BackpackPalDB');
        this.version(1).stores({
            gear_items: '++id, name, category_id',
            trips: '++id, user_id, start_date',
            trip_items: '++id, trip_id, gear_item_id',
            categories: '++id, user_id, title',
        });
    }
}

export const db = new BackpackPalDB();