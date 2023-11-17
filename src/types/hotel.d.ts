interface Address {
  map: {
    lat: number;
    lng: number;
  };
  thumbnailURL: string;
  location: string;
}

interface Hotel {
  readonly _id: string;
  address: Address;
  readonly managerId: string;
  email?: string;
  name: string;
  photoURL: string;
  description: string;
  availableRoom: number;
  addedRoom: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  feedback?: string;
  readonly __v: number;
}

export {Hotel, Address};
