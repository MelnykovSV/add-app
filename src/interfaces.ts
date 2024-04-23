interface IAddData {
  name: string;
  description: string;
  address: string;
  price: string;
  image: string;
  lat: number;
  lon: number;
}

export interface IAddDBData extends IAddData {
  _id: string;
}

export interface IAddClientData extends IAddData {
  id: string;
}
