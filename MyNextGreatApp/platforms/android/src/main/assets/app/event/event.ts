import { Coordinate } from "./coordinate/coordinate";
import { Address } from "./address/address";
import { Participants } from "./participants/participants";

export class Event {
    name: string;
    coordinates: Coordinate;
    placeName: string;
    address: Address;
    startDate: Date;
    endDate: Date;
    description: string;
    participants: Participants;
    oportunuties: number;
    url: string;
    ticketURL: string;
    participatnts: string;
}
