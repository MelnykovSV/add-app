interface IListingData {
  name: string;
  description: string;
  address: string;
  price: number;
  image: string;
  lat: number;
  lon: number;
}

export interface IListingDBData extends IListingData {
  _id: string;
}

export interface IListingClientData extends IListingData {
  id: string;
}
