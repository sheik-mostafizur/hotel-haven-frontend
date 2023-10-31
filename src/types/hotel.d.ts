interface Location {
  map: {
    lat: number;
    lng: number;
  };
  thumbnailURL: string;
  location: string;
}

interface Hotel {
  address: Location;
  _id: string;
  managerId: string;
  name: string;
  photoURL: string;
  description: string;
  availableRoom: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  feedback?: string;
}

export {Hotel, Location};
